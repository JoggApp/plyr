// ==========================================================================
// Time utils
// ==========================================================================

import is from './is';

// Time helpers
export const getHours = (value) => Math.trunc((value / 60 / 60) % 60, 10);
export const getMinutes = (value) => Math.trunc((value / 60) % 60, 10);
export const getSeconds = (value) => Math.trunc(value % 60, 10);

export const secondsToMinutes = value => Math.floor(value / 60);

// Format time to UI friendly string
export function formatTime(time = 0, displayHours = false, inverted = false) {
  // Bail if the value isn't a number
  if (!is.number(time)) {
    return formatTime(undefined, displayHours, inverted);
  }

  // Format time component to add leading zero
  const format = (value) => `0${value}`.slice(-2);
  // Breakdown to hours, mins, secs
  let hours = getHours(time);
  const mins = getMinutes(time);
  const secs = getSeconds(time);

  // Do we need to display hours?
  if (displayHours || hours > 0) {
    hours = `${hours}:`;
  } else {
    hours = '';
  }

  // Render
  return `${inverted && time > 0 ? '-' : ''}${hours}${format(mins)}:${format(secs)}`;
}

export function matchTime(time, syncPoints) {
  const syncPointsOrdered = syncPoints.sort((a, b) => b.time - a.time);
  const syncPoint = syncPointsOrdered.find(x => x.time <= time) || syncPointsOrdered[syncPointsOrdered.length - 1];
  const timeIntoPeriod = Math.max(time - syncPoint.time, 0);
  // Time into period
  const seconds = getSeconds(timeIntoPeriod);
  const minutes = secondsToMinutes(syncPoint.start + timeIntoPeriod - seconds);
  const minutesIntoPeriod = secondsToMinutes(timeIntoPeriod - seconds);
  // Added time into period
  const addedTime = minutesIntoPeriod >= secondsToMinutes(syncPoint.duration);
  const addedMinutes = minutesIntoPeriod - Math.min(minutesIntoPeriod, secondsToMinutes(syncPoint.duration));
  // Format time component to add leading zero
  const format = value => `0${value}`.slice(-2);

  return `${format(minutes)}${addedTime ? `+${format(addedMinutes)}` : ''}:${format(seconds)}`;
}
