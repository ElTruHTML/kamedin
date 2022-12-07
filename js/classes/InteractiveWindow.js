
//this class solely manages the behavior of the interactive Window withing the
//#planning-phase container

export class InteractiveWindow {
    constructor() {
        this.sbItemLayout = document.getElementById("sBar-layout");
        this.sbItemColors = document.getElementById("sBar-colors");
        this.sbItemResponsive = document.getElementById("sBar-responsive");

        this.cardText = document.querySelector("#planning-phase .card-body p");
        this.cardTextVisible = true;

        this.iWindow = document.getElementById("interactive-window");
        this.iWindowVisible = false;
    }
    setListeners() {
        this.sbItemLayout.addEventListener("click" , () => {
            this._fadeOutCardText();
            //first takes .2s
            setTimeout(() => {
                this._closeIWIN();
            }, 210);
            //second takes .3s
            setTimeout(() => {
                this._openIWIN();
            }, 710);
            //here comes the specific part of the clicked sidebar-item:
            this.iWindow.classList.add("iWin-layout");
            if(document.getElementById("description-container") === null)
            {
                setTimeout(() => {
                    this._getLayoutDOM();
                    document.getElementById("description-container").style.opacity = "1";
                    document.getElementById("content-container").style.opacity = "1";
                }, 1000);
            }
        });
        this.sbItemColors.addEventListener("click" , () => {
            this._fadeOutCardText();
            //first takes .2s
            setTimeout(() => {
                this._closeIWIN();
            }, 210);
            //second takes .3s
            setTimeout(() => {
                this._openIWIN();
            }, 710);
            //here comes the specific part of the clicked sidebar-item:
        });
        this.sbItemResponsive.addEventListener("click" , () => {
            this._fadeOutCardText();
            //first takes .2s
            setTimeout(() => {
                this._closeIWIN();
            }, 210);
            //second takes .3s
            setTimeout(() => {
                this._openIWIN();
            }, 710);
            //here comes the specific part of the clicked sidebar-item:
        });
    }
    _getLayoutDOM() {
        let pCon = document.createElement("div");
        pCon.setAttribute("id", "description-container");

            let p = document.createElement("p");
            p.innerText = "Preparing different kinds of layouts ensures the best fit for your project";

        pCon.append(p);

        let cCon = document.createElement("div");
        cCon.setAttribute("id" , "content-container");

            let lFrame = document.createElement("div");
            lFrame.setAttribute("id" , "layout-frame");

                let header = document.createElement("div");
                header.setAttribute("id", "lFrame-header");

                let nav1 = document.createElement("div");
                nav1.setAttribute("id", "lFrame-nav1");

                let nav2 = document.createElement("div");
                nav2.setAttribute("id", "lFrame-nav2");

                let main = document.createElement("div");
                main.setAttribute("id", "lFrame-main");
            lFrame.append(header);
            lFrame.append(nav1);
            lFrame.append(nav2);
            lFrame.append(main);

        cCon.append(lFrame);

        this.iWindow.append(pCon);
        this.iWindow.append(cCon);
    }











    _fadeOutCardText() {
        if(this.cardTextVisible === true)
        {
            this.cardText.style.opacity = "0";
            this.cardTextVisible = false;
        }
        //cardTexts transition: opacity .2s linear

        setTimeout(() => {
            this.cardText.display = "none";
        }, 220);
    }
    _closeIWIN() {
        if(document.getElementById("description-container") !== null)
        {
            document.getElementById("description-container").remove();
            document.getElementById("content-container").remove();
        }
        if(this.iWindowVisible === false)
        {
            this.iWindow.style.opacity = "1";
            this.iWindow.style.display = "flex";
        }
        this.iWindow.style.width = "0%";
        this.iWindow.style.left = "50%";
    }
    _openIWIN() {
        this.iWindow.style.width = "98%";
        this.iWindow.style.left = "1%";
    }
}