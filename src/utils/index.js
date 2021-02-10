export const client = (endpoint, { body, ...customConfig } = {}) => {
  const token = localStorage.getItem("token");
  const headers = { "Content-Type": "application/json" };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return fetch(`${process.env.REACT_APP_BACKEND_URL}${endpoint}`, config).then(
    async (res) => {
      const data = await res.json();

      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
};
