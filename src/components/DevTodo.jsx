import React, { useState } from 'react';
import { Plus, Check, X, Code, Coffee, GitBranch, Terminal, Calendar, Clock } from 'lucide-react';

const DevTodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Implement user authentication', completed: false, priority: 'high', category: 'feature', createdAt: new Date().toISOString() },
    { id: 2, text: 'Fix responsive layout bug', completed: false, priority: 'medium', category: 'bug', createdAt: new Date().toISOString() },
    { id: 3, text: 'Review pull request #247', completed: true, priority: 'low', category: 'review', createdAt: new Date().toISOString() }
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('medium');
  const [selectedCategory, setSelectedCategory] = useState('feature');
  const [filter, setFilter] = useState('all');

  const categories = [
    { value: 'feature', label: 'Feature', icon: Code, color: 'text-blue-400' },
    { value: 'bug', label: 'Bug Fix', icon: Terminal, color: 'text-red-400' },
    { value: 'review', label: 'Review', icon: GitBranch, color: 'text-green-400' },
    { value: 'meeting', label: 'Meeting', icon: Calendar, color: 'text-purple-400' },
    { value: 'break', label: 'Break', icon: Coffee, color: 'text-yellow-400' }
  ];

  const priorities = [
    { value: 'high', label: 'High', color: 'bg-red-500' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
    { value: 'low', label: 'Low', color: 'bg-green-500' }
  ];

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        priority: selectedPriority,
        category: selectedCategory,
        createdAt: new Date().toISOString()
      };
      setTodos([todo, ...todos]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.icon : Code;
  };

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.color : 'text-blue-400';
  };

  const getPriorityColor = (priority) => {
    const p = priorities.find(pr => pr.value === priority);
    return p ? p.color : 'bg-gray-500';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length,
    highPriority: todos.filter(t => t.priority === 'high' && !t.completed).length
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Terminal className="text-green-400" />
            Dev Tasks
          </h1>
          <p className="text-gray-400">Stay organized and ship code faster</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-white">{stats.total}</div>
            <div className="text-sm text-gray-400">Total Tasks</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
            <div className="text-sm text-gray-400">Completed</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-blue-400">{stats.active}</div>
            <div className="text-sm text-gray-400">Active</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-red-400">{stats.highPriority}</div>
            <div className="text-sm text-gray-400">High Priority</div>
          </div>
        </div>

        {/* Add Todo Form */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              required
              autoFocus
              placeholder="What needs to be done?"
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />

            <input
              type="text"
              value={newTodo}
              autoFocus
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Write a brief description of the task"
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Due Date</label>
                <input
                  type="date"
                //   value={dueDate}
                //   onChange={(e) => setDueDate(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {priorities.map(priority => (
                    <option key={priority.value} value={priority.value}>{priority.label}</option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={addTodo}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors self-end"
              >
                <Plus size={16} />
                Add Task
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['all', 'active', 'completed'].map(filterType => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                filter === filterType
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              {filterType}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {filteredTodos.map(todo => {
            const CategoryIcon = getCategoryIcon(todo.category);
            return (
              <div
                key={todo.id}
                className={`bg-gray-800 rounded-lg p-4 border transition-all hover:border-gray-600 ${
                  todo.completed ? 'border-gray-700 opacity-75' : 'border-gray-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      todo.completed
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-500 hover:border-green-500'
                    }`}
                  >
                    {todo.completed && <Check size={14} className="text-white" />}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <CategoryIcon size={16} className={getCategoryColor(todo.category)} />
                      <span className={`text-sm px-2 py-1 rounded md:text-xs font-medium ${getPriorityColor(todo.priority)} text-white`}>
                        {todo.priority.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={12} />
                        {formatDate(todo.createdAt)}
                      </div>
                    </div>
                    
                    <p className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                      {todo.text}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 text-gray-500 hover:text-red-400 transition-colors p-1"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTodos.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Terminal size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-xl mb-2">No tasks found</p>
            <p>Time to add some work or take a break! ☕</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevTodoApp;