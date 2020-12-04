import "./dist/sgl.bundle.js";

document.getElementById("generate").addEventListener("click", async function() {
    new SocialGraphicsLibrary.multiGenerator(document.getElementById("tName").value, document.getElementById("uName").value, [{
        mode: "logo",
        containerId: "img-container-1",
        imgMode: "webp",
        generateLink: true
    }, {
        mode: "twitter-title",
        containerId: "img-container-2",
        imgMode: "jpeg	",
        generateLink: true
    }])
})