const findTheOldest = function(people_list) {
  const oldest_person = people_list.reduce(function (previous, current) {
    if (!("yearOfDeath" in previous)) {
      previous.yearOfDeath = 2022;
    }
    if (!("yearOfDeath" in current)) {
      current.yearOfDeath = 2022;
    }
    previous_age = previous.yearOfDeath - previous.yearOfBirth;
    current_age = current.yearOfDeath - current.yearOfBirth;

    if (previous_age >= current_age) {
      return previous
    }
    else { return current}
  })

  return oldest_person
};

// Do not edit below this line
module.exports = findTheOldest;
