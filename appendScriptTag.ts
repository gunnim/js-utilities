export default function appendScriptTag(
  srcUrl: string, 
  onload?: (this: GlobalEventHandlers, ev: Event) => any,
  attributes?: { [index: string]: string }
) {
  const body = document.getElementsByTagName("body")[0];

  const scriptTag = document.createElement("script");
  scriptTag.src = srcUrl;
  scriptTag.onload = onload || null;

  if (attributes)
    for (let attr in attributes)
      scriptTag.setAttribute(attr, attributes[attr]);

  body.appendChild(scriptTag);
}
