"use strict";
const dictionary = {
  apple: "táo",
  cat: "mèo",
  dog: "chó",
};

let dialog;

function handleSearch() {
  const word = document.getElementById("inp-word").value;
  const meaning = dictionary[word];

  if (meaning) {
    // Hiển thị nghĩa của từ
    document.getElementById("meaning").innerHTML = meaning;

    localStorage.setItem("dictionary", JSON.stringify(dictionary));
  } else {
    // Hiển thị thông báo không tìm thấy từ
    document.getElementById("meaning").innerHTML =
      "Không tìm thấy từ, hãy tạo mới";

    // Tạo hộp thoại tạo từ mới
    dialog = document.getElementById("create-dialog");
    dialog.showModal();
  }
}

function handleCreate() {
  // Lấy nghĩa của từ từ ô nhập liệu
  const meaning = document.getElementById("inp-meaning").value;

  // Khai báo biến word
  let word = document.getElementById("inp-word").value;

  // Kiểm tra xem từ đã có trong local storage chưa
  if (!dictionary.hasOwnProperty(word)) {
    // Thêm từ mới vào dictionary
    dictionary[word] = meaning;

    // Lưu từ và nghĩa vào local storage
    saveDictionary();

    // Hiển thị thông báo thành công
    alert("Từ mới đã được thêm vào từ điển!");
  } else {
    // Hiển thị thông báo từ đã tồn tại
    alert("Từ đã tồn tại trong từ điển!");
  }

  // Đóng hộp thoại
  let dialog = document.getElementById("create-dialog");
  dialog.close();
}

function saveDictionary() {
  // Chuyển dictionary sang dạng JSON
  const json = JSON.stringify(dictionary);

  // Lưu dictionary vào local storage
  localStorage.setItem("dictionary", json);
}

// Xử lý khi người dùng nhấn nút "Tạo"
document
  .getElementById("inp-word")
  .addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      handleCreate();
    }
  });

// Xử lý khi người dùng nhấn nút "Tạo"
document
  .getElementById("inp-word")
  .addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      handleCreate();
    }
  });

window.onload = function () {
  // Kiểm tra xem local storage có hỗ trợ không
  if (typeof Storage !== "undefined") {
    // Nếu có thì kiểm tra xem đã có dữ liệu từ điển chưa
    if (localStorage.getItem("dictionary")) {
      // Nếu có thì gán dữ liệu từ local storage vào dictionary
      dictionary = JSON.parse(localStorage.getItem("dictionary"));
    }
  }
};

// Xử lý khi người dùng nhấn nút "Tạo"
document
  .getElementById("inp-word")
  .addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      handleCreate();
    }
  });

// Xử lý khi trang được tải
window.onload = function () {
  // Tải dictionary từ local storage vào memory
  loadDictionary();
};

// Hàm loadDictionary
function loadDictionary() {
  // Lấy dữ liệu từ local storage
  const json = localStorage.getItem("dictionary");

  // Nếu có dữ liệu thì gán vào dictionary
  if (json) {
    dictionary = JSON.parse(json);
  }
}

function saveDictionary() {
  // Chuyển dictionary sang dạng JSON
  const json = JSON.stringify(dictionary);

  // Lưu dictionary vào local storage
  localStorage.setItem("dictionary", json);
}

// Xử lý khi người dùng nhấn nút "Dịch"
document
  .getElementById("inp-word")
  .addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      handleSearch();
    }
  });
