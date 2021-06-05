import Vue from "vue";
import {
    Button,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Input
    } from "element-ui";

const element = {
    install: function (Vue) {
        Vue.use(Button)
        Vue.use(Container)
        Vue.use(Header)
        Vue.use(Aside)
        Vue.use(Main)
        Vue.use(Footer)
        Vue.use(Input)

    }
}
export default element