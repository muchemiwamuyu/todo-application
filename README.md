#  Dev Todo App

A sleek, developer-focused todo application built with React and Tailwind CSS. Designed specifically for developers who want to stay organized while shipping code faster.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB.svg?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3+-38B2AC.svg?logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Features

### Developer-Centric Categories
- **Feature Development** - New functionality and enhancements
- **Bug Fixes** - Issues and debugging tasks
- **Code Review** - PR reviews and code quality tasks
- **Meetings** - Stand-ups, planning, and team discussions
- **Breaks** - Because developers need coffee too ☕

### Priority Management
- **High Priority** - Critical tasks that need immediate attention
- **Medium Priority** - Important tasks for current sprint
- **Low Priority** - Nice-to-have items and future considerations

### Dashboard Analytics
- Total task count
- Completed tasks counter
- Active tasks tracking
- High-priority items spotlight

### Dark Mode First
- Eye-friendly dark theme optimized for long coding sessions
- Subtle animations and hover effects
- Clean, minimal interface that doesn't distract from your code

## Tech Stack

- **React 18+** - Modern React with hooks
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful, consistent icons
- **Vite** - Lightning-fast development server

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   https://github.com/muchemiwamuyu/todo-application.git
   cd dev-todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Usage

### Adding Tasks
1. Enter your task description in the input field
2. Select appropriate category (Feature, Bug Fix, Review, etc.)
3. Choose priority level (High, Medium, Low)
4. Click "Add Task" or press Enter

### Managing Tasks
- **Complete tasks** by clicking the circle checkbox
- **Delete tasks** using the X button
- **Filter tasks** by All, Active, or Completed status
- **View timestamps** to see when tasks were created

### Categories Explained

| Category | Use Case | Icon |
|----------|----------|------|
| Feature | New functionality, enhancements | 💻 |
| Bug Fix | Issues, debugging, hotfixes | 🐛 |
| Review | PR reviews, code quality | 🔀 |
| Meeting | Stand-ups, planning sessions | 📅 |
| Break | Coffee, lunch, mental health | ☕ |

## 🎨 Customization

### Adding New Categories
```javascript
const categories = [
  { 
    value: 'deployment', 
    label: 'Deployment', 
    icon: Rocket, 
    color: 'text-orange-400' 
  },
  // ... existing categories
];
```

### Modifying Colors
The app uses Tailwind's color palette. Key colors:
- **Primary**: Blue (`blue-600`)
- **Success**: Green (`green-500`)
- **Warning**: Yellow (`yellow-500`)
- **Danger**: Red (`red-500`)
- **Background**: Gray (`gray-900`, `gray-800`)

### Custom Priorities
```javascript
const priorities = [
  { value: 'critical', label: 'Critical', color: 'bg-red-600' },
  { value: 'urgent', label: 'Urgent', color: 'bg-orange-500' },
  // ... existing priorities
];
```

## Project Structure

```
dev-todo-app/
├── src/
│   ├── components/
│   │   └── Stats.jsx // and other more files
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔧 Configuration

### Tailwind Config
```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
```

### Vite Config
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
```

## Roadmap

- [ ] **Persistence** - Local storage integration
- [ ] **Due Dates** - Deadline tracking and notifications
- [ ] **Projects** - Group tasks by repository or project
- [ ] **Time Tracking** - Built-in pomodoro timer
- [ ] **Git Integration** - Link tasks to branches/commits
- [ ] **Team Collaboration** - Share tasks with team members
- [ ] **Dark/Light Toggle** - Theme switching
- [ ] **Keyboard Shortcuts** - Power user navigation
- [ ] **Export/Import** - Backup and restore tasks
- [ ] **Drag & Drop** - Reorder tasks by priority

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use TypeScript for new features
- Maintain consistent code formatting
- Write meaningful commit messages
- Test on multiple screen sizes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Lucide** for the beautiful icon set
- **Tailwind CSS** for the utility-first styling approach
- **Vite** for the blazing-fast development experience
- **React** team for the excellent developer experience

## 📞 Support

Having issues? Here are some common solutions:

### Common Issues
- **Styles not loading**: Ensure Tailwind CSS is properly configured
- **Icons not showing**: Check Lucide React installation
- **Build failures**: Verify Node.js version compatibility

### Getting Help
- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues]((https://github.com/muchemiwamuyu/todo-application)/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/muchemiwamuyu/todo-application/discussions)

---

> "The best todo app is the one you actually use" - Every developer ( this is my personal todo app) <>

