
//this class solely manages the behavior of the interactive Window withing the
//#working-phase container

export class InteractiveWindow {
    constructor() {
        this.sbItemLayout = document.getElementById("sBar-layout");
        this.sbItemColors = document.getElementById("sBar-colors");
        this.sbItemResponsive = document.getElementById("sBar-responsive");

        this.cardText = document.querySelector("#working-phase .card-body p");
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
                setTimeout(() => {
                    this._getLayoutDOM();
                    document.getElementById("description-container").style.opacity = "1";
                    document.getElementById("content-container").style.opacity = "1";
                }, 1000);
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
            this.iWindow.classList.add("iWin-layout");
                setTimeout(() => {
                    this._getColorsDOM();
                    document.getElementById("description-container").style.opacity = "1";
                    document.getElementById("content-container").style.opacity = "1";
                }, 1000);
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
            this.iWindow.classList.add("iWin-layout");
                setTimeout(() => {
                    this._getResponsiveDOM();
                    document.getElementById("description-container").style.opacity = "1";
                    document.getElementById("content-container").style.opacity = "1";
                }, 1000);
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
    _getColorsDOM() {
        let pCon = document.createElement("div");
        pCon.setAttribute("id", "description-container");

            let p = document.createElement("p");
            p.innerText = "Colors play a huge part in the way your visitors conceive your content!";

        pCon.append(p);

        let cCon = document.createElement("div");
        cCon.setAttribute("id" , "content-container");

            let cFrame = document.createElement("div");
            cFrame.setAttribute("id", "colors-frame");
            cFrame.classList.add("palette3prim");

                let header = document.createElement("div");
                header.setAttribute("id" , "cFrame-header");

                let nav = document.createElement("div");
                nav.setAttribute("id" , "cFrame-nav");
                nav.classList.add("palette3second");
                    let nav1 = document.createElement("div");
                    nav1.setAttribute("id" , "cFrame-nav1");
                    nav1.classList.add("cFrame-nav-items");
                    nav1.classList.add("palette3links");
                    nav1.innerText = "Link";
                    let nav2 = document.createElement("div");
                    nav2.setAttribute("id" , "cFrame-nav2");
                    nav2.classList.add("cFrame-nav-items");
                    nav2.classList.add("palette3links");
                    nav2.innerText = "Link";
                    let nav3 = document.createElement("div");
                    nav3.setAttribute("id" , "cFrame-nav3");
                    nav3.classList.add("cFrame-nav-items");
                    nav3.classList.add("palette3links");
                    nav3.innerText = "Link";
                    let nav4 = document.createElement("div");
                    nav4.setAttribute("id" , "cFrame-nav4");
                    nav4.classList.add("cFrame-nav-items");
                    nav4.classList.add("palette3links");
                    nav4.innerText = "Link";
                    let nav5 = document.createElement("div");
                    nav5.setAttribute("id" , "cFrame-nav5");
                    nav5.classList.add("cFrame-nav-items");
                    nav5.classList.add("palette3links");
                    nav5.innerText = "Link";
                nav.append(nav1);
                nav.append(nav2);
                nav.append(nav3);
                nav.append(nav4);
                nav.append(nav5);

                let main = document.createElement("div");
                main.setAttribute("id" , "cFrame-main");
                    let item1 = document.createElement("div");
                    item1.classList.add("cFrame-main-items");
                    item1.classList.add("palette3accent");
                    let item2 = document.createElement("div");
                    item2.classList.add("cFrame-main-items");
                    item2.classList.add("palette3accent");
                main.append(item1);
                main.append(item2);

            cFrame.append(header);
            cFrame.append(nav);
            cFrame.append(main);

        cCon.append(cFrame);

        this.iWindow.append(pCon);
        this.iWindow.append(cCon);
    }
    _getResponsiveDOM() {
        let pCon = document.createElement("div");
        pCon.setAttribute("id", "description-container");

            let p = document.createElement("p");
            p.innerText = "Of course your site will look as you wish on EVERY device!";

        pCon.append(p);

        let cCon = document.createElement("div");
        cCon.setAttribute("id" , "content-container");

            let rFrame = document.createElement("div");
            rFrame.setAttribute("id", "responsive-frame");

                let picDes = document.createElement("div");
                picDes.setAttribute("id", "desktop-img-container");

                let picMob = document.createElement("div");
                picMob.setAttribute("id", "mobile-img-container");

            rFrame.append(picDes);
            rFrame.append(picMob);
            
        cCon.append(rFrame);

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