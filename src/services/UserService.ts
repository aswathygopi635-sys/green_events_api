import { UserRepository } from '../repositories/UserRepository';
import { CreateUserDTO, UpdateUserDTO } from '../types';
import { User } from '../entities/User.entity';
import bcrypt from 'bcryptjs';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers(): Promise<Omit<User, 'password'>[]> {
    const users = await this.userRepository.findAll();
    // remove password before returning
    return users.map(({ password, ...rest }) => rest);
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw { message: 'User not found', statusCode: 404 };
    }
    return user;
  }

  async createUser(userData: CreateUserDTO): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw { message: 'Email already exists', statusCode: 400 };
    }
    // Hash the password before creating the user
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    const userToCreate: Partial<User> = {
      ...userData,
      password: hashedPassword,
    };

    return this.userRepository.create(userToCreate);
  }

  async updateUser(id: string, userData: UpdateUserDTO): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw { message: 'User not found', statusCode: 404 };
    }
    
    if (userData.email) {
      const existingUser = await this.userRepository.findByEmail(userData.email);
      if (existingUser && existingUser.id !== id) {
        throw { message: 'Email already exists', statusCode: 400 };
      }
    }

    const updatedUser = await this.userRepository.update(id, userData);
    if (!updatedUser) {
      throw { message: 'Failed to update user', statusCode: 500 };
    }
    return updatedUser;
  }

  async deleteUser(id: string): Promise<void> {
    const deleted = await this.userRepository.delete(id);
    if (!deleted) {
      throw { message: 'User not found', statusCode: 404 };
    }
  }
}
