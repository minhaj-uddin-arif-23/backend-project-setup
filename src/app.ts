import express, { NextFunction, Request, Response } from "express";
const app = express();

// parser use to send data to parse
app.use(express.json());
app.use(express.text());
// :productId/:subId

// middleware

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);

userRouter.get("/create-users", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User created Successfully",
    User: user,
  });
});

courseRouter.post("create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "Course created Successfully",
    User: course,
  });
});

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get("/", loggerMiddleware,async (req: Request, res: Response) => {
  // console.log(req.params)
  try {
    const { email, name } = req.query;
    console.log(email);
    res.send("We have no fronted so we can use postman for crud operation");
  } catch (error) {


    console.log(error);
    res.status(400).json({
      success: false,
      message: "Failed to get data",
    });
  }
});

app.post("/", (req: Request, res: Response) => {
  console.log(" Postman to send data --> ", req.body);
  res.send("Get data");
  // res.json({
  //   message : " Successfully received data"
  // })
});

export default app;
