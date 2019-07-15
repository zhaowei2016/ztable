<template>
  <td :style="styleObj" ref="td">
    <div v-if="itemobj.type=='icon'" class="content">
      <span :style="boxStyle" class="into_c_box"></span>
    </div>
    <div v-else :class="{hiddenS:itemobj.ellipsis}">{{content}}</div>
  </td>
</template>

<script>
export default {
    name: 'zTd',
    inject: {
        zTable: 'zTable',
        zTr: 'zTr'
    },
    props: {
        text: {
            default: ''
        },
        itemobj: {
            type: Object,
            default: () => {}
        }
    },
    mounted() {},
    beforeDestroy() {},
    updated() {},
    methods: {},
    computed: {
        styleObj() {
            return {
                'text-align': this.itemobj.align,
                'max-width': this.itemobj.width,
                'width': this.itemobj.width,
                'color': this.itemobj.color,
            };
        },
        content() {
            if (this.itemobj.type) {
                if (this.itemobj.type === 'index') {
                    return this.zTr.index;
                }
                return '';
            } else {
                return this.text;
            }
        },
        boxStyle() {
            let index = this.zTr.index > this.zTable.colorMap.length - 1 ? this.zTable.colorMap.length - 1 : this.zTr.index;
            let obj = this.zTable.colorMap[index];

            if (obj) {
                return {
                    'background-color': obj.color,
                    'border-radius': obj.circle ? '50%' : 'inherits'
                };
            } else {
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                var color = '#' + (Array(6).join(0) + (r.toString(16) + g.toString(16) + b.toString(16))).slice(-6);
                return {
                    'background-color': color,
                    'border-radius': '50%'
                };
            }
        }
    },
    watch: {}
};
</script>
<style >
.z-table .hiddenS {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.z-table .into_c_box {
	width: 9px;
	height: 9px;
	display: inline-block;
}
</style>
