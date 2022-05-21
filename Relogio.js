class Relogio {
    constructor(){
        this.minutes = document.querySelector("#minutes");
        this.seconds = document.getElementById("seconds");
        this.hours = document.getElementById("hours");
        this.search = document.getElementById("search");
        this.button = document.getElementById("button_search");
        this.brow = document.querySelector("#brow");
        this.day = document.querySelector("#day");
        this.timezone = "America/Sao_Paulo";

        this.initialize();
    }
    initialize() {
        console.log("Relogio Iniciado");
        this.setTimezonesInSelect();
        this.alterTimezone();
        this.initRelogio();
    }
    alterTimezone(){
        this.button.addEventListener("click", () => {
            this.timezone = this.search.value;
            //alert(this.timezone);
        })
    }
    initRelogio() {
        setInterval( () => {
            const date = new Date();
            
            this.day.innerHTML = date.toLocaleDateString("pt-BR", {
                month: "long",
                day: "2-digit",
                year: "numeric",
                timeZone: this.timezone,
            });
                var timeString = date.toLocaleTimeString("pt-BR", {
                    hour12: false,
                    timeZone: this.timezone,
                });
                let array = timeString.split(":");
                this.hours.innerHTML = array[0];
                this.minutes.innerHTML = array[1];
                this.seconds.innerHTML = array[2];
        }, 1000);
    }
    setTimezonesInSelect() {
        rows.forEach((element) =>{
            //console.log(element)
            element.newRow.forEach(row => {
                let option = document.createElement("option");
                option.innerText = row.tz;
                option.value = row.tz;
                this.brow.appendChild(option);
                if(row.tz = "America/Sao_Paulo"){
                    this.search.value = row.tz;
                }
            })
        });
    }
}