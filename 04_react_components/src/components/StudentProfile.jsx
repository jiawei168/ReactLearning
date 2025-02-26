const StudentProfile = (name, age, avatar, homepage) => {
  return (
    <div className="student-profile">
      <h2>学生信息</h2>
      <div className="profile-info">
        <img src={avatar} alt={name} className="avatar" />
        <p>
          <strong>姓名：</strong>
          {name}
        </p>
        <p>
          <strong>年龄：</strong>
          {age}
        </p>
        <p>
          <strong>主页：</strong>
          <a href={homepage} target="_blank" rel="noopener noreferrer">
            {homepage}
          </a>
        </p>
      </div>
    </div>
  );
};

export default StudentProfile;
