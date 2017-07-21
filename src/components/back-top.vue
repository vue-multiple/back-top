<template>
    <div :class="classes" :style="styles" @click="back" @mouseenter="showNav" @mouseleave="hideNav">
        <slot>
            <div :class="innerClasses">
                <i class="vm-icon-een"></i>
            </div>
        </slot>
        <div v-show="navShow" :class="nav">
            <div :class="navItem" v-for="item in options" @click.stop="handleNavClick(item.id)">{{ item.label }}</div>
        </div>
    </div>
</template>

<script>
    import { scrollTop } from '../utils/assist';
    import { on, off, getAbsPoint } from '../utils/dom';
    const prefixCls = 'vm-back-top'

    export default{
        name: 'VmBackTop',
        componentName: 'VmBackTop',
        data(){
            return {
                backTop: false,
                navShow:false
            }
        },
        props: {
            height: {
                type: Number,
                default: 400
            },
            bottom: {
                type: Number,
                default: 30
            },
            right: {
                type: Number,
                default: 30
            },
            duration: {
                type: Number,
                default: 1000
            },
            timing: {
                type: String,
                default: 'linear'
            },
            options:{
                type: Array,
                default: () => {
                    return []
                }
            },
            navItemClass: {
                type: String,
                default: ''
            }
        },
        mounted (){
            on(window, 'scroll', this.handleScroll);
            on(window, 'resize', this.handleScroll);
        },
        beforeDestroy () {
            off(window, 'scroll', this.handleScroll);
            off(window, 'resize', this.handleScroll);
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-show`]: this.backTop
                    }
                ];
            },
            styles () {
                return {
                    bottom: `${this.bottom}px`,
                    right: `${this.right}px`
                };
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            nav () {
                return [
                    `${prefixCls}-nav`
                ];
            },
            navItem () {
                return [
                    `${prefixCls}-nav-item`,
                    `${this.navItemClass}`
                ];
            }
        },
        methods: {
            handleScroll () {
                this.backTop = window.pageYOffset >= this.height;
            },
            back () {
                const sTop = document.documentElement.scrollTop || document.body.scrollTop;
                scrollTop(window, sTop, 0, this.duration, this.timing);
                this.$emit('click');
            },
            showNav (){
                this.navShow = true
            },
            hideNav (){
                this.navShow = false
            },
            handleNavClick (id){
                const sTop = document.documentElement.scrollTop || document.body.scrollTop;
                var targetTop = getAbsPoint(document.getElementById(id)).y
                scrollTop(window, sTop, targetTop, this.duration, this.timing);
                this.$emit('navClick',id);
            }
        }
    }
</script>

