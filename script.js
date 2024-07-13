let text1 = document.querySelectorAll(".code");
text1.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value.length == 1) {
            if (text1[index + 1]) {
                text1[index + 1].focus();
            }
        }
    });
    input.addEventListener("keydown", (event) => {
        if (event.key == "Backspace" && input.value.length == 0) {
            if (text1[index - 1]) {
                text1[index - 1].focus();
            }
        }
    });
});