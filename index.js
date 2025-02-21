const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 7000;

app.use(cors());

// Endpoint del manifest richiesto da Stremio
app.get("/manifest.json", (req, res) => {
    res.json({
        "id": "org.tuonome.skip-intro",
        "version": "1.0.0",
        "name": "Skip Intro Addon",
        "description": "Aggiunge un pulsante per saltare la sigla iniziale",
        "resources": ["stream"],
        "types": ["series"],
        "idPrefixes": ["tt"], // Prefisso per le serie TV
    });
});

// Avvia il server
app.listen(port, () => {
    console.log(`Skip Intro Addon in esecuzione su http://localhost:${port}`);
});
