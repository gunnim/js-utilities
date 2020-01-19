export default function getISO8601seconds(iso8601time: string) {
  var reptms = /^PT(?:(\d+\.*\d*)H)?(?:(\d+\.*\d*)M)?(?:(\d+\.*\d*)S)?$/;
  var hours = 0
  var minutes = 0
  var seconds = 0;

  if (reptms.test(iso8601time)) {
    var matches = reptms.exec(iso8601time);
    if (matches[1]) hours = Number(matches[1]);
    if (matches[2]) minutes = Number(matches[2]);
    if (matches[3]) seconds = Number(matches[3]);
    return hours * 3600  + minutes * 60 + seconds;
  }

  return NaN;
}
