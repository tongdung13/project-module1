    class RoomMaster {
    constructor (name,totalPoint){
        this.name = name;
        this.totalPoint = totalPoint;
    }


 checkTotalPoint(totalPoint) {
    return !totalPoint.isEmpty();
}


 plus(totalPoint) {
    if (this.checkTotalPoint(totalPoint)) {
        this.totalPoint++;
        totalPoint.decrease(10000);
    } else {
        alert("het tien roi con dau");
      
    }
    
}

minus(totalPoint){
    if (this.checkTotalPoint(totalPoint)){
        this.totalPoint++;
        totalPoint.increase(10000);
    } else {
        alert("ban trung thuong")
    }
}
say(str){
    return this.name + "say" + str;
}

getTotalPoint() {
    return this.totalPoint;
}
}
