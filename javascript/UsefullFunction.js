$(document).ready(function() { //attend que le DOM soit prêt pour commencer
    var z = 0; //initialise les z-index
    var inAnimation = false; //flag pour tester si nous sommes en cours d'animation
   
    $('#pictures img').each(function() { //attribue les z-index de départ
      z++; //à la fin, le plus haut z-index sera dans cette variable
      $(this).css('z-index', z); //attribue le z-index à la balise <img>
    });
   
    function swapFirstLast(isFirst) {
      if(inAnimation) return false; //si une animation est en cours, on ne fait rien
      else inAnimation = true; //modifie le flag pour dire que l'animation est en cours
   
      var processZindex, direction, newZindex, inDeCrease; //prévoit le cas précédent ou suivant
   
      if(isFirst) { processZindex = z; direction = '-'; newZindex = 1; inDeCrease = 1; } //attribue les variables dans le cas 'suivant'
      else { processZindex = 1; direction = ''; newZindex = z; inDeCrease = -1; } //attribue les variables dans le cas 'précédent'
   
      $('#pictures img').each(function() { //actualise chaque image
        if($(this).css('z-index') == processZindex) { //s'il s'agit de l'image à animer
          $(this).animate({ 'top' : direction + $(this).height() + 'px' }, 'slow', function() { //anime l'image au-dessus/en-dessous (les images doivent avoir la même hauteur)
            $(this).css('z-index', newZindex) //attribue le nouveau z-index
              .animate({ 'top' : '0' }, 'slow', function() { //ramène l'image à sa position initiale
                inAnimation = false; //modifie le flag pour dire que l'animation est finie
              });
          });
        } else { //ce n'est pas l'image à animer, on modifie juste le z-index
          $(this).animate({ 'top' : '0' }, 'slow', function() { //il faut attendre la fin de l'animation pour modifier le z-index
            $(this).css('z-index', parseInt($(this).css('z-index')) + inDeCrease); //ajuste le z-index
          });
        }
      });
   
      return false; //on ne suit pas le href du lien
    }
   
    $('#next a').click(function() {
      return swapFirstLast(true); //met la première image en dernière position
    });
   
    $('#prev a').click(function() {
      return swapFirstLast(false); //met la dernière image en première position
    });
  });