"use strict";
var Endabgabe_SS22;
(function (Endabgabe_SS22) {
    /*
    Aufgabe: <EIA2-Endabgabe-Fußball Simulation>
    Name: <Mirjam Mutter>
    Matrikel: <???????>
    Datum: <19.07.2022>
    Quellen:
    */
    window.addEventListener("load", handleLoad);
    Endabgabe_SS22.priceCounter = 0;
    Endabgabe_SS22.pestCounter = 0;
    // export let animationKey: boolean = true;
    Endabgabe_SS22.shootKey = false;
    Endabgabe_SS22.fields = [];
    Endabgabe_SS22.pests = [];
    Endabgabe_SS22.choosenAction = "standard";
    function handleLoad() {
        // HTML BUTTON ELEMENTE
        Endabgabe_SS22.menuBtnTomatoe = document.querySelector("#menuBtnTomatoe");
        Endabgabe_SS22.menuBtnAubergine = document.querySelector("#menuBtnAubergine");
        Endabgabe_SS22.menuBtnPotato = document.querySelector("#menuBtnPotato");
        Endabgabe_SS22.menuBtnCarrots = document.querySelector("#menuBtnCarrots");
        Endabgabe_SS22.menuBtnZucchini = document.querySelector("#menuBtnZucchini");
        Endabgabe_SS22.menuBtnWater = document.querySelector("#menuBtnWater");
        Endabgabe_SS22.menuBtnFertilize = document.querySelector("#menuBtnFertilize");
        Endabgabe_SS22.menuBtnHarvest = document.querySelector("#menuBtnHarvest");
        Endabgabe_SS22.menuBtnPesticide = document.querySelector("#menuBtnPesticide");
        Endabgabe_SS22.startBtn = document.querySelector("#startBtn");
        Endabgabe_SS22.imgBackground = document.querySelector("#canvasBackground");
        Endabgabe_SS22.imgTomatoeSeed = document.querySelector("#tomatoeSeed");
        Endabgabe_SS22.imgTomatoeStage1 = document.querySelector("#tomatoeStage1");
        Endabgabe_SS22.imgTomatoeStage2 = document.querySelector("#tomatoeStage2");
        Endabgabe_SS22.imgAubergineSeed = document.querySelector("#aubergineSeed");
        Endabgabe_SS22.imgAubergineStage1 = document.querySelector("#aubergineStage1");
        Endabgabe_SS22.imgAubergineStage2 = document.querySelector("#aubergineStage2");
        Endabgabe_SS22.imgPotatoSeed = document.querySelector("#potatoSeed");
        Endabgabe_SS22.imgPotatoStage1 = document.querySelector("#potatoStage1");
        Endabgabe_SS22.imgPotatoStage2 = document.querySelector("#potatoStage2");
        Endabgabe_SS22.imgCarrotSeed = document.querySelector("#carrotSeed");
        Endabgabe_SS22.imgCarrotStage1 = document.querySelector("#carrotStage1");
        Endabgabe_SS22.imgCarrotStage2 = document.querySelector("#carrotStage2");
        Endabgabe_SS22.imgZucchiniSeed = document.querySelector("#zucchiniSeed");
        Endabgabe_SS22.imgZucchiniStage1 = document.querySelector("#zucchiniStage1");
        Endabgabe_SS22.imgZucchiniStage2 = document.querySelector("#zucchiniStage2");
        //HTML PARAGRPAHEN
        Endabgabe_SS22.pCapital = document.querySelector("#capital");
        Endabgabe_SS22.pSellValueTomatoe = document.querySelector("#sellValueTomatoe");
        Endabgabe_SS22.pSellValueAubergine = document.querySelector("#sellValueAubergine");
        Endabgabe_SS22.pSellValuePotato = document.querySelector("#sellValuePotato");
        Endabgabe_SS22.pSellValueCarrot = document.querySelector("#sellValueCarrot");
        Endabgabe_SS22.pSellValueZuchini = document.querySelector("#sellValueZuchini");
        Endabgabe_SS22.pBuyValueTomatoe = document.querySelector("#buyValueTomatoe");
        Endabgabe_SS22.pBuyValueAubergine = document.querySelector("#buyValueAubergine");
        Endabgabe_SS22.pBuyValuePotato = document.querySelector("#buyValuePotato");
        Endabgabe_SS22.pBuyValueCarrot = document.querySelector("#buyValueCarrot");
        Endabgabe_SS22.pBuyValueZuchini = document.querySelector("#buyValueZuchini");
        Endabgabe_SS22.pBuyValueFertilize = document.querySelector("#buyValueFertilize");
        Endabgabe_SS22.pBuyValuePesticide = document.querySelector("#buyValuePesticide");
        //HTML ELEMENTE
        Endabgabe_SS22.chooseValueForm = document.querySelector("#chooseValueForm");
        //EVENT LISTENER
        Endabgabe_SS22.chooseValueForm.addEventListener("change", Endabgabe_SS22.handleChange);
        Endabgabe_SS22.menuBtnTomatoe.addEventListener("click", function () {
            Endabgabe_SS22.choosenAction = Endabgabe_SS22.menuBtnTomatoe.value;
            checkMoney(Endabgabe_SS22.moneyGlobal[0]);
        });
        Endabgabe_SS22.menuBtnAubergine.addEventListener("click", function () {
            Endabgabe_SS22.choosenAction = Endabgabe_SS22.menuBtnAubergine.value;
            checkMoney(Endabgabe_SS22.moneyGlobal[1]);
        });
        Endabgabe_SS22.menuBtnPotato.addEventListener("click", function () {
            Endabgabe_SS22.choosenAction = Endabgabe_SS22.menuBtnPotato.value;
            checkMoney(Endabgabe_SS22.moneyGlobal[2]);
        });
        Endabgabe_SS22.menuBtnCarrots.addEventListener("click", function () {
            Endabgabe_SS22.choosenAction = Endabgabe_SS22.menuBtnCarrots.value;
            checkMoney(Endabgabe_SS22.moneyGlobal[3]);
        });
        Endabgabe_SS22.menuBtnZucchini.addEventListener("click", function () {
            Endabgabe_SS22.choosenAction = Endabgabe_SS22.menuBtnZucchini.value;
            checkMoney(Endabgabe_SS22.moneyGlobal[4]);
        });
        Endabgabe_SS22.menuBtnWater.addEventListener("click", function () {
            Endabgabe_SS22.choosenAction = Endabgabe_SS22.menuBtnWater.value;
        });
        Endabgabe_SS22.menuBtnFertilize.addEventListener("click", function () {
            Endabgabe_SS22.choosenAction = Endabgabe_SS22.menuBtnFertilize.value;
            checkMoney(Endabgabe_SS22.moneyGlobal[10]);
        });
        Endabgabe_SS22.menuBtnHarvest.addEventListener("click", function () {
            Endabgabe_SS22.choosenAction = Endabgabe_SS22.menuBtnHarvest.value;
        });
        Endabgabe_SS22.menuBtnPesticide.addEventListener("click", function () {
            Endabgabe_SS22.choosenAction = Endabgabe_SS22.menuBtnPesticide.value;
            checkMoney(Endabgabe_SS22.moneyGlobal[11]);
        });
        Endabgabe_SS22.startBtn.addEventListener("click", function () {
            Endabgabe_SS22.chooseValueForm.classList.remove("visible");
        });
        //CANVAS
        Endabgabe_SS22.canvas = document.querySelector("canvas");
        Endabgabe_SS22.canvas.addEventListener("click", canvasClick);
        Endabgabe_SS22.crc2 = Endabgabe_SS22.canvas.getContext("2d");
        Endabgabe_SS22.canvas.width = 1000;
        Endabgabe_SS22.canvas.height = 625;
        //CALL ALL FUNCTIONS
        drawField();
        createPests();
        Endabgabe_SS22.imageData = Endabgabe_SS22.crc2.getImageData(0, 0, Endabgabe_SS22.canvas.width, Endabgabe_SS22.canvas.height);
        Endabgabe_SS22.handleChange();
        Endabgabe_SS22.priceChange();
        animate();
    }
    function checkMoney(_money) {
        let moneyPlaceholer = Endabgabe_SS22.playerCapital;
        if ((moneyPlaceholer - _money) <= 0) {
            window.alert("Kein Geld mehr");
            Endabgabe_SS22.choosenAction = "standard";
        }
    }
    function drawField() {
        let fieldX = 0;
        let fieldY = 0;
        let fieldNumber = 0;
        for (let indexA = 0; indexA < 5; indexA++) {
            for (let indexB = 0; indexB < 8; indexB++) {
                Endabgabe_SS22.fields.push(new Endabgabe_SS22.Field(new Endabgabe_SS22.Vector(fieldX, fieldY), fieldNumber));
                fieldX += 125;
                fieldNumber++;
            }
            fieldX = 0;
            fieldY += 125;
        }
    }
    function createPests() {
        for (let index = 0; index < 20; index++) {
            Endabgabe_SS22.pests.push(new Endabgabe_SS22.Pest());
        }
    }
    function hit(_field, _pos) {
        return (_pos.x >= _field.fieldPosition.x && _pos.x <= _field.fieldPosition.x + _field.getFieldLength && _pos.y >= _field.fieldPosition.y && _pos.y <= _field.fieldPosition.y + _field.getFieldLength);
    }
    function canvasClick(_event) {
        _event.preventDefault();
        let rect = Endabgabe_SS22.canvas.getBoundingClientRect();
        let mouse = new Endabgabe_SS22.Vector(_event.clientX - rect.left, _event.clientY - rect.top);
        for (let index = 0; index < Endabgabe_SS22.fields.length; index++) {
            if (hit(Endabgabe_SS22.fields[index], mouse)) {
                if (Endabgabe_SS22.choosenAction == "tomatoe" || Endabgabe_SS22.choosenAction == "aubergine" || Endabgabe_SS22.choosenAction == "potato" || Endabgabe_SS22.choosenAction == "carrot" || Endabgabe_SS22.choosenAction == "zucchini") {
                    if (Endabgabe_SS22.fields[index].fieldInfo == false) {
                        Endabgabe_SS22.fields[index].planting(Endabgabe_SS22.choosenAction);
                        Endabgabe_SS22.choosenAction = "standard";
                    }
                    else {
                        window.alert("Feld belegt");
                        Endabgabe_SS22.choosenAction = "standard";
                    }
                }
                else if (Endabgabe_SS22.choosenAction == "water") {
                    if (Endabgabe_SS22.fields[index].fieldInfo == true) {
                        Endabgabe_SS22.fields[index].plantOnField.watering(150);
                        Endabgabe_SS22.choosenAction = "standard";
                    }
                    else {
                        window.alert("Feld leer");
                        Endabgabe_SS22.choosenAction = "standard";
                    }
                }
                else if (Endabgabe_SS22.choosenAction == "fertilize") {
                    if (Endabgabe_SS22.fields[index].fieldInfo == true) {
                        Endabgabe_SS22.fields[index].plantOnField.fertilize(200);
                        Endabgabe_SS22.playerCapital -= Endabgabe_SS22.moneyGlobal[10];
                        Endabgabe_SS22.updateCapital();
                        Endabgabe_SS22.choosenAction = "standard";
                    }
                    else {
                        window.alert("Feld leer");
                        Endabgabe_SS22.choosenAction = "standard";
                    }
                }
                else if (Endabgabe_SS22.choosenAction == "pesticide") {
                    if (Endabgabe_SS22.fields[index].fieldInfo == true) {
                        if (Endabgabe_SS22.fields[index].plantOnField.infestedStatus == true) {
                            for (let indexB = 0; indexB < Endabgabe_SS22.pests.length; indexB++) {
                                if (Endabgabe_SS22.pests[indexB].assignedFieldID == Endabgabe_SS22.fields[index].fieldId) {
                                    Endabgabe_SS22.pests[indexB].setBusy(false);
                                    Endabgabe_SS22.pests[indexB].setAlive(false);
                                }
                            }
                            Endabgabe_SS22.fields[index].plantOnField.setInfested(false);
                            Endabgabe_SS22.playerCapital -= Endabgabe_SS22.moneyGlobal[11];
                            Endabgabe_SS22.updateCapital();
                            Endabgabe_SS22.choosenAction = "standard";
                        }
                        else {
                            window.alert("Keine Schädlinge");
                            Endabgabe_SS22.choosenAction = "standard";
                        }
                    }
                    else {
                        window.alert("Feld leer");
                        Endabgabe_SS22.choosenAction = "standard";
                    }
                }
                else if (Endabgabe_SS22.choosenAction == "harvest") {
                    if (Endabgabe_SS22.fields[index].fieldInfo == true) {
                        if (Endabgabe_SS22.fields[index].plantOnField.progress == true) {
                            Endabgabe_SS22.fields[index].setFieldOccupied(false);
                            Endabgabe_SS22.fields[index].plantOnField.setSellValue();
                            Endabgabe_SS22.fields[index].plantOnField.sell();
                            Endabgabe_SS22.updateCapital();
                        }
                        else {
                            window.alert("Noch nicht fertig");
                            Endabgabe_SS22.choosenAction = "standard";
                        }
                    }
                    else {
                        window.alert("Feld leer");
                        Endabgabe_SS22.choosenAction = "standard";
                    }
                }
            }
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        Endabgabe_SS22.crc2.clearRect(0, 0, Endabgabe_SS22.crc2.canvas.width, Endabgabe_SS22.crc2.canvas.height);
        Endabgabe_SS22.crc2.putImageData(Endabgabe_SS22.imageData, 0, 0);
        for (let index = 0; index < Endabgabe_SS22.fields.length; index++) {
            if (Endabgabe_SS22.fields[index].fieldInfo == true) {
                Endabgabe_SS22.fields[index].plantOnField.update();
            }
        }
        Endabgabe_SS22.priceCounter++;
        if (Endabgabe_SS22.priceCounter >= Math.floor(Math.random() * (5000 - 2000) + 2000)) {
            Endabgabe_SS22.priceCounter = 0;
            Endabgabe_SS22.priceChange();
        }
        Endabgabe_SS22.pestCounter++;
        if (Endabgabe_SS22.pestCounter >= Math.floor(Math.random() * (5000 - 2000) + 2000)) {
            let randomCanvasPosition = new Endabgabe_SS22.Vector(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 625));
            let randomField = Math.floor(Math.random() * 39);
            let randomPest = Math.floor(Math.random() * 19);
            if (Endabgabe_SS22.fields[randomField].fieldInfo == true && Endabgabe_SS22.pests[randomPest].pestAlive == false && Endabgabe_SS22.pests[randomPest].busyState == false) {
                Endabgabe_SS22.pests[randomPest].setSetup(new Endabgabe_SS22.Vector(randomCanvasPosition.x, randomCanvasPosition.y), randomField);
                Endabgabe_SS22.pestCounter = 0;
            }
        }
        for (let index = 0; index < Endabgabe_SS22.pests.length; index++) {
            Endabgabe_SS22.pests[index].update();
        }
    }
})(Endabgabe_SS22 || (Endabgabe_SS22 = {}));
//# sourceMappingURL=main.js.map