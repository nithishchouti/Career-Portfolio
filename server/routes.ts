import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Skills
  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  // Experiences
  app.get(api.experiences.list.path, async (req, res) => {
    const experiences = await storage.getExperiences();
    res.json(experiences);
  });

  // Certifications
  app.get(api.certifications.list.path, async (req, res) => {
    const certifications = await storage.getCertifications();
    res.json(certifications);
  });

  // Features
  app.get(api.features.list.path, async (req, res) => {
    const features = await storage.getFeatures();
    res.json(features);
  });

  // Contact
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data (Safe to run multiple times, checks should be added ideally but for this lite build we'll just keep it simple)
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    // We can't easily access DB directly here to insert multiple, so we'll rely on a separate mechanism or just assume empty
    // But since we don't have bulk insert in storage interface, we'll skip complex seeding logic here 
    // and instead use the execute_sql tool later if we really need detailed data, 
    // OR just use a quick hack to insert via raw SQL or extended storage if needed.
    // For now, let's keep the storage interface clean and valid.
    // We will rely on the `execute_sql` tool in the next step to populate the initial data.
    console.log("Database appears empty. Seeding will be handled via SQL.");
  }
}
