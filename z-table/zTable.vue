<template>
  <table class="z-table" :class="classObj1()">
    <slot v-if="showHead&&showSHead"></slot>
    <z-thead v-else-if="showHead&&!showSHead">
      <tr>
        <th class="thead_th" :style="styleObj(item)" v-for="(item,index) in columns" :key="index">
          <div class="th_content">
              <span v-if="item.type=='index'">#</span>
            <span style="position:relative" v-else>
             <span class="th_c_t">{{item.title}}</span> <img v-if="item.sortable" @click="sortIt(item.key,1)" :src="sortKey==item.key&&sortOrder==1?activepng:arrowpng" class="top" />
              <img  v-if="item.sortable" @click="sortIt(item.key,-1)" :src="sortKey==item.key&&sortOrder==-1?activepng:arrowpng" class="bottom" />

            </span>
          </div>
        </th>
      </tr>
    </z-thead>
    <z-tbody>
      <z-tr
        :style="rowStyle(item1,index1)"
        :class="rowClassName(item1,index1)"
        v-for="(item1,index1) in sortData"
        :key="index1"
        :index="index1"
      >
        <z-td
          :itemobj="item"
          :style="cellStyle(item1,index)"
          :class="cellClassName(item1,index)"
          v-for="(item,index) in columns"
          :key="index"
          :text="sortData[index1][item.key]"
        ></z-td>
      </z-tr>
    </z-tbody>
    <slot v-if="showSFoot"></slot>
  </table>
</template>

<script>
export default {
    name: 'zTable',
    props: {
        showHead: {
            type: Boolean,
            default: true
        },
        borderX: {
            type: Boolean,
            default: true
        },
        borderY: {
            type: Boolean,
            default: false
        },
        columns: {
            type: Array,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        },
        rowClassName: {
            type: Function,
            default: () => {}
        },
        rowStyle: {
            type: Function,
            default: () => {}
        },
        cellClassName: {
            type: Function,
            default: () => {}
        },
        cellStyle: {
            type: Function,
            default: () => {}
        },
        colorMap: {
            type: Array,
            default: () => []
        }
    },
    provide() {
        return {
            zTable: this
        };
    },
    methods: {
        styleObj(item) {
            return {
                'text-align': item.align,
                'max-width': item.width,
                'width': item.width,
                'color': item.width,
            };
        },
        classObj1() {
            return {
                'border-x': this.borderX,
                'border-y': this.borderY
            };
        },
        sortIt(v, i) {
            this.sortKey=v;
            this.sortOrder=i;
        }
    },
    created() {},
    mounted() {
        let arr = this.$slots.default;
        if (arr)
            arr.forEach(v => {
                if (v.componentOptions.tag == 'z-thead') {
                    this.showSHead = true;
                }
                if (v.componentOptions.tag == 'z-foot') {
                    this.showSFoot = true;
                }
            });
    },
    data() {
        return {
            zTable: null,
            showSHead: false,
            showSFoot: false,
            sortKey: '',
            sortOrder: 1,
            arrowpng: require('./arrow.png'),
            activepng: require('./active.png'),
        };
    },
    computed: {
        sortData() {
            let data1 = this.data;
            let sortKey = this.sortKey;
            let sortOrder =this.sortOrder;
            var data2 = [...data1].sort((a, b) => {
                a = a[sortKey];
                b = b[sortKey];
                return (a==b?0:(a>b?1:-1))* sortOrder;
            });
            console.log(data2);
            return data2;
        }
    }
};
</script>
<style lang='less'>
.z-table {
	border-collapse: collapse;
	background-color: white;
	th {
		vertical-align: middle;
		border: none;
		box-sizing: border-box;
	}
	td {
		vertical-align: middle;
		margin: 0;
		height: 32px;
		border: none;
		box-sizing: border-box;
	}
	&.border-y {
		th,
		td {
			border-left: 1px solid #ddd !important;
			border-right: 1px solid #ddd !important;
		}
	}
	&.border-x {
		th,
		td {
			border-top: 1px solid #ddd !important;
			border-bottom: 1px solid #ddd !important;
		}
	}
}
.th_content {
    position: relative;
    .th_c_t{
        margin-right:18px;
    }
	.top {
		width: 16px;
		height: 16px;
        position:absolute;
        top:-4px;
        right:0;
	}
	.bottom {
		width: 16px;
		height: 16px;
        transform: rotate(-180deg);
        position:absolute;
        bottom:-4px;
        right:0;
	}
}
</style>

