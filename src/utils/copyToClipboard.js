export const copyTxtToClipboard = txt => {
  if(txt){
      const fakeInput = document.createElement('input');
      fakeInput.setAttribute('value', txt);
      document.body.appendChild(fakeInput);
      fakeInput.select();
      document.execCommand('copy');
      fakeInput.parentNode.removeChild(fakeInput);
      return true;
  }else{
      return false;
  }    
}