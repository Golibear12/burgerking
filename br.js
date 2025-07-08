var ty = document.querySelectorAll(".toy");
var h = document.querySelectorAll(".baner h1");
var tl = gsap.timeline();

function banerani() {
    tl
        .from(ty[0], { x: 400, opacity: 0, rotation: 360, ease: "expo", duration: 1 })
        .from(h[0], { x: 50, opacity: 0, ease: "expo", duration: 1 })
        .from(ty[1], { x: 20, opacity: 0, rotation: 360, ease: "expo", duration: 1 })
        .from(h[1], { x: 400, opacity: 0, ease: "expo", duration: 1 }, "a")
        .from(ty[2], { x: 400, ease: "expo", duration: 1 }, "a")
        .from(ty[2], { rotation: 360, ease: "expo", duration: 1 });
}
banerani();

    


// Banner animation ended

var aim = [];
const fi = {
    ci: 0,
    mi: 450
};
var count = 0;

const can = document.querySelector("canvas");
const ctx = can.getContext("2d");


function loadim(v, j) {
    if (v >= 0 && v <= j) {
        const lm = aim[v];
        can.width = window.innerWidth;
        can.height = window.innerHeight;
        const scaleX = can.width / lm.width;
        const scaleY = can.height / lm.height;
        const scale = Math.max(scaleX, scaleY);
        const nw = lm.width * scale;
        const nh = lm.height * scale;
        const ofsx = (can.width - nw) / 2;
        const ofsy = (can.height - nh) / 2;

        ctx.clearRect(0, 0, can.width, can.height);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(lm, ofsx, ofsy, nw, nh);
        fi.ci = v;
        console.log(v);
    }
}
var tu=[]
function perim(a, b) {
    for (let i = 1; i <= b; i++) {
        const ul = `./htyu/frame_${i.toString().padStart(4, "0")}.jpeg`;
        const img = new Image();
        img.src = ul;
        img.onload = () => {
            count++;
            var q = Math.floor(count*100/fi.mi)
            if(q in tu){
                
                // console.log("q in tu")

            }
            else{
                tu.push(q)
                // console.log(tu)
            }

           
           console.log(q)
            


            if (count === b && q===100) {
                console.log("all load")
                
                loadim(a, b);
                startani();
                
                
            }
        };
        aim.push(img);
    }
    console.log(aim);
}

perim(fi.ci, fi.mi);
var dm=document.querySelectorAll(".disim");
var da=document.querySelectorAll(".disab");

function startani() {
    gsap.registerPlugin(ScrollTrigger);

    var tg = gsap.timeline({
        scrollTrigger: {
            trigger: ".frame",
            start: "top 0%",
            end: "bottom bottom",
            scrub: 2,
            markers: false
        }
    });
    function updata(index) {
        return{
         ci:index,
         ease:"linear",
         onUpdate: () => {
         loadim(Math.floor(fi.ci),fi.mi);
         }}
     }
     tg
     .to(fi,updata(50),"a")
     .from(dm[0],{display:"block",opacity:1},"a")
     .from(dm[0],{x:-600,display:"block",opacity:1},"a")
     .from(da[0],{display:"block",opacity:1},"a")
     .from(da[0],{x:600,display:"block",opacity:1},"a")
     .to(dm[0],{delay:0.6,display:"none",x:-700},"a")
     .to(da[0],{delay:0.6,display:"none",x:700},"a")

     .to(fi,updata(100),"b")
     .from(dm[1],{display:"block",opacity:1},"b")
     .from(dm[1],{x:-600,display:"block",opacity:1},"b")
     .from(da[1],{display:"block",opacity:1},"b")
     .from(da[1],{x:600,display:"block",opacity:1},"b")
     .to(dm[1],{delay:0.67,display:"none",x:-700},"b")
     .to(da[1],{delay:0.67,display:"none",x:700},"b")

     .to(fi,updata(150),"c")
     .from(dm[2],{display:"block",opacity:1},"c")
     .from(dm[2],{x:-600,display:"block",opacity:1},"c")
     .from(da[2],{display:"block",opacity:1},"c")
     .from(da[2],{x:600,display:"block",opacity:1},"c")
     .to(dm[2],{delay:0.67,display:"none",x:-700},"c")
     .to(da[2],{delay:0.67,display:"none",x:700},"c")

     .to(fi,updata(180),"a1")
     .from(".heading1",{display:"block",opacity:1},"a1")
     .from(".heading1",{x:-1200,display:"block",opacity:1},"a1")
     .from(".heading2",{display:"block",opacity:1},"a1")
     .from(".heading2",{x:1200,display:"block",opacity:1},"a1")
     .to(".heading1",{delay:0.67,display:"none",x:-700},"a1")
     .to(".heading2",{delay:0.67,display:"none",x:700},"a1")

     


     .to(fi,updata(320),"d")
     .from(dm[3],{display:"block",opacity:1},"d")
     .from(dm[3],{x:-600,display:"block",opacity:1},"d")
     .from(da[3],{display:"block",opacity:1},"d")
     .from(da[3],{x:600,display:"block",opacity:1},"d")
     .to(dm[3],{delay:0.67,display:"none",x:-700},"d")
     .to(da[3],{delay:0.67,display:"none",x:700},"d")

     .to(fi,updata(330),"e")
     .to(".sector",{display:"block",scale:4,borderRadius:12/(1.618*4),opacity:0.6,ease:"expo"},"e")

     


    
     
     
         
   
     
}
window.addEventListener("resize",()=>{
    loadim(Math.floor(fi.ci));
}) 

    
    
   
    

