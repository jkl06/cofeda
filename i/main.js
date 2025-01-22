const input = document.getElementById('text');
const generatebuttom = document.getElementById('generate');
const resultSection = document.getElementById('qrresult');
const qrcodeCanvas = document.getElementById('qrcode');
const downloadlink = document.getElementById('download');

generatebuttom.addEventListener('click', () => {
    const text = input.value.trim();
    if(text){
        QRcode.toCanvas(qrcodeCanvas, text, {width:400}, (error) =>{
            if(error){
                console.error(error);
                return
            } 
             
            resultSection.classList.add('active')
            
            const imageDataURL = qrcodeCanvas.toDataURL('image/png');
            downloadlink.href= imageDataURL;
            downloadlink.style.display='inline';
        })
    } else {
        alert('Veuillez Entrer votre lien');
    }
})