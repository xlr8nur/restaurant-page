(()=>{"use strict";
function e(e){
    const t=document.createElement("p");
    return t.textContent=e,t}
    const t=function() {
        const t=document.getElementById("main");
        t.textContent="",
        t.appendChild(function(){
            const t=document.createElement("div");
            t.classList.add("home");
            const n=document.createElement("img");
            return n.src = "images/chef.png",
            n.alt = "Chef",
            t.appendChild(e("Şehrinizin En İyi Tostçusu")),
            t.appendChild(e("2023'ten Beri")),
            t.appendChild(n),
            t.appendChild(e("İnternetten sipariş ver yada bizi ara!")),t}())};
            function n(e,t){
                const n=document.createElement("div");
                n.classList.add("menu-item");
                const a=document.createElement("h2");
                a.textContent=e;
                const o=document.createElement("p");
                o.textContent=t;
                const c=document.createElement("img");
                return c.src=`images/tost/${e.toLowerCase()}.jpg`,
                c.alt=`${e}`,n.appendChild(c),
                n.appendChild(a),n.appendChild(o),n}
                function a(){
                    const e=document.createElement("header");
                e.classList.add("header");
                const a=document.createElement("h1");
                return a.classList.add("restaurant-name"),
                a.textContent="Tostçu'nun Yeri",
                e.appendChild(a),
                e.appendChild(function(){
                    const e=document.createElement("nav"),
                    a=document.createElement("button");
                    a.classList.add("button-nav"),
                    a.textContent="Ana Sayfa",
                    a.addEventListener("click",(e=>{
                        e.target.classList.contains("active")||(o(a),t())}));
                        const c = document.createElement("button");
                        c.classList.add("button-nav"),
                        c.textContent="Menü",
                        c.addEventListener("click",
                        (e=>{e.target.classList.contains("active")||(o(c),
                        function(){const e=document.getElementById("main");
                        e.textContent="",
                        e.appendChild(function(){
                            const e = document.createElement("div");
                            return e.classList.add("menu"),
                            e.appendChild(n("Ekmek","Biber, Tereyağı, Sarımsak")),
                            e.appendChild(n("Karides","Biber, Tereyağı, Sarımsak")),
                            e.appendChild(n("Karışık","Biber, Tereyağı, Sarımsak")),
                            e.appendChild(n("Acılı","Biber, Tereyağı, Sarımsak")),
                            e.appendChild(n("Acısız","Biber, Tereyağı, Sarımsak")),
                            e.appendChild(n("Zeytinli","Biber, Tereyağı, Sarımsak")),
                            e.appendChild(n("Sucuksuz","Biber, Tereyağı, Sarımsak")),
                            e.appendChild(n("Sucuklu","Biber, Tereyağı, Sarımsak")),
                            e}())}())}));
                            const i=document.createElement("button");
                            return i.classList.add("button-nav"),
                            i.textContent="İletişim",
                            i.addEventListener("click",
                            (e=>{e.target.classList.contains("active")||(o(i),
                            function(){
                                const e=document.getElementById("main");
                                e.textContent="",
                                e.appendChild(function(){
                                    const e=document.createElement("div");
                                    e.classList.add("contact");
                            const t=document.createElement("p");
                            t.textContent="📱 999 999 99";
                            const n=document.createElement("p");
                            n.textContent="🏡 Mahalle Mahallesi, Sokak Sokağı, Çanakkale, Türkiye";
                            const a = document.createElement("img");
                            return a.src="images/location.png",
                            a.alt="Tostçunun Yeri",
                            e.appendChild(t),
                            e.appendChild(n),
                            e.appendChild(a),e}())}())})),
                            e.appendChild(a),
                            e.appendChild(c),
                            e.appendChild(i),e}()),e}
                            function o(e){document.querySelectorAll(".button-nav").forEach(
                                (e=>{e!==this&&e.classList.remove("active")})),
                                e.classList.add("active")}!function(){
                                    const e=document.getElementById("content");
                                    e.appendChild(a()),
                                    e.appendChild(function(){
                                        const e=document.createElement("main");
                                        return e.classList.add("main"),
                                        e.setAttribute("id","main"),e}()),e.appendChild(function(){
                                            const e=document.createElement("footer");
                                        e.classList.add("footer");
                                        const t=document.createElement("p");
                                        t.textContent="Made by 2023 liva";
                                        const n=document.createElement("a");
                                        n.href="https://github.com/thecodingliva";
                                        const a=document.createElement("i");
                                        return a.classList.add("fab"),
                                        a.classList.add("fa-github"),
                                        n.appendChild(a),e.appendChild(t),
                                        e.appendChild(n),e}()),
                                        o(document.querySelector(".button-nav")),t()}()})();