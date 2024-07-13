 let text1 = document.querySelectorAll(".code");
        text1.forEach((input, index) => {
            input.addEventListener("input", () => {
                if (input.value.length == 1) {
                    if (text1[index + 1]) {
                        text1[index + 1].focus();
                    }
                }
				console.log('input event triggered');
            });
            input.addEventListener("keyup", (event) => {
                if (event.key == "Backspace" && input.value.length == 0) {
                    if (text1[index - 1]) {
                        text1[index - 1].focus();
                    }
                }
            });
        })