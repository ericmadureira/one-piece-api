import app from "./app"
import { config } from "./config"

app.listen(config.port, () => {
    console.info("One Piece API running on port: ", config.port)
})