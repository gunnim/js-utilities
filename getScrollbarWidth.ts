export default function getScrollbarWidth() {
  // Add temporary box to wrapper
  let scrollbox = document.createElement('div');

  // Make box scrollable
  scrollbox.style.overflow = 'scroll';

  // Append box to document
  document.body.appendChild(scrollbox);

  // Measure inner width of box
  const scrollBarWidth = scrollbox.offsetWidth - scrollbox.clientWidth;

  // Remove box
  document.body.removeChild(scrollbox);

  return scrollBarWidth;
}
