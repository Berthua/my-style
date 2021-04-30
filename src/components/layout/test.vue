<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边区域</div>
      </template>
      <div class="main">
        主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏
      </div>
      <!-- <template #right>
        <div class="right">右侧区域</div>
      </template> -->
    </Layout>
  </div>
</template>

<script>
import Layout from "./"
export default {
  components: {
    Layout
  }
}
</script>

<style scoped lang='less'>
.test-container {
  width: 60%;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
  white-space: nowrap;
}
.left {
  width: 200px;
  height: 100%;
  background-color: red;
}

.main {
  height: 100%;
  width: 100%;
  background-color: skyblue;
}
.right {
  width: 200px;
  height: 100%;
  background-color: greenyellow;
}
</style>