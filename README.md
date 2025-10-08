# 🏴‍☠️ One Piece API

A REST API built with [NestJS](https://nestjs.com) and TypeScript to practice **Controllers**, **Services**, **DTOs**, and **Dependency Injection**.  
Currently uses **in-memory data** for a simple CRUD of characters.

---

## 🚀 Tech Stack

- **Node.js + NestJS** (main framework)  
- **TypeScript**  
- **Class-Validator / Class-Transformer** (validation)  
- **In-memory storage** (mock data, no DB)

---

## ⚙️ Installation & Run

```bash
# Install dependencies
npm install

# Run in development mode (auto reload)
npm run start:dev

# Build and run in production
npm run build
npm run start:prod
```

## 🧪 Trying the Endpoints

Examples (using HTTPie or cURL):

```bash
# Create a character
http POST :3000/characters name='Luffy' height:=174 birthDate='2000-05-05'

# List characters
http :3000/characters

# Get by ID
http :3000/characters/1

# Update
http PATCH :3000/characters/1 height:=175

# Delete
http DELETE :3000/characters/1
```

## 🧾 License

Educational project — free to use and modify.
