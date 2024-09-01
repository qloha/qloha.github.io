const tarGzSelect = document.getElementById('tar-gz-select');
const tarGzDownload = document.getElementById('tar-gz-download');
const whlSelect = document.getElementById('whl-select');
const whlDownload = document.getElementById('whl-download');

tarGzSelect.addEventListener('change', () => {
  const version = tarGzSelect.value;
  tarGzDownload.href = `../resources/files/smoothmath-${version}.tar.gz`;
  tarGzDownload.textContent = `Download SmoothMath ${version} tar.gz`;
});

whlSelect.addEventListener('change', () => {
  const version = whlSelect.value;
  whlDownload.href = `../resources/files/smoothmath-${version}-py3-none-any.whl`;
  whlDownload.textContent = `Download SmoothMath ${version} .whl`;
});

// Set initial download links and text
tarGzDownload.href = `../resources/files/smoothmath-1.0.5.tar.gz`;
tarGzDownload.textContent = `Download SmoothMath 1.0.5 tar.gz`;
whlDownload.href = `../resources/files/smoothmath-1.0.5-py3-none-any.whl`;
whlDownload.textContent = `Download SmoothMath 1.0.5 .whl`;