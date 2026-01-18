import { db } from "./db";
import {
  projects,
  skills,
  experiences,
  certifications,
  messages,
  type Project,
  type Skill,
  type Experience,
  type Certification,
  type Message,
  type InsertMessage
} from "@shared/schema";
import { asc, desc } from "drizzle-orm";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getExperiences(): Promise<Experience[]>;
  getCertifications(): Promise<Certification[]>;
  getFeatures(): Promise<Feature[]>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences).orderBy(asc(experiences.order));
  }

  async getCertifications(): Promise<Certification[]> {
    return await db.select().from(certifications);
  }

  async getFeatures(): Promise<Feature[]> {
    return await db.select().from(features).orderBy(desc(features.date));
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(insertMessage).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
