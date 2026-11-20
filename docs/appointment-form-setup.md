# Appointment form setup (free, Google Apps Script)

The website form sends each request to the site's own server route
(`app/api/appointment/route.ts`). That route checks the data, filters spam and
forwards the request to a small Google Apps Script. The script emails the
owner and adds a row to a Google Sheet. No paid service is needed.

Until the steps below are done, the form shows: "Online requests aren't
available yet."

## 1. Create the Google Sheet and script (owner's Google account)

1. Go to <https://sheets.google.com> and create a blank sheet named
   **Appointment Requests**.
2. In the sheet, open **Extensions → Apps Script**.
3. Delete the sample code and paste the script below.
4. Change `OWNER_EMAIL` to the address that should receive requests, and
   `SHARED_SECRET` to a long random phrase (keep it private).
5. Click **Save**.

```javascript
const OWNER_EMAIL = "owner@example.com"; // where requests are sent
const SHARED_SECRET = "change-me-to-a-long-random-phrase";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.secret !== SHARED_SECRET) {
      return json({ ok: false, error: "unauthorized" });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Received", "Name", "Phone", "Email", "Vehicle", "Service", "Preferred date", "Message"]);
    }
    sheet.appendRow([
      new Date(), data.name, data.phone, data.email, data.vehicle,
      data.service, data.preferredDate, data.message
    ]);

    const body = [
      "New appointment REQUEST from the website (not yet confirmed).",
      "",
      "Name: " + data.name,
      "Phone: " + data.phone,
      "Email: " + (data.email || "-"),
      "Vehicle: " + data.vehicle,
      "Service: " + data.service,
      "Preferred date: " + (data.preferredDate || "-"),
      "",
      "Details:",
      data.message || "-"
    ].join("\n");

    const options = data.email ? { replyTo: data.email } : {};
    MailApp.sendEmail(OWNER_EMAIL, "Appointment request: " + data.service + " (" + data.name + ")", body, options);

    return json({ ok: true });
  } catch (error) {
    return json({ ok: false, error: String(error) });
  }
}

function json(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
```

## 2. Deploy the script as a web app

1. Click **Deploy → New deployment**, choose type **Web app**.
2. **Execute as:** Me. **Who has access:** Anyone.
3. Click **Deploy**, approve the permissions Google asks for (email + sheet).
4. Copy the **Web app URL** (ends in `/exec`).

## 3. Connect it to the website (Vercel)

In Vercel → the project → **Settings → Environment Variables**, add:

| Name | Value |
| --- | --- |
| `APPOINTMENT_WEBHOOK_URL` | the Web app URL from step 2 |
| `APPOINTMENT_WEBHOOK_SECRET` | the same `SHARED_SECRET` phrase |

Redeploy the site. For local testing, put the same two lines in a
`.env.local` file in the project folder (it is ignored by git).

## Notes

- A regular Gmail account can send about 100 emails per day through Apps
  Script, far more than this form needs.
- If you edit the script later, use **Deploy → Manage deployments → Edit →
  New version** so the same URL keeps working.
