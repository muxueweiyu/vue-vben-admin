<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { getAllLawApi } from '#/api/index';

function getData() {
  getAllLawApi().then((res) => {
    console.log(res);
  });
}
const loading = ref(true);

onMounted(() => {
  getData();
});
setTimeout(() => {
  loading.value = false;
}, 1500);
</script>
<template>
  <div class="law_monitor flex h-full w-full flex-col p-4"></div>
</template>
