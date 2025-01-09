
let messageBox=document.querySelector("#prediction");
const parent = document.querySelector('.celebrities');

function showMessage(message){
    console.log(message.class)

    messageBox.innerHTML=`<h2>This is ${message.class}</h2>`;
    if (message.class=="lionel_messi"){
        let secondImg = parent.children[0].querySelector('img'); // Target the second div's img
        secondImg.classList.add('glow_up');
        setTimeout(()=>{
            secondImg.classList.remove('glow_up');
            console.log("hi")
        },2000);

        

        
    }
    else if (message.class=="maria_sharapova"){
        const secondImg = parent.children[1].querySelector('img'); // Target the second div's img
        secondImg.classList.add('glow_up');
        setTimeout(()=>{
            secondImg.classList.remove('glow_up');
            console.log("hi")
        },2000);
        
    }
    else if (message.class=="roger_federer"){
        const secondImg = parent.children[2].querySelector('img'); // Target the second div's img
        secondImg.classList.add('glow_up');
        setTimeout(()=>{
            secondImg.classList.remove('glow_up');
            console.log("hi")
        },2000);
        
    }
    else if (message.class=="serena_williams"){
        const secondImg = parent.children[3].querySelector('img'); // Target the second div's img
        secondImg.classList.add('glow_up');
        setTimeout(()=>{
            secondImg.classList.remove('glow_up');
            console.log("hi")
        },2000);
        
    }
    else if (message.class=="virat_kohli"){
        const secondImg = parent.children[4].querySelector('img'); // Target the second div's img
        secondImg.classList.add('glow_up');
        setTimeout(()=>{
            secondImg.classList.remove('glow_up');
            console.log("hi")
        },2000);
        
    }

}


let images_list=document.querySelector(".images_list")
let img_path=[];
let images_number=21
var i=0;
while(i<=images_number){
img_path.push(`../assets/new_list/random_image${i}.jpg`);
i++;
}
console.log(img_path)


function create_image_list(){
    img_path.forEach(src => {
        let img=document.createElement('img');
        img.src=src;
        img.alt="Random Celebrity Image";
        
        images_list.appendChild(img);

    });
}
create_image_list();







Dropzone.autoDiscover=false;
function init(){
    let dz = new Dropzone("#dropzone",{
        url:"/",
        maxFiles:1,
        addRemoveLinks:true,
        dictDefaultMessage:"Drop an Image here!",
        autoProcessQueue:false
    });

    dz.on("addedfile",function(){
        if(dz.files[1]!=null){
            dz.removeFile(dz.files[0]);
        }

    });




dz.on("complete",function(file){

let imageData=file.dataURL;
var url="http://127.0.0.1:5000";

$.post(url,{image_data:imageData},function(data,status){
console.log(data);
showMessage(data);

});

});

$("#submitBtn").on('click',function(e){
dz.processQueue();
});
}
$(document).ready(function(){
console.log("ready");
init();
});
