import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as z from "zod";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate form data
      const formData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission (in a real app, you'd save to DB or send email)
      console.log("Contact form submission:", formData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        // Return generic error
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  // Image proxy endpoint to avoid CORS issues
  app.get("/api/image-proxy", async (req, res) => {
    const url = req.query.url;
    if (!url || typeof url !== "string") {
      return res.status(400).send("No url provided");
    }
    try {
      const fetch = (await import("node-fetch")).default;
      const response = await fetch(url);
      const contentType = response.headers.get("content-type");
      if (contentType) res.setHeader("Content-Type", contentType);
      res.setHeader('Access-Control-Allow-Origin', '*');
      response.body.pipe(res);
    } catch (err) {
      res.status(500).send("Error fetching image");
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
