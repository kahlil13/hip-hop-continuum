# The Historical Continuum of Hip Hop

A living, extensible archive documenting the centuries-long evolutionary continuum of oral expression, rhythmic innovation, and social commentary across the African diaspora.

## Current Modules & Features
- **Ancestral Timeline:** A visual mapping from West African Griots to Modern MCing.
- **Glossary & Lexicon (`/glossary`):** An index of semantic inversions and AAVE syntactic roots, tracing the origins of core Hip Hop terminology (e.g., *Cipher*, *Def*, *Slump*).
- **Historical Explanations (`docs/explanation/`):**
  - *West African Griot and Jalli Performance Frameworks*
  - *The Single-Origin Narrative and Commercial Mythmaking*

## Architecture
This repository adheres strictly to the **Diátaxis framework** for information architecture:
- **Tutorials & How-To Guides:** Practical, action-oriented implementation steps (Future Scope).
- **Explanations (`docs/explanation/`):** Deep-dive historical contexts exploring the "why" and "how".
- **References (`docs/reference/` & `data/`):** Immutable historical datasets (`timeline.json`, `entities.json`, `glossary.json`) that decouple data from the presentation layer.

## Tech Stack
- **Framework:** Astro + TypeScript
- **Styling:** Tailwind CSS
- **Diagrams:** Mermaid.js (Declarative text-based diagrams to avoid binary visual debt)
- **Content:** Markdown with standardized YAML front-matter

## Local Development
Clone the repository and run the following commands to start the local development server:

`npm install`
`npm run dev`
