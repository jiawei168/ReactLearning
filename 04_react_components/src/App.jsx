// import WelcomeClass from "./componets/WelcomeClass";
// import WelcomeFunc from "./componets/WelcomeFunc";

import StudentProfile from "./components/StudentProfile";

const App = () => {
  const studentData = {
    name: "张三",
    age: 20,
    avatar: "https://via.placeholder.com/150", // 使用占位图
    homepage: "https://example.com",
  };

  return (
    <>
      {/* <WelcomeClass name="World"></WelcomeClass>
      <WelcomeFunc name="React 组件！！！"></WelcomeFunc> */}
      <div className="app">
        <h1>学生信息展示</h1>
        <StudentProfile {...studentData}></StudentProfile>
        <StudentProfile></StudentProfile>
      </div>
    </>
  );
};
export default App;
