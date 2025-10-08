import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import example from "./data/example.json";

const api = new Hono();

serve(api);
