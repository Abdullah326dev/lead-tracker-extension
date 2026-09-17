# Lead Tracker — Chrome Extension

A Chrome extension for saving and organizing leads on the fly. Capture the URL of the tab you're currently on with a single click, or paste in a link manually — all saved locally and persisted between sessions.

## Features

- **Save current tab** — grabs the active tab's URL via the Chrome Tabs API, no copy-paste needed
- **Manual entry** — paste or type any URL to add it to your list
- **Persistent storage** — leads are saved to `localStorage` and restored automatically on reopen
- **Clickable list** — every saved lead renders as a link that opens in a new tab
- **Double-click to clear** — deliberate double-click action on the delete button prevents accidental wipes

## Tech Stack

`JavaScript` · `HTML` · `CSS` · `Chrome Extensions API (Manifest V3)` · `Vite`

## Key Concepts Demonstrated

- Chrome Extension development with Manifest V3 (`action`, `default_popup`, `permissions`)
- Browser API integration via `chrome.tabs.query()`
- Client-side data persistence with `localStorage` and `JSON.stringify` / `JSON.parse`
- Dynamic DOM rendering with template literals and `innerHTML`
- Event-driven architecture using `addEventListener`, including non-standard events (`dblclick`)

## Installation

```bash
git clone https://github.com/Abdullah326dev/lead-tracker-extension.git
cd lead-tracker-extension
```

To load it in Chrome:

1. Open `chrome://extensions/`
2. Enable **Developer mode** (toggle, top right)
3. Click **Load unpacked** and select the project folder
4. The Lead Tracker icon will appear in your extensions toolbar

## Usage

- Click the extension icon to open the popup
- Hit **Save Tab** to capture the URL of your current tab
- Or type a URL into the input and click **Save Input**
- **Double-click Delete All** to clear your saved leads
