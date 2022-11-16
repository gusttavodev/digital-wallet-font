<template>
  <NuxtLayout :name="layout"> AAA </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ["auth"] });
const layout = "auth";
</script>
