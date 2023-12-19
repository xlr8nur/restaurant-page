function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
  
    const chefImage = document.createElement("img");
    chefImage.src = "images/chef.png";
    chefImage.alt = "Chef";
  
    home.appendChild(createParagraph("Şehrinizin En İyi Tostçusu"));
    home.appendChild(createParagraph("2023'den Beri"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("İnternetten sipariş ver yada bizi ara!"));
  
    return home;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;