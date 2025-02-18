import { useState } from "react";

const colors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#8B0082",
  "#8F00FF",
];

const RainbowText = () => {
  const [clickCount, setClickCount] = useState(0);
  const getCurrentColor = () => {
    return colors[clickCount % colors.length];
  };
  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: getCurrentColor() }}>你已经点击了{clickCount}次</h2>
      <button onClick={handleClick}>点我变彩虹色</button>
      {clickCount > 10 && <p>你触发隐藏成就：彩虹大师！</p>}
    </div>
  );
};

export default RainbowText;
