const navbar = document.querySelector('nav')
const logo = document.querySelector('#logoimage');

window.addEventListener('scroll',()=>{

        if(window.scrollY >200){
            navbar.style.minHeight = navbar.style.minHeight+20
            navbar.style.backgroundColor = "rgb(253, 253, 253)";
            logo.setAttribute('src','./static/images/abb.png')
        }
        else{
            navbar.style.backgroundColor = "transparent";
            logo.setAttribute('src','./static/images/fullname.png')

        }
})


if(window.innerWidth<800){
    document.body.style.display = "none";

   setTimeout(()=>{
    alert("please use your laptop")
   },2000)
    
}