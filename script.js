//.............................................<<<<...DOM...>>>>...................................................

//html document are convert into object that module is called document object model (DOM).
// window is parent 
console.log(document.documentElement)//html module 
console.log(document.body.childNodes);//body module.

// select tag 
// const heading= document.getElementsByTagName('h1');
// console.log(heading[0].innerText);

// select classname
// const heading1=document.getElementsByClassName('classname');
// console.log(heading1[0].innerText);

//innerText and innerHTML
//innerText=> in that only gives the text part
//innerHTML=> in this property we get the hole html part.
// let data=document.getElementById('main').innerText;
// let data1=document.getElementById('main').innerHTML;
// console.log(data);
// console.log(data1);


// ..............onclick event .....................
// function changebutton(){
//      let click =document.getElementById('main');
//      click.innerText='MERN';
//      click.style.color="red";
//      click.style.backgroundColor="black";
// }

// ...........creating new element using HTML  =>>
// function clicktochange(){
//     const change=document.getElementById('name');
//     const todo= document.createElement('h1');
//     todo.innerText= change.value;
//     todo.setAttribute("class" , "tododiv");
//     document.getElementById("data").appendChild(todo);
    
// }

//  document.querySelector("button").onclick=function(){
//     let a=confirm("are u sure");
//     if(a){
//         const h1=document.querySelector("h1");
//         h1.style.display="none";
//     }
    
// }

// const img=document.querySelector("img");
// document.querySelector(".on").onclick=function(){
//     img.setAttribute("src","./bulb_on.jfif");
// }
// document.querySelector(".off").onclick=function(){
//      img.setAttribute("src","./bulb of.jfif");
// }

// drum
document.querySelector(".drum").onclick=function(){
    const drum=new Audio("drumsound.mp3");
    drum.play();
}
