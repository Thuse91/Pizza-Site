/* function Pizzor() {
  kebabcontent.style.display = "none";
  pizzacontent.style.display = "block";
  homecontent.style.display = "none";
  salladcontent.style.display = "none";
  misccontent.style.display = "none";
  review.style.display = "none";
}

function Home() {
  kebabcontent.style.display = "none";
  pizzacontent.style.display = "none";
  homecontent.style.display = "block";
  salladcontent.style.display = "none";
  misccontent.style.display = "none";
  review.style.display = "block";
}

function Kebab() {
  kebabcontent.style.display = "block";
  pizzacontent.style.display = "none";
  homecontent.style.display = "none";
  salladcontent.style.display = "none";
  misccontent.style.display = "none";
  review.style.display = "none";
}

function Sallad() {
  kebabcontent.style.display = "none";
  pizzacontent.style.display = "none";
  homecontent.style.display = "none";
  salladcontent.style.display = "block";
  misccontent.style.display = "none";
  review.style.display = "none";
}
function Misc() {
  kebabcontent.style.display = "none";
  pizzacontent.style.display = "none";
  homecontent.style.display = "none";
  salladcontent.style.display = "none";
  misccontent.style.display = "block";
  review.style.display = "none";
}

 */




function Home() {
    kebabcontent.style.opacity = "0";
    contentwrap.style.opacity = "0";
    pizzacontent.style.opacity = "0";
    salladcontent.style.opacity = "0";
    misccontent.style.opacity = "0";
    setTimeout(() => { 
        kebabcontent.style.display = "none";
        pizzacontent.style.display = "none";
        contentwrap.style.display = "none";
        salladcontent.style.display = "none";
        misccontent.style.display = "none";
        homecontent.style.display = "block";
        review.style.display = "block";   
     }, 151);
     setTimeout(() => {
        homecontent.style.opacity = "1";
        review.style.opacity = "1"; 
  }, 155);
    }

    function Pizzor() {
        kebabcontent.style.opacity = "0";
        homecontent.style.opacity = "0";
        review.style.opacity = "0"; 
        salladcontent.style.opacity = "0";
        misccontent.style.opacity = "0";
        setTimeout(() => { 
            kebabcontent.style.display = "none";
            contentwrap.style.display = "block";
            pizzacontent.style.display = "block";
            salladcontent.style.display = "none";
            misccontent.style.display = "none";
            homecontent.style.display = "none";
            review.style.display = "none";  
         }, 151);
         setTimeout(() => {
               contentwrap.style.opacity = "1";
               pizzacontent.style.opacity = "1";
         }, 155);
        }

        function Kebab() {
            homecontent.style.opacity = "0";
            review.style.opacity = "0"; 
            salladcontent.style.opacity = "0";
            misccontent.style.opacity = "0";
            pizzacontent.style.opacity = "0";
            setTimeout(() => { 
                kebabcontent.style.display = "block";
                contentwrap.style.display = "block";
                pizzacontent.style.display = "none";
                salladcontent.style.display = "none";
                misccontent.style.display = "none";
                homecontent.style.display = "none";
                review.style.display = "none";  
             }, 151);
             setTimeout(() => {
                   contentwrap.style.opacity = "1";
                   kebabcontent.style.opacity = "1";
             }, 155);
            }
        function Sallad() {
            kebabcontent.style.opacity = "0";
            homecontent.style.opacity = "0";
            review.style.opacity = "0"; 
            misccontent.style.opacity = "0";
            pizzacontent.style.opacity = "0";
            setTimeout(() => { 
                kebabcontent.style.display = "none";
                contentwrap.style.display = "block";
                pizzacontent.style.display = "none";
                salladcontent.style.display = "block";
                misccontent.style.display = "none";
                homecontent.style.display = "none";
                review.style.display = "none";  
             }, 151);
             setTimeout(() => {
                   contentwrap.style.opacity = "1";
                   salladcontent.style.opacity = "1";
             }, 155);
            }
        function Misc() {
            kebabcontent.style.opacity = "0";
            homecontent.style.opacity = "0";
            review.style.opacity = "0"; 
            salladcontent.style.opacity = "0";
            pizzacontent.style.opacity = "0";
            setTimeout(() => { 
                kebabcontent.style.display = "none";
                contentwrap.style.display = "block";
                pizzacontent.style.display = "none";
                salladcontent.style.display = "none";
                misccontent.style.display = "block";
                homecontent.style.display = "none";
                review.style.display = "none";  
             }, 151);
             setTimeout(() => {
                   contentwrap.style.opacity = "1";
                   misccontent.style.opacity = "1";
             }, 155);
            }




/* setTimeout(() => {  console.log("World!"); }, 2000); */