/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: index.js
  Directory: JSLib
  Author: Lokavit
  Birthtime: 2023/5/7 15:07:42
  -----
  Mtime: 2023/5/8 00:13:44
  WordCount: 522
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====
    index.html对应的文件
*/

/**
 * 当前页面的Form配置项。一个页面中可能有多个from
 */
const FORM_NAME_A = {
  /** 表单的配置项 */
  config: [
    /**
     *  @param type: 表单单个元素的类型
     *  @param prop: 元素的id值
     *  @param labelText: 元素对应的label的明文
     *  @param value: 元素的值
     */
    { type: "text", prop: "pin1", labelText: "Text Value:", value: "" },
    /**
     *  @param type: 表单单个元素的类型
     *  @param prop: 元素的id值
     *  @param labelText: 元素对应的label的明文
     *  @param options: 因为是select，需要一个选项组，且设置一个默认选项
     */
    {
      type: "select",
      prop: "test2",
      labelText: "Tex Value:",
      options: [
        { value: "d", text: "DValue", default: false, selected: true },
        { value: "e", text: "Eue" },
        { value: "f", text: "Falu" },
      ],
    },
    /**
     *  @param type: 表单单个元素的类型
     *  @param prop: 元素的id值
     *  @param labelText: 元素对应的label的明文
     *  @param value: 元素的值
     *  @param checked: 是否选中状态
     */
    {
      type: "checkbox",
      prop: "test4",
      labelText: "Tex lue:",
      value: "1",
      checked: true,
    },
    { type: "number", prop: "pin4", labelText: "Vale:", value: "0" },
  ],
  /**
   * 表单通常只有一条数据，使用对象
   */
  data: {},
};

/**
 * 当前页面的Table配置项。一个页面中可能有多个table
 */
const TABLE_NAME_A = {
  /**
   * 当前表的表头配置信息
   */
  thead: [
    [
      /**
       * 可能是多行表头，所以使用数组嵌套形式，最深层的实际值使用对象
       * 每个内部[]视为一行的配置项
       * @description 动态配置项：
       * @param prop: 字段名，也是列名，通常用于与tbody的同字段列对应
       * @param rowspan: 所占行
       * @param colspan: 所占列
       * @param text: 明文
       */
      { prop: "a", rowspan: 5, text: "No." },
      { prop: "b", colspan: 3, rowspan: 3, text: "固定价格" },
      { prop: "c", rowspan: 5, text: "防水" },
      { prop: "d", colspan: 6, text: "MAIETYPE" },
      { prop: "e", colspan: 2, rowspan: 2, text: "板材" },
      { prop: "f", colspan: 2, rowspan: 3, text: "模块类型" },
    ],
    [
      { prop: "g", colspan: 3, text: "TYPE1" },
      { prop: "h", colspan: 3, text: "TYPE2" },
    ],
    [
      { prop: "i", colspan: 3, text: "TYPE1 报价" },
      { prop: "j", colspan: 3, text: "TYPE2 报价" },
      { prop: "k", rowspan: 3, text: "FRONT" },
      { prop: "l", rowspan: 3, text: "REAR" },
    ],
    [
      { prop: "m", colspan: 3, text: "Pin数" },
      { prop: "n", colspan: 3, text: "PIN数" },
      { prop: "o", colspan: 3, text: "Pin数" },
      { prop: "p", rowspan: 2, text: "MODULE TYPE1" },
      { prop: "q", rowspan: 2, text: "MODULE TYPE2" },
    ],
    [
      { prop: "r", text: "1-4" },
      { prop: "s", text: "4-5" },
      { prop: "t", text: "6UP" },
      { prop: "u", text: "1-4" },
      { prop: "v", text: "4-5" },
      { prop: "w", text: "6UP" },
      { prop: "x", text: "1-4" },
      { prop: "y", text: "4-5" },
      { prop: "z", text: "6UP" },
    ],
  ],
  /** 这样单独给td写配置项，当需要点击增加一行时，可以直接读取该配置生成
   * 此处的配置项，不含有数据，即使有，也是默认数据
   * 若遇到options等不确定性，则在外部使用前，先为其处理，添上对应的options
   */
  tbody: [
    /**
     * @param prop:通常与与表头的最后一行对应。
     * @param tagName:指定列使用什么元素，通常是<th>或<td>
     * @param text: 列的明文，通常为空，或给一个默认值
     */
    { prop: "cell1", tagName: "th", text: "defalut Value" },

    /**
     * @param prop:通常与与表头的最后一行对应。
     * @param tagName:指定列使用什么元素，通常是<th>或<td>
     * @param children: 当cell中需要子元素时
     * @param children.tagName: 子元素的标签名
     * @param children.type: 子元素的类型
     * @param children.name: 子元素的名
     * @param children.id: 子元素的ID，通常与label for绑定
     * @param children.value: 子元素的默认值
     * @param children.onchange: 子元素的事件
     */
    {
      prop: "cell2",
      tagName: "td",
      children: [
        {
          tagName: "input",
          type: "text",
          name: "cell2",
          prop: "cell2",
          value: "",
          onchange: handleInputChange,
        },
      ],
    },
    {
      prop: "cell3",
      tagName: "td",
      children: [
        {
          tagName: "select",
          name: "cell3",
          prop: "cell3",
          onchange: handleSelectChange,
          /**
           * @param children.options: 子元素的选项组
           */
          options: [
            {
              value: "a",
              text: "A Value",
              defaultValue: false,
              selected: true,
            },
            { value: "b", text: "B ue" },
            { value: "c", text: "C alu" },
          ],
        },
      ],
    },
    {
      prop: "cell4",
      tagName: "td",
      children: [
        {
          tagName: "input",
          type: "checkbox",
          name: "cell4",
          prop: "cell4",
          value: "1",
          checked: true,
          onchange: handleCheckboxChange,
        },
      ],
    },
    {
      prop: "cell5",
      tagName: "td",
      children: [
        {
          tagName: "input",
          type: "number",
          name: "cell5",
          prop: "cell5",
          value: 0,
          onchange: handleInputChange,
        },
      ],
    },
    { prop: "cell6", tagName: "td", text: "" },
    { prop: "cell7", tagName: "td", text: "" },
    { prop: "cell8", tagName: "td", text: "" },
    { prop: "cell9", tagName: "td", text: "" },
    { prop: "cell10", tagName: "td", text: "" },
    { prop: "cell11", tagName: "td", text: "" },
    { prop: "cell12", tagName: "td", text: "" },
    { prop: "cell13", tagName: "td", text: "" },
    { prop: "cell14", tagName: "td", text: "" },
    { prop: "cell15", tagName: "td", text: "" },
  ],
  /**
   * 当前table的数据，通常是页面加载时获取，
   * 而后，通过类实例化，传值进来，在该文件中使用，并向下传递
   */
  data: [],
};

class Index {
  constructor(prop) {
    console.log("Page:", prop);

    // TABLE_NAME_A.data = prop;

    // console.log("Index this._prop", TABLE_NAME_A);

    // /** 使用 Table Component */
    // const ComponentTableA = new TableComponent(TABLE_NAME_A);
    // console.log("A:", ComponentTableA);
    // const tableA = ComponentTableA.init();
    // document.body.appendChild(tableA);

    // const ComponentTableB = new TableComponent(TABLE_NAME_A);
    // console.log("B:", ComponentTableA);
    // const tableB = ComponentTableB.init();
    // document.body.appendChild(tableB);
  }
}

// var monk = Object.create(null);

// window.monk = monk;

// console.log("monk:", window.monk);
