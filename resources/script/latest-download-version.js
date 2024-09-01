const tarGzSelect = document.getElementById('tar-gz-select');
const whlSelect = document.getElementById('whl-select');

const latestVersion = '1.0.5';

function updateSelectOptions(selectElement) {
  const options = selectElement.options;

  for (let i = 0; i < options.length; i++) {
    if (options[i].value === latestVersion) {
      options[i].text = `${options[i].value} [LATEST]`;
      options[i].classList.add('latest-version');
    }
  }
}

updateSelectOptions(tarGzSelect);
updateSelectOptions(whlSelect);

tarGzSelect.value = latestVersion;
whlSelect.value = latestVersion;