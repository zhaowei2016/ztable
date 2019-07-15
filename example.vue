<template>
  <div>
    <z-table
      class="table"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :cell-class-name="cellClassName"
      :cell-style="cellStyle"
      border-x
      border-y
      :columns="columns"
      :colorMap='colorMap'
      :data="data1"
    >
     <!-- <z-thead>
        <tr>
          <th>#</th>
          <th>d</th>
          <th>不涨价</th>
          <th>涨价</th>
        </tr>
    </z-thead>

     <z-tfoot>
        <tr>
          <td>合计</td>
          <td>d</td>
          <td>dd</td>
          <td>ddd</td>
        </tr>
    </z-tfoot> -->
    </z-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            colorMap: [
                { circle: true, color: '#3282FF' },
                { circle: true, color: '#FF475A' },
                { circle: false, color: '#FFAF24' },
            ],
            columns: [
                {
                    type: 'index',
                    width: '20px'
                },
                {
                    title: '姓名',
                    key: 'name',
                    align: 'left',
                    width: '20vw'
                },
                {
                    title: '年龄',
                    key: 'age',
                    align: 'center',
                    width: '20vw',
                    sortable: true,
                },
                {
                    title: '地址',
                    key: 'address',
                    color: 'deeppink',
                    ellipsis: true,
                    width: '50vw'
                }
            ],
            data1: [
                {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                }
            ],
        };
    },
    methods: {
        // 给行加class
        rowClassName(row, index) {
            if (index === 1) {
                return 'pink';
            }
            return '';
        },
        // 给行加style
        rowStyle(row, index) {
            if (index === 2) {
                return { 'background-color': 'skyblue' };
            }
            return {};
        },
        // 给单元格加class
        cellClassName(row, index) {
            // 此处返回的row为行的值,index为列的排序
            if (index === 1) {
                return { blue: true, height: true };
            } else if (row.name == '李小红' && index === 2) {
                return 'gold';
            }
            return {};
        },
        // 给单元格加style
        cellStyle(row, index) {
            // 此处返回的row为行的值,index为列的排序
            if (index === 1) {
                if (row.age > 18) {
                    return { 'background-color': 'gold' };
                } else {
                    return { 'background-color': 'yellow' };
                }
            } else if (index === 2) {
                return { 'background-color': 'skyblue' };
            }
            return {};
        }
    },
    computed: {}
};
</script>

<style lang='less' scoped>
/deep/.pink {
	background-color: pink;
}

/deep/.blue {
	background-color: blue;
}
/deep/.green {
	background-color: green;
}
/deep/.gold {
	background-color: gold;
}
.table {
	width: 100vw;
	font-size: 13px;
}


</style>
