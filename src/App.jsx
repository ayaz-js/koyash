import { useState } from 'react'
import './App.css'

function App() {
  const loveArray = [
    "Күнім менің 🤍", // Казахский
    "Солнце моё 💖", // Русский
    "My sun 🕊️", // Английский
    "Mon soleil 😘", // Французский
    "Meine Sonne 🥰", // Немецкий
    "Il mio sole 😍", // Итальянский
    "Mi sol 🌸", // Испанский
    "Meu sol 😻", // Португальский
    "شمسي ❤️", // Арабский
    "私の太陽 💘", // Японский
    "내 태양 💑", // Корейский
    "我的太阳 💝", // Китайский (Упрощенный)
    "Сонце моє 🌼", // Украинский
    "Günəşim ❤️", // Азербайджанский
    "Minu päike 💞", // Эстонский
    "Ήλιος μου 💗", // Греческий
    "Soarele meu 💕", // Румынский
    "Min sol 🌺", // Датский
    "Napom 💓", // Венгерский
    "Soarele meu 💐", // Молдавский
    "Сонейка маё 💗", // Белорусский
    "ਮੇਰਾ ਸੂਰਜ 💖", // Панджаби
    "Matahariku ❤️", // Индонезийский
    "Araw ko 💗", // Филиппинский
    "Mia suno 💖", // Эсперанто
    "Meu sol 🍬", // Бразильский португальский
    "พระอาทิตย์ของฉัน 💘", // Тайский
    "Кояшым 🧡", // Татарский
    "Ҡояшым 🌞", // Башкирский
  ];

  const emojiArray = ["🤾🏻‍", "🧶", "🙈", "☀️", "🚀", "🐣", "☄️", "🍒", "🥞", "😜", "🎨"];

  const [randomLoveMessage, setRandomLoveMessage] = useState(
    "Ҡояшым 🤍"
  );

  const [randomButtonEmoji, setRandomButtonEmoji] = useState("🐣");

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * loveArray.length);
    const randomEmoji = Math.floor(Math.random() * emojiArray.length);
    setRandomLoveMessage(loveArray[randomIndex]);
    setRandomButtonEmoji(emojiArray[randomEmoji]);
  };

  return (
    <div className="container">
      <img src={`${import.meta.env.BASE_URL}love-red.png`} className="love-red" alt=""/>
      <img src={`${import.meta.env.BASE_URL}paralax-1.png`} className="love-bottom" alt=""/>
      <img src={`${import.meta.env.BASE_URL}love-orange.png`} className="love-orange" alt=""/>
      <h1 className="title">{randomLoveMessage}</h1>
      <button onClick={handleButtonClick} className="button">
        {randomButtonEmoji}
      </button>
    </div>
  );
}

export default App
