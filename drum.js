const emitirSonido = (arg) => {
    if (arg.keyCode == 65 || arg.target && arg.target.id === "b1") {
        let audio1 = document.getElementById("id11");
        audio1.currentTime = 0;
        audio1.play();
    } else if (arg.keyCode == 83 || arg.target && arg.target.id === "b2") {
        let audio2 = document.getElementById("id12");
        audio2.currentTime = 0;
        audio2.play();
    } else if (arg.keyCode == 68 || arg.target && arg.target.id === "b3") {
        let audio3 = document.getElementById("id13");
        audio3.currentTime = 0;
        audio3.play();
    } else if (arg.keyCode == 70 || arg.target && arg.target.id === "b4") {
        let audio4 = document.getElementById("id14");
        audio4.currentTime = 0;
        audio4.play();
    } else if (arg.keyCode == 71 || arg.target && arg.target.id === "b5") {
        let audio5 = document.getElementById("id15");
        audio5.currentTime = 0;
        audio5.play();
    } else if (arg.keyCode == 72 || arg.target && arg.target.id === "b6") {
        let audio6 = document.getElementById("id16");
        audio6.currentTime = 0;
        audio6.play();
    } else if (arg.keyCode == 74 || arg.target && arg.target.id === "b7") {
        let audio7 = document.getElementById("id17");
        audio7.currentTime = 0;
        audio7.play();
    } else if (arg.keyCode == 75 || arg.target && arg.target.id === "b8") {
        let audio8 = document.getElementById("id18");
        audio8.currentTime = 0;
        audio8.play();
    } else if (arg.keyCode == 76 || arg.target && arg.target.id === "b9") {
        let audio9 = document.getElementById("id19");
        audio9.currentTime = 0;
        audio9.play();
    } 
}

document.addEventListener("keydown", emitirSonido, false);
document.addEventListener("click", emitirSonido, false);
