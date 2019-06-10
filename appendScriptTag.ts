export default function appendScriptTag(
  srcUrl: string, 
  attributes?: { [index: string]: string },
  onload?: (this: GlobalEventHandlers, ev: Event) => any,
  onerror?: OnErrorEventHandler,
) {
  const body = document.getElementsByTagName("body")[0];

  const scriptTag = document.createElement("script");
  scriptTag.src = srcUrl;
  scriptTag.onload = onload || null;
  if (onerror) {
    scriptTag.onerror = onerror;
  }

  if (attributes)
    for (let attr in attributes)
      scriptTag.setAttribute(attr, attributes[attr]);

  body.appendChild(scriptTag);
}
