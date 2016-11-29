module.exports = {
  wordCount : function(word) {
    objCount = {};
    splitWords = word.split(/[\s]+/);
    splitWords.forEach(function(words) {
      if(objCount.hasOwnProperty(words)) {
        objCount[words]++;
      } else {
        objCount[words] = 1;
      }
    });
    return objCount;
  }
}