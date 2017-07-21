export const sourcecodeA = `<template>
     <vm-back-top></vm-back-top>
</template>
<script>
    export default {
        
    }
</script>`

export const sourcecodeB = `<template>
  <vm-back-top :bottom="100" :duration="1000" :timing="'ease'">
    <div class="top">返回顶端</div>
  </vm-back-top>
</template>
<script>
  export default {
   
  }
</script>
<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>`

export const sourcecodeC = `<template slot="source">
  <vm-back-top :height="100" :bottom="300" :duration="500" :options="options"></vm-back-top>
</template>

<script>
  export default {
    data () {
      return {
       options:[
              {
                  id:'back-top-title',
                  label:'BackTop回到顶部'
              },
              {
                  id:'gai-shu',
                  label:'概述'
              },
              {
                  id:'dai-ma-shi-li',
                  label:'代码示例'
              }
          ],
      }
    }
  }
</script>`



