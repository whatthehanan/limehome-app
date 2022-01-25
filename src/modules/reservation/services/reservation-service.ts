import { apiConfig } from "../../../config/api";

export const fetchReservations = (page: number, perPage: number) => async () => {
    const response = await fetch(`${apiConfig.baseUrl}/reservations?page=${page}&perPage=${perPage}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw Error("Something went wrong!")
    }

    const res = await response.json();
    return res.data;
}

export const createReservation = async (payload: any) => {
    const response = await fetch(`${apiConfig.baseUrl}/reservations`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        throw Error("Something went wrong!")
    }

    const res = await response.json();
    return res.message;
}