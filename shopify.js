import { LATEST_API_VERSION } from "@shopify/shopify-api";
import { shopifyApp } from "@shopify/shopify-app-express";
import { MemorySessionStorage } from "@shopify/shopify-app-session-storage-memory";
import { restResources } from "@shopify/shopify-api/rest/admin/2024-07";
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables

const shopify = shopifyApp({
  api: {
    apiVersion: LATEST_API_VERSION,
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
    scopes: process.env.SHOPIFY_SCOPES,
    hostName: process.env.SHOPIFY_HOST,
    restResources,
  },
  auth: {
    path: "/api/auth",
    callbackPath: "/api/auth/callback",
  },
  webhooks: {
    path: "/api/webhooks",
  },
  sessionStorage: new MemorySessionStorage(),
});

export default shopify;