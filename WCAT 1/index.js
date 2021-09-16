#!/usr/bin/env node

const fs = require("fs");
let arguments = process.argv.slice(2);

let flags = [];
let filenames = [];
let secondArguments = [];


for(let i of arguments){
    if(i[0]=="-"){
        flags.push(i);
    }
    else if(i[0]=="$"){
        secondArguments.push(i.slice(1));
    }
    else{
        filenames.push(i);
    }
}


for(let file of filenames){
    let fileData = fs.readFileSync(file,"utf-8");
    for(let flag of flags){
       
       
        if(flags=="-rs"){
            fileData = removeAll(fileData," ");
        } 
        
        if(flag == "-rn"){
            fileData = removeAll(fileData,"\r\n");
        }
        
        if(flag == "-rsc"){
          for(let secondArgument of secondArguments){
              fileData = removeAll(fileData,secondArgument);
          }
        }
        if(flag=="-s"){
          let data =  addSequence(fileData);
            console.log(data);
        }
        if(flag=="-sn"){
           let data =  addSequenceTnel(fileData);
           console.log(data);
        
        }
        if(flag=="-rel"){
            let d = removeex(fileData);
            for(let i= 0 ; i<d.length;i++){
                console.log(d[i]);

            }
        }
    }
    console.log(fileData);
    
}

function removeAll(string, removeData){
    return string.split(removeData).join("");
}

function addSequence(content){
    let contentArr = content.split("\r\n");
    for(let i = 0; i<contentArr.length;i++){
        contentArr[i] = [i+1]+" " + contentArr[i];
    }
    return contentArr;
}


function addSequenceTnel(content){
    let contentArr = content.split("\r\n");
    let count = 1;
    for(let i = 0; i<contentArr.length;i++){
        if(contentArr[i]!=""){
        contentArr[i] = count+" " + contentArr[i];
        count++;
    }
}
    return contentArr;
}
function removeex(fileData){
    let contentArr = fileData.split("\r\n");
    let data =[];
    for(let i = 1 ; i <contentArr.length ;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i] = null;
        }
        if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i] = null;
        }
    }
    for(let i = 0;i<contentArr.length;i++ ){
        if(contentArr[i]!=null){
            data.push(contentArr[i]);
        }
    }
    return data;

}