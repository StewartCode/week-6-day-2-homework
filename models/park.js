
const Park = function(name, ticketPrice, dinosaurs){
   this.name = name;
   this.ticketPrice = ticketPrice;
   this.dinosaurs = dinosaurs;
}

Park.prototype.returnName = function(){
  return this.name;
}

Park.prototype.returnPrice = function(){
  return this.ticketPrice;
}

Park.prototype.listOfDinosaurs = function(){
    return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    return this.dinosaurs.splice(0 ,0 ,dinosaur);
}

Park.prototype.removeDinosaur = function(){
    return this.dinosaurs.splice(0 ,1);
}

Park.prototype.mostVistitedDinosaur = function(){
    const dinosaurs = this.dinosaurs.sort(function(x, y){
      return x.guestsAttractedPerDay - y.guestsAttractedPerDay
    });
             dinosaurs.reverse();
      return dinosaurs[0].species;
}

Park.prototype.speciesSearch = function(name){
         const newArray = [];
         const dinosaurs = this.dinosaurs;
         for (var i = 0; i < dinosaurs.length; i++) {
             if (dinosaurs[i].species === name){
             newArray.push(dinosaurs[i])
             }
    }
    return newArray.length;
}

// Park.prototype.speciesRemove = function(name){
//          const newArray = [];
//          const dinosaurs = this.dinosaurs;
//          for (var i = 0; i < dinosaurs.length; i++) {
//              if (dinosaurs[i].species === name){
//              this.dinosaurs.pop
//              }
//     }
//     return this.dinosaurs.length;
// }

Park.prototype.speciesRemove = function(name){
    let dinos = []
    let counter = 0
      for (x of this.dinosaurs) {
          if (x.species !== name)
          dinos.splice(counter,1,x)
          counter += 1
      }
    return dinos.length
  }

Park.prototype.guestsPerDay = function(){
      let total = 0;
       this.dinosaurs.forEach(function(x) {
       total += x.guestsAttractedPerDay;
       });
       return total;
}

Park.prototype.guestsPerYear = function(){
      const answer = this.guestsPerDay() * 365
      return answer;
}

Park.prototype.turnoverPerYear = function(){
      const answer = this.guestsPerYear() * this.ticketPrice
      return answer;
}


module.exports = Park;
