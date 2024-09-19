const tarGzSelect = document.getElementById('tar-gz-select');
const tarGzDownload = document.getElementById('tar-gz-download');
const whlSelect = document.getElementById('whl-select');
const whlDownload = document.getElementById('whl-download');

tarGzSelect.addEventListener('change', () => {
  const version = tarGzSelect.value;
  tarGzDownload.href = `../resources/files/discord-user-bot-${version}.tar.gz`;
  tarGzDownload.textContent = `Download DUB ${version} tar.gz`;
});

whlSelect.addEventListener('change', () => {
  const version = whlSelect.value;
  whlDownload.href = `../resources/files/discord-user-bot-${version}-py3-none-any.whl`;
  whlDownload.textContent = `Download DUB ${version} .whl`;
});

// Set initial download links and text
tarGzDownload.href = `../resources/files/discord-user-bot-1.0.0.tar.gz`;
tarGzDownload.textContent = `Download DUB 1.0.0 tar.gz`;
whlDownload.href = `../resources/files/discord-user-bot-1.0.0-py3-none-any.whl`;
whlDownload.textContent = `Download DUB 1.0.0 .whl`;