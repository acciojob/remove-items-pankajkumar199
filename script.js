//your JS code here. If required.
document.getElementById("removeBtn").addEventListener("click", function () {
  let select = document.getElementById("colorSelect");
  let selectedIndex = select.selectedIndex;

  // Remove the selected option
  if (selectedIndex >= 0) {
    select.remove(selectedIndex);
  }
});
