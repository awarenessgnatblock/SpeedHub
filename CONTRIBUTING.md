# Contributing to Dead Rails Roblox Script Hack

Thank you for your interest in contributing to the **Dead Rails Roblox Script Hack** project! We welcome contributions from the community — whether it's bug fixes, new features, script improvements, or documentation updates. Please read the guidelines below before submitting anything.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Script Standards](#script-standards)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)
- [Community & Support](#community--support)

---

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful and constructive environment. We expect all contributors to:

- Be respectful and helpful to other contributors
- Avoid toxic, offensive, or discriminatory language
- Focus on improving the project, not personal disputes
- Give credit where credit is due

Violations may result in removal from the project.

---

## 🚀 Getting Started

### Prerequisites

Before contributing, make sure you have the following tools ready:

| Tool | Purpose | Recommended Version |
| :--- | :--- | :--- |
| Roblox Studio | Script testing environment | Latest |
| VS Code / Notepad++ | Script editing | Latest |
| Git | Version control | 2.40+ |
| Fluxus / Delta / Synapse | Executor for live testing | Latest |
| Python (optional) | Automation & helper tools | 3.10+ |

### Fork & Clone the Repository

```bash
# Step 1 — Fork the repo via GitHub UI

# Step 2 — Clone your fork locally
git clone https://github.com/YOUR-USERNAME/Dead-Rails-Hack.git

# Step 3 — Navigate into the project directory
cd Dead-Rails-Hack

# Step 4 — Add the upstream remote
git remote add upstream https://github.com/RobloScripts/Dead-Rails-Hack.git
```

---

## 🤝 How to Contribute

There are several ways you can help improve this project:

### 🐛 Bug Fixes
- Identify and fix broken script functions
- Test fixes across multiple executors (Fluxus, Delta, Hydrogen)
- Verify the fix does not break other features

### ✨ New Features
- Propose and develop new script modules (ESP, Aimbot, Teleport, etc.)
- Ensure new features are toggleable via the in-game GUI
- Keep new modules in the correct folder structure

### 📝 Documentation
- Improve the README or this CONTRIBUTING file
- Add comments and documentation inside `.lua` script files
- Write guides for new executor compatibility

### 🔧 Optimization
- Improve script performance and reduce lag
- Refactor messy or outdated code sections
- Optimize anti-cheat bypass logic

---

## 📐 Script Standards

To keep the codebase clean and consistent, all submitted scripts must follow these standards:

### File Naming Convention

```
DeadRails_FeatureName_V1.lua    ✅ Correct
deadrails script new.lua        ❌ Incorrect
```

### Lua Code Style

```lua
-- ✅ Correct Style Example

local Config = {
    ESP_Enabled = true,
    AutoFarm_Enabled = false,
    Speed_Value = 24,
}

-- Function names should be PascalCase
local function ToggleESP(state)
    Config.ESP_Enabled = state
    -- Logic here
end

-- Always comment major sections
-- [[ AUTO FARM MODULE ]]
local function StartAutoFarm()
    if Config.AutoFarm_Enabled then
        -- Farm logic here
    end
end
```

### Folder Structure

```
Dead-Rails-Hack/
│
├── Core/
│   ├── DeadRails_V3.lua          # Main script
│   ├── ESP_Module.lua            # ESP feature
│   └── AutoFarm_Module.lua       # Auto farm feature
│
├── Config_Presets/
│   ├── Legit_Mode.cfg            # Conservative settings
│   └── Rage_Mode.cfg             # Aggressive settings
│
├── Docs/
│   ├── README.md
│   └── CONTRIBUTING.md
│
└── ReadMe_Instructions.txt
```

---

## 🔁 Pull Request Process

Follow these steps when submitting a Pull Request (PR):

```bash
# Step 1 — Create a new branch for your feature or fix
git checkout -b feature/your-feature-name

# Step 2 — Make your changes and commit with a clear message
git add .
git commit -m "feat: add teleport-to-train module with GUI toggle"

# Step 3 — Push your branch to your fork
git push origin feature/your-feature-name

# Step 4 — Open a Pull Request on GitHub
# Go to the original repo and click "Compare & Pull Request"
```

### PR Checklist

Before submitting your PR, confirm the following:

- [ ] Code follows the Lua style guidelines above
- [ ] Feature has been tested in a live Dead Rails session
- [ ] Script works on at least **2 different executors**
- [ ] No unnecessary files or debug prints left in the code
- [ ] PR description clearly explains **what** was changed and **why**
- [ ] Existing features are not broken by your changes

### Commit Message Format

```
feat: short description of new feature
fix: short description of bug fix
docs: updates to documentation only
refactor: code cleanup with no functional changes
test: adding or updating test scripts
```

---

## 🐛 Reporting Bugs

If you find a bug, please open a **GitHub Issue** with the following information:

```
**Bug Report Template**

- Script Version: (e.g., V3.1)
- Executor Used: (e.g., Fluxus, Delta, Synapse)
- Roblox Version / Platform: (e.g., Windows, Mobile)
- Dead Rails Game Version: (Check in-game)

**Description:**
A clear description of what went wrong.

**Steps to Reproduce:**
1. Open executor
2. Execute script
3. Toggle ESP
4. Game crashes

**Expected Behavior:**
ESP should display player tags through walls.

**Actual Behavior:**
Game closes immediately after toggling ESP.

**Screenshots / Logs:**
Attach any relevant screenshots or error output.
```

---

## 💡 Feature Requests

Have an idea for a new feature? Open a **Feature Request Issue** and include:

- **Feature Name** — What you want to add
- **Use Case** — Why it would be useful in Dead Rails gameplay
- **Suggested Implementation** — Any technical notes or ideas
- **Priority Level** — Low / Medium / High

Popular feature requests will be added to the **Roadmap** and prioritized for the next release.

---

## 🌐 Community & Support

Join the community to discuss scripts, get help, and stay updated:

| Platform | Purpose |
| :--- | :--- |
| GitHub Issues | Bug reports & feature requests |
| GitHub Discussions | General questions & ideas |
| Discord (Coming Soon) | Live support & community chat |

---

## ❤️ Thank You

Every contribution — no matter how small — helps keep this project alive and updated. Whether you fix a typo or build a whole new module, your effort is appreciated by the entire **Dead Rails** scripting community.

**Happy Scripting!** 🚂
