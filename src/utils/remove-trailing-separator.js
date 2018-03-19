const isWin = process.platform === 'win32';

export default function removeTrailingSeparator(str) {
  let i = str.length - 1;
  if (i < 2) {
    return str;
  }
  while (isSeparator(str, i)) {
    i--;
  }
  return str.substr(0, i + 1);
};

function isSeparator(str, i) {
  let char = str[i];
  return i > 0 && (char === '/' || (isWin && char === '\\'));
}
