<template>
    <span>{{text}}</span>
  </template>
  <script>
    export default {
      props: [
        'text'
      ]
    }
  </script>
  <style scoped>
    span{
      color:red;
    }
  </style>
  