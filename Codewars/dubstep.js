// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript

module.exports = function songDecoder(song = '') {
  return song.replace(/(WUB)+/g, ' ').trim();
};
