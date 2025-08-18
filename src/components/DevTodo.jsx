import React, { useState } from 'react';
import axios from 'axios';
import { Plus } from 'lucide-react';
import Stats from './Stats';
import FilteredTodos from './FilteredTodos';

const DevTodoApp = () => {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    status: 'todo',        // ✅ default must match DB ENUM
    priority: 'medium',    // ✅ default
    tags: [],
    due_date: null,
    project: 'frontend',   // ✅ default category
    links: []
  });

//   fetch existing tasks on mount
  

  const handleTasks = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting payload:", newTodo);

      const response = await axios.post(
        `${import.meta.env.VITE_URL}api/tasks`,
        newTodo
      );

      // ✅ append new task to state so UI updates instantly
      setTodos((prev) => [...prev, response.data]);
      // reset form
      setNewTodo({
        title: '',
        description: '',
        status: 'todo',
        priority: 'medium',
        tags: [],
        due_date: null,
        project: 'frontend',
        links: []
      });
    } catch (error) {
      console.error("Error creating task:", error.response?.data || error.message);
    }
  };

  const categories = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'database', label: 'Database' },
    { value: 'other', label: 'Other' }
  ];

  const priorities = [
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Stats />

        {/* Add Todo Form */}
        <form
          className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700"
          onSubmit={handleTasks}
        >
          <div className="flex flex-col gap-4">
            {/* Title */}
            <input
              type="text"
              value={newTodo.title}
              onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
              required
              placeholder="What needs to be done?"
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {/* Description */}
            <input
              type="text"
              value={newTodo.description}
              onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
              placeholder="Write a brief description of the task"
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Category */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={newTodo.project}
                  onChange={(e) => setNewTodo({ ...newTodo, project: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              {/* Due Date */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Due Date</label>
                <input
                  type="date"
                  value={newTodo.due_date || ''}
                  onChange={(e) => setNewTodo({ ...newTodo, due_date: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Priority */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                <select
                  value={newTodo.priority}
                  onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {priorities.map(priority => (
                    <option key={priority.value} value={priority.value}>{priority.label}</option>
                  ))}
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors self-end"
              >
                <Plus size={16} />
                Add Task
              </button>
            </div>
          </div>
        </form>

        {/* Todo List */}
        <FilteredTodos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default DevTodoApp;
