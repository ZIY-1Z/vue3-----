<template>
   <div id="app">
    <!-- 导航栏组件 -->
    <Navbar />
    
    <!-- 主要内容区域 - 添加容器并设置顶部内边距 -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
  <Index />
  <!-- <router-view></router-view> -->
</template>

<script>
  import Navbar from './views/navbar/navbar.vue'
export default {
  name: 'App',
    components: {
    Navbar
  }
}
</script>

<style>
.main-content {
  /* 导航栏高度 = 上下内边距(20px+20px) + 文字高度，80px 是安全值 */
  padding-top: 80px;
}
body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #e6f2ff; /* 浅蓝色背景 */
            color: #333;
        }
html {
  font-family: "Work Sans", Sans-serif;
  font-size: 14px;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
  border: 0;
}
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
a:link,
a:visited {
  color: #333;
  text-decoration: none;
}
img {
  border: none;
  display: block;
}
ol,
ul,
li {
  list-style: none;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
</style>
