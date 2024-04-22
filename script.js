var products=[
    {name:"Rolex Submariner",headline:"126613LB", price:"9,100", image:"https://images.unsplash.com/photo-1639006570490-79c0c53f1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvbGV4fGVufDB8fDB8fHww"},
    {name:"Rolex Daytona",headline:"116520", price:"20,500", image:"https://images.unsplash.com/photo-1526045431048-f857369baa09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Rolex Day-Date 40",headline:"228235", price:"32,000", image:"https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Rolex Sea Dweller",headline:"126603", price:"16,073", image:"https://5.imimg.com/data5/SELLER/Default/2022/9/DX/FQ/SU/153642188/rolex-sea-dweller-watch-500x500.jpg"},
    {name:"Rolex Explorer",headline:"216570", price:"15,000", image:"https://www.bobswatches.com/rolex-blog/wp-content/uploads/2017/07/Rolex_Explorer_216570-5D3_9665-2-Edit.jpg"}
    
]

var popularProducts=[
    {name:"The Air King", headline:"For the Heights", price:"10,700", image:"https://www.bobswatches.com/rolex-blog/wp-content/uploads/2017/07/Rolex_Explorer_216570-5D3_9665-2-Edit.jpg"},
    {name:"The Submariner ", headline:"Dive into the Depths", price:"10,110", image:"https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1708407067/rolexcom/collection/family-pages/professional-watches/submariner/family-page/roller/professional-watches-submariner-bezel-roller-m126618ln-0002-2108jva-001"},
    {name:"The Deepsea", headline:"Explore the new", price:"23,000", image:"https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_800/v1711297913/rolexcom/new-watches/2024/watches/new-rolex-deepsea/new-watches-2024-rolex-deepsea-gold-case-m136668lb-0001_2401uf_003"},
    {name:"Oyester Perpetual", headline:"The new in 2024", price:"17,900", image:"https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1600/v1708403295/rolexcom/collection/family-pages/classic-watches/oyster-perpetual/family-page/classic-watches-oyster-perpetual-optimal-protection-tpieters20tl-009"}
]

function showProducts(){
    var clutter="";
products.forEach(function(product,index){
    clutter+=`<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
    <img class="w-full h-full object-cover"src="${product.image}"/ > 
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                <h4 class="font-semibold mt-2">$ ${product.price}</h4>
            </div>
            <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
            data-index="${index}" class="add ri-add-line"></i></button>
        </div>
    </div>
</div>`

document.querySelector(".products").innerHTML=clutter;
})
}

function showPopular(){
    var clutter="";
    popularProducts.forEach(function(popularItem){
        clutter+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${popularItem.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${popularItem.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popularItem.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">$ ${popularItem.price}</h4>
        </div>
    </div>`
    })

    document.querySelector(".populars").innerHTML=clutter;
}
var cart=[];

function addToCart(){
    document.querySelector(".products").addEventListener("click",function(details){
        if(details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index]);
            
        }
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click",function(){
        document.querySelector(".cartexpnd").style.display="block";
    
        var clutter="";
        cart.forEach(function(prod,index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${prod. image}" />
            </div>
                <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                </div>
            </div>`
        })
            
    
        document.querySelector(".cartexpnd").innerHTML=clutter;
    })

    

}

// function blurEFF(){
//     document.querySelector(".carticon").addEventListener("click",function(){
//         document.querySelector(".cartexpnd").style.display="none"
//     })
// }

showCart();
// blurEFF();
addToCart();
showPopular();
showProducts();