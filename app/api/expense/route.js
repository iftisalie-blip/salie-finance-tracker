import { google } from "googleapis";

export async function POST(req) {
  const body = await req.json();

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SHEET_ID,
    range: "Expenses!A:Z",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        Date.now().toString(),
        new Date().toISOString(),
        body.spender,
        body.description,
        body.amount
      ]]
    }
  });

  return Response.json({ ok: true });
}
