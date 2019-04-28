const subwayLines = {
    Red:[
      'South Station',
      'Park Street',
      'Kendall',
      'Central',
      'Harvard',
      'Porter',
      'Davis',
      'Alewife'
    ],
    Green:[
      'Government Center',
      'Park Street',
      'Boylston',
      'Arlington',
      'Copley',
      'Hynes',
      'Kenmore']
    ,
    Orange:['North Station',
      'Haymarket',
      'Park Street',
      'State',
      'Downtown Crossing',
      'Chinatown',
      'Back Bay',
      'Forest Hills'],
};

let stopsBetweenStations = function(startLine, startStation, endLine, endStation){
    // get the index of the startLine startStation
    const startStationIndex = subwayLines[startLine].indexOf(startStation);
   // get the index of the end station
    const endStationIndex = subwayLines[endLine].indexOf(endStation);

    
/*
      if both stops are on the same line then we don't need to bother with
      stopping at Park Street, we can simply figure out how far those stops are
      from each other and return that absolute value.
    */
    if(startLine === endLine){
        return Math.abs(startStationIndex - endStationIndex);
    }



               // get the index of the startLine Park Street station
    const startLineParkStreetIndex = subwayLines[startLine].indexOf('Park Street');
        // get the index of the endline park street station
    const tripToParkStreet = Math.abs(startStationIndex - startLineParkStreetIndex);
    
        /*
      calculate the difference between the start station index and Park Street index
      take the absolute value of that difference to get the trip to Park Street length
    */

       // get the index of the endLine Park Street station
    const endLineParkStreetIndex = subwayLines[endLine].indexOf('Park Street');


     /*
      calculate the difference between the end station index and end line Park Street index
      take the absolute value of that difference to get the trip to destination length
    */
    const tripToDestination = Math.abs(endStationIndex - endLineParkStreetIndex);


    // add the tripToParkStreet and tripToDestination to get the trip total
    const totalTrip = tripToParkStreet + tripToDestination ;

    return totalTrip;

    
}