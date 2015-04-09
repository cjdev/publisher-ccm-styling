document.addEventListener('DOMContentLoaded', function () {
   /*
    Changes to fieldsToShow will be reflected in the Ad.

    */
   var fieldsToShow = [
       "cardName",
       "cardType",
       "cashAdvanceFee",
       "productType",
       "purchGracePeriod",
       "penaltyAPR",
       "processingNetwork",
       "productType",
       "introPurchAPR",
       "introPurchAPRperiod"
   ]
   /*
----------------------------------------------------------------------------------------------------------------
    DO NO EDIT BELOW THIS POINT!!!
----------------------------------------------------------------------------------------------------------------
    */

   function attachCss() {
       var css = document.createElement("style");
       css.type = "text/css";
       css.innerHTML = "#ccm-content-container{width :100%;display:inline-block;}#ccm-content-container ul {float: left;width: 80%;padding-left: 5%;font-family: inherit;}#ccm-content-container li {padding-bottom: 7px;}#ccm-content-container a {float: left;width: 15%;}#ccm-content-container li span {padding-right: 5px;}#ccm-content-container img {width: 100%;}#ccm-custom-fields-list li:first-child {list-style: none;margin-left: -20px;font-size: 2.5rem;line-height: 1.9375rem;padding: 1.25rem 0;border-bottom:1px solid #E2E2E2;margin-bottom: 1.25rem;font-weight:bold;}#ccm-custom-fields-list li:first-child b {display: none;}";
       document.body.appendChild(css);
   }

   var filterFields = function (array, fieldsToShow) {
       var targetField;
       var filteredFields = [];
       for (var i = 0; i < fieldsToShow.length; i++) {
           for (var j = 0; j < array.length; j++) {
               if (array[j].getAttribute("data-field") === fieldsToShow[i]) {
                   filteredFields.push(array[j]);
                   break;
               }
           }
       }
       return filteredFields;

   };

   var container = document.getElementById("ccm-content-container"),
       customFields = container.getElementsByTagName("li"),
       array = [];

   attachCss();

   for (var i = 0; i < customFields.length; i++) {
       array.push(customFields[i]);
   }

   var filteredFields = filterFields(array, fieldsToShow);

   var ul = document.getElementById("ccm-custom-fields-list");
   if (ul) {
       while (ul.firstChild) {
           ul.removeChild(ul.firstChild);
       }
   }

   for (var i = 0; i < filteredFields.length; i++) {
       ul.appendChild(filteredFields[i])
   }

});