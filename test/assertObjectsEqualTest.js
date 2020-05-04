const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({ fname: "Mikhail", lname: "Serebriakov"}, { lname: "Serebriakov", fname: "Mikhail" });