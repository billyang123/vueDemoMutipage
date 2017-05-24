<template>
<div id="app">
	<group title="输入页面标题">
	  <x-textarea :max="200" placeholder="请输入详细描述"></x-textarea>
	</group>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Cell,Group,Divider,XTextarea } from 'vux'


export default {
  data() {
    return {
    	
    }
  },
  components: {
	Cell,Group,Divider,XTextarea
  },
  //已成功挂载，相当ready()
  mounted(){
  
  
	
  },
  //相关操作事件
  methods: {
	
	
	
      
  }
}
</script>

<style lang="less">



</style>
