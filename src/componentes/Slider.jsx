import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cities = [
    { name: "Nueva York", img: "https://media.istockphoto.com/id/1454217037/es/foto/estatua-de-la-libertad-y-horizonte-de-la-ciudad-de-nueva-york-con-el-distrito-financiero-de.jpg?s=612x612&w=0&k=20&c=1abPeg82iwNr0XbPc9eormGet3axsUdkaWgnXSM8e9g=" },
    { name: "París", img: "https://images.unsplash.com/photo-1583265266785-aab9e443ee68?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2l1ZGFkJTIwZGUlMjBwYXIlQzMlQURzfGVufDB8fDB8fHww" },
    { name: "Tokio", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDoPAzpD-c3vn68GSPlkcFor6yohEiKd6Tg&s" },
    { name: "Londres", img: "https://media.istockphoto.com/id/1294454411/es/foto/s%C3%ADmbolos-de-londres-con-big-ben-double-decker-buses-y-red-phone-booth-en-inglaterra-reino-unido.jpg?s=612x612&w=0&k=20&c=uUglbAlKij_qrHfkOO9dfBRxv9OZIJBmmmG-lK-y7R4=" },
    { name: "Roma", img: "https://www.italia.it/content/dam/tdh/es/interests/lazio/roma/roma-in-48-ore/media/20220127150143-colosseo-roma-lazio-shutterstock-756032350.jpg" },
    { name: "Sídney", img: "https://www.viajarsydney.com/img/itinerario-sydney-5-dias.jpg" },
    { name: "Dubai", img: "https://media.istockphoto.com/id/467829216/es/foto/marina-de-dubai.jpg?s=612x612&w=0&k=20&c=p43O66Tap8v3SwuWjcPd407rMnLulHscGyweY06uL_4=" },
    { name: "Buenos Aires", img: "https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=" },
    { name: "Berlín", img: "https://pohcdn.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/berlin.jpg" },
    { name: "Moscú", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThS7SvCOg1jHJcwUeHS1pXrzy8JmUliFBlLA&s" },
    { name: "Pekín", img: "https://viajes.nationalgeographic.com.es/medio/2018/02/27/pekin-china__1280x720.jpg" },
    { name: "Los Ángeles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/288px-Los_Angeles_with_Mount_Baldy.jpg" }
  ];
  
export default function Slider() {
  const [currentTab, setCurrentTab] = useState(0);

  const totalTabs = Math.ceil(cities.length / 4);

  const nextTab = () => setCurrentTab((prev) => (prev + 1) % totalTabs);
  const prevTab = () => setCurrentTab((prev) => (prev - 1 + totalTabs) % totalTabs);

  useEffect(() => {
    const interval = setInterval(nextTab, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-10 w-180 max-sm:w-100">

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevTab}
      >
        <ChevronLeft size={24} />
      </button>

      <div className="@container flex justify-center">
        <div className="grid grid-cols-2 gap-2 p-4 bg-gray-100 rounded-lg shadow-lg max-sm:grid-cols-1">
        {cities.slice(currentTab * 4, currentTab * 4 + 4).map((city, index) => (
          <div key={index} className="text-center">
            <img src={city.img} alt={city.name} className=" w-70 h-50 object-cover rounded-md" />
            <p className="mt-2 text-sm font-semibold">{city.name}</p>
          </div>
        ))}
      </div>
      </div>
      
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextTab}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
