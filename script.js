const menu = document.getElementById("menu");
const endMenu = document.getElementById("endMenu");
const meuf = document.getElementById("meuf");
const menu_2 = document.getElementById("menu_2");
const menu_closer = document.getElementById("menu_closer");
const blockableElements = document.querySelectorAll("[data-blockable]");
const ckicl = document.getElementById("ckicl");
blockableElements.forEach(element => {
   element.style.transition = ".5s";
});
let wif = meuf.style.width;
menu_2.addEventListener("click", function () {
   if (menu.style.opacity === "1") {
      menu.style.opacity = "0";
      menu_closer.style.opacity = "1";
      meuf.style.left = "0";
      endMenu.style.left = "0";
      ckicl.style.display = "flex";
      document.body.style.overflowY = "hidden";
      blockableElements.forEach(element => {
        
         element.style.opacity = "0.5";
         element.style.filter = "blur(3px)";
         meuf.style.pointerEvents = "";
      });



   } else {
      endMenu.style.left = "-90%";
      menu.style.opacity = "1";
      menu_closer.style.opacity = "0";
      meuf.style.left = "-90%";
      ckicl.style.display = "none";
      blockableElements.forEach(element => {
         element.style.pointerEvents = "";
         element.style.opacity = "1";
         element.style.filter = "";
      });
      document.body.style.overflowY = "scroll";

   }
});
ckicl.addEventListener("click", function () {
   endMenu.style.left = "-90%";
   menu.style.opacity = "1";
   menu_closer.style.opacity = "0";
   meuf.style.left = "-90%";
   ckicl.style.display = "none";
   blockableElements.forEach(element => {
      element.style.pointerEvents = "";
      element.style.opacity = "1";
      element.style.filter = "";
   });
   document.body.style.overflowY = "scroll";
   meuf.style.overflowY = ""; 

});