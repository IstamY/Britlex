

const form = document.querySelector("#form1");
const form2 = document.querySelector("#form2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
});

const price1 = document.querySelector("#price1");
const price2 = document.querySelector("#price2");
const price3 = document.querySelector("#price3");

function change1(x) {
  if (x.value == '£5.99 <span class="text-secondary">per month</span>') {
    x.value = '£59.99 <span class="text-secondary">per year</span>';
    x.innerHTML = '£59.99 <span class="text-secondary">per year</span>';
  } else {
    x.value = '£5.99 <span class="text-secondary">per month</span>';
    x.innerHTML = '£5.99 <span class="text-secondary">per month</span>';
  }
}

// change.addEventListener("click", () => {
//   if (change.value == '£5.99 <span class="text-secondary">per month</span>') {
//     change.value = '£59.99 <span class="text-secondary">per year</span>';
//     change.innerHTML = '£59.99 <span class="text-secondary">per year</span>';
//   } else {
//     change.value = '£5.99 <span class="text-secondary">per month</span>';
//     change.innerHTML = '£5.99 <span class="text-secondary">per month</span>';
//   }

//   console.log(change.value);
// });

$("#success-edit")
  .fadeTo(2000, 500)
  .slideUp(500, function () {
    $("#success-edit").slideUp(500);
  });

$(document).ready(function () {
  $("#success-edit").hide();
  $(".myEdit").click(function showAlert() {
    $("#success-edit")
      .fadeTo(1000, 500)
      .slideUp(500, function () {
        $("#success-edit").slideUp(500);
      });
  });
});

$(document).ready(function () {
  $("#success-email").hide();
  $(".myEmail").click(function showAlert() {
    $("#success-email")
      .fadeTo(1000, 500)
      .slideUp(500, function () {
        $("#success-email").slideUp(500);
      });
  });
});
