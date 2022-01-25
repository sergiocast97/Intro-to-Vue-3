const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        // Use the emitted event to update the cart
        updateCart(id){
            this.cart.push(id)
        },
        // Remove from Cart
        removeFromCart(id){
            const index = this.cart.indexOf(id)
            if (index > -1){
                this.cart.splice(index, 1)
            }
        }
    }
})
