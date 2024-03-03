const slackUrls = {
  "doctor0":"dummy_slack_url_main",
  "doctor1":"dummy_slack_url",
  "doctor2":"dummy_slack_url",
  "doctor3":"dummy_slack_url",
};

const mainUrl = "dummy_slack_url_main"

// ** 이하의 코드는 절대 건들지 말것 **

function sendSlack_range(e) {
  const log = e.range.getSheet()
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getActiveCell();  
  const row = cell.getRow();
  const column = cell.getColumn();

  let modality = sheet.getRange(2, column).getValue();
  if (modality == '') {
    modality = "US";
  }

  let dateColumn = column;
  switch (true) {
    case (column >= 2 && column <= 5):
      dateColumn = 2;
      break;
    case (column >= 6 && column <= 9):
      dateColumn = 6;
      break;
    case (column >= 10 && column <= 13):
      dateColumn = 10;
      break;
    case (column >= 14 && column <= 17):
      dateColumn = 14;
      break;
    case (column >= 18 && column <= 21):
      dateColumn = 18;
      break;
    default:
      dateColumn = column; 
      break;
  };
  const clinic_date = sheet.getRange(1, dateColumn).getValue();
  const formatted_clinical_date = Utilities.formatDate(clinic_date, 'Asia/Seoul', 'MM/dd(EE)');

  const added_date = new Date();

  const cellvalue = SpreadsheetApp.getActiveRange().getValue();

  for (const trigger in slackUrls) {
    if (cellvalue.includes(trigger)) {
      const slackUrl = slackUrls[trigger];
      const params = {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify({
          "text": "- Date: " + formatted_clinical_date +"\n- Modality: " + modality + "\n- Patient Info.: " + cellvalue + "\n- 응콜쌤 기입 날짜: " + added_date
        })
      };

      try {
        const response = UrlFetchApp.fetch(slackUrl, params);
        const response2 = UrlFetchApp.fetch(mainUrl, params);
        Logger.log(`Message sent to ${trigger} channel: ${response.getContentText()}`);
      } catch (error) {
        Logger.log(`Error sending message to ${trigger} channel: ${error}`);
      }
    }
  }
}
