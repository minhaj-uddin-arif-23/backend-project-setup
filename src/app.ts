import express, { Request, Response } from "express";
const app = express();

// parser use to send data to parse
app.use(express.json());
app.use(express.text());
// :productId/:subId
app.get("/", (req: Request, res: Response) => {
  // console.log(req.params)
  const {email,name} = req.query
  console.log(email)
  res.send("We have no fronted so we can use postman for crud operation");
});

app.post("/", (req: Request, res: Response) => {
  console.log(" Postman to send data --> ", req.body);
  res.send("Get data");
  // res.json({
  //   message : " Successfully received data"
  // })
});

export default app;
