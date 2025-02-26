import React from "react";
import "../style/ItemList.css";

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

  // 删除物品
  deleteItem = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id), // 过滤掉被删除的物品
    }));
  };

  render() {
    const { items, newItem } = this.state;

    const containerStyle = {
      maxWidth: "400px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    };

    const titleStyle = {
      textAlign: "center",
      color: "#333",
    };

    const inputGroupStyle = {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    };

    const inputStyle = {
      flex: 1,
      padding: "10px",
      marginRight: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "16px",
    };

    const addButtonStyle = {
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    };

    const itemListStyle = {
      marginTop: "20px",
    };

    const itemStyle = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
      borderBottom: "1px solid #ddd",
    };

    const itemNumberStyle = {
      fontWeight: "bold",
      color: "#555",
    };

    const itemNameStyle = {
      flex: 1,
      margin: "0 10px",
      color: "#333",
    };

    const deleteButtonStyle = {
      padding: "5px 10px",
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
    };

    const emptyMessageStyle = {
      textAlign: "center",
      color: "#777",
      marginTop: "20px",
    };

    return (
      <div style={containerStyle}>
        <h2 style={titleStyle}>物品列表</h2>
        <div style={inputGroupStyle}>
          <input
            type="text"
            value={newItem}
            onChange={this.handleInputChange}
            placeholder="请输入物品名称"
            style={inputStyle}
          />
          <button onClick={this.addItem} style={addButtonStyle}>
            添加
          </button>
        </div>
        <div style={itemListStyle}>
          <h3 style={titleStyle}>当前物品列表：</h3>
          {items.length === 0 ? (
            <p style={emptyMessageStyle}>暂无物品</p>
          ) : (
            items.map((item, index) => (
              <div key={item.id} style={itemStyle}>
                <span style={itemNumberStyle}>编号：{index + 1}</span>
                <span style={itemNameStyle}>{item.name}</span>
                <button
                  onClick={() => this.deleteItem(item.id)}
                  style={deleteButtonStyle}
                >
                  删除
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default ItemList;
