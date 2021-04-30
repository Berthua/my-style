<template>
  <div class="test-container">
    <Page
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Page from "./"
export default {
  components: {
    Page
  },
  data() {
    return {
      current: 1,
      total: 300
    }
  },
  methods: {
    handlePageChange(newPage) {
      return this.current = newPage
    }
  },
  mounted() {
    // console.log(this.$event);

  }
}
</script>

<style scoped lang='less'></style>