export async function apiRequest(route, method = "GET", body = null) {
  try {
    const res = await fetch(route, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: body ? JSON.stringify(body) : null
    });

    if (!res.ok) {
      throw new Error(`Erro API: ${res.status}`);
    }

    return await res.json();

  } catch (err) {
    console.error("Erro na apiRequest:", err);
    return { error: true, message: err.message };
  }
}
