import React from "react";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // 存储物品列表
      newItem: "", // 新物品的输入值
    };
  }

  // 处理输入框内容变化
  handleInputChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  // 添加物品到列表
  addItem = () => {
    const { newItem, items } = this.state;
    if (newItem.trim() === "") {
      alert("请输入物品名称！");
      return;
    }
    const newItemObj = {
      id: Date.now(), // 使用时间戳作为唯一ID
      name: newItem,
    };
    this.setState({
      items: [...items, newItemObj], // 更新物品列表
      newItem: "", // 清空输入框
    });
  };

  // 渲染物品列表
  render() {
    const { items, newItem } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <h2>购物车列表</h2>
        <div>
          <input
            type="text"
            value={newItem}
            onChange={this.handleInputChange}
            placeholder="请输入物品名称"
            style={{ width: "200px", padding: "5px", margin: "10px" }}
          />
          <button onClick={this.addItem} style={{ padding: "5px 10px" }}>
            添加
          </button>
        </div>
        <div>
          <h3>当前购物车列表：</h3>
          {items.length === 0 ? (
            <p style={{ color: "gray" }}>暂无物品</p>
          ) : (
            items.map(
              (
                item,
                index // 使用index作为编号
              ) => (
                <div key={item.id} style={{ margin: "5px" }}>
                  <span style={{ fontWeight: "bold" }}>编号：{index + 1}</span>{" "}
                  - {item.name}
                </div>
              )
            )
          )}
        </div>
      </div>
    );
  }
}

export default ItemList;
