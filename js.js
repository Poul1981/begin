//alert('hello')

//console.log('console');
async function resp(name){
    let str = '';
    let otvet = await fetch('handler.php?name=' + name);
    let ot1 = await otvet.text();
    //console.log(ot1);
}

//resp('vivat');



$(function (){
    //console.log('clik')
   $('#btn_1').click(()=>{
       alert('clicl');
   });
    $('#btn_2').on('click', getText);

    async function getText() {
        let text = $('#txt_1').val();
        //console.log(text);
        let res = await fetch('handler.php?text=' + text);
        let res1 = await res.text();
        console.log(res1);
        $('.text').append(res1);
    }

});