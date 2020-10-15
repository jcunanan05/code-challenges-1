// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript

function songDecoder(song = "") {
  return song.replace(/(WUB)+/g, " ").trim();
}

const test1 = songDecoder("AWUBBWUBC");
console.log("test #1: ", test1, ", A B C");

const test2 = songDecoder("AWUBWUBWUBBWUBWUBWUBC");
console.log("test #2: ", test2, ", A B C");

const test3 = songDecoder("WUBAWUBBWUBCWUB");
console.log("test #3: ", test3, ", A /B C");

