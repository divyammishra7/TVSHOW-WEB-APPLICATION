const form=document.querySelector("#searchform");
form.addEventListener('submit',async function(e){
e.preventDefault();
const el=document.getElementById("mydiv");
el.remove();
const l=document.createElement('DIV');
l.setAttribute("id",'mydiv');
document.body.append(l);

const text=document.querySelector(".infor");
const ii=text.value;
const search=form.elements.query.value;
// console.log(ii); 
const res= await  axios.get(`https://api.tvmaze.com/search/shows?q=${ii}`);

//    console.log(res.data[0].show.image.medium);
makeimg(res.data);
text.value="";
// const img=document.createElement('IMG');
// img.src=res.data[0].show.image.medium;
// document.body.append(img);
})
const makeimg=(show)=>{
    for(let res of show){
        if(res.show.image){
            const img=document.createElement('IMG');
img.src=res.show.image.medium;
// let x=window.matchMedia("(max-width: 480px)")
    //  if(x.matches){
    //     img.classList.add("img-fluid")
    //  }
     
     
img.classList.add("img-fluidd")

const o=document.querySelector("#mydiv");
o.append(img);


        }
    }
}
