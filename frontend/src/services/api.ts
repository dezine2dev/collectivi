const API_BASE_URL = 'https://repulsive-marylynne-0x194-7a5f566a.koyeb.app';

export const checkHealth = async () => {
    try {
        const start = performance.now();
        const response = await fetch(`${API_BASE_URL}/api/health`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const latency = Math.round(performance.now() - start);
        const data = await response.json();
        return {
            status: data.status === 'OK',
            latency
        };
    } catch (error) {
        return { status: false, latency: 0 };
    }
};

export const sendMessage = async (message: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        console.log("data", data);
        return data.response;
    } catch (error) {
        console.log("error", error);
        return "Sorry, I'm unable to respond right now.";
    }
};