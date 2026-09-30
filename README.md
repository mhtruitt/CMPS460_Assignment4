# ShopEase — React Native Navigation Project

A multi-screen React Native app demonstrating navigation with React Navigation: a Home screen, a Products list, a Details screen that receives data passed from Products, and an About screen.

## Screens

| Screen | Purpose |
|---|---|
| **Home** | App title, welcome message, buttons to Products and About |
| **Products** | Lists 3 products (name, price, "View Details" button) |
| **Details** | Shows the product passed from Products (name, price, description) |
| **About** | App name, description, author, and course info |

## Project Structure

```
ProductCatalogApp/
├── App.js                       # Navigation setup (stack navigator)
├── data/
│   └── products.js              # Static product data
└── screens/
    ├── HomeScreen.js
    ├── ProductsScreen.js
    ├── DetailsScreen.js
    └── AboutScreen.js
```

## Possible Extensions

- Add product images
- Add a search or filter bar on the Products screen
- Persist a "favorites" list with `AsyncStorage`
- Add a fifth screen (e.g. Cart or Contact)
