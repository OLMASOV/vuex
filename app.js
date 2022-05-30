let btn=document.querySelector('button')
let burger=document.querySelector('.burgermenu')
btn.addEventListener("click",()=>{
    // if(burger.classList.contains('burger')){
    //     burger.classList.remove('burger')
    //     btn.classList.remove('active')
    // }else{
    //     burger.classList.add('burger')
    //     btn.classList.add('active')
    // }
    burger.classList.toggle('burger')
    btn.classList.toggle('active')
    count=10
    let n=setInterval(function(){
        count--
        if(count==0){
            burger.style.display='none'
            clearInterval(n)
        }
        console.log(count );
    },1000)
})
let inp=document.querySelector('#parol')
let parol=document.querySelector('#show')
parol.addEventListener('click',()=>{
    // if(inp.getAttribute("type")=='password'){
    //     inp.removeAttribute('type')
    //  a= inp.setAttribute('type','text')
    //     console.log(a);
    // }else{
    //     inp.setAttribute('type','password')
    // }
})