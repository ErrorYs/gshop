<template>
  <div class="search">
    <TopHeader :title="title" />
  <form action="#" class="search_form">
    <input type="text" placeholder="请输入商家或美食名称" name="search" class="search_input">
    <input type="submit" value="提交" name="btn" class="search_btn">
  </form>
  </div>
</template>
<script>
import TopHeader from 'components/Topheader/Topheader.vue'
export default {
  data () {
    return {
      title: '搜索'
    }
  },
  components: {
    TopHeader
  }
}
</script>
<style lang="scss" scoped>
.search {
  padding-top: 45px;
  .search_form {
    // width: 100%;
    padding: 10px;
    overflow: hidden;
    .search_input {
      width: 280px;
      height: 35px;
      background-color: #f2f2f2;
      border: 1px solid #f2f2f2;
      border-radius: 3px;
      padding-left: 5px;
      box-sizing: border-box;
      float: left;
    }
    .search_btn {
      font-size: 18px;
      height: 33px;
      border: 1px solid #02a774;
      padding:0 12px;
      border-radius: 3px;
      box-sizing: border-box;
      margin-left: 10px;
      background-color: #02a774;
      color: #fff;
      float: left;
    }
  }
}
</style>
