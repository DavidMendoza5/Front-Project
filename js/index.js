function showModal() {
  let show_modal = document.getElementById('modal');
  show_modal.style.display = 'block';
}

function closeModal() {
  let show_modal = document.getElementById('modal');
  show_modal.style.display = 'none';
}

window.onclick = function() {
  let show_modal = document.getElementById('modal');
  if(event.target === show_modal) {
    show_modal.style.display = 'none';
  }
}