function TutWait(){return new Promise((function(e){if("undefined"==typeof AboutSwitch)return(n=1,new Promise((function(e){setTimeout(e,1e3*(n||1))}))).then(()=>{TutWait()});var n;e()}))}window.addEventListener("load",async()=>{await TutWait(),localStorage.seenNotice||showNotice(),localStorage.returningUser||activateTutorial()});const TutorialDiv=document.getElementById("tutorial");function activateTutorial(){if(localStorage.returningUser=!0,TutorialDiv&&TutorialDiv.innerHTML)return;AboutSwitch.checked&&AboutSwitch.click();const e=document.createElement("template");e.innerHTML="\n    <div class=\"tut_cont\">\n      <div id=\"t_step0\">\n        <h1>¡Hola! Parece que eres nuevo aquí. ¿Quieres un tutorial?</h1>\n        <button onclick=\"tutorialSteps(0)\">¡Sí por favor!</button>\n        <button onclick=\"dataLayer.push({event:'close_tutorial'});document.getElementById('tutorial').innerHTML = '';new ErrorHandler('Si alguna vez me necesitas de nuevo, haz clic en el botón de tutorial en la sección \\'acerca de\\'.',true);\">No gracias.</button>\n      </div>\n    </div>\n  ",TutorialDiv.append(e.content.cloneNode(!0))}function tutorialSteps(e){switch(dataLayer.push({event:"do_tutorial",value:e}),String(e)){case"0":{TutorialDiv.innerHTML="";let e=document.createElement("template");e.innerHTML='\n            <div class="tut_cont">\n              <div id="t_step1">\n                <h1>Aquí, ingresa el PIN de su juego del juego Kahoot del anfitrión. Si tiene un enlace de desafío, también puede ponerlo como pin. Para unirse a los kahoots semanales, utilice "weekly" y "weekly-previous"</h1>\n                <p>Al final de este tutorial, también puede aprender por qué Kahoot Winner podría no ganar todo el tiempo.</p>\n                <button onclick="tutorialSteps(1);">Próximo</button>\n                <button onclick="document.getElementById(\'tutorial\').innerHTML = \'\';new ErrorHandler(\'Si alguna vez me necesitas de nuevo, haz clic en el botón de tutorial en la sección \\\'acerca de\\\'.\',true);">Hecho</button>\n              </div>\n            </div>\n          ',TutorialDiv.append(e.content.cloneNode(!0));break}case"1":{new LoginPage(!0),TutorialDiv.innerHTML="";let e=document.createElement("template");e.innerHTML='\n            <div class="tut_cont">\n              <div id="t_step1">\n                <h1>Una vez que ingrese un pin válido, puede elegir su nombre u obtener uno al azar.</h1>\n                <button onclick="tutorialSteps(2)">Próximo</button>\n                <button onclick="tutorialSteps(10)">Hecho</button>\n              </div>\n            </div>\n          ',TutorialDiv.append(e.content.cloneNode(!0));break}case"2":{SettingSwitch.click(),TutorialDiv.style.zIndex=1e3,TutorialDiv.innerHTML="";let e=document.createElement("template");e.innerHTML='\n            <div class="tut_cont">\n              <div id="t_step3">\n                <h1>Aquí están las configuraciones que puede cambiar. Puede acceder a este menú haciendo clic en el engranaje en la parte inferior derecha o presionando ESCAPE.</h1>\n                <button onclick="tutorialSteps(3)">Próximo</button>\n                <button onclick="tutorialSteps(10)">Hecho</button>\n              </div>\n            </div>\n          ',TutorialDiv.append(e.content.cloneNode(!0));break}case"3":{SettingSwitch.checked||SettingSwitch.click(),TutorialDiv.innerHTML="";let e=document.createElement("template");e.innerHTML='\n            <div class="tut_cont">\n              <div id="t_step4">\n                <p>Esta configuración ayuda al servidor a encontrar el cuestionario que está jugando. Si conoce la información, ponerla aquí será de gran ayuda.</p>\n                <button onclick="tutorialSteps(4)">Próximo</button>\n                <button onclick="tutorialSteps(10)">Hecho</button>\n              </div>\n            </div>\n          ',TutorialDiv.append(e.content.cloneNode(!0));break}case"4":{SettingSwitch.checked||SettingSwitch.click(),TutorialDiv.innerHTML="";let e=document.createElement("template");e.innerHTML='\n            <div class="tut_cont">\n              <div id="t_step5">\n                <h1>Estos ajustes controlan la experiencia del juego.</h1>\n                <p>Tiempo de espera de respuesta: establezca un temporizador antes de que el servidor responda la pregunta. Esto debería ayudarlo a que sospeche menos.</p>\n                <p>Miembros del equipo: personaliza a los miembros de tu equipo para el modo de equipo.</p>\n                <p>Omitir 2FA: inicia sesión automáticamente si la autenticación de 2 factores está habilitada.</p>\n                <p>Fallar a propósito: a veces responderá incorrectamente. No es compatible con el control manual</p>\n                <p>Control manual: le permite tener el poder de responder a los Kahoots. Esto es útil especialmente al principio, cuando es posible que el servidor aún no haya encontrado el cuestionario.</p>\n                <p>Vista previa de la pregunta: le permite ver las preguntas y respuestas de antemano.</p>\n                <p>Buscar libremente: hace que el servidor busque pruebas de manera flexible, lo que significa que puede encontrar pruebas con un orden aleatorio de preguntas.</p>\n                <p>Hide Correct: esencialmente hace que el control manual se sienta igual que si estuviera usando la página normal de Kahoot.</p>\n                <h3>Opciones de desafío</h3>\n                <p>Puntos: personalice la cantidad de puntos por pregunta</p>\n                <p>Siempre correcto: siempre obtenga las respuestas correctas, incluso si son incorrectas. (usado con control manual)</p>\n                <p>Desactivar reproducción automática: espere para continuar con la siguiente pregunta, en lugar de reproducirla automáticamente.</p>\n                <button onclick="tutorialSteps(5)">Próximo</button>\n                <button onclick="tutorialSteps(10)">Hecho</button>\n              </div>\n            </div>\n          ',TutorialDiv.append(e.content.cloneNode(!0));break}case"5":{SettingSwitch.checked&&SettingSwitch.click(),game.question={type:"quiz",index:0,data:[{answer:"Correcto",correct:!0},{answer:"Incorrecto",correct:!1},{answer:"Tutorial",correct:!1},{answer:"",correct:!1,image:{id:"dfa9fc36-1122-4dc2-a00b-04d490c07765"}}],total:"42.069",currentGuesses:[{questions:[{time:2e4}]}],raw:{}},game.question.ans=[game.question.data.length],game.score=-1/0,game.name="Tutorial",game.pin="12345-LUGGAGE",new QuestionAnswererPage,activateLoading(!1),TutorialDiv.innerHTML="",TutorialDiv.style.zIndex=0;let e=document.createElement("template");e.innerHTML='\n            <div class="tut_cont">\n              <div id="t_step6">\n                <h1>Así es como se ve la página de respuestas.</h1>\n                <button onclick="tutorialSteps(6)">Próximo</button>\n                <button onclick="tutorialSteps(10)">Hecho</button>\n              </div>\n            </div>\n          ',TutorialDiv.append(e.content.cloneNode(!0));break}case"6":{TutorialDiv.innerHTML="";let e=document.createElement("template");e.innerHTML='\n            <div class="tut_cont">\n              <div id="t_step6">\n                <h1>El texto de las respuestas que el servidor cree que está en la pantalla se muestra encima de la forma.</h1>\n                <button onclick="tutorialSteps(7)">Próximo</button>\n                <button onclick="tutorialSteps(10)">Hecho</button>\n              </div>\n            </div>\n          ',TutorialDiv.append(e.content.cloneNode(!0));break}case"7":{TutorialDiv.innerHTML="";let e=document.createElement("template");e.innerHTML='\n            <div class="tut_cont">\n              <div id="t_step8">\n                <h1>Las respuestas correctas se resaltan con un borde de arco iris.</h1>\n                <button onclick="tutorialSteps(8)">Próximo</button>\n                <button onclick="tutorialSteps(10)">Hecho</button>\n              </div>\n            </div>\n          ',TutorialDiv.append(e.content.cloneNode(!0));break}case"8":{TutorialDiv.innerHTML="";let e=document.createElement("template");e.innerHTML='\n            <div class="tut_cont">\n              <div id="t_step9">\n                <h1>Las respuestas que usan imágenes reemplazarán la forma.</h1>\n                <button onclick="tutorialSteps(9)">Próximo</button>\n                <button onclick="tutorialSteps(10)">Hecho</button>\n              </div>\n            </div>\n          ',TutorialDiv.append(e.content.cloneNode(!0));break}case"9":{game.end={info:{rank:1}},new QuizEndPage(JSON.stringify({metal:"gold"})),TutorialDiv.innerHTML="";let e=document.createElement("template");e.innerHTML='\n            <div class="tut_cont">\n              <div id="t_step9">\n                <h1>¡Ahora es el momento de ganar!</h1>\n                <button onclick="tutorialSteps(11)">Problemas comunes con Kahoot Winner</button>\n                <button onclick="tutorialSteps(10)">¡Vamonos!</button>\n              </div>\n            </div>\n          ',TutorialDiv.append(e.content.cloneNode(!0));break}case"11":{TutorialDiv.innerHTML="";let e=document.createElement("template");e.innerHTML='\n          <div class="tut_cont">\n            <div id="t_step11">\n              <h1>A menudo me preguntan por qué responde <span style="color: rgb (226,27,60);"> incorrectamente </span>.</h1>\n              <p>Recientemente, Kahoot! eliminó el nombre de la prueba para que no se enviara al cliente. Ingrese el nombre de la prueba en el cuadro de entrada de arriba lo mejor que pueda.</p>\n              <p>La mayoría de las veces, se debe a que el cuestionario es privado (no se puede encontrar en Discover)</p>\n              <p>No es posible obtener las respuestas a un cuestionario privado alojado en vivo. Los desafíos todavía están bien.</p>\n              <p>Otra razón que le impide encontrar el cuestionario es que te uniste tarde al juego. En este caso, debe proporcionar el nombre <strong> EXACTO </strong> de la prueba; de lo contrario, el servidor no sabrá qué buscar.</p>\n              <p>A veces, el anfitrión aleatoriza la pregunta. En este caso, habilite <b> Búsqueda suelta </b> y escriba la pregunta de antemano.</p>\n              <p>Además, el anfitrión puede habilitar respuestas aleatorias. Si este es el caso, simplemente tome el control manual y responda por el servidor.</p>\n              <button onclick="tutorialSteps(10)">Entendido.</button>\n            </div>\n          </div>\n        ',TutorialDiv.append(e.content.cloneNode(!0));break}case"10":TutorialDiv.innerHTML="",resetGame(),dataLayer.push({event:"complete_tutorial"}),setTimeout((function(){return new ErrorHandler("Tutorial terminado! ¡Camino a seguir!",!0)}),300)}}function showNotice(){localStorage.seenNotice=!0;const e=document.createElement("template");e.innerHTML='<div class="notice">\n    <button onclick="document.querySelector(\'.notice\').outerHTML = \'\';">OK</button>\n    <h3><b>Noticia importante: </b><span class="red">Kahoot ya no envía el nombre del cuestionario al cliente.</span></h3>\n    <h4>¿Qué significa esto?</h4>\n    <p>Ahora debe ingresar el nombre de la prueba usted mismo. Puede tener suerte si el cuestionario es muy popular, ya que ahora almacenamos cuestionarios de Kahoot que se han jugado en la base de datos.</p>\n    <p>Puede poner el nombre de la prueba en la entrada en la parte superior:</p>\n    <div>\n      <img src="/resource/misc/notice-2020-07-03.png" alt="input at the top">\n    </div>\n  </div>',document.body.append(e.content.cloneNode(!0))}