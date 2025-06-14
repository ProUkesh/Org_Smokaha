(function(){
  if (typeof window.ethereum === 'undefined') {
    window.ethereum = {};
    console.log('Injected mock ethereum object for demo purposes.');
  } else {
    console.log('Ethereum provider detected.');
  }
})();
