# patient_noti_app
Hospital practice timetable notification sytem using Google Apps Scripts & Slack Webhook

* 영상의학과 진료순서표는 google spreadsheet로 작성되어 각 과(내과/외과 등)에서 접속하여 적는 방식이다. 그러나 응급 등의 이유로 담당 영상 주치의에게 알리지 않는 경우가 있다. 그렇게 갑작스럽게 환자가 밀고 들어 올때가 있어서 영상의로서 하루에도 몇번씩 진료표를 들여다 보고 있어야했는데, 참 번거롭고 집중력 낭비인 일이었다.
* Google script apps 와 Slack 의 webhook 기능을 이용해, 내 환자가 내원하거나 or 내가 주치의로 배정되거나 or 우리 진료조의 CT, MR 촬영이 잡힐 시 자동으로 알림이 오게하는 코드를 작성하였다.
* 진료표를 열어보는 횟수가 10~20회/day 에서 0회/day 로 감소하였다.
