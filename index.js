// isEveryoneHere should return true if
// the object passed to it contains all four names
// Alan, Jeff, Sarah, and Ryan and
// returns false otherwise


let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  let roleCall = [userObj.hasOwnProperty('Alan'), userObj.hasOwnProperty('Jeff'), userObj.hasOwnProperty('Sarah'), userObj.hasOwnProperty('Ryan')]
  let status = true;
  console.log(roleCall)
  roleCall.forEach(x => {
    if (x === false) {
      status = false
    }
  })
  return status

}

console.log(isEveryoneHere(users));