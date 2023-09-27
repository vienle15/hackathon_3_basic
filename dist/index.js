"use strict";
// Tạo dictionary
let dictionary = {
    apple: "táo",
    cat: "mèo",
    dog: "chó",
};
// Khai báo biến dialog
let dialog;
// Hàm xử lý khi người dùng nhấn nút "Tìm"
function handleSearch() {
    // Lấy từ cần tìm từ ô nhập liệu
    let wordInput = document.getElementById("inp-word");
    let word = wordInput.value;
    let meaning = dictionary[word];
    if (meaning) {
        // Hiển thị nghĩa của từ
        let meaningElement = document.getElementById("meaning");
        meaningElement.innerHTML = meaning;
    }
    else {
        // Hiển thị thông báo không tìm thấy từ
        let meaningElement = document.getElementById("meaning");
        meaningElement.innerHTML = "Không tìm thấy từ, hãy tạo mới";
        // Tạo hộp thoại tạo từ mới
        dialog = document.getElementById("create-dialog");
        dialog.showModal();
    }
}
// Hàm xử lý khi người dùng nhấn nút "Tạo"
function handleCreate() {
    // Lấy nghĩa của từ từ ô nhập liệu
    let meaningInput = document.getElementById("inp-meaning");
    let meaning = meaningInput.value;
    // Lấy từ cần tạo từ ô nhập liệu
    let wordInput = document.getElementById("inp-word");
    let word = wordInput.value;
    // Thêm từ mới vào dictionary
    if (!dictionary.hasOwnProperty(word)) {
        dictionary[word] = meaning;
        // Lưu dictionary vào local storage
        saveDictionary();
        // Hiển thị thông báo thành công
        alert("Từ mới đã được thêm vào từ điển!");
    }
    else {
        // Hiển thị thông báo từ đã tồn tại
        alert("Từ đã tồn tại trong từ điển!");
    }
    // Đóng hộp thoại
    dialog.close();
}
// Hàm lưu dictionary vào local storage
function saveDictionary() {
    // Chuyển dictionary sang dạng JSON
    let json = JSON.stringify(dictionary);
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
// Xử lý khi trang được tải
window.onload = function () {
    // Tải dictionary từ local storage vào memory
    loadDictionary();
};
// Hàm loadDictionary
function loadDictionary() {
    // Lấy dữ liệu từ local storage
    let json = localStorage.getItem("dictionary");
    // Nếu có dữ liệu thì gán vào dictionary
    if (json) {
        dictionary = JSON.parse(json);
    }
}
