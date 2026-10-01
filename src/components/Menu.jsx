import { MenuCard } from "./MenuCard"

const menuItems = [
  {
    "id": 1,
    "category": "Пицца",
    "title": "Маргарита",
    "weight": "330 г",
    "description": "Вегетарианское",
    "price": 590,
    "rating": 4.9,
    "image": " https://placehold.co/400x220?text=Margherita"
  },
  {
    "id": 2,
    "category": "Паста",
    "title": "Карбонара",
    "weight": "280 г",
    "description": "Классика",
    "price": 490,
    "rating": 4.8,
    "image": "https://placehold.co/400x220?text=Carbonara"
  },
  {
    "id": 3,
    "category": "Десерт",
    "title": "Тирамису",
    "weight": "150 г",
    "description": "С кофе",
    "price": 350,
    "rating": 4.9,
    "image": "https://placehold.co/400x220?text=Tiramisu"
  },
  {
    "id": 4,
    "category": "Закуски",
    "title": "Брускетта с томатами",
    "weight": "180 г",
    "description": "Вегетарианское",
    "price": 290,
    "rating": 4.6,
    "image": "https://placehold.co/400x220?text=Bruschetta"
  },
  {
    "id": 5,
    "category": "Основные блюда",
    "title": "Ризотто с грибами",
    "weight": "320 г",
    "description": "Острое",
    "price": 560,
    "rating": 4.7,
    "image": "https://placehold.co/400x220?text=Risotto"
  },
  {
    "id": 6,
    "category": "Десерт",
    "title": "Панна-котта",
    "weight": "140 г",
    "description": "С ягодным соусом",
    "price": 320,
    "rating": 4.8,
    "image": "https://placehold.co/400x220?text=Panna+Cotta"
  }
]

export const Menu = () => {
  return (
    <section className="menu">
      <div className="container">
        <h2 className="section-title">Наше меню</h2>
        <div className="menu__grid">
            {menuItems.map((item, i)=>(
               <MenuCard key={i} {...item} />
            ))}
        </div>
      </div>
    </section>
  )
}

