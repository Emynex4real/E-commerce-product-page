const cartNumber = document.querySelector('.number');
const reduce = document.querySelector('.reduce');
const increase = document.querySelector('.add');
const notification = document.querySelector('.notification');
const cart = document.querySelector('.cart');
const cartPrice = document.querySelector('.cart-price');
const cartContents = document.querySelector('.cart-big-content');
const cartIcon = document.querySelector('.cart-icon');
const cartPopup = document.querySelector('.cart-popup');
const emptyCart = document.querySelector('.cart-is-empty');


let number = 0;
reduce.addEventListener('click', ()=>{
    number--;
    if(number < 0){
        number = 0;
    }
    cartNumber.textContent = number
})
increase.addEventListener('click', ()=>{
    number++;
    if(number > 10){
        number = 10;
    }
    cartNumber.textContent = number;
})

cart.addEventListener('click', ()=>{
    if(number > 0){
        cartContent(number);
        notification.textContent = number;
        number = 0;
        cartNumber.textContent = number;

    }
})

function cartContent (number){



    let finalPrice = Math.round(125.00 * number).toFixed(2);
    cartContents.innerHTML = `
    <div class="cart-big-content">
        <div class="cart-content">
            <div class="cart-content-image">
                <img src="images/image-product-1-thumbnail.jpg" alt="">
            </div>
            <div class="name-price">
                <p class="name">Fall Limited Edition Sneakers </p>
                <p class="cart-price">$125.00 x ${number} <strong>$${finalPrice}</strong></p>
            </div>
            <div class="delete-cart-content">
                <img src="images/icon-delete.svg" alt=""  class="delete-cart">
            </div>
        </div>
        <button class="checkout">Checkout</button>
        </div>`
    // cartPrice.textContent = `$125.00 x ${number} `;

    // const finalPriceElement = document.createElement('span');
    // finalPriceElement.classList.add('bold');
    // finalPriceElement.textContent = `$${finalPrice}`;

    // cartPrice.appendChild(finalPriceElement);
   const cartContentBox = document.querySelector('.cart-content')
    const deleteCart = document.querySelector('.delete-cart');

    deleteCart.addEventListener('click', ()=>{
        cartContentBox.style.opacity = '0';
        setTimeout(() => {
            cartContents.innerHTML = 
            `<div class="cart-is-empty">
            <p class="cart-empty">Your cart is empty</p>
            </div>`
        }, 1000);
        notification.textContent = '';

        // console.log('hello')
    })


    
    
    
}
cartIcon.addEventListener('click', ()=>{
    cartPopup.classList.toggle('activate')
    console.log('hello');
    
    
})

const previewImage = document.querySelectorAll('.preview-image');
const image = document.querySelector('.image');
const displayPreview = document.querySelector('.hover-preview-container')


const imageBox = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"]
// console.log(image.src);

previewImage.forEach(preview =>{
    preview.addEventListener('click', (e)=>{
        displayPreview.style.display = 'flex';
        const dataId = e.currentTarget.dataset.id;
        image.src = imageBox[dataId - 1]
        console.log(image.src)
        console.log(e.currentTarget.dataset.id);
        update(dataId - 1)

        
    })
    
})

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', ()=>{
       displayPreview.style.display = 'none';

})

const next = document.querySelector('.next-btn');
const previous = document.querySelector('.previous-btn');
console.log(previewImage.length - 1);

function update(previewNumber){
    // let previewNumber = 0;
    next.addEventListener('click', ()=>{
        previewNumber++;
        if(previewNumber > previewImage.length - 1){
            previewNumber = 0;
            image.src = imageBox[previewNumber];
            // console.log(previewNumber);
            
        } else{
            image.src = imageBox[previewNumber]
        }
        console.log(previewNumber);
        console.log(image.src);
        // console.log(previewImage.length);
        
        
    })
    previous.addEventListener('click', ()=>{
        previewNumber--;
        if(previewNumber < 0){
        previewNumber = previewImage.length - 1
        // console.log(previewNumber);
    } 
    image.src = imageBox[previewNumber];
        console.log(previewNumber);
        // console.log(image.src);
        // console.log(previewImage.length);
     previewThumbnails(previewNumber)
        
        
    })
}


const previewThumbnailsImage = document.querySelectorAll('.preview-images')
     function previewThumbnails(previews){
        console.log(previews);

        }
        
        previewThumbnailsImage.forEach(preview =>{
            preview.addEventListener('click', (e)=>{
                console.log(preview)
                let focusOn = e.currentTarget.dataset.id - 1;
                image.src = imageBox[focusOn];
                preview.classList.add('thumbnail-active')
                previewThumbnails(focusOn);

            
        })
    })
    