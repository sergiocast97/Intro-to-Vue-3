const app = Vue.createApp({
    data() {
        return {

            // Added Selected Varianr Property
            selectedVariant: 0,

            // On Sale
            onSale: true,

            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
        }
    },
    methods: {

        addToCart() {
            this.cart += 1
        },

        // Update the Selected Variant
        updateVariant(index) {
            this.selectedVariant = index
            console.log(index)
        }

    },
    // Computed Properties
    computed: {

        // Return the product title
        title() {
            return this.brand + ': ' + this.product
        },

        // Return the image based on the selected variant
        image(){
            return this.variants[this.selectedVariant].image
        },

        // Return the stock based on the selected variant
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        
        // Show if on sale
        sale(){
            if(this.onSale){
                return this.brand + ' ' + this.product + ' is on sale '
            }
        }
    }
})
