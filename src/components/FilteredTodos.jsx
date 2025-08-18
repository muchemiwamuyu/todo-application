import React, { useState, useEffect } from 'react';
import { Plus, Check, X, Code, Coffee, GitBranch, Terminal, Calendar, Clock } from 'lucide-react';
import axios from 'axios';

function FilteredTodos({ todos, setTodos }) {
  const [filter, setFilter] = useState('all');



  const categories = [
    { value: 'frontend', label: 'Frontend', icon: Code, color: 'text-blue-400' },
    { value: 'backend', label: 'Backend', icon: GitBranch, color: 'text-green-400' },
    { value: 'database', label: 'Database', icon: Coffee, color: 'text-purple-400' },
    { value: 'other', label: 'Other', icon: Terminal, color: 'text-gray-400' }
  ];

  const priorities = [
    { value: 'high', label: 'High', color: 'bg-red-500' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
    { value: 'low', label: 'Low', color: 'bg-green-500' }
  ];

  // ✅ fetch tasks on mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}`);
        setTodos(res.data.rows || []);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };
    fetchTodos();
  }, [todos, setTodos]);

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

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
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

  const getPriorityColor = (priority) => {
    const p = priorities.find(pr => pr.value === priority);
    return p ? p.color : 'bg-gray-500';
  };

  return (
    <>
      {/* Tasks List */}
      <div className="space-y-3">

        {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6 mt-6">
        {['all', 'active', 'completed'].map(filterType => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${filter === filterType
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
          >
            {filterType}
          </button>
        ))}
      </div>

        {filteredTodos.map(todo => {
          const CategoryIcon = getCategoryIcon(todo.category);
          return (
            <div
              key={todo.id}
              className={`bg-gray-800 rounded-lg p-4 border transition-all hover:border-gray-600 ${todo.completed ? 'border-gray-700 opacity-75' : 'border-gray-700'
                }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${todo.completed
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
                      {todo.priority?.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      {formatDate(todo.created_at)}
                    </div>
                  </div>

                  <p className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                    {todo.title}
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


      {/* Empty state */}
      {filteredTodos.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Terminal size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-xl mb-2">No tasks found</p>
          <p>Time to add some work or take a break! ☕</p>
        </div>
      )}
    </>
  );
}

export default FilteredTodos;
