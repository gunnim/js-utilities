module.exports = function(p1) {
  
  if (typeof p1 === "object") {
    // Array
    var timespans = [];

    p1.forEach(timespan => 
      timespans.push((+timespan - 1) + ' - ' + timespan)
    );

    return timespans;
  }
  else {
    // Single timespan

    return (+p1 - 1) + ' - ' + p1;
  }
};