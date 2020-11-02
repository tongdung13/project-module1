class Player {
    constructor (totalPoint) {
        this.totalPoint = totalPoint;
    }

    decrease(value) {
        this.totalPoint -= value;
    }
 
    increase(value){
        this.totalPoint += value;
    } 

    isEmpty() {
        if (this.totalPoint <= 0) return true;
        else return false;
    }

    getTotalPoint() {
        return this.totalPoint;
    }
}