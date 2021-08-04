'use strict';




let workingHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
let locationArr = [];




function Stores(name, minCust, maxCust, AverageCookie) {
    
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.AverageCookie = AverageCookie;
    this.ArrayForCustomers = [];
    this.ArrayForCookies = [];
    locationArr.push(this);
}

let seattle = new Stores('seattle', 23, 65, 6.3);
let tokyo = new Stores('tokyo', 3, 24, 1.2);
let dubai = new Stores('dubai', 11, 38, 3.7);
let paris = new Stores('paris', 20, 38, 2.3);
let lima = new Stores('lima', 2, 16, 4.6);

console.log(locationArr);


Stores.prototype.custNumPerHour = function(min, max) {
    let numberOfCustomer = Math.floor(Math.random() * (max - min + 1) + min);
    return numberOfCustomer
}

Stores.prototype.CustPerHour = function(){
    
    for (let i = 0; i < workingHours.length; i++) {


        this.ArrayForCustomers.push(this.custNumPerHour(this.minCust, this.maxCust));

        this.ArrayForCookies[i] = Math.floor(this.ArrayForCustomers[i] * this.AverageCookie)
    }

}


let div = document.getElementById('cookies');
let table = document.createElement('table');
div.appendChild(table);

let headRow = document.createElement('tr');
table.appendChild(headRow);
headRow.textContent = ' ';


let th = document.createElement('th');




Location.prototype.renderTable = function () {
    
    let firstRow = document.createElement('tr');
    table.appendChild(firstRow);
    firstRow.textContent = this.name;
    
    for (let i = 0; i < workingHours.length; i++) {
        let td = document.createElement('td');
        firstRow.appendChild(td);
        td.textContent = this.ArrayForCookies[i];
    }
    
  
    
    headRow.appendChild(th);
    th.textContent = 'Daily Location Total';
    
    
    
}



function header() {
    
    for (let i = 0; i < workingHours.length; i++) {
        let th1 = document.createElement('th');
        headRow.appendChild(th1);
        th1.textContent = workingHours[i];     
        
    }
    }
    header();



    for (let i = 0; i < locationArr.length; i++) {
        locationArr[i].CustPerHour();
        locationArr[i].renderTable();
    }
    // seattle.renderTable();

