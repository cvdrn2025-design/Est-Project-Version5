function createNewProject() {
  document.getElementById('projectName').value = '';
  document.getElementById('projectDate').valueAsDate = new Date();
  document.getElementById('itemList').innerHTML = '';
  calculateTotals();
}

