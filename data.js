function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1ucLccgU4xJSKYN4NGnienWFhgMW_ipyOp0AREwEBz2U/edit?usp=sharing',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
