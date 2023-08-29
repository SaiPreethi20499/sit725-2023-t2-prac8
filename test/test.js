const { expect } = require("chai");
const request = require("request");
let city = {
    title : 'Delhi' ,
    subTitle : 'New Delhi' ,
    path : 'images/TajMahal.webp' ,
    description : 'Welcome to Delhi' ,
};

describe('Testing GET api' , function(){
    it('Compare Success Message', function(done){
        request('http://localhost:3000/api/city', function(a,b,c){            
            let body = JSON.parse(c);
            expect(body.message).to.equal('success');
            done();
        });
    });
});

describe('Testing POST api', function(){
    it("Compare success message", function(done){
        request.post({url:'http://localhost:3000/api/city',form:city}, function(a,b,c){
            let body = JSON.parse(c);
            expect(body.message).to.equal('success');
            done();
        });     
    });
});

describe('Testing DELETE api', function(){
    it('Deletes a city', function(done){
        request.delete({url:'http://localhost:3000/api/city', form:city}, function (a,b,c){
            let body_obj = JSON.parse(c);
            expect(body_obj.statusCode).to.equal(400);
            done();            
        });
    });
});


