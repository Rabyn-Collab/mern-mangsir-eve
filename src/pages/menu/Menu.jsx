
const pizzas = [
  {
    id: 1,
    name: 'MARGHERITA',
    price: 9.99,
    ingredients: [
      'Tomato sauce',
      'Mozzarella cheese',
      'Olive oil',

    ],
    extra: null
  },
  {
    id: 2,
    name: 'PEPPERONI',
    price: 12.99,
    ingredients: [
      'Tomato sauce',
      'Mozzarella cheese',
      'Olive oil',
      'Pepperoni',
    ],
    extra: 'HOT'
  },
  {
    id: 3,
    name: 'HAWAIIAN',
    price: 14.99,
    ingredients: [
      'Tomato sauce',
      'Mozzarella cheese',
      'Olive oil',
      'Ham',
      'Pineapple',
    ]
  }
];

export default function Menu() {
  return (
    <div className="bg-black text-white py-24">

      <h1 className="text-center text-5xl">THE MENU</h1>


      <div className="bg-white text-black max-w-4xl mx-auto my-5 p-5">
        {
          pizzas.map((pizza) => {
            return (
              <div key={pizza.id} className=" pb-5  pl-2">
                <div className="flex justify-between">

                  <div>
                    <h1 className="text-4xl">{pizza.name}</h1>
                    <p className="text-2xl">Ingredients: {pizza.ingredients.join(', ')}</p>
                    <p className="text-2xl">Extra: {pizza.extra}</p>
                  </div>

                  <div>
                    <p className="bg-gray-500 rounded-sm p-1">${pizza.price}</p>

                  </div>

                </div>





                <hr className="text-gray-500 mt-3" />
              </div>
            )
          })
        }
      </div>



    </div>
  )
}
