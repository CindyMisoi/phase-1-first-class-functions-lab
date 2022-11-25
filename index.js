const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);

}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);

}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier){
    return function(integer = 5){
        return fareMultiplier * integer;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, fn){
    return fn(drivers)
}