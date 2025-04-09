import { app, PORT } from "./server";

app.listen(PORT, () => {
    console.log("SERVIDOR RODANDO NA PORTA: " + PORT);
});
