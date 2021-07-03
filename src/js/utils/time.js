// ==========================================================================
// Time utils
// ==========================================================================

import is from './is';

// Time helpers
export const getHours = value => Math.trunc((value / 60 / 60) % 60, 10);
export const getMinutes = value => Math.trunc((value / 60) % 60, 10);
export const getSeconds = value => Math.trunc(value % 60, 10);

export const secondsToMinutes = value => Math.floor(value / 60);

// Format time to UI friendly string
export function formatTime(time = 0, displayHours = false, inverted = false) {
  // Bail if the value isn't a number
  if (!is.number(time)) {
    return formatTime(undefined, displayHours, inverted);
  }

  // Format time component to add leading zero
  const format = value => `0${value}`.slice(-2);
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

export function videoToMatchTime(time, syncPoints) {
  const syncPointsOrdered = syncPoints.sort((a, b) => b.time - a.time);
  const syncPoint = syncPointsOrdered.find(x => x.time <= time) || syncPointsOrdered[syncPointsOrdered.length - 1];
  const timeIntoPeriod = Math.max(time - syncPoint.time, 0);
  // Time into period
  const seconds = getSeconds(timeIntoPeriod);
  const minutes = Math.min(
    secondsToMinutes(syncPoint.start + timeIntoPeriod - seconds),
    secondsToMinutes(syncPoint.start + syncPoint.duration),
  );
  const minutesIntoPeriod = secondsToMinutes(timeIntoPeriod - seconds);
  // Added time into period
  const addedTime = minutesIntoPeriod >= secondsToMinutes(syncPoint.duration);
  const addedMinutes = minutesIntoPeriod - Math.min(minutesIntoPeriod, secondsToMinutes(syncPoint.duration));
  // Format time component to add leading zero
  const format = value => `${value.toString().length <= 1 ? '0' : ''}${value}`;

  return `${format(minutes)}${addedTime ? `+${format(addedMinutes)}` : ''}:${format(seconds)}`;
}

export function matchToVideoTime(time, syncPoints) {
  // Match Time
  const syncPointsOrdered = syncPoints.sort((a, b) => a.time - b.time);
  const matchTime = time.match(/(^[0-9]{1,3})\+?([0-9]{1,2})?:([0-9]{1,2})/);
  const minutes = Number(matchTime[1] || 0);
  let addedMinutes = Number(matchTime[2] || -1);
  const seconds = Number(matchTime[3] || 0);
  const hasAddedMinutes = addedMinutes >= 0;
  addedMinutes = Math.max(addedMinutes, 0);

  // Store match time in seconds
  const matchTimeInSeconds = minutes * 60 + addedMinutes * 60 + seconds;
  // Match Period Index
  let index = 0;
  syncPointsOrdered.forEach(x => {
    if (x.start + x.duration <= matchTimeInSeconds) index += 1;
  });

  // Offset index if added time
  const matchPeriod = syncPointsOrdered[hasAddedMinutes ? index - 1 : Math.min(index, syncPoints.length - 1)];

  return matchTimeInSeconds + matchPeriod.time - matchPeriod.start;
}
