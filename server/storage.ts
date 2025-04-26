import { 
  users, 
  type User, 
  type InsertUser, 
  demoRequests,
  type DemoRequest,
  type InsertDemoRequest 
} from "@shared/schema";

// Interface with CRUD methods needed for the application
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Demo Request methods
  createDemoRequest(demoRequest: InsertDemoRequest): Promise<DemoRequest>;
  getAllDemoRequests(): Promise<DemoRequest[]>;
  getDemoRequestById(id: number): Promise<DemoRequest | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private demoRequests: Map<number, DemoRequest>;
  private currentUserId: number;
  private currentDemoRequestId: number;

  constructor() {
    this.users = new Map();
    this.demoRequests = new Map();
    this.currentUserId = 1;
    this.currentDemoRequestId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Demo Request methods
  async createDemoRequest(insertDemoRequest: InsertDemoRequest): Promise<DemoRequest> {
    const id = this.currentDemoRequestId++;
    const now = new Date();
    
    const demoRequest: DemoRequest = {
      ...insertDemoRequest,
      id,
      createdAt: now
    };
    
    this.demoRequests.set(id, demoRequest);
    return demoRequest;
  }

  async getAllDemoRequests(): Promise<DemoRequest[]> {
    return Array.from(this.demoRequests.values());
  }

  async getDemoRequestById(id: number): Promise<DemoRequest | undefined> {
    return this.demoRequests.get(id);
  }
}

export const storage = new MemStorage();
