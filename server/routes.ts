import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoRequestSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.post("/api/demo-request", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertDemoRequestSchema.parse(req.body);
      
      // Save the demo request
      const demoRequest = await storage.createDemoRequest(validatedData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Demo request submitted successfully",
        data: demoRequest
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // If there's a validation error, return a 400 Bad Request
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      } else {
        // For other errors, return a 500 Internal Server Error
        console.error("Error creating demo request:", error);
        res.status(500).json({
          success: false,
          message: "Failed to process demo request"
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
