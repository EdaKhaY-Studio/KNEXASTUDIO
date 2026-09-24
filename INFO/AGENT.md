# Agent Instructions & Execution Plan — KNEXA STUDIO 2

## Agent Task Execution Matrix

### Phase 1: Requirement & Architecture Initialization (Completed)
- [x] Analyze environment and project directory.
- [x] Create Market Requirements Document (`MRD.md`).
- [x] Create Product Requirements Document (`PRD.md`).
- [x] Create Design Specification (`DESIGN.md`).
- [x] Formulate Autonomous Agent Execution Plan (`AGENT.md`).

### Phase 2: Web Application Foundation & Design System Setup
- [ ] Initialize project scaffolding (Vite + React / HTML5 Studio application).
- [ ] Create core Design System (`index.css`) with tokens, CSS variables, glassmorphism utilities, animations, and dark theme.
- [ ] Build shared UI components (Buttons, Cards, Badges, Tooltips, Modals, Slide-over Inspector).

### Phase 3: Core Feature Implementation
- [ ] Build **Visual Canvas Studio**:
  - Interactive node placement, panning, zooming, node connecting lines.
  - Node types: Trigger, AI Agent, Memory Store, API Connector, Code Executor, Output Renderer.
  - Interactive execution engine (Run, Pause, Step, Reset) with animated signal pulses along wires.
- [ ] Build **Agent Management Hub**:
  - Agent roster cards, prompt configuration, tool assignment, capability toggles.
  - Agent creation modal & live preview.
- [ ] Build **Analytics & Telemetry Dashboard**:
  - Key Performance Indicators (Total Runs, Latency, Token Cost, Success Rate).
  - Visual charts (CSS/SVG interactive bar and area charts).
- [ ] Build **Template Marketplace**:
  - Filterable templates with 1-click "Load Template" button.
- [ ] Build **Execution Logs & Trajectory Inspector**:
  - Collapsible slide-over drawer showing detailed step logs, inputs/outputs, latency breakdown, and JSON inspect.

### Phase 4: Verification & Polish
- [ ] Verify local execution (`npm run dev` / dev server).
- [ ] Test layout responsiveness across various viewports.
- [ ] Capture/verify visual excellence and state interactions.
