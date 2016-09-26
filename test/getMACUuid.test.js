var LambdaTester = require( 'lambda-tester' );
var myLambda = require( '../src/getMACUuid' );

describe( 'getMACUuid Unit Testing', function() {
    this.timeout(5000);
    
    //valid input
    it( 'Success', function() {
        
        return LambdaTester( myLambda.handler )
            .event( { "device_id": "mac:1122334455" } )
            .expectResult();
    });
    
    //valid input
    it( 'Success', function() {

        return LambdaTester( myLambda.handler )
            .event( { "device_id": "serial:11AABBCCDDEE" } )
            .expectResult();
    });
    
    //invalid input
    it( 'Failure', function() {

        return LambdaTester( myLambda.handler )
            .event( { "device_id": "serial:AB12CD23EF3412" } )
            .expectError();
    });
    
    //invalid input
    it( 'Failure', function() {

        return LambdaTester( myLambda.handler )
            .event( { "device_id": "mac:123456789" } )
            .expectError();
    });
    
    //input mismatch
    it( 'Failure', function() {

        return LambdaTester( myLambda.handler )
            .event( { "deviId": "mac:1242135682" } )
            .expectError();
    });
    
    //input mismatch
    it( 'Failure', function() {

        return LambdaTester( myLambda.handler )
            .event( { "device_id": "mc:1111111111" } )
            .expectError();
    });

    //input mismatch
    it( 'Failure', function() {

        return LambdaTester( myLambda.handler )
            .event( { "device_id": "seal:AAAAAAAAAAAAA" } )
            .expectError();
    });
    
    //without input
    it( 'Failure', function() {

        return LambdaTester( myLambda.handler )
            .event( {} )
            .expectError();
    });
    
});
