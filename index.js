// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers (){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = () => {
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fareMultiplier) => {
    return (value) => {
        return fareMultiplier * value;    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuintupler = createFareMultiplier(4);

function selectDifferentDrivers(drivers, func){
   return func(drivers);
} 

returnFirstTwoDrivers();
returnLastTwoDrivers();
createFareMultiplier();
selectDifferentDrivers();