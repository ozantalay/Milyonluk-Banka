import { useState } from "react";
import "./styles.css";

import React from "react";
import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const passCode = "1001";

  const [userInput, setUserInput] = useState({
    charOne: "",
    charTwo: "",
    charThree: "",
    charFour: ""
  });

  const [verified, setVerified] = useState(undefined);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(value.length<=1){

      setUserInput((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  /* Challenge

	Doğrulama kodu formu henüz kullanıcının girdisini kontrol etmiyor. Sizin göreviniz aşağıdaki gibi kurulumu tamamlamaktır: 
	
		1. Kullanıcı parola input'larından birine bir karakter yazdığında, userInput state nesnesinin ilgili özelliği, diğer özellikler korunarak güncellenmelidir. Özellik adlarının ve girdilerin adlarının birbiriyle eşleştiğine dikkat edin (charOne, charTwo, vb.)
		   
		2. Kullanıcı gönder butonuna tıkladığında, bir gönderme işleme fonksiyonu sayfanın yenilenmesini engellemeli ve userInput'ta saklanan dört karakterin kombinasyonunun passCode değerine eşit olup olmadığını kontrol etmelidir (yukarıdaki 7. satırda bildirilmiştir).
		   
		3. Eşleşiyorlarsa, verified state değeri true olarak ayarlanmalıdır. Aksi takdirde false olarak ayarlanmalıdır. 
		   
		4. Kodunuz mümkün olduğunca DRY olmalıdır
*/
const handleSubmit = (e) => {
  e.preventDefault();
  const inputCode = `${userInput.charOne}${userInput.charTwo}${userInput.charThree}${userInput.charFour}`;
  setVerified(inputCode === passCode);
};



  return (
    <div className="wrapper">
      <Header />

      <form onSubmit={handleSubmit}>
        <Message status={verified} />

        <div>
          <input value={userInput.charOne}   onChange={handleInputChange} required type="password" name="charOne" />

          <input value={userInput.charTwo}  onChange={handleInputChange} required type="password" name="charTwo" maxLength="1" />

          <input value={userInput.charThree}  onChange={handleInputChange} required type="password" name="charThree" maxLength="1" />

          <input value={userInput.charFour}  onChange={handleInputChange} required type="password" name="charFour" maxLength="1" />
        </div>

        <button disabled={verified}>Gönder</button>
      </form>

      <Footer />
    </div>
  );
}
