<template>
    <ul class="category-list">
        <CategoryRow text="Dashboard" icon="el-icon-s-grid" routeName="dashboard" />
        <CategoryRow text="Data" icon="el-icon-notebook-2" routeName="data" />
    </ul>
</template>

<script>
import CategoryRow from '@/components/sidebar/CategoryRow.vue';

export default {
  components: {
    CategoryRow,
  },
};
</script>

<style scoped>
    .category-list {
        margin-top: 4vw;
    }
    .router-link-active {
        font-weight: 700;
    }
</style>
