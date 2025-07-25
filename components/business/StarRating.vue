<template>
    <div class="flex mr-2">
        <i
            v-for="(star, index) in starArray"
            :key="index"
            :class="starClasses(star)"
        ></i>
    </div>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
    score: {
        type: Number,
        required: true,
        validator: value => value >= 0 && value <= 5
    },
    className: {
        type: String,
        default: ""
    }
});

const displayScore = computed(() => props.score.toFixed(1));

const starArray = computed(() => {
    const stars = [];
    const fullStars = Math.floor(props.score);
    const hasHalfStar = props.score - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) stars.push('full');
    if (hasHalfStar) stars.push('half');
    while (stars.length < 5) stars.push('empty');

    return stars;
});

const starClasses = (type) => {
    const base = `far`;
    switch (type) {
        case 'full':
            return `${base} fas fa-star text-yellow-400`;
        case 'half':
            return `${base} fa-star-half-alt text-yellow-400`;
        default:
            return `${base} fa-star text-gray-600`;
    }
};
</script>
