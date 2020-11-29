/**
 * Rieseguire il live coding visto insieme durante la lezione (giorno 24Nov video 58)
 * Attraverso una chiamata AJAX all' API di boolean avremo a disposizione una decina di dischi musicali.
 * 
 * utilizzare Postman per analizzare i dati restituiti dall' API, ancora prima di scrivere codice.
 * 
 * Utilizzando Vue stampiamo tutto a schermo.
 * 
 * Creare una select con i seguneti generi: pop, rock, metal e jazz.
 * in base a cosa scegliamo nella select vedremo i corrispondenti cd.
 * 
 * Endpoint chiamata API: https://flynn.boolean.careers/exercises/api/array/music
 * Link download Postman: https://www.postman.com/downloads/
 */



//  console.log("JS FUNZIONA");
const app = new Vue({
    el: "#app",
    data: {
        arrayCD: []
    },
    created(){
        // prende gli album
        axios.get("https://flynn.boolean.careers/exercises/api/array/music") // url dell' API
            .then(result =>{
                // caso di successo
                // oppure .then(function(result){})
                console.log(result.data);   //stampa oggetti result con le sue proprietà (success e response)

                //ora, riempio l' arrayCD degli oggetti estratti dall' API
                this.arrayCD = result.data.response;
            })
            .catch(error => {
                // caso di errore
                // oppure .catch(function(errore){})
                console.log(error);
            });
    }
});