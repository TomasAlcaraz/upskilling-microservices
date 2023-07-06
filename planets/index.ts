import app from "./src/server";

const ENV = {
  PORT: 8003,
};

app.listen(ENV.PORT, () => console.log(`server running on port: ${ENV.PORT}`));
