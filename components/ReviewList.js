app.component('review-list', {

    // Props to be used by the component
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },

    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>

        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave {{ review.rating }} stars to this product:
                <br/>
                "{{ review.review }}"
                <br/>
                {{ review.name }} {{ review.recommend ? "would happily recommend it" : "wouldn't recommend the product not even if they got paid to do so"}}
            </li>
        </ul>

    </div>
    `


})