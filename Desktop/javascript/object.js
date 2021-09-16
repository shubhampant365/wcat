// let person = {
//     "name" : "Shubham",
//     age: 20,
//     0:"Hello"
// }
// for(let i = 0 ; i<Object.keys(person).length;i++){
//     console.log(person[Object.keys(person)[i]]);
// }
// person.gender= "male";
// person["Chim"]= 752;
// console.log(person["name"]);
// console.log(person.name);
// console.log(person[0]);

// console.log(person);


// let obj={
//     1:  "Hello1",
//     2:  "Hello2"
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));


// let obj = {
//     obj1:{
//         "obj1.1":"Suar"
//     },
//     obj2:{
//         "obj2.1":"Jake",
//         "obj2.2":"KIM"
//     }
// }
// // for(let key in obj){
// //     console.log(typeof(obj[key]));
// // }

// for(let key in obj){
//     console.log(key);
//     if(typeof(obj[key])=="object"){
//         for(let key2 in obj[key]){
//             console.log(key2);
//         }
//     }
// }



// let obj ={
//     obj1:{
//         "obj1.1":{
//             "obj1.1.1":{
//                 "obj1.1.1.1":"james"
//             }
//         }
//     },
//     obj2:{
//         "obj2.1":{
//             "obj2.1.1":"wander",
//             "obj2.1.2":"garder"
//         }
//     }
// }

// function printkey(obj){
//     for(let key in obj){
//         console.log(key)
//         if(typeof(obj[key])=="object"){
//             printkey(obj[key]);
//         }
//     }
// }
// printkey(obj);

let obj ={
    obj1:{
        "obj1.1":"hello1.1"
    },
    obj2:{
        "obj2.1":"hello2.1",
        "obj2.2":{
            "obj2.2.1":"hello2.2.1"
        }
    }
}