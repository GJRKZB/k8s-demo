import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/hello-world", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
``;
