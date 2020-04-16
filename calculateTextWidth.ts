export default function calculateTextWidth(text: string) {
  const dummyContent = document.createElement('span');
  dummyContent.innerText = text;
  dummyContent.style.visibility = 'hidden';
  dummyContent.style.position = 'fixed';
  
  document.body.appendChild(dummyContent);

  const contentMinimumWidth = dummyContent.getBoundingClientRect().width;

  document.body.removeChild(dummyContent);

  return contentMinimumWidth;
}
