'use strict';




// let div = document.getElementById('cookies');
// let ul = document.createElement('ul');
let div = document.getElementById('cookies');
let ul = document.createElement('ul');
div.appendChild(ul)


let workingHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
let locationArr = [];



Stores.prototype.custNumPerHour(min, max) {



function custNumPerHour(min, max) {
    let numberOfCustomer = Math.floor(Math.random() * (max - min + 1) + min);
    return numberOfCustomer
}


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
    ArrayForCustomers: [],
    ArrayForCookies: [],

    CustPerHour: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
            
            
            this.ArrayForCustomers.push(custNumPerHour(this.minCust, this.maxCust));
            
            this.ArrayForCookies[i] = Math.floor(this.ArrayForCustomers[i]*this.AverageCookie)
        }
        
    },


    createTheList: function () {
        
        
        for (let i = 0; i < workingHours.length; i++) {
            
            //let result = [workingHours , this.ArrayForCookies + ' cookies']
            
            let li = document.createElement('li');
            
            ul.appendChild(li);
         
            
            //li.textContent =  result 

            li.textContent =  workingHours[i] + this.ArrayForCookies[i] + ' cookies'

            //document.write(result);
        }

    },
    
    for (let i = 0; i < workingHours.length; i++) {
        let td = document.createElement('td');
        firstRow.appendChild(td);
        td.textContent = this.ArrayForCookies[i];
    }
    
  
    
    headRow.appendChild(th);
    th.textContent = 'Daily Location Total';
    
    
    ArrayForCustomers: [],
    ArrayForCookies: [],

    CustPerHour: function () {
       
        for (let i = 0; i < workingHours.length; i++) {
            
            this.ArrayForCustomers.push(custNumPerHour(this.minCust, this.maxCust));
           
            this.ArrayForCookies[i] =  Math.floor(this.ArrayForCustomers[i]*this.AverageCookie)
        }
       
    },


    createTheList: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
            
            //let result = [workingHours , this.ArrayForCookies + ' cookies']
            
            let li = document.createElement('li');
            
            ul.appendChild(li);
         
            
            //li.textContent =  result 

            li.textContent =  workingHours[i] + this.ArrayForCookies[i] + ' cookies'

            //document.write(result);
            
        }

    },
    
}

tokyo.CustPerHour();

tokyo.createTheList();



let dubai ={
    name: 'Dubai' ,
    minCust: 11,
    
    maxCust: 38,
    AverageCookie: 3.7,
   
   
    ArrayForCustomers: [],
    ArrayForCookies: [],

    CustPerHour: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
            
            
            this.ArrayForCustomers.push(custNumPerHour(this.minCust, this.maxCust));
            
            this.ArrayForCookies[i] =  Math.floor(this.ArrayForCustomers[i]*this.AverageCookie)
        }
        
    },


    createTheList: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
           
            //let result = [workingHours , this.ArrayForCookies + ' cookies']
            
            let li = document.createElement('li');
            
            ul.appendChild(li);
         
            
            //li.textContent =  result 

            li.textContent =  workingHours[i] + this.ArrayForCookies[i] + ' cookies'

            //document.write(result);
           
        }


    },


    
}


dubai.CustPerHour();

dubai.createTheList();



    let paris ={
   
        name: 'Paris' ,
    minCust: 20,
   
    maxCust: 38,
    AverageCookie: 2.3,
   
    ArrayForCustomers: [],
    ArrayForCookies: [],


    CustPerHour: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
            
            this.ArrayForCustomers.push(custNumPerHour(this.minCust, this.maxCust));
           
            this.ArrayForCookies[i] =  Math.floor(this.ArrayForCustomers[i]*this.AverageCookie)
        }
       
    },


    createTheList: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
           
           
           
            //let result = [workingHours , this.ArrayForCookies + ' cookies']
            
            let li = document.createElement('li');
            
            ul.appendChild(li);
         
            
            //li.textContent =  result 

            li.textContent =  workingHours[i] + this.ArrayForCookies[i] + ' cookies'

            //document.write(result); 
            
        }

    },
    
}

paris.CustPerHour();

function header() {
    
    for (let i = 0; i < workingHours.length; i++) {
        let th1 = document.createElement('th');
        headRow.appendChild(th1);
        th1.textContent = workingHours[i];     
        
    }
    }
    header();
    let lima ={
    name: 'Lima' ,
    minCust: 2,
    
    maxCust: 16,
    AverageCookie: 4.6,
   
   
    ArrayForCustomers: [],
    ArrayForCookies: [],


    CustPerHour: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
            
            this.ArrayForCustomers.push(custNumPerHour(this.minCust, this.maxCust));
            
            
            this.ArrayForCookies[i] =  Math.floor(this.ArrayForCustomers[i]*this.AverageCookie)
        }
        
    },


    createTheList: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
           
            
            //let result = [workingHours , this.ArrayForCookies + ' cookies']
            
            let li = document.createElement('li');
            
            ul.appendChild(li);
         
            
            //li.textContent =  result 

            li.textContent =  workingHours[i] + this.ArrayForCookies[i] + ' cookies'

            //document.write(result);
           
        }


    },



    for (let i = 0; i < locationArr.length; i++) {
        locationArr[i].CustPerHour();
        locationArr[i].renderTable();
    }
    // seattle.renderTable();

