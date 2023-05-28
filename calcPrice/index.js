/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: index.js
  Directory: calcPrice
  Author: Lokavit
  Birthtime: 2023/5/28 12:30:58
  -----
  Mtime: 2023/5/28 20:11:18
  WordCount: 231
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

const THEAD_CONFIG = [
  [
    {
      text: "团名",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "$ 美元",
      tagName: "th",
      rowspan: 1,
      colspan: 1,
    },
    {
      text: "汇率",
      tagName: "th",
      rowspan: 1,
      colspan: 1,
    },
    {
      text: "高定",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "套装",
      tagName: "th",
      rowspan: 1,
      colspan: 2,
    },
    {
      text: "帽子",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "外套",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "夹克",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "裤子",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "鞋子",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "衬衫",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "裙子",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "基本价",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "购物袋",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "购物车",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
    {
      text: "配送",
      tagName: "th",
      rowspan: 2,
      colspan: 1,
    },
  ],
  [
    {
      text: "RMB",
      tagName: "th",
      rowspan: 1,
      colspan: 1,
    },
    {
      prop: "hlv",
      text: "1",
      tagName: "th",
      rowspan: 1,
      colspan: 1,
      contenteditable: true,
    },
    {
      text: "上衣",
      tagName: "th",
      rowspan: 1,
      colspan: 1,
    },
    {
      text: "裤子",
      tagName: "th",
      rowspan: 1,
      colspan: 1,
    },
  ],
];

const TBODY_CONFIG = (handleSelect) => [
  {
    prop: "cname",
    components: [
      {
        prop: "cname",
        tagName: "select",
        options: [
          { prop: "", text: "请选择" },
          { prop: "001", text: "〇〇一" },
          { prop: "003", text: "〇〇三" },
        ],
        value: "",
        action: handleSelect,
      },
    ],
  },
  {
    prop: "price",
    text: 0,
    contenteditable: true,
  },
  {
    prop: "price_b",
    text: 0,
  },
  {
    prop: "custom",
    text: "Custom",
    contenteditable: true,
  },
  {
    prop: "suit_coat",
    text: 0,
  },
  {
    prop: "suit_pants",
    text: 0,
  },
  {
    prop: "hat",
    text: 0,
    contenteditable: true,
  },

  {
    prop: "coat",
    text: 0,
    contenteditable: true,
  },
  {
    prop: "jacket",
    text: 0,
    contenteditable: true,
  },
  {
    prop: "pants",
    text: 0,
    contenteditable: true,
  },
  {
    prop: "shoes",
    text: 0,
    contenteditable: true,
  },
  {
    prop: "shirt",
    text: 0,
    contenteditable: true,
  },
  {
    prop: "dress",
    text: 0,
    contenteditable: true,
  },
  {
    prop: "basic",
    text: 0,
  },
  {
    prop: "toteBag",
    text: 0,
  },
  {
    prop: "cart",
    text: 0,
  },
  {
    prop: "delivery",
    text: 0,
  },
];

class CalcPrice {
  constructor(prop = {}) {
    this.prop = prop;
    console.log("CalcePrice:", this);
    // 存储基本信息
    this.baseInfo = {};

    this.tableComponent = new TableComponent();
    this.tableComponent.tableId = "price";
    this.tableComponent.theadConfig = THEAD_CONFIG;
    this.tableComponent.tbodyConfig = TBODY_CONFIG(
      this.handleSelectCName.bind(this)
    );

    this.tbodyData = [];

    console.log(this.tableComponent.init());
    this.prop.root
      .querySelector("#tablePrice")
      .insertAdjacentElement("afterbegin", this.tableComponent.init());

    this.tablePrice = this.tableComponent.init();

    this.mountEvents();
  }

  /**
   * 当前页面一些事件的装载
   * 通常在页面加载完成后
   */
  mountEvents() {
    this.prop.root
      .querySelector('input[name="people"]')
      .addEventListener("input", this.handleInputPeople.bind(this), false);

    this.prop.root
      .querySelector('select[name="cart"]')
      .addEventListener("change", this.handleSelectCart.bind(this), false);

    this.prop.root
      .querySelector('select[name="delivery"]')
      .addEventListener("change", this.handleSelectDelivery.bind(this), false);

    this.prop.root
      .querySelector(`#${this.tableComponent.tableId}`)
      .tBodies[0].addEventListener("input", this.handleInputEvent.bind(this));
  }
  //   init() {}

  // 人数变动
  handleInputPeople(event) {
    console.log("变更人数:", event.target.value);
    SHOPING_CLUB_DATA.people = Number.isNaN(parseInt(event.target.value))
      ? 0
      : parseInt(event.target.value);
    SHOPING_CLUB_DATA.toteBag = SHOPING_CLUB_DATA.people;
    console.log("人数变动:", SHOPING_CLUB_DATA);
    this.render(SHOPING_CLUB_DATA, []);
  }
  // 是否需要购物车
  handleSelectCart(event) {
    console.log("是否需要购物车:", event.target.value);
    SHOPING_CLUB_DATA.cart =
      event.target.value == "YES" ? SHOPING_CLUB_DATA.people : 0;
    console.log("是否需要购物车:", SHOPING_CLUB_DATA);
    this.render(SHOPING_CLUB_DATA, []);
  }

  handleSelectDelivery(event) {
    console.log("是否需要配送:", event.target.value);
    SHOPING_CLUB_DATA.delivery = event.target.value == "YES" ? 1 : 0;
    console.log("是否需要配送:", SHOPING_CLUB_DATA);
    this.render(SHOPING_CLUB_DATA, []);
  }

  handleSelectCName(event) {
    console.log("操作团号:", event);
    console.log("团号:", event.target.value);
    const currentRow = event.target.parentElement.parentElement;
    console.log("团号所在行:", currentRow.sectionRowIndex);

    console.log("当前tbodyData:", this.tbodyData);

    if (this.tbodyData.length <= 0) {
      this.tbodyData.push({ cname: event.target.value });
    } else {
      this.tbodyData[currentRow.sectionRowIndex].cname = event.target.value;
    }
    console.log("tbodyData:", this.tbodyData);

    this.render(this.baseInfo, this.tbodyData);
  }

  // 输入监听事件
  handleInputEvent(event) {
    console.log("InputEvent:", event);
    if (event.target.dataset.prop == "cname") return;
  }

  render(data, tbodyData) {
    console.log("render():", data);
    console.log("render():", tbodyData);
    console.log(this.tablePrice.tBodies[0]);
    this.baseInfo = data;
    // this.tablePrice.tBodies[0].innerHTML = "";
    // this.tablePrice.tBodies[0];
    // const div = document.createElement("div");
    // div.innerText = `${JSON.stringify(data)} \r\n ${JSON.stringify(tbodyData)}`;
    // document.querySelector("#tablePrice").appendChild(div);

    // console.log(this.calcItemPrice(data));
    tbodyData.forEach((row) => {
      row.people = this.calcPricePeople(
        parseInt(this.baseInfo.people),
        row.cname
      );
      row.toteBag = this.calcPriceToteBag(
        parseInt(this.baseInfo.toteBag),
        row.cname
      );
      row.cart = this.calcPriceCart(parseInt(this.baseInfo.cart), row.cname);

      console.log("单行结果:", row);
    });
  }

  // 人头总价
  calcPricePeople(people, cname) {
    let temp = 0;
    let result = 0;
    Object.keys(this.prop.PRICE_DATA[cname].people).forEach((key) => {
      if (
        people > this.prop.CONFIG_BASE_PEOPLE &&
        Intervals(key, this.prop.CONFIG_BASE_PEOPLE)
      ) {
        temp = this.prop.PRICE_DATA[cname].people[key];
      }

      if (Intervals(key, people)) {
        result =
          temp +
          parseInt(people - this.prop.CONFIG_BASE_PEOPLE) *
            this.prop.PRICE_DATA[cname].people[key];
      } else {
        if (Intervals(key, people)) {
          result = this.prop.PRICE_DATA[cname].people[key];
        }
      }
    });
    return result;
  }
  // 购物袋总价
  calcPriceToteBag(toteBag, cname) {
    console.log("toteBag:", toteBag);
    console.log("cname:", cname);
    console.log("定位区间:", this.prop.PRICE_DATA[cname]);
    console.log("定位区间:", this.prop.PRICE_DATA[cname].toteBag);
    let result = 0;
    Object.keys(this.prop.PRICE_DATA[cname].toteBag).forEach((key) => {
      // 如果数量 > 全局量，取全局量的
      if (
        toteBag > this.prop.CONFIG_BASE_TOTEBAG &&
        Intervals(key, this.prop.CONFIG_BASE_TOTEBAG)
      ) {
        result = this.prop.PRICE_DATA[cname].toteBag[key];
      } else {
        if (Intervals(key, toteBag)) {
          result = this.prop.PRICE_DATA[cname].toteBag[key];
        }
        // console.log("匹配成功:", result);
      }
    });
    return result;
  }

  // 购物车总价
  calcPriceCart(cart, cname) {
    console.log("toteBag:", cart);
    console.log("cname:", cname);
    console.log("定位区间:", this.prop.PRICE_DATA[cname]);
    console.log("定位区间:", this.prop.PRICE_DATA[cname].cart);
    let temp = 0;
    let result = 0;
    Object.keys(this.prop.PRICE_DATA[cname].cart).forEach((key) => {
      if (Intervals(key, cart)) {
        result = this.prop.PRICE_DATA[cname].cart[key];
        // console.log("匹配成功:", this.prop.PRICE_DATA[cname].people[key]);
      }
    });
    return result;
  }

  calcItemPrice(data) {
    return (
      Object.keys(data)
        .map((key) => {
          return data[key] * this.prop.PRICE_DATA[key];
        })
        // 最后在将其累加
        .reduce((a, b) => a + b, 0)
    );
  }
}

// // 计算那些不需要数学区间的，输入数量*价格的项目。
// const numSome = { front: 3, rear: 1, frontLv: 5, sus: 7 };
// const numSomePrice = { front: 300, rear: 100, frontLv: 500, sus: 700 };
// // I want result: [900,100,2500,4900].reduce((a,b)=>a+b,0);
// const result = Object.keys(numSome)
//   .map((key) => {
//     return numSome[key] * numSomePrice[key];
//   })
//   // 最后在将其累加
//   .reduce((a, b) => a + b, 0);

// console.log(result); // Output: 8400
