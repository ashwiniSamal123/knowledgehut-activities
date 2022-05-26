let rectangle = class{
  constructor(height , width){
      this.area = height * width;
  }  
} 
    
console.log(new rectangle(5, 15).area);
module.exports = rectangle;