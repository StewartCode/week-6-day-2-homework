const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
   dinosaur1 = new Dinosaur('Abelisaurus', 'leaves', 50)
   dinosaur2 = new Dinosaur('Minmi', 'trees', 90)
   dinosaur3 = new Dinosaur('Stegoceras', 'tourists', 60)
   dinosaur4 = new Dinosaur('trex', 'other dinosaurs', 500)
   park = new Park('alton towers', 20, [dinosaur1, dinosaur2, dinosaur3])
  })

  it('should have a name', function(){
    const actual = park.returnName();
    assert.strictEqual(actual, 'alton towers');
  });

  it('should have a ticket price', function(){
    const actual = park.returnPrice();
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.listOfDinosaurs();
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur4);
    const actual = park.listOfDinosaurs();
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection',function(){
     park.removeDinosaur();
     const actual = park.listOfDinosaurs();
     assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostVistitedDinosaur();
    assert.strictEqual(actual, "Minmi")
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.speciesSearch("Minmi")
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    const actual = park.speciesRemove("Minmi")
    assert.strictEqual(actual, 2)
   });

   it('should be able to calculate guests per day', function(){
     const actual = park.guestsPerDay()
     assert.strictEqual(actual, 200)
   })

   it('should be able to calculate guests per year', function(){
     const actual = park.guestsPerYear()
     assert.strictEqual(actual, 73000)
   })

   it('should be able to calculate turnover per year', function(){
     const actual = park.turnoverPerYear()
     assert.strictEqual(actual, 1460000)
   })

});
