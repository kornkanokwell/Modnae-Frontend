const API_URL = 'https://modnae-m7lm.onrender.com';

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/api/data`);
  const data = await response.json();
  return data;
};
