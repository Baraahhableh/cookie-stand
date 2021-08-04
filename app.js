'use strict';



let div = document.getElementById('cookies');
let ul = document.createElement('ul');



let workingHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];



function custNumPerHour(min, max) {
    let numberOfCustomer = Math.floor(Math.random() * (max - min + 1) + min);
    return numberOfCustomer
}


let seattle = {
    name: 'Seattle' ,
    minCust: 23,
   
    maxCust: 65,
    AverageCookie: 6.3, 
    
    ArrayForCustomers: [],
    ArrayForCookies: [],

    CustPerHour: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
            
            
            this.ArrayForCustomers.push(custNumPerHour(this.minCust, this.maxCust));
            
            this.ArrayForCookies[i] = this.ArrayForCustomers[i]*this.AverageCookie
        }
        
    },


    createTheList: function () {
        
        
        for (let i = 0; i < workingHours.length; i++) {
            
            let result = [workingHours , this.ArrayForCookies + ' cookies']
            
            let li = document.createElement('li');
            
            ul.appendChild(li);
         
            
            li.textContent =  result 
            document.write(result);
        }

    },
    
}

seattle.CustPerHour();

seattle.createTheList();

let tokyo ={
    name: 'Tokyo' ,
    minCust: 3,
    
    
    maxCust: 24,
    AverageCookie: 1.2,
    
    ArrayForCustomers: [],
    ArrayForCookies: [],

    CustPerHour: function () {
       
        for (let i = 0; i < workingHours.length; i++) {
            
            this.ArrayForCustomers.push(custNumPerHour(this.minCust, this.maxCust));
           
            this.ArrayForCookies[i] = this.ArrayForCustomers[i]*this.AverageCookie
        }
       
    },


    createTheList: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
            let result = [workingHours , (this.ArrayForCookies[i] + ' cookies')]
            
            let li = document.createElement('li');
           
            ul.appendChild(li);
            
            li.textContent =  result 
            
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
            
            this.ArrayForCookies[i] = this.ArrayForCustomers[i]*this.AverageCookie
        }
        
    },


    createTheList: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
            let result = [workingHours , (this.ArrayForCookies[i] + ' cookies')]
            
            let li = document.createElement('li');
            
            ul.appendChild(li);
          
            li.textContent =  result 
           
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
           
            this.ArrayForCookies[i] = this.ArrayForCustomers[i]*this.AverageCookie
        }
       
    },


    createTheList: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
           
           
            let result = [workingHours , (this.ArrayForCookies[i] + ' cookies')]
            
            let li = document.createElement('li');
           
            ul.appendChild(li);
           
            li.textContent =  result 
            
        }

    },
    
}

paris.CustPerHour();

paris.createTheList();
      
    
    
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
            
            
            this.ArrayForCookies[i] = this.ArrayForCustomers[i]*this.AverageCookie
        }
        
    },


    createTheList: function () {
        
        for (let i = 0; i < workingHours.length; i++) {
           
            let result = [workingHours , (this.ArrayForCookies[i] + ' cookies')]
          
            let li = document.createElement('li');
            
            
            ul.appendChild(li);
            
            
            li.textContent =  result 
           
        }


    },


    
}

lima.CustPerHour();


lima.createTheList();
    


