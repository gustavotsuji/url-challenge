const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")
const base = alphabet.length

const encode = i =>{
  if(!i) {
    return alphabet[0]
  }
  let s = ""
  while(i > 0){
    s += alphabet[i % base]
    i = parseInt(i / base, 10)
  }
  return s.split("").reverse().join("")
} 

module.exports = {
  encode
}