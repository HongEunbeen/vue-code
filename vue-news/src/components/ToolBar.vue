<template>
  <div class="header">
    <router-link to="/News">News</router-link> |
    <router-link to="/Ask">Ask</router-link> |
    <router-link to="/Jobs">Jobs</router-link> |
    <router-link to="/User">User</router-link> |
    <router-link to="/Item">Item</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  color:white;
  background-color: green;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active {
  color: bule;
}
.header a{
  color: skyblue;
}
</style>