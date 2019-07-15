import zTd from './zTd.vue';
import zTr from './zTr.vue';
import zTbody from './zTbody.vue';
import zThead from './zThead.vue';
import zTable from './zTable.vue';
import zTfoot from './zTfoot.vue';

export default {
    install(Vue) {
        Vue.component('z-td', zTd);
        Vue.component('z-tr', zTr);
        Vue.component('z-tbody', zTbody);
        Vue.component('z-thead', zThead);
        Vue.component('z-table', zTable);
        Vue.component('z-tfoot', zTfoot);
    }
};