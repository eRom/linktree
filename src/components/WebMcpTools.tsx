"use client";

import { useEffect } from "react";
import { ADDRESSES, CONTACT_EMAIL, MILESTONES, TOOLS } from "@/data/profile";
import { MARKETPLACE_ADD_COMMAND, PLUGINS } from "@/data/plugins";

// WebMCP (document.modelContext) : expose aux agents IA du navigateur quelques
// outils en lecture seule, nourris par les mêmes données que les pages.
// Sans agent ni flag Chrome, le composant ne fait rien.

const SITE_URL = "https://www.romain-ecarnot.com";

interface ToolResult {
  content: { type: "text"; text: string }[];
  isError?: boolean;
}

interface ModelContextTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: { readOnlyHint?: boolean };
  execute: (input: Record<string, unknown>) => Promise<ToolResult>;
}

interface ModelContext {
  registerTool: (tool: ModelContextTool, options?: { signal?: AbortSignal }) => unknown;
}

const absolute = (href: string) => (href.startsWith("/") ? SITE_URL + href : href);

const asText = (data: unknown): ToolResult => ({
  content: [{ type: "text", text: JSON.stringify(data) }],
});

const EMPTY_SCHEMA = { type: "object", properties: {}, additionalProperties: false };

const WEBMCP_TOOLS: ModelContextTool[] = [
  {
    name: "get_profile",
    description:
      "Profil de Romain Ecarnot : positionnement, mission, parcours professionnel daté et liens officiels (CV, LinkedIn, GitHub, Tipeee).",
    inputSchema: EMPTY_SCHEMA,
    annotations: { readOnlyHint: true },
    execute: async () =>
      asText({
        name: "Romain Ecarnot",
        headline: "Passeur du numérique & Architecte du simple",
        mission: "Accompagnement humain et technique aux usages du numérique et de l'intelligence artificielle.",
        location: "Nantes, France",
        milestones: MILESTONES.map(({ period, text, place }) => ({ period, text, place })),
        work: TOOLS.map(({ name, summary, href }) => ({ name, summary, url: absolute(href) })),
        links: ADDRESSES.map(({ label, href }) => ({ label, url: absolute(href) })),
      }),
  },
  {
    name: "list_plugins",
    description:
      "Plugins Claude Code publiés par Romain Ecarnot sur sa marketplace. Sans argument : liste courte avec la commande d'installation. Avec `name` : fiche complète d'un plugin.",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "Nom d'un plugin pour obtenir sa fiche complète (ex. Devil, Research, SEO).",
        },
      },
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true },
    execute: async ({ name }) => {
      if (typeof name === "string" && name.trim()) {
        const plugin = PLUGINS.find((p) => p.name.toLowerCase() === name.trim().toLowerCase());
        if (!plugin) {
          return {
            content: [{ type: "text", text: `Plugin inconnu : ${name}. Disponibles : ${PLUGINS.map((p) => p.name).join(", ")}.` }],
            isError: true,
          };
        }
        const { name: pluginName, title, description, version, category, repoUrl, installCommand } = plugin;
        return asText({
          name: pluginName,
          title,
          description,
          version,
          category,
          repoUrl,
          installCommand,
          marketplaceAddCommand: MARKETPLACE_ADD_COMMAND,
        });
      }
      return asText({
        page: `${SITE_URL}/claude-marketplace`,
        marketplaceAddCommand: MARKETPLACE_ADD_COMMAND,
        plugins: PLUGINS.map(({ name, title, category, installCommand }) => ({ name, title, category, installCommand })),
      });
    },
  },
  {
    name: "get_contact",
    description: "Comment contacter Romain Ecarnot : adresse courriel directe et page de contact.",
    inputSchema: EMPTY_SCHEMA,
    annotations: { readOnlyHint: true },
    execute: async () =>
      asText({
        email: CONTACT_EMAIL,
        page: `${SITE_URL}/contact`,
        location: "Nantes, France (à distance ou en présentiel)",
      }),
  },
];

export function WebMcpTools() {
  useEffect(() => {
    const modelContext = (document as Document & { modelContext?: ModelContext }).modelContext;
    if (typeof modelContext?.registerTool !== "function") return;

    const controller = new AbortController();
    for (const tool of WEBMCP_TOOLS) {
      // registerTool peut être synchrone ou renvoyer une promesse selon la version de Chrome.
      Promise.resolve()
        .then(() => modelContext.registerTool(tool, { signal: controller.signal }))
        .catch((error: unknown) => console.warn(`WebMCP: registration failed for ${tool.name}`, error));
    }
    return () => controller.abort();
  }, []);

  return null;
}
