const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const sendContact = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    return response.ok;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};

export default sendContact;