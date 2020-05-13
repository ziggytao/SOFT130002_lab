const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
for(var i = 0; i < 4; i++){
    var item = document.createElement("div");
    item.className = "item";
    var head = document.createElement("h4");
    var node = document.createTextNode("Genre : "+works[i].tips);
    head.appendChild(node);
    item.appendChild(head);
    var main = document.getElementsByClassName("flex-container justify");
    main[0].appendChild(item);

    var author_info = document.createElement("div");
    author_info.className = "inner-box";
    var author = document.createElement("h3");
    author.style.float = "left";
    var lifetime = document.createElement("h5");
    lifetime.style.display = "inline-block";
    lifetime.style.marginTop = "13px";
    lifetime.style.marginBottom = "0px";
    lifetime.style.paddingLeft = "1em";
    var node2 = document.createTextNode(works[i].author);
    var node3 = document.createTextNode("lifetime:"+ works[i].lifetime);
    author.appendChild(node2);
    lifetime.appendChild(node3);
    author_info.appendChild(author);
    author_info.appendChild(lifetime);
    item.appendChild(author_info);

    var photo = document.createElement("div");
    photo.className = "inner-box";
    var h3 = document.createElement("h3");
    var node4 = document.createTextNode("Popular Photos");
    h3.appendChild(node4);
    photo.appendChild(h3);
    item.appendChild(photo);
    for(var j = 0; j < works[i].photos.length; j++){
        var pic = document.createElement("img");
        pic.className = "photo";
        pic.src = works[i].photos[j];
        photo.appendChild(pic);
    }

    var visit_btn = document.createElement("button");
    var h5 = document.createElement("h5");
    var node5 = document.createTextNode("Visit");
    h5.appendChild(node5);
    h5.style.margin = "0px";
    visit_btn.appendChild(h5);
    item.appendChild(visit_btn);

}
