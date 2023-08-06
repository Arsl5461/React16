const title=document.getElementById("title")
const button=document.getElementById("button")

// button.addEventListener("mouseenter",()=>{
//    title.style.display="none"
   
// add();
// })

// const addNumbers=(a,b)=>{
//     return a+b;
// }
// const h1=document.createElement("h1")
// h1.innerHTML="Arslan Akmal"

// const add=()=>{

// }


// Array of Countries and print it on browser

const dataFunc = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      return json
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  (async ()=> {
    const data = await dataFunc();
    if (data) {
        const filteredData=data.filter((product)=>product.category==="men's clothing")
        filteredData.forEach((product)=>{
            const productName=document.createElement("h1")
            const productPrice=document.createElement("p")
            productName.innerHTML=`Product name is: ${product.title}`
            productPrice.innerHTML=`Product price is: ${product.price}`
            productName.classList.add("countryList")
            productPrice.classList.add("countryList")

        document.body.appendChild(productName)
        document.body.appendChild(productPrice)
        })     
    }
    else{
        console.log("Arslan Akmal")
    }
  })();




















