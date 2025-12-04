# green_events_api

# TypeScript API with MySQL & TypeORM

A well-architected RESTful API built with TypeScript, Express, MySQL, and TypeORM following clean architecture principles and best practices.

## 🚀 Features

- **Clean Architecture** - Layered structure with separation of concerns
- **Type Safety** - Full TypeScript support with strict typing
- **ORM Integration** - TypeORM for database operations
- **Error Handling** - Centralized error handling middleware
- **Repository Pattern** - Clean data access layer
- **RESTful API** - Standard HTTP methods and status codes
- **Environment Configuration** - Secure configuration management
- **Development Ready** - Hot reload with nodemon

## 📋 Prerequisites

- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/aswathygopi635-sys/green_events_api.git
cd green_events_api
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your database credentials:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=myapp
NODE_ENV=development
```

4. Create the database:
```bash
mysql -u root -p
CREATE DATABASE myapp;
```

5. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## 📁 Project Structure

```
project-root/
├── src/
│   ├── config/                    # Configuration files
│   │   ├── database.ts           # TypeORM data source configuration
│   │   └── environment.ts        # Environment variables management
│   │
│   ├── entities/                  # TypeORM entities (database models)
│   │   └── User.entity.ts        # User entity definition
│   │
│   ├── repositories/              # Data access layer
│   │   └── UserRepository.ts     # User database operations
│   │
│   ├── services/                  # Business logic layer
│   │   └── UserService.ts        # User business logic
│   │
│   ├── controllers/               # Request handlers
│   │   └── UserController.ts     # User route controllers
│   │
│   ├── middlewares/               # Express middlewares
│   │   ├── errorHandler.ts       # Global error handling
│   │   └── validator.ts          # Request validation
│   │
│   ├── routes/                    # API routes
│   │   ├── index.ts              # Route aggregation
│   │   └── userRoutes.ts         # User endpoints
│   │
│   ├── types/                     # TypeScript type definitions
│   │   └── index.ts              # DTOs and interfaces
│   │
│   ├── utils/                     # Utility functions
│   │   └── ApiResponse.ts        # Standardized API responses
│   │
│   └── app.ts                     # Application entry point
│
├── .env                           # Environment variables (not in git)
├── .env.example                   # Environment template
├── .gitignore                     # Git ignore rules
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## 🏗️ Architecture Layers

### **1. Entities Layer**
Defines database models using TypeORM decorators. Entities represent tables in the database.

### **2. Repository Layer**
Handles all database operations. Abstracts TypeORM queries and provides clean interface for data access.

### **3. Service Layer**
Contains business logic and validation. Services use repositories to perform operations and enforce business rules.

### **4. Controller Layer**
Handles HTTP requests and responses. Controllers call services and format responses using ApiResponse utility.

### **5. Routes Layer**
Defines API endpoints and maps them to controller methods.

## 🔌 API Endpoints

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

### Example Request

**Create User:**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "name": "John Doe",
    "password": "securepassword"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "uuid-here",
    "email": "john@example.com",
    "name": "John Doe",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "statusCode": 201
}
```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run typeorm` - Run TypeORM CLI commands

## 🔧 Adding New Features

### Creating a New Entity

1. Create entity in `src/entities/`:
```typescript
// Product.entity.ts
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;
}
```

2. Add entity to `database.ts` entities array

3. Create repository in `src/repositories/`

4. Create service in `src/services/`

5. Create controller in `src/controllers/`

6. Add routes in `src/routes/`

## 🔒 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 3000 |
| DB_HOST | MySQL host | localhost |
| DB_PORT | MySQL port | 3306 |
| DB_USERNAME | Database user | root |
| DB_PASSWORD | Database password | - |
| DB_DATABASE | Database name | myapp |
| NODE_ENV | Environment | development |

## 🧪 Testing

```bash
# Add your testing framework
npm install --save-dev jest @types/jest ts-jest
npm test
```

## 📝 Best Practices Implemented

- ✅ **Separation of Concerns** - Clear layer boundaries
- ✅ **Dependency Injection** - Loose coupling between components
- ✅ **Error Handling** - Centralized error management
- ✅ **Type Safety** - Strict TypeScript configuration
- ✅ **Repository Pattern** - Abstracted data access
- ✅ **DTOs** - Type-safe data transfer objects
- ✅ **Async/Await** - Modern asynchronous handling
- ✅ **Environment Configuration** - Secure secrets management

## 🚧 Roadmap

- [ ] Add authentication (JWT)
- [ ] Add request validation middleware
- [ ] Add logging (Winston/Morgan)
- [ ] Add rate limiting
- [ ] Add API documentation (Swagger)
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Add Docker support
- [ ] Add migrations
- [ ] Add seeding

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Your Name - [@yourhandle](https://twitter.com/yourhandle)

## 🙏 Acknowledgments

- Express.js
- TypeORM
- TypeScript
- MySQL

---

**Happy Coding! 🎉**