$( "document" ).ready(function() {

 var inputValue=$('.input').val();


function checkVowel(string){
    var firstLetter= string[0];
    var vowels=['a','e','i','o','u'];
    if (vowels.includes(firstLetter)){
        $('.output').text('This is a vowel!');
    }
        $('.output').text('This is a consonant!');
    }

$('#button').click(function() {
    checkVowel(inputValue);
})

});