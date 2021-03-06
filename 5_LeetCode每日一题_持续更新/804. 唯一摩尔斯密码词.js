
const uniqueMorseRepresentations = function(words) {
  // 字典表
  let list = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let res = new Set()
  for(let item of words){
      let str = ""
      for(let i=0;i<item.length;i++){
        str +=list[item.charCodeAt(i)-97];// 大写A 65  小写a 97
      }
      if(!res.has(str)){
          res.add(str)
      }
  }
  return res.size
}