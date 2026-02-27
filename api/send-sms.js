// api/send-sms.js
export default async function handler(req, res) {
    // Ruhusu maombi ya POST pekee
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const apiKey = "ePazPhjKvrIqbPYVGg2AOl1Yq1F27iFTJ_gcKC2DU28sAmaAWNXKnbCkmyuqhbyV7wDokTG4mOlOTFPog29fVQ";

    try {
        const response = await fetch("https://zenoapi.com/api/sms/v1/send/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Server Error: " + error.message });
    }
    }
