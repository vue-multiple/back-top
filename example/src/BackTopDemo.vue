<template>
  <div class="back-top-demo">
    <div class="back-top-demo__item">
      <h2 id="back-top-title">
        <a href="#back-top-title" aria-hidden="true" class="header-anchor">¶</a>
        BackTop 回到顶部
      </h2>
      <h3 id="gai-shu">
        <a href="#gai-shu" aria-hidden="true" class="header-anchor">¶</a>
        概述
      </h3>
      <p>当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。</p>
    </div>
    <div class="back-top-demo__item">
      <h3 id="dai-ma-shi-li">
        <a href="#dai-ma-shi-li" aria-hidden="true" class="header-anchor">¶</a>
        代码示例
      </h3>
      <demo>
        <template slot="source">
          <span class="demonstration">基础用法</span>
          <vm-back-top></vm-back-top>
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeA"><code class="html javascript"></code></pre>
        </template>
        <template slot="description">
          <p>向下滚动页面，灰色的按钮为默认效果。</p>
          <p>默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。</p>
        </template>
      </demo>
      <demo>
        <template slot="source">
            <span class="demonstration">自定义样式</span>
            <vm-back-top :height="100" :bottom="200" :timing="'ease'">
              <div class="top">返回顶端</div>
            </vm-back-top>
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeB"><code class="html javascript"></code></pre>
        </template>
        <template slot="description">
          <p>向下滚动页面，蓝色的按钮为自定义效果。</p>
          <p>自定义了位置在页面底部 200px,滚动至距顶端 100px 时显示。</p>
          <p>过渡效果为ease，逐渐变慢</p>
        </template>
      </demo>
      <demo>
        <template slot="source">
          <span class="demonstration">带导航</span>
          <vm-back-top :height="100" :bottom="300" :duration="500" :options="options" @navClick="handleNavClick">
          </vm-back-top>
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeC"><code class="html javascript"></code></pre>
        </template>
        <template slot="description">
          <p>增加了导航配置</p>
          <p>鼠标移到组件上时显示导航</p>
          <p>点击导航页面滚动到该对应位置</p>
        </template>
      </demo>
    </div>
    <div class="rate-demo__item">
      <h3 id="attributes">
        <a href="./#attributes" aria-hidden="true" class="header-anchor">¶</a>
        Attributes
      </h3>
      <table class="table">
        <thead>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
        </thead>
        <tbody>
        <tr>
          <td>height</i></td>
          <td>页面滚动高度达到该值时才显示BackTop组件</td>
          <td>number</td>
          <td>—</td>
          <td>400</td>
        </tr>
        <tr>
          <td>bottom</i></td>
          <td>组件距离底部的距离</td>
          <td>number</td>
          <td>—</td>
          <td>30</td>
        </tr>
        <tr>
          <td>right</i></td>
          <td>组件距离右部的距离</td>
          <td>number</td>
          <td>—</td>
          <td>30</td>
        </tr>
        <tr>
          <td>duration</i></td>
          <td>滚动动画持续时间，单位 毫秒</td>
          <td>number</td>
          <td>—</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>timing</i></td>
          <td>滚动动画速率变化</td>
          <td>string</td>
          <td>linear/ease</td>
          <td>linear</td>
        </tr>
        <tr>
          <td>options</i></td>
          <td>显示导航的配置，每一项需要传显示的label和元素的id</td>
          <td>array</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>navItemClass</i></td>
          <td>导航里每一项的类名</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="rate-demo__item">
      <h3 id="event">
        <a href="./#event" aria-hidden="true" class="header-anchor">¶</a>
        Events
      </h3> 
      <table class="table">
        <thead>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调参数</th>
        </thead>
        <tbody>
        <tr>
          <td>click</td>
          <td>点击按钮时触发</td>
          <td>无</td>
        </tr>
        <tr>
          <td>navClick</td>
          <td>点击导航时触发</td>
          <td>点击该项的id</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
    import { sourcecodeA, sourcecodeB, sourcecodeC } from './template.js'
  import Demo from './Demo.vue'

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
        sourcecodeA,
        sourcecodeB,
        sourcecodeC

      }
    },
    methods: {
        handleNavClick (val) {
            console.log(222)
        console.log(val);
      }
    },
    components: {
      Demo
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
  .back-top-demo {
    h2, h3 {
      font-weight: 400;
      color: #1f2f3d;
    }
    h2 {
      font-size: 28px;
      margin: 0
    }
    h3 {
      font-size: 22px;
      margin: 45px 0 15px;
    }
    h3, h2 {
      &:hover {
        a {
          opacity: .4;
        }
      }
      a {
        float: left;
        margin-left: -20px;
        opacity: 0;
        cursor: pointer;
        color: #4078c0;
        text-decoration: none;
        &:hover {
          opacity: .4;
        }
      }
    }
    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
      a {
        color: #2d8cf0;
        background: 0 0;
        text-decoration: none;
        outline: 0;
        cursor: pointer;
        transition: color .2s ease;
        &:hover {
          color: #57a3f3;
        }
      }
    }
    .new {
      font-style: normal;
      color: #FF4949;
      code {
        background-color: #FF4949 !important;
        color: #fff !important;
      }
    }
    .table {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      color: #5e6d82;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 1.5em;
      th {
        text-align: left;
        border-top: 1px solid #eaeefb;
        background-color: #eff2f7;
        white-space: nowrap;
      }
      th, td {
        border-bottom: 1px solid #eaeefb;
        padding: 10px;
        max-width: 250px;
      }
    }
  }
</style>
