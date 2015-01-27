function checkUsersValid(goodUsers) {
  return function(testUsers) {
    return testUsers.every(function(test) {
      return goodUsers.some(function(good) {
        return test.id === good.id;
      });
    });
  };
}

module.exports = checkUsersValid;