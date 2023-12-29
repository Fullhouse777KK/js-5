
const user = {}


for (let i = 1; i < 4; i++) {
    
let name = prompt( 'Введите свое имя')
let age = +prompt( 'Введите свой возраст')
user[i] = {
        name,
        age
    }
}

for (const key in user) {
    console.log( `Пользователь | ${key}`)
for (const key2 in user[key]) {
   console.log(key2 == 'name' ? `Ваше имя - ${user[key][key2]}`  : `Ваш возраст - ${user[key][key2]}` )
}
}

const product = receipt()
console.log(product)
let delivery = 10000
let order = 'Вы заказали '

for (const key in product) {
   order = order + `${key} ` 
   for (const key2 in product[key]) {
order = key2 == 'info' ? order + `${product[key][key2]} , ` : order
delivery = key2 == 'price' ? delivery + product[key][key2] : delivery
    }
   }
console.log(`${order} | Общая стоимость ${delivery} с учетом доставки - 10000 сум `)




