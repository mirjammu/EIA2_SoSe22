namespace Endabgabe_SS22 {
    /*
    Aufgabe: <EIA2-Endabgabe-Fußball Simulation>
    Name: <Mirjam Mutter>
    Matrikel: <???????>
    Datum: <19.07.2022>
    Quellen: 
    */
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let priceCounter: number = 0;
    export let pestCounter: number = 0;

    export let imageData: ImageData;
    export let key: boolean;
    // export let animationKey: boolean = true;
    export let shootKey: boolean = false;
    export let fields: Field[] = [];
    export let pests: Pest[] = [];
    export let form: HTMLDivElement;
    export let choosenAction: string = "standard";
    export let playerCapital: number;

    export let menuBtnTomatoe: HTMLButtonElement;
    export let menuBtnAubergine: HTMLButtonElement;
    export let menuBtnPotato: HTMLButtonElement;
    export let menuBtnCarrots: HTMLButtonElement;
    export let menuBtnZucchini: HTMLButtonElement;
    export let menuBtnWater: HTMLButtonElement;
    export let menuBtnFertilize: HTMLButtonElement;
    export let menuBtnHarvest: HTMLButtonElement;
    export let menuBtnPesticide: HTMLButtonElement;

    export let imgBackground: HTMLImageElement;
    export let imgTomatoeSeed: HTMLImageElement;
    export let imgTomatoeStage1: HTMLImageElement;
    export let imgTomatoeStage2: HTMLImageElement;

    export let imgAubergineSeed: HTMLImageElement;
    export let imgAubergineStage1: HTMLImageElement;
    export let imgAubergineStage2: HTMLImageElement;

    export let imgPotatoSeed: HTMLImageElement;
    export let imgPotatoStage1: HTMLImageElement;
    export let imgPotatoStage2: HTMLImageElement;

    export let imgCarrotSeed: HTMLImageElement;
    export let imgCarrotStage1: HTMLImageElement;
    export let imgCarrotStage2: HTMLImageElement;

    export let imgZucchiniSeed: HTMLImageElement;
    export let imgZucchiniStage1: HTMLImageElement;
    export let imgZucchiniStage2: HTMLImageElement;
  
    export let pCapital: HTMLParagraphElement;
    export let pSellValueTomatoe: HTMLParagraphElement;
    export let pSellValueAubergine: HTMLParagraphElement;
    export let pSellValuePotato: HTMLParagraphElement;
    export let pSellValueCarrot: HTMLParagraphElement;
    export let pSellValueZuchini: HTMLParagraphElement;

    export let pBuyValueTomatoe: HTMLParagraphElement;
    export let pBuyValueAubergine: HTMLParagraphElement;
    export let pBuyValuePotato: HTMLParagraphElement;
    export let pBuyValueCarrot: HTMLParagraphElement;
    export let pBuyValueZuchini: HTMLParagraphElement;

    export let pBuyValueFertilize: HTMLParagraphElement;
    export let pBuyValuePesticide: HTMLParagraphElement;

    export let startBtn: HTMLButtonElement;

    export let chooseValueForm: HTMLDivElement;

    function handleLoad(): void {
        // HTML BUTTON ELEMENTE
        menuBtnTomatoe = <HTMLButtonElement>document.querySelector("#menuBtnTomatoe");
        menuBtnAubergine = <HTMLButtonElement>document.querySelector("#menuBtnAubergine");
        menuBtnPotato = <HTMLButtonElement>document.querySelector("#menuBtnPotato");
        menuBtnCarrots = <HTMLButtonElement>document.querySelector("#menuBtnCarrots");
        menuBtnZucchini = <HTMLButtonElement>document.querySelector("#menuBtnZucchini");
        menuBtnWater = <HTMLButtonElement>document.querySelector("#menuBtnWater");
        menuBtnFertilize = <HTMLButtonElement>document.querySelector("#menuBtnFertilize");
        menuBtnHarvest = <HTMLButtonElement>document.querySelector("#menuBtnHarvest");
        menuBtnPesticide = <HTMLButtonElement>document.querySelector("#menuBtnPesticide");

        startBtn = <HTMLButtonElement>document.querySelector("#startBtn");

        imgBackground = <HTMLImageElement>document.querySelector("#canvasBackground");
        imgTomatoeSeed = <HTMLImageElement>document.querySelector("#tomatoeSeed");
        imgTomatoeStage1 = <HTMLImageElement>document.querySelector("#tomatoeStage1");
        imgTomatoeStage2 = <HTMLImageElement>document.querySelector("#tomatoeStage2");

        imgAubergineSeed = <HTMLImageElement>document.querySelector("#aubergineSeed");
        imgAubergineStage1 = <HTMLImageElement>document.querySelector("#aubergineStage1");
        imgAubergineStage2 = <HTMLImageElement>document.querySelector("#aubergineStage2");

        imgPotatoSeed = <HTMLImageElement>document.querySelector("#potatoSeed");
        imgPotatoStage1 = <HTMLImageElement>document.querySelector("#potatoStage1");
        imgPotatoStage2 = <HTMLImageElement>document.querySelector("#potatoStage2");

        imgCarrotSeed = <HTMLImageElement>document.querySelector("#carrotSeed");
        imgCarrotStage1 = <HTMLImageElement>document.querySelector("#carrotStage1");
        imgCarrotStage2 = <HTMLImageElement>document.querySelector("#carrotStage2");

        imgZucchiniSeed = <HTMLImageElement>document.querySelector("#zucchiniSeed");
        imgZucchiniStage1 = <HTMLImageElement>document.querySelector("#zucchiniStage1");
        imgZucchiniStage2 = <HTMLImageElement>document.querySelector("#zucchiniStage2");

        //HTML PARAGRPAHEN
        pCapital = <HTMLParagraphElement>document.querySelector("#capital");
        pSellValueTomatoe = <HTMLParagraphElement>document.querySelector("#sellValueTomatoe");
        pSellValueAubergine = <HTMLParagraphElement>document.querySelector("#sellValueAubergine");
        pSellValuePotato = <HTMLParagraphElement>document.querySelector("#sellValuePotato");
        pSellValueCarrot = <HTMLParagraphElement>document.querySelector("#sellValueCarrot");
        pSellValueZuchini = <HTMLParagraphElement>document.querySelector("#sellValueZuchini");
        pBuyValueTomatoe = <HTMLParagraphElement>document.querySelector("#buyValueTomatoe");
        pBuyValueAubergine = <HTMLParagraphElement>document.querySelector("#buyValueAubergine");
        pBuyValuePotato = <HTMLParagraphElement>document.querySelector("#buyValuePotato");
        pBuyValueCarrot = <HTMLParagraphElement>document.querySelector("#buyValueCarrot");
        pBuyValueZuchini = <HTMLParagraphElement>document.querySelector("#buyValueZuchini");
        pBuyValueFertilize = <HTMLParagraphElement>document.querySelector("#buyValueFertilize");
        pBuyValuePesticide = <HTMLParagraphElement>document.querySelector("#buyValuePesticide");

        //HTML ELEMENTE
        chooseValueForm = <HTMLDivElement>document.querySelector("#chooseValueForm");

        //EVENT LISTENER
        chooseValueForm.addEventListener("change", handleChange);

        menuBtnTomatoe.addEventListener("click", function (): void {
            choosenAction = menuBtnTomatoe.value;
            checkMoney(moneyGlobal[0]);
        });
        menuBtnAubergine.addEventListener("click", function (): void {
            choosenAction = menuBtnAubergine.value;
            checkMoney(moneyGlobal[1]);
        });
        menuBtnPotato.addEventListener("click", function (): void {
            choosenAction = menuBtnPotato.value;
            checkMoney(moneyGlobal[2]);
        });
        menuBtnCarrots.addEventListener("click", function (): void {
            choosenAction = menuBtnCarrots.value;
            checkMoney(moneyGlobal[3]);
        });
        menuBtnZucchini.addEventListener("click", function (): void {
            choosenAction = menuBtnZucchini.value;
            checkMoney(moneyGlobal[4]);
        });
        menuBtnWater.addEventListener("click", function (): void {
            choosenAction = menuBtnWater.value;
        });
        menuBtnFertilize.addEventListener("click", function (): void {
            choosenAction = menuBtnFertilize.value;
            checkMoney(moneyGlobal[10]);
        });
        menuBtnHarvest.addEventListener("click", function (): void {
            choosenAction = menuBtnHarvest.value;
        });
        menuBtnPesticide.addEventListener("click", function (): void {
            choosenAction = menuBtnPesticide.value;
            checkMoney(moneyGlobal[11]);
        });

        startBtn.addEventListener("click", function (): void {
            chooseValueForm.classList.remove("visible");
        });

        //CANVAS
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        canvas.addEventListener("click", canvasClick);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = 1000;
        canvas.height = 625;
        //CALL ALL FUNCTIONS
        drawField();
        createPests();
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        handleChange();
        priceChange();
        animate();
    }


    function checkMoney(_money: number): void {
        let moneyPlaceholer: number = playerCapital;
        if ((moneyPlaceholer - _money) <= 0) {
            window.alert("Kein Geld mehr");
            choosenAction = "standard";
        }
    }

    function drawField(): void {
        let fieldX: number = 0;
        let fieldY: number = 0;
        let fieldNumber: number = 0;
        for (let indexA: number = 0; indexA < 5; indexA++) {

            for (let indexB: number = 0; indexB < 8; indexB++) {
                fields.push(new Field(new Vector(fieldX, fieldY), fieldNumber));
                fieldX += 125;
                fieldNumber++;
            }
            
            fieldX = 0;
            fieldY += 125;
        }
    }

    function createPests(): void {
        for (let index: number = 0; index < 20; index++) {
            pests.push(new Pest());
        }
    }

    function hit(_field: Field, _pos: Vector): boolean {
        return (_pos.x >= _field.fieldPosition.x && _pos.x <= _field.fieldPosition.x + _field.getFieldLength && _pos.y >= _field.fieldPosition.y && _pos.y <= _field.fieldPosition.y + _field.getFieldLength);
    }

    function canvasClick(_event: MouseEvent): void {
        _event.preventDefault();
        let rect: DOMRect = canvas.getBoundingClientRect();
        let mouse: Vector = new Vector(_event.clientX - rect.left, _event.clientY - rect.top);
        for (let index: number = 0; index < fields.length; index++) {
            if (hit(fields[index], mouse)) {

                if (choosenAction == "tomatoe" || choosenAction == "aubergine" || choosenAction == "potato" || choosenAction == "carrot" || choosenAction == "zucchini") {
                    if (fields[index].fieldInfo == false) {
                        fields[index].planting(choosenAction);
                        choosenAction = "standard";
                    }
                    else {
                        window.alert("Feld belegt");
                        choosenAction = "standard";
                    }
                }
                else if (choosenAction == "water") {
                    if (fields[index].fieldInfo == true) {
                        fields[index].plantOnField.watering(150);
                        choosenAction = "standard";
                    }
                    else {
                        window.alert("Feld leer");
                        choosenAction = "standard";
                    }
                }

                else if (choosenAction == "fertilize") {
                    if (fields[index].fieldInfo == true) {
                        fields[index].plantOnField.fertilize(200);
                        playerCapital -= moneyGlobal[10];
                        updateCapital();
                        choosenAction = "standard";
                    }
                    else {
                        window.alert("Feld leer");
                        choosenAction = "standard";
                    }
                }

                else if (choosenAction == "pesticide") {
                    if (fields[index].fieldInfo == true) {
                        if (fields[index].plantOnField.infestedStatus == true) {
                            for (let indexB: number = 0; indexB < pests.length; indexB++) {
                                if (pests[indexB].assignedFieldID == fields[index].fieldId) {
                                    pests[indexB].setBusy(false);
                                    pests[indexB].setAlive(false);
                                }
                            }
                            fields[index].plantOnField.setInfested(false);
                            playerCapital -= moneyGlobal[11];
                            updateCapital();
                            choosenAction = "standard";
                        }
                        else {
                            window.alert("Keine Schädlinge");
                            choosenAction = "standard";
                        }
                    }
                    else {
                        window.alert("Feld leer");
                        choosenAction = "standard";
                    }
                }

                else if (choosenAction == "harvest") {
                    if (fields[index].fieldInfo == true) {
                        if (fields[index].plantOnField.progress == true) {
                            fields[index].setFieldOccupied(false);
                            fields[index].plantOnField.setSellValue();
                            fields[index].plantOnField.sell();
                            updateCapital();
                        }
                        else {
                            window.alert("Noch nicht fertig");
                            choosenAction = "standard";
                        }
                    }
                    else {
                        window.alert("Feld leer");
                        choosenAction = "standard";
                    }
                }


            }
        }
    }

    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        for (let index: number = 0; index < fields.length; index++) {
            if (fields[index].fieldInfo == true) {
                fields[index].plantOnField.update();

            }
        }
        priceCounter++;
        if (priceCounter >= Math.floor(Math.random() * (5000 - 2000) + 2000)) {
            priceCounter = 0;
            priceChange();
        }

        pestCounter++;
        if (pestCounter >= Math.floor(Math.random() * (5000 - 2000) + 2000)) {
            let randomCanvasPosition: Vector = new Vector(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 625));
            let randomField: number = Math.floor(Math.random() * 39);
            let randomPest: number = Math.floor(Math.random() * 19);

            if (fields[randomField].fieldInfo == true && pests[randomPest].pestAlive == false && pests[randomPest].busyState == false) {
                pests[randomPest].setSetup(new Vector(randomCanvasPosition.x, randomCanvasPosition.y), randomField);
                pestCounter = 0;
            }
        }

        for (let index: number = 0; index < pests.length; index++) {
            pests[index].update();
        }
    }
}

