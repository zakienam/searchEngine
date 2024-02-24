const carName = ["Fortuner","Tata","Toyota","Mahindra","Ford","Range Rover",];

carName.forEach((element) =>{
     const productItem = document.getElementById("productItem");

     const newProduct = document.createElement("div")
     newProduct.setAttribute("class", "product")

     newProduct.setAttribute("onclick" , addTwoCart())

     const heading = document.createElement("h1")
     heading.innerText = element;

     newProduct.appendChild(heading)
     productItem.appendChild(newProduct)
});  

function takingInputValue(){
  // console.log("Hello");
     const inputValue = document.getElementById("inputBox").value.toUpperCase();
      // console.log(inputValue); 
      const productChildren = document.querySelectorAll(".product")

      for(let i=0;i<carName.length;i++){
        let allProduct = productChildren[i].innerText.toUpperCase();
        console.log(allProduct.indexOf(inputValue));
        if(allProduct.indexOf(inputValue) > -1){
            productChildren[i].style.display="flex";
        }
        else{
            productChildren[i].style.display="none";
        }

      }
}


function addCart(){
  console.log("Hello World!");
}
function addtwoCart(){
  
}