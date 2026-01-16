import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";

import petRoutes from "./routes/pets.routes.js"
;
const app = express()
const port = 4141;

// Load YAML
const swaggerDocument = YAML.load("./swagger.yaml");

app.use(cors());
app.use(express.json());

app.use( "/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/pets", petRoutes);

if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => console.log(`Server running on port ${port}`))
}

export default app;