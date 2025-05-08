const express = require("express");
const cors = require("cors");

const app = express();
const port = 5503;

app.use(cors());
app.use(express.json());

app.post("/src/js/signup", (req, res) => {
  console.log("받은 데이터:", req.body);
  res.json({ message: "회원가입 성공!" });
});

app.listen(port, () => {
  console.log(`서버 실행 중: http://127.0.0.1:${port}`);
});
