let previewContainer = document.querySelector('.grid-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.grid-container .grid').forEach(grid => {
  grid.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = grid.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});