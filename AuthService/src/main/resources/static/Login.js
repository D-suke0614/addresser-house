//function demoTest(){
////ToDo ID・名前をRestAPIでバックに投げる
//    alert('demoTest called.');
//}


window.addEventListener('DOMContentLoaded', () => {

  // (1) 送信ボタンのHTMLを取得
  const Login = document.getElementById("Login");

　// (2) FormDataオブジェクトの初期化
  const fd = new FormData();

  Login.addEventListener('click', (e)=> {
    e.preventDefault();

    // (3) フォーム入力欄のHTMLを取得
    const ID = document.querySelector('input[name="ID"]');
    const name = document.querySelector('input[name="name"]');


    // (4) FormDataオブジェクトにデータをセット
    fd.append('ID', ID.value);
    fd.append('name', name.value);


    // (5) フォームの入力値を送信
    fetch( 'WebSocket', {
      method: 'POST',
      body: fd
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  });

});
