
export default toMMSS = time => {
  let input = parseInt(time, 10);
  let minutes = Math.floor(input / 60);
  let seconds = input - minutes * 60;

  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  return `${minutes}:${seconds}`;
};
