import express from "express";

const app = express();
app.use(express.static("dist"));

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      content:
        "Why are snails slow? Because they’re carrying a house on their back.",
    },
    {
      id: 2,
      content: "What do birds give out on Halloween? Tweets.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
