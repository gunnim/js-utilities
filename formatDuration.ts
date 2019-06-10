import padNum from './padNumber';

const second = 1000;
const minute = second * 60;
const hour =  minute * 60;

/**
 * Takes a duration in milliseconds and returns formatted
 * @param timeInMs Duration in milliseconds
 */
export default function formatDuration(timeInMs: number) {
  const hours = Math.floor(timeInMs / hour);
  timeInMs %= hour;

  const minutes = Math.floor(timeInMs / minute);
  timeInMs %= minute;

  const seconds = Math.floor(timeInMs / second);
  // timeInMs %= second;

          // Display hours unpadded if non-zero
  return `${hours ? `${hours}:` : ''}`
    // display minutes padded if hours or minutes are non-zero
    + `${hours || minutes ? `${padNum(minutes, 2)}:` : ''}`
    // display seconds padded
    + `${padNum(seconds, 2)}`;
}
