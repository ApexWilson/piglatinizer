$( "document" ).ready(function() {

function checkVowel(string){
    var firstLetter = string[0];
    var vowels = ['a','e','i','o','u'];
    debugger
    if (vowels.includes(firstLetter)){
        return $('.output').text(string+'ay');
    }
        return $('.output').text(string.slice(1)+firstLetter+'ay');
    }

$('#button').click(function() {
    var inputValue=$('.input').val();
    return checkVowel(inputValue);
})

});