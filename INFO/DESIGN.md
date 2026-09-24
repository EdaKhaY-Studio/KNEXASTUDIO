# Design Architecture & System Specification — KNEXA STUDIO 2

## Visual & Palette Tokens
- **Background**: `#0a0d14` (Deep Space Dark), with radial gradient spots (`#141a29`, `#120d24`).
- **Surface Panels**: `rgba(18, 24, 38, 0.75)` with `backdrop-filter: blur(16px)` and border `rgba(255, 255, 255, 0.08)`.
- **Primary Accent**: Electric Cyan (`#00f2fe` to `#4facfe` gradient).
- **Secondary Accent**: Vibrant Neon Violet (`#7f00ff` to `#e100ff` gradient).
- **Success / Execution Active**: Emerald Pulse (`#00f5a0` to `#00d9f5`).
- **Typography**: Google Fonts `'Outfit'`, `'Inter'`, system-ui.

---

## Architecture Specification
- **Modular Frontend Architecture**: Built with Vite + React / Vanilla ES Modules for instant loading and snappy interaction.
- **State Management**: Reactive state store for canvas nodes, connections, agent registry, active execution steps, and system logs.
- **Component Breakdown**:
  - `Header`: Navigation, active environment status, quick actions, model switcher.
  - `Sidebar`: View navigation (Canvas Studio, Agents Library, Analytics, Templates, Settings).
  - `CanvasStudio`: Multi-node drag-and-drop workflow graph with live execution simulator.
  - `AgentManager`: Grid/List view of active agents, prompt editors, and capability badges.
  - `AnalyticsView`: Rich interactive visual charts and real-time telemetry metrics.
  - `TemplateLibrary`: Gallery of starter workflow blueprints.
  - `ExecutionInspector`: Slide-over panel detailing step trajectories, memory state, and output preview.
