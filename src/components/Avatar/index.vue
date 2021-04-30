<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, //url的属性必须是字符串
      required: true, //属性必传
    },
    size: {
      type: Number,
      default: 150,
    }
  }
}
</script>

<style scoped lang='less'>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>