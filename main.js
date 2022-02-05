// problem-1: convert ana to vori


function anaToVori( myAna )
{
    //input validation:

    if ( typeof ( myAna ) != 'number' || myAna < 0 ) {
        return "PLEASE INPUT A POSITIVE VALUE!";
    }



    //calculation:


    else {
        let Vori = myAna / 16;

        return Vori;
    }
}


// result validation
let myVori = anaToVori( 64 );

console.log( myVori );







//problem-2: calculate total cost


function pandaCost( singaraQuantity, samuchaQuantity, jilapiQuantity )
{
    // unit price

    const singaraUnitPrice = 7;

    const samuchaUnitPrice = 10;

    const jilapiUnitPrice = 15;



    //input validation



    if ( typeof ( singaraQuantity ) != 'number' || typeof ( samuchaQuantity ) != 'number' || typeof ( jilapiQuantity ) != 'number' || Number.isInteger( singaraQuantity ) == false || Number.isInteger( samuchaQuantity ) == false || Number.isInteger( jilapiQuantity ) == false ) {
        return "PLEASE INPUT INTEGER VALUE!";
    }


    //calculation


    else {
        let singarapandaCost = singaraUnitPrice * singaraQuantity;

        let samuchapandaCost = samuchaUnitPrice * samuchaQuantity;


        let jilapipandaCost = jilapiUnitPrice * jilapiQuantity;




        let pandaCostAmounts = singarapandaCost + samuchapandaCost + jilapipandaCost;

        // return as number



        return pandaCostAmounts;
    
    }
}

// Result validation

let mypandaCostAmounts = pandaCost( 10, 3, 2 );

console.log( mypandaCostAmounts );








// problem-3: picnic budget


function picnicBudget( personQuantity )
{
    //input validation

    if ( typeof ( personQuantity ) != 'number' || personQuantity < 0 || Number.isInteger( personQuantity ) == false ) {
        return "PLEASE INPUT POSITIVE INTEGER VALUE!";
    }

    // for o to 100 people

        else if ( personQuantity >= 0 && personQuantity <= 100 ) {
        let totalpicnicBudget = personQuantity * 5000;

        return totalpicnicBudget;
    }

    // for 100 to 200 people

    else if ( personQuantity > 100 && personQuantity <= 200 ) {
        let FirstGroupCost = 100 * 5000;

        let SecondGroupCost = ( personQuantity - 100 ) * 4000;

        let totalpicnicBudget = FirstGroupCost + SecondGroupCost;


        return totalpicnicBudget;
    }

    // for more than 200 people

    else {
        let FirstGroupCost = 100 * 5000;

        let SecondGroupCost = 100 * 4000;

        let ThirdGroupCost = ( personQuantity - 200 ) * 3000;

        let totalpicnicBudget = FirstGroupCost + SecondGroupCost + ThirdGroupCost;


        return totalpicnicBudget;
    }
}


//result validation

let myTotalpicnicBudget = picnicBudget( 132 );

console.log( myTotalpicnicBudget );







//problem-4: finding first odd friend.


function oddFriend(friendsName){let i;


    //loop



    for(i = 0; i <= friendsName.length; i++){ if(typeof(friendsName[i]) != 'string')
    
    
    {
            
        //if input is not a name

        return "PLEASE INPUT NAME ONLY!";


        }

        else if(friendsName[i].length % 2 == 1){

//to stop the loop

            break;
        }
    }


    return friendsName[i];


}


  
                let myFriendsName = [ 'Mala', 'Bokkor', 'Jobbar', 'Rajjak', 'Baten', 'Jodu', 'Kodhu', 'Modhu', 'Barek', 'Alauddin', 'Salauddin', 'Rofik', 'Korim', 'Rohim', 'Kamal', 'Jamal' ];



                             let myoddFriend = oddFriend( myFriendsName );



// result validation


console.log( myoddFriend );





