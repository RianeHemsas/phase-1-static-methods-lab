class Formatter {
  //add static methods here

  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1);

  }
  static sanitize (string){
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }
  static titleize (string){
   
const otherWords=['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
const words=string.split(' ').map(word =>{
  if(otherWords.includes(word)){
return word;
  }else {
    return this.capitalize(word);
  }
});
return this.capitalize(words.join(' '));
  }

}