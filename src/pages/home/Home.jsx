import Menu from "../menu/Menu.jsx";


export default function Home() {
  return (
    <div>
      <div className=" h-180 bg-[url(https://www.w3schools.com/w3images/pizza.jpg)] bg-no-repeat bg-cover bg-center bg-[#EBE5E3] bg-blend-multiply flex flex-col items-center justify-center">


        <div className="text-white text-center space-y-16">
          <h1 className="text-7xl italic">THIN</h1>
          <h1 className="text-7xl italic">CRUST PIZZA</h1>

          <button className="bg-black hover:bg-sky-200 px-10 py-5">LET ME SEE THE MENU</button>
        </div>


        <div className="absolute left-10 bottom-12">
          <h1 className="bg-black px-10 py-4 text-white">OPEN FROM 10AM TO 10PM</h1>
        </div>






      </div>

      <Menu />


    </div>
  )
}
