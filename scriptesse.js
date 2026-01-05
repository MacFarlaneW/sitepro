//-------------------------partie qui récupère les images et les mélange-------------------------

// Tableau contenant les noms des images présentes dans le dossier, à mettre à jour manuellement via script
const imageNames = [
  "009915739.jpg",
  "02830BDW_Feuxdevegetation.jpg",
  "02837BDW_milieux_extremes.jpg",
  "2019-53-couv-com-vegetale.jpg",
  "410001555.jpg",
  "41000230_0.jpg",
  "41000236.jpg",
  "41000382.jpg",
  "41000419.jpg",
  "41000485.jpg",
  "41001012_0.jpg",
  "41001141.jpg",
  "41001225.jpg",
  "41001439_0.jpg",
  "41001445_0.jpg",
  "410015072.jpg",
  "5199YafafqL.jpg",
  "51DbDvdD-0L.jpg",
  "51eSnNY8DXL.jpg",
  "51gQDXnQ9mL.jpg",
  "61a7GneAyL.jpg",
  "70113625.jpg",
  "70114803.jpg",
  "70114858.jpg",
  "70114883.jpg",
  "70114894.jpg",
  "70115541.jpg",
  "70115542.jpg",
  "70115554.jpg",
  "70115695.jpg",
  "70115792.jpg",
  "70115835.jpg",
  "70115908.jpg",
  "70115958.jpg",
  "70115959.jpg",
  "70115971.jpg",
  "70116175.jpg",
  "70116195.jpg",
  "70116254.jpg",
  "70116255.jpg",
  "70116256.jpg",
  "70116487.jpg",
  "70116528.jpg",
  "70116543.jpg",
  "70117535.jpg",
  "70117684.jpg",
  "70117688.jpg",
  "70117783.jpg",
  "70118280.jpg",
  "70118349.jpg",
  "70118350.jpg",
  "70119206.jpg",
  "70119277.jpg",
  "70119342.jpg",
  "70119433.jpg",
  "70119603.jpg",
  "70119604.jpg",
  "70119612.jpg",
  "70119773.jpg",
  "71Ip55xQKsL._SL1500_.jpg",
  "9612_impact_couv.jpg",
  "9782016280188-001-T.jpeg",
  "9782047336786.jpg",
  "9782047336908.jpg",
  "9782047337745.jpg",
  "9782047401712.jpg",
  "9782080235657.jpg",
  "9782080270467.jpg",
  "9782080274946.jpg",
  "9782081510463.jpg",
  "9782081521537.jpg",
  "9782091728919.JPG",
  "9782100763399-001-X.jpeg",
  "9782100795550-001-X.jpeg",
  "9782100814893-001-X.jpeg",
  "9782100817528.jpg",
  "9782100817535-001-X.jpeg",
  "9782100825530-001-X.jpeg",
  "9782100827206.jpg",
  "9782100841356-001-X.jpeg",
  "9782100874194-001-X.jpeg",
  "9782210112544-g.jpg",
  "9782226491657.jpg",
  "9782234088764-001-T.jpeg",
  "9782380155327_0_536_0_75.jpg",
  "9782385514181.jpg",
  "agoty-beaux-arts-paris-editions.png",
  "bandes-de-labo.png",
  "couverture_5069988.jpg",
  "L-Architecte-de-l-invisible.jpg",
  "l-eau-tous-ses-dans-tats-2236_Page_01.png",
  "813Xls4blmL._SL1500_.jpg",
  "sciences-bulles-2023DEF.PNG",
  "sciences-bulles.PNG",
  "Une-journee-particuliere-du-Profeeur-Pasteur.jpg"
];

// Nombre d'images à afficher (ici toutes, à changer au besoin)
const numberOfImagesToShow = imageNames.length;

// Mélange aléatoire du tableau
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Fonction principale : chargement des images et intégration dans un div "imageContainer"
function loadRandomImages() {
  const container = document.getElementById("imageContainer");
  container.innerHTML = ""; // Vide le conteneur

  // Mélange et sélection aléatoire
  const shuffled = shuffleArray([...imageNames]);
  const selected = shuffled.slice(0, numberOfImagesToShow);

    // création des blocs
    selected.forEach(imgName => {
      // Crée le div.block
      const block = document.createElement("div");
      block.classList.add("block");

    // crée l'élément image
    const img = document.createElement("img");
    img.src = `books/${imgName}`;
    img.alt = 'couverture au hasard';

    // ajoute l’image dans le div
    block.appendChild(img);

    // ajoute le div dans le conteneur principal "block"
    container.appendChild(block);
  });
}

// // Chargement automatique au démarrage
window.addEventListener("DOMContentLoaded", () => {
      loadRandomImages();
      setupBlocks();
});

//-------------------------partie qui positionne les blocs-------------------------
//            Pinterest layout, solution de http://labs.benholland.me/
//---------------------------------------------------------------------------------
		var colCount = 0; //valeur initiale écrasée plus bas
		var colWidth = 280; //valeur initiale écrasée plus bas
		var margin = 20;
		var windowWidth = 0; //valeur initiale écrasée plus bas
		var blocks = [];
    var headerHeight = 30 ;

		$(function(){
			$(window).resize(setupBlocks);
		});

		function setupBlocks() {
			windowWidth = $(window).width();
			colWidth = $('.block').outerWidth();
			blocks = [];
			colCount = Math.floor(windowWidth/(colWidth+margin*2));
			for(var i=0;i<colCount;i++){
				blocks.push(margin+headerHeight);
			}
      positionBlocks();
		}


//La fonction positionBlocks parcourt tous les blocs .block, trouve la colonne la plus courte, 
//place le bloc courant en haut de cette colonne (top = hauteur actuelle),
//décale horizontalement selon l’index de la colonne (left),
//met à jour la hauteur cumulée de la colonne dans le tableau blocks.
	
  	function positionBlocks() {
			$('.block').each(function(){
				var min = Array.min(blocks);
				var index = $.inArray(min, blocks);
				var leftPos = margin+(index*(colWidth+margin));
        //console.log(`Bloc: colonne ${index}, top=${min}px, left=${leftPos}px`);
				$(this).css({
					'left':leftPos+'px',
					'top':min+'px'
				});
				blocks[index] = min+$(this).outerHeight()+margin;
			});

//récupère la hauteur totale de ce qui a été construit
    const maxHeight = Math.max(...blocks);
    document.documentElement.style.setProperty('--wrapper-height', `${maxHeight}px`);
    console.log("Hauteur totale des blocs :", maxHeight);
		}

		// fonction pour trouver la colonne la plus courte dans Array
		Array.min = function(array) {
				return Math.min.apply(Math, array);
		};


