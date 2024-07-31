<script setup>
import { defineProps } from "vue";

const props = defineProps({
    class: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <section :class="`bg-white shadow-lg rounded-xl p-8 border border-gray-200 w-60 h-60 ${props.class}`">
        <slot></slot>
    </section>
</template>