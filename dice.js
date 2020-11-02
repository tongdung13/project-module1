class Dice {
    constructor () {
        
        this.arr = ["bau","ca","cua","ga","nai","tom"];      
    }

  

      getRndInteger() {
        return Math.floor(Math.random() *  this.arr.length);
      }

    getResult(){
        let results = [this.arr[this.getRndInteger()],this.arr[this.getRndInteger()],this.arr[this.getRndInteger()]];
        return results;
    }
}


// function jolt() {
//     let dice = new Dice(); 
//     let results = dice.getResult();
//     document.getElementById("1").innerHTML = "<img src='images/"+results[0]+ ".PNG'>";
//     document.getElementById("2").innerHTML = "<img src='images/"+results[1]+ ".PNG'>";
//     document.getElementById("3").innerHTML = "<img src='images/"+results[2]+ ".PNG'>";

//   }