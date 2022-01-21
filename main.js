const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        
        // Add to the cart counter
        addToCart(){
            this.cart += 1
        },

        // Remove From the cart counter
        removeFromCart(){
            this.cart -= 1
        },

        // Change image when hovering color
        updateImage(variantImage){
            // The image property will be updated
            this.image = variantImage
        }
    }
})
