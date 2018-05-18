## vue-vuex 入门购物车小Demo

### 一、安装步骤

> 1. 克隆代码: git clone git@github.com:yifoo/vuex-demo.git
> 2. 安装依赖: npm install
> 3. 运行: npm run dev

### 二、 案例说明

#### 1.Demo结构

```JavaScript
├── App.vue
├── main.js                 // 入口文件
├── api
│   └── shop.js             // Mock产品数据
│── store
│   ├── modules
│   │   ├── cart.js         // 购物车状态模块
│   │   └── products.js     // 产品状态模块
│   └── store.js            // 状态管理器
├── components
│   ├── Products.vue        // 产品视图
│   ├── Shop.vue            // 购物产品视图
│   └── ShoppingCart.vue    // 购物车视图
└── router
    └── index.js            // 路由控制器
```

#### 2.说明 

①入口文件`main.js` ：通过vue的store属性,将store状态从根组件“注入”到每一个子组件(`store`)中,子组件只需调用 `Vue.use(Vuex)`;

②状态管理`store.js`：引入购物车和产品状态模块;

> 子模块中分别定义`state、getters、mutations、actions`；
>
> `state`存放原始数据
>
> `getters`提供实时数据
>
> `mutations`提供处理数据方法和业务逻辑
>
> `actions`是commit执行mutation方法，修改state变量值

③组件`components`：存放视图，渲染数据