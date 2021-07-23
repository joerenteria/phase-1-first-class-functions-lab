const returnFirstTwoDrivers = function(names){

    return names.slice(0,2);
      
  }
  

const returnLastTwoDrivers = function(names){

    return names.slice(2);
      
  }


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];



function createFareMultiplier(fare){
    return function() {
        return fare * fare;
      }  
}

const fareDoubler = function(fare){
    return function() {
        return fare * fare;
      } 
}

const fareTripler = function(fare){
    return function() {
        return fare * 3;
      }  
}

function selectDifferentDrivers(names,operation){
    return operation;
    
    }
  

