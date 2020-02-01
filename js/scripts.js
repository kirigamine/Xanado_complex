var nodes = null;
var edges = null;
var network = null;
var IMG = "img/";

// create an array with nodes
var nodes = [
  { id: 1, shape: "image", image: IMG + "1f981.png"}, // Leo
  { id: 2, shape: "image", image: IMG + "1f432.png "}, // Hao
  { id: 3, shape: "image", image: IMG + "1f40d.png"}, // Tatsumi
  { id: 4, shape: "image", image: IMG + "26a1.png"}, // Reirong
  { id: 5, shape: "image", image: IMG + "1f406.png"}, // Bao
  { id: 6, shape: "image", image: IMG + "1f985.png"}, // Ilya
  { id: 7, shape: "image", image: IMG + "1f98b.png"}, // Randy
  { id: 8, shape: "image", image: IMG + "1f3af.png"}, // Tris
  { id: 9, shape: "image", image: IMG + "1f3b5.png"}, // Michel
  { id: 10, shape: "image", image: IMG + "1f578.png"}, // Vrtra
  { id: 11, shape: "image", image: IMG + "1f36f.png"}, // Karin
  { id: 12, shape: "image", image: IMG + "1f48b.png"}, // Silvy
  { id: 13, shape: "image", image: IMG + "2728.png"}, // Yuil
  { id: 14, shape: "image", image: IMG + "1f31f.png"}, // Ester
  { id: 15, shape: "image", image: IMG + "1f48e.png"}, // Siren
  { id: 16, shape: "image", image: IMG + "1f436.png"}, // Sabaka
  { id: 17, shape: "image", image: IMG + "1f426.png"}, // Passero
  { id: 18, shape: "image", image: IMG + "1f36d.png"}, // Koo
  { id: 19, shape: "image", image: IMG + "1f36c.png"}, // Fee
  { id: 20, shape: "image", image: IMG + "1f353.png"}, // Raj
];
// create an array with edges
var edges = [
  { from: 1, to: 2, label: "夫婦",  arrows: "to, from", color: "magenta"},
  { from: 1, to: 6, label: "部下"},
  { from: 1, to: 7, label: "部下"},
  { from: 1, to: 8, label: "部下"},
  { from: 1, to: 9, label: "部下"},
  { from: 2, to: 3, label: "部下"},
  { from: 2, to: 4, label: "部下"},
  { from: 2, to: 5, label: "部下"},
  { from: 7, to: 20, label: "部下"},
  { from: 18, to: 6, label: "因縁"},
  { from: 19, to: 6, label: "因縁"},
  { from: 11, to: 18, label: "保護"},
  { from: 11, to: 19, label: "保護"},
  { from: 1, to: 14, label: "師匠"},
  { from: 5, to: 14, label: "師匠"},
  { from: 14, to: 1, label: "弟子"},
  { from: 14, to: 5, label: "弟子"},
  { from: 2, to: 7, label: "元妾"},
  { from: 6, to: 10, label: "元夫婦", arrows: "to, from"},
  { from: 3, to: 4, label: "恋人、[三童子]",  arrows: "to, from", color: "magenta"},
  { from: 8, to: 9, label: "恋人、[四翼騎士]",  arrows: "to, from", color: "magenta"},
  { from: 7, to: 10, label: "恋人",  arrows: "to, from", color: "magenta"},
  { from: 11, to: 12, label: "恋人",  arrows: "to, from", color: "magenta"},
  { from: 13, to: 14, label: "恋人",  arrows: "to, from", color: "magenta"},
  { from: 15, to: 16, label: "恋人",  arrows: "to, from", color: "magenta"},
  { from: 3, to: 5, label: "[三童子]",  arrows: "to, from", color: "red"},
  { from: 4, to: 5, label: "[三童子]",  arrows: "to, from", color: "red"},
  { from: 6, to: 7, label: "[四翼騎士]",  arrows: "to, from", color: "blue"},
  { from: 6, to: 8, label: "兄弟弟子、[四翼騎士]",  arrows: "to, from", color: "blue"},
  { from: 6, to: 9, label: "[四翼騎士]",  arrows: "to, from", color: "blue"},
  { from: 7, to: 8, label: "[四翼騎士]",  arrows: "to, from", color: "blue"},
  { from: 7, to: 9, label: "[四翼騎士]",  arrows: "to, from", color: "blue"},
  { from: 9, to: 17, label: "友人",  arrows: "to, from"},
  { from: 7, to: 12, label: "兄妹",  arrows: "to, from", color: "green"},
  { from: 2, to: 10, label: "兄弟",  arrows: "to, from", color: "green"},
  { from: 13, to: 15, label: "兄弟",  arrows: "to, from", color: "green"},
  { from: 18, to: 19, label: "双子",  arrows: "to, from", color: "green"},
  { from: 1, to: 13, label: "親",   color: "green"},
  { from: 1, to: 13, label: "子",   arrows: "from", color: "lightgreen"},
  { from: 2, to: 13, label: "親",   color: "green"},
  { from: 2, to: 13, label: "子",   arrows: "from", color: "lightgreen"},
  { from: 1, to: 15, label: "親",   color: "green"},
  { from: 1, to: 15, label: "子",   arrows: "from", color: "lightgreen"},
  { from: 2, to: 15, label: "親",   color: "green"},
  { from: 2, to: 15, label: "子",   arrows: "from", color: "lightgreen"},
  { from: 6, to: 16, label: "親",   color: "green"},
  { from: 6, to: 16, label: "子",   arrows: "from", color: "lightgreen"},
  { from: 10, to: 16, label: "親",  color: "green"},
  { from: 10, to: 16, label: "子",  arrows: "from", color: "lightgreen"}


];

// create a network
var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges
};
var options = { physics: true,  edges: {arrows: "to", color: "#999" , font: { align: "horizontal"} }};
var network = new vis.Network(container, data, options);

window.addEventListener("load", () => {
  draw();
});
