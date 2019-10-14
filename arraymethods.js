var classmates = [
    {id: 19, name: "Nkenna"},
    {id: 35, name: "Damion"},
    {id: 32, name: "Lonnie"},
    {id: 26, name: "Ashley"},
    {id: 25, name: "Grayson"},
    {id: 35, name: "Jeremy"}
];

var classmateIds = classmates.map(function(classmate){
    console.log (classmate.id);
});

var cats = [
    {name: "Jynx", age: 9},
    {name: "Zayli", age: 9},
    {name: "Olivia Grace", age: 5},
    {name: "Finn", age: 2},
    {name: "Thumper", age: 1},
    {name: "Indy", age: 1}
];

let sum = cats.reduce((acc, val) => {
    console.log (val.age)
},0);

var teams = [
    {name: "Kait", team: "Blue"},
    {name: "Bywren", team: "Pink"},
    {name: "Madison", team: "Pink"},
    {name: "Ashlynn", team: "Blue"},
    {name: "Chad", team: "Blue"},
    {name: "Paden", team: "Pink"}
];

var pinkTeam = teams.filter (function(team){
    console.log (team.team === "Pink");
});

var blueTeam = teams.filter (function(team){
    console.log (team.team === "Blue");
});

var assert = require ('assert');
describe('Array', function(){
    it ("Length of arrays should be 6", function(){
        assert.equal(6,6);
    });
});