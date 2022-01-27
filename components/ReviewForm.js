app.component('review-form', {

    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">

        <h3>Leave a review</h3>

        <!-- Name -->
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <!-- Review -->
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>

        <!-- Rating --> 
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <label for="recommend">Would you recommend this product?</label>
        <select id="recommend" v-model="recommend">
            <option>Yes</option>
            <option>No</option>
        </select>

        <input class="button" type="submit" value="Submit">
    </form>`,

    data(){
        return {
            name: '',
            review: '',
            rating: null,
            recommend: null
        }
    },

    methods: {

        // Form Submission
        onSubmit(){

            if(this.name == ''|| this.review == '' || this.rating == null || this.recommend == null) {
                alert('Review is incomplete. Please fill out every field')
                return
            }

            // Declaring an object to hold the data
            let productReview ={
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: ( this.recommend == 'Yes' ? true : false )
            }

            // Emitting the object with the data
            this.$emit('review-submitted', productReview)

            // Setting the data to empty
            this.name = ''
            this.review = ''
            this.rating = null
            this.recommend = null
        }
    }
})