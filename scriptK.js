
        const screen = document.getElementById('screen');
        const container = document.getElementById('btn-container');
        const listOperator = ['+','-','/','*'];
        container.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON') {
                const btnText = e.target.innerText;
                const lastChar = screen.innerText.slice(-1);
                if (btnText === 'C') {
                    screen.innerText = '0';
                } 
                else if (btnText === '=') {
                    if (screen.innerText === "3105") {
                       screen.innerText = "I Love TmR2eW4=";
                       screen.style.backgroundColor = "gold";
                       screen.style.color = "black";
                    } else {
                        try {
                            screen.innerText = eval(screen.innerText)
                        } catch {
                            screen.innerText = "error";
                            
                        }
                    }
                }
                else if (btnText === "<") {
                    if (screen.innerText.length > 1) {
                        screen.innerText = screen.innerText.slice(0,-1);
                    } else {
                        screen.innerText = 0;
                    }
                }  
                else if (listOperator.includes(btnText)) {
                    if (listOperator.includes(lastChar)) {
                      screen.innerText = screen.innerText.slice(0,-1) + btnText;
                    }
                    else {
                        screen.innerText += btnText;
                    }
                }
               
                
                else {
                    if (screen.innerText === '0' || screen.innerText === 'Error') {
                        screen.innerText = btnText;
                    } else {
                        screen.innerText += btnText;
                    }
                }

             }
             document.addEventListener('keydown', function (e) {
                if (e.keyCode == "123") {
                    e.preventDefault ();
                    return false;
                } if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J' .charCodeAt(0) || e.keyCode == 'U' .charCodeAt(0)) {
                     e.preventDefault ();
                     return false ;            
                } if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                    e.preventDefault ();
                    return false;
                }
            })
        });
    