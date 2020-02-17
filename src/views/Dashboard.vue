<template>
  <div>
    <h1>Dashboard</h1>

    <h2 class="mt-4">ApexChart Example</h2>
    <ChartExample />

    <h1 class="mt-4">Element UI Table Example</h1>
    <TableExample />
  </div>
</template>

<script>
import ChartExample from '@/components/charts/ChartExample';
import TableExample from '@/components/tables/TableExample';

export default {
  name: 'dashboard',
  components: {
    ChartExample,
    TableExample,
  },
};
</script>
