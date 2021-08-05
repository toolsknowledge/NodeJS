//array
//collection of indexed and hetrogeneous elements called as array
//[]
//we will access elements with the help of "indexes"
//index starts from "0"

let arr1 = [10,20,30,40,50];
console.log( arr1[0],arr1[2],arr1[4],arr1[5],arr1[-1] );
//10 30 50 undefined undefined



//slice()
let arr2 = [10,20,30,40,50,60,70,80,90,100];
console.log( arr2.slice(4,7) );                     //[ 50, 60, 70 ]
console.log( arr2.slice(7,9) );                     //[ 80, 90 ]
console.log( arr2.slice(1,4) );                     //[ 20, 30, 40 ]
console.log( arr2.slice(0,1) );                     //[ 10 ]
console.log( arr2.slice(9));                        //[ 100 ]
console.log( arr2.slice(-5,-2) );                   //[ 60, 70, 80 ]
console.log( arr2.slice(-9,-6) );                   //[ 20, 30, 40 ]



//findIndex()
//it is used to find the index of a particular element
console.log(
    [1,2,3,4,5,6,7,8,9,10].findIndex((element,index)=>{
        return element == 5;
    })
);          //4

console.log(
    [1,2,3,4,5,6,7,8,9,10].findIndex((element,index)=>{
        return element == 9;
    })
);      //8

console.log(
    [1,2,3,4,5,6,7,8,9,10].findIndex((element,index)=>{
        return element == 100;
    })
);      //-1



//splice()
//it is used to delete particular elements
let arr3 = [10,20,30,40,50,60,70,80,90,100];
arr3.splice(4,3);
console.log( arr3 );                                //[10,20,30,40,80,90,100]
arr3.splice(4,1);
console.log( arr3 );                                //[ 10, 20, 30, 40, 90, 100 ]
arr3.splice(5,1);
console.log(arr3);                                  //[ 10, 20, 30, 40, 90 ]
arr3.splice(arr3.findIndex((element,index)=>{
    return element == 20;
}),1);
console.log(arr3);                                  //[ 10, 30, 40, 90 ]



let arr4 = [{"p_id":111,"p_name":"p_one","p_cost":10000},
            {"p_id":222,"p_name":"p_two","p_cost":20000},
            {"p_id":333,"p_name":"p_three","p_cost":30000},
            {"p_id":444,"p_name":"p_four","p_cost":40000},
            {"p_id":555,"p_name":"p_five","p_cost":50000}];
arr4.splice(arr4.findIndex((element,index)=>{
    return element.p_id == 333
}),1);
console.log( arr4 );



//push()
//pop()
//unshift()
//shift()
let arr5 = [20,30,40];
console.log( arr5 );                    //[ 20, 30, 40 ]
arr5.push( 50 );                        
console.log( arr5 );                    //[ 20, 30, 40, 50 ]
arr5.unshift(10);
console.log( arr5 );                    //[ 10, 20, 30, 40, 50 ]
arr5.pop();
console.log( arr5 );                    //[ 10, 20, 30, 40 ]
arr5.shift();
console.log( arr5 );                    //[ 20, 30, 40 ]



//map()
console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element * 100;
    })
);          //[ 100, 200, 300, 400, 500 ]


console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element * 10;
    }).map((element,index)=>{
        return "$"+element;
    })
);      //[ '$10', '$20', '$30', '$40', '$50' ]



console.log(
    [1,2,3,4,5].filter((element,index)=>{
        return element>=3;
    })
);          //[ 3, 4, 5 ]


console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element * 100;
    }).filter((element,index)=>{
        return element<=200;
    })
);      //[ 100, 200 ]



console.log(
    [1,2,3,4,5].reduce((accumlator,element)=>{
        return accumlator+element;
    })
);          //15


console.log(
    [10,20,30].reduce((accumlator,element)=> accumlator+element, 10)
);      //70


console.log(
    [1,2,3,4,5].map((element,index)=>{
        if(index == 0){
            return element*10;
        }else{
            return element*20;
        }
    }).filter((element,index)=>{
        return element <= 100;
    }).reduce((accumlator,element)=> accumlator+element, 100 )
);          //390




//indexOf()














































