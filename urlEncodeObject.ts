export default function urlEncodeObject(obj: any, skipEmpty = false) {

  var str = [];

  for (var p in obj)
    if (obj.hasOwnProperty(p) && (skipEmpty == false || obj[p]))
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));

  return str.join("&");
}
