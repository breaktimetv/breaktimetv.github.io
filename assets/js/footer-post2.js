$("#limpiar_busqueda").click(function(){
  //document.getElementById("podria_gustarte").style.display = "block",
  document.getElementById("input_busqueda").value="",$("#lista").empty(),$("#limpiar_busqueda").hide()}),$("#input_busqueda").keyup(function(){$(this).val()?$("#limpiar_busqueda").show():$("#limpiar_busqueda").hide()});

$("#cerrar_busqueda").click(function(){
    document.getElementById("input_busqueda").value="";
    $("#lista").empty();
    document.getElementById("input_listado").value="no";
    $("#limpiar_busqueda").hide();
    history.pushState("", document.title, window.location.pathname);
   // document.getElementById("podria_gustarte").style.display = "none";
});

$("#search").click(function(){
    $("#limpiar_busqueda").hide();
    document.getElementById("input_listado").value="si";
  //  document.getElementById("podria_gustarte").style.display = "block";
})


window.onhashchange = function(e) {
    var oldURL = e.oldURL.split('#')[1];
  
   
  
    if (oldURL == 'buscar') {
        document.getElementById("input_busqueda").value="";
        $("#lista").empty();
        $("#search_wrapper").removeClass("active");
        $("#search_form").removeClass("active");
         $("#myBody").removeClass("search-overlay");
         //document.getElementById("podria_gustarte").style.display = "none";
      e.preventDefault();
      return false;
    }
    //console.log('old:'+oldURL+' new:'+newURL);
  }

  
function isPwa() {
  var displayModes = ["fullscreen", "standalone", "minimal-ui"];
  displayModes.forEach(function(displayMode) {
      if (window.matchMedia('(display-mode: ' + displayMode + ')').matches) {
          return true;
      }
  });
  return false;
}





  $(document).ready(function(){

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;

    
      document.getElementById("pwa2").addEventListener('click', (e) => {

        document.getElementById("pwa").style.display = "none";
 
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
              document.getElementById("pwa").style.display = "block";
            }
            deferredPrompt = null;
          });
      });
    });

    
    if (window.matchMedia('(display-mode: standalone)').matches) {

      var pwa = document.getElementById("pwa");
      if(pwa){

        document.getElementById("pwa").style.display = "none";

      }




      var portada_index = document.getElementById("portada_index");
      if(portada_index){

        document.getElementById("portada_index").style.display = "block";

      }

      var info_index = document.getElementById("info_index");
      if(info_index){

        document.getElementById("info_index").style.display = "block";

      }

      var filtros = document.getElementById("filtros");
      if(filtros){
        document.getElementById("filtros").style.display = "block";

      }


    
  
    }else{

      var ua2 = new UserAgent();
      if(ua2.PC){

        document.getElementById("pwa").style.display = "none";
        var menu_abajo = document.getElementById("menu_abajo");
        if(menu_abajo){
          document.getElementById("menu_abajo").style.display = "none";

        }

      }else{
           document.getElementById("pwa").style.display = "block";
           var menu_abajo = document.getElementById("menu_abajo");
           if(menu_abajo){
             document.getElementById("menu_abajo").style.display = "none";
   
           }

      }

  }

    if ('serviceWorker' in navigator) {
        console.log('CLIENT: service worker registration in progress.');
        navigator.serviceWorker.register('/service-worker.js').then(function() {
          console.log('CLIENT: service worker registration complete.');
        }, function() {
          console.log('CLIENT: service worker registration failure.');
        });
      } else {
        console.log('CLIENT: service worker is not supported.');
      }

    $("#input_busqueda").on("input", function(){
        // Print entered value in a div box
        var respuesta= $(this).val();
        if(respuesta == ""){
           // document.getElementById("podria_gustarte").style.display = "block";
           
           
           }else{
            
           // document.getElementById("podria_gustarte").style.display = "none";
               
           }
        
    });

  










});

