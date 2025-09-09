
// const manageSpinner = (status)=> {
//     if(status==true){
//         document.getElementById("spinner").classList.remove('hidden');
//         document.getElementById("word-container").classList.add('hidden');
//     }
//     else{
//         document.getElementById("word-container").classList.remove('hidden');
//         document.getElementById("spinner").classList.add('hidden');
//     }
// };



const cartContainer = document.getElementById('cart-container')
     cartContainer.innerHTML = "";
     let total = 0;
     let cartItems = {};
const addCart = (name,price) => {
    if (cartItems[name]) {
        cartItems[name].qty += 1;
    } else {
        cartItems[name] = { price: price, qty: 1 };
    }
     total += price;
    loadCart();
};

const loadCart = () => {
    cartContainer.innerHTML = "";

    for (let item in cartItems) {
    const { price, qty } = cartItems[item];
    const cartDiv = document.createElement('div')
    cartDiv.innerHTML = `
                    <div class="flex justify-between items-center bg-[#F0FDF4] p-1 rounded-xl my-2 ">
                        <div>
                            <h3 class="font-bold">${item}</h3>
                            <p>৳<span>${price} * ${qty} </span></p>
                        </div>
                        <div><button onclick="removeItem('${item}')"><i class="fa-solid fa-xmark"></i></button></div>
                    </div> 
                `;
    cartContainer.append(cartDiv)
};
document.getElementById("total").innerText = total;
};

const removeItem =(name)=> {
    if(cartItems [name]){
        cartItems[name].qty -= 1;
        total -= cartItems[name].price;
    if(cartItems[name].qty === 0){
        delete cartItems[name]
     }
    
    }
loadCart();
}

const loadCategories = (id) => {
      
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.categories));
};

loadCategories()

const lodeAllCard = () => {
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
        .then(res => res.json())
        .then((data) => displayPlantsCard(data.plants))
}

const plantBtn =document.getElementById('all-plants').addEventListener('click', lodeAllCard);
 window.onload = () => lodeAllCard();

 const loadPlantDetail = async(id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    console.log(url);
    const res = await fetch(url);
    const details = await res.json();
    console.log(details)
    displayPlantDetail(details.plants);
};

const displayPlantDetail = (plant) =>{
    console.log(plant)
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
                     <div class="card bg-base-100  shadow-sm p-3">
                    <div class="">
                        <img class="rounded-sm w-full" src="${plant.image}"
                            alt="Shoes" />
                    </div>
                    <div class="">
                        <h2 class=" font-bold text-4xl card-title">${plant.name}</h2>
                        <p class="text-xl font-medium ">${plant.description}</p>
                    </div>
                    <div class="flex justify-between m-2">
                        <p class="bg-[#DCFCE7] px-2 py-1 rounded-xl text-[12px]">${plant.category}</p>
                        <p class="font-bold">৳ <span>${plant.price}</span></p>
                    
                </div>
    
    `;
     document.getElementById('plant_modal').showModal();
}  ;
const loadPlantsCard = (id) => {
   const url = `https://openapi.programming-hero.com/api/category/${id}`
    //console.log(url)
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            removeActive()
            const clickBtn = document.getElementById(`category-btn-${id}`)
       
        clickBtn.classList.add("active");
         //plantBtn.classList.add('active');
            displayPlantsCard(data.plants)
        })
}

const removeActive = ()=> {
    const lessonButtons = document.querySelectorAll(".category-btn")
    //console.log(lessonButtons)
    lessonButtons.forEach((btn)=> btn.classList.remove("active"));
}

const displayPlantsCard = (plants) => {
    
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    for (let plant of plants) {

        const card = document.createElement('div')
        card.innerHTML = `
                <div class="card bg-base-100  shadow-sm p-3">
                    <div class="">
                        <img class="rounded-sm h-[156px] w-full" src="${plant.image}"
                            alt="Shoes" />
                    </div>
                    <div class="">
                        <h2 onclick="loadPlantDetail(${plant.id})" class="card-title">${plant.name}</h2>
                        <p class="text-[10px]">${plant.description}</p>
                    </div>
                    <div class="flex justify-between m-2">
                        <p class="bg-[#DCFCE7] px-2 py-1 rounded-xl text-[12px]">${plant.category}</p>
                        <p class="font-bold">৳ <span>${plant.price}</span></p>
                    </div>
                    <div class="dropdown-content bg-[#15803D] text-white font-medium text-[16px]  rounded-2xl mt-2 w-[100%] text-center py-1 px-2">
                        <button onclick= "addCart('${plant.name}',${plant.price})" class="" >Add to Cart</button>
                    </div>
                </div>
        
        `;
        cardContainer.append(card);
    }
 manageSpinner(false)
}

const displayCategory = (categories) => {
    const categoryContainer = document.getElementById('category-container')
    categoryContainer.innerHTML = "";
    for (let category of categories) {

        const categoryDiv = document.createElement('div')
        categoryDiv.innerHTML = `
                    <ul class=" dropdown-content hover:bg-[#15803D] hover:text-white font-medium text-[16px]  rounded-sm mt-2 w-[100%] py-1 px-2">
                        <li>
                        <button id="category-btn-${category.id}" class="category-btn"onclick= "loadPlantsCard(${category.id})" >${category.category_name}</button>
                        </li>
                    </ul>

    `;
        categoryContainer.append(categoryDiv)
    }
   
};
