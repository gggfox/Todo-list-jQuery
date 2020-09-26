$(".submitButton").on("click", function (e) {
  e.preventDefault();
  let todo = $(".newTodo").val().trim();
  if (todo !== "") {
    let txt = $("<label class='block'></label>").text(todo);
    txt.append("<input class='check' type='checkbox'>");
    console.log(txt[0]);
    $(".panel-body")[1].append(txt[0]);
    $(".newTodo").val("");
  }
});

function markAll(e) {
  e.preventDefault();
  let checkboxes = $(".check").each(function () {
    this.checked = true;
  });
}

function unmarkAll(e) {
  e.preventDefault();
  let checkboxes = $(".check").each(function () {
    this.checked = false;
  });
}

function deleteAll(e) {
  e.preventDefault();
  $(".panel-body")[1].innerHTML = "";
}

$(document).ready(function () {
  $(document).on("click", ".markAllButton", markAll);
  $(document).on("click", ".clearButton", unmarkAll);
  $(document).on("click", ".deleteButton", deleteAll);
});
