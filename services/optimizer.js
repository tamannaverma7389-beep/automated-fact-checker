function optimizeText(text) {

  return text
    .toLowerCase()
    .replace(/guys|please|listen|breaking|viral|forwarded|share/gi,"")
    .replace(/[^\w\s]/g,"")
    .trim();

}

module.exports = optimizeText;