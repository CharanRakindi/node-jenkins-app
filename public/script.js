const fetchBtn = document.getElementById('fetchBtn');
const result = document.getElementById('result');

fetchBtn.addEventListener('click', async () => {
  result.textContent = 'Loading...';

  try {
    const response = await fetch('/api/message');
    const data = await response.json();
    result.textContent = data.message;
  } catch (error) {
    result.textContent = 'Failed to fetch API message.';
  }
});
