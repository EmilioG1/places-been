// business logic for travel book

function TravelBook() {
  this.traveled = {};
  this.currentId = 0;
}

let travelBook = new TravelBook();

TravelBook.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.traveled[place.id] = place;
};

TravelBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

TravelBook.prototype.findPlace = function (id) {
  if (this.traveled[id] != undefined) {
    return this.traveled[id];
  }
  return false;
};

TravelBook.prototype.deletePlace = function (id) {
  if (this.traveled[id] === undefined) {
    return false;
  }
  delete this.traveled[id];
  return true;
};

// business logic for places been

function Places(cities, country, landmarks) {
  this.cities = cities;
  this.country = country;
  this.landmarks = landmarks;
}

let trip1 = new Places(["Paris", "Normandy"], "France", ["Eiffel Tour", "Louvre", "Montmartre", "Musee d'Orsay", "River Seine"]);
let trip2 = new Places(["Yerevan", "Sevan"], "Armenia", ["National Gallery", "Vernissage", "Tsitsernakaberd", "Khor Virab", "Noravank", "Lake Sevan"]);
let trip3 = new Places(["Rome", "Siena", "Florence", "Venice", "Varenna", "Milan"], "Italy", ["Pantheon", "Palatine Hill", "Colusseum", "Lago di Como", "Uffitzi Gallary", "Vatican Museum", "Baths of Carcalla", "Duomo"]);

// UI logic

$(document).ready(function () {
  $("p").click(function () {
    $(".hidden").toggle();
    $
  })

});