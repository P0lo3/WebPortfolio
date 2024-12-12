
import axios from "axios";


export const chessData = async (req, res) => {

    try {
        const response = await axios.get("https://api.chess.com/pub/player/P0lo3");
        
        if (!response || !response.data) {
            throw new Error("No data received from Chess.com API.");
        }

        return response.data;

    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.status(500).json({ message: "Failed to fetch chess player data", error: error.message});
    }
};

export const chessStats = async (req, res) => {

    try {
        const response = await axios.get("https://api.chess.com/pub/player/P0lo3/stats");
        
        if (!response || !response.data) {
            throw new Error("No data received from Chess.com API.");
        }

        return response.data;

    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.status(500).json({ message: "Failed to fetch chess player data", error: error.message});
    }
};


function NewTab() {
    window.open(
        "https://www.chess.com/play/online/new?opponent=P0lo3", "_blank");
}
