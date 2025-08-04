import React from 'react';
import { Plus, Circle, CheckCircle, Trash2, Edit3 } from 'lucide-react';
import AuthSphere from './AuthSphere';

export default function Template() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-5xl font-bold text-white tracking-tight">
              Tasks Hub
            </h1>

            {/* Circle */}
            <AuthSphere/>

          </div>

          <p className="text-slate-300 text-lg mt-4">Stay organized and productive</p>
        </div>

        {/* Main Todo Container */}
        <div className="max-w-2xl mx-auto">
          {/* Add New Task */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-8 shadow-2xl">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="What needs to be done?"
                  className="w-full bg-transparent text-white placeholder-slate-300 text-lg focus:outline-none border-b border-white/30 pb-2 focus:border-purple-400 transition-colors"
                />
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg">
                <Plus size={24} />
              </button>
            </div>
          </div>

          {/* Task Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4 text-center">
              <div className="text-2xl font-bold text-white">8</div>
              <div className="text-slate-300 text-sm">Total</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4 text-center">
              <div className="text-2xl font-bold text-green-400">3</div>
              <div className="text-slate-300 text-sm">Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">5</div>
              <div className="text-slate-300 text-sm">Remaining</div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-1 bg-white/10 backdrop-blur-lg rounded-2xl p-2 mb-6 border border-white/20">
            <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200">
              All
            </button>
            <button className="flex-1 text-slate-300 py-3 px-6 rounded-xl font-medium hover:bg-white/10 transition-colors">
              Active
            </button>
            <button className="flex-1 text-slate-300 py-3 px-6 rounded-xl font-medium hover:bg-white/10 transition-colors">
              Completed
            </button>
          </div>

          {/* Todo Items */}
          <div className="space-y-3">
            {/* Active Task 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-lg hover:bg-white/15 transition-all duration-200 group">
              <div className="flex items-center space-x-4">
                <button className="text-slate-400 hover:text-purple-400 transition-colors">
                  <Circle size={24} />
                </button>
                <div className="flex-1">
                  <input
                    type="text"
                    value="Design new landing page mockups"
                    className="w-full bg-transparent text-white text-lg focus:outline-none"
                    readOnly
                  />
                  <div className="text-slate-400 text-sm mt-1">
                    Created 2 hours ago
                  </div>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-slate-400 hover:text-blue-400 transition-colors p-2">
                    <Edit3 size={18} />
                  </button>
                  <button className="text-slate-400 hover:text-red-400 transition-colors p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Completed Task */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-lg hover:bg-white/15 transition-all duration-200 group opacity-75">
              <div className="flex items-center space-x-4">
                <button className="text-green-400 hover:text-green-300 transition-colors">
                  <CheckCircle size={24} />
                </button>
                <div className="flex-1">
                  <input
                    type="text"
                    value="Review project requirements"
                    className="w-full bg-transparent text-white text-lg focus:outline-none line-through hover:text-slate-400"
                    readOnly
                  />
                  <div className="text-slate-500 text-sm mt-1">
                    Completed 1 hour ago
                  </div>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-slate-400 hover:text-blue-400 transition-colors p-2">
                    <Edit3 size={18} />
                  </button>
                  <button className="text-slate-400 hover:text-red-400 transition-colors p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Task 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-lg hover:bg-white/15 transition-all duration-200 group">
              <div className="flex items-center space-x-4">
                <button className="text-slate-400 hover:text-purple-400 transition-colors">
                  <Circle size={24} />
                </button>
                <div className="flex-1">
                  <input
                    type="text"
                    value="Update team documentation"
                    className="w-full bg-transparent text-white text-lg focus:outline-none"
                    readOnly
                  />
                  <div className="text-slate-400 text-sm mt-1">
                    Created yesterday
                  </div>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-slate-400 hover:text-blue-400 transition-colors p-2">
                    <Edit3 size={18} />
                  </button>
                  <button className="text-slate-400 hover:text-red-400 transition-colors p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Task 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-lg hover:bg-white/15 transition-all duration-200 group">
              <div className="flex items-center space-x-4">
                <button className="text-slate-400 hover:text-purple-400 transition-colors">
                  <Circle size={24} />
                </button>
                <div className="flex-1">
                  <input
                    type="text"
                    value="Schedule client meeting for next week"
                    className="w-full bg-transparent text-white text-lg focus:outline-none"
                    readOnly
                  />
                  <div className="text-slate-400 text-sm mt-1">
                    Created 3 days ago
                  </div>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-slate-400 hover:text-blue-400 transition-colors p-2">
                    <Edit3 size={18} />
                  </button>
                  <button className="text-slate-400 hover:text-red-400 transition-colors p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Completed Task 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-lg hover:bg-white/15 transition-all duration-200 group opacity-75">
              <div className="flex items-center space-x-4">
                <button className="text-green-400 hover:text-green-300 transition-colors">
                  <CheckCircle size={24} />
                </button>
                <div className="flex-1">
                  <input
                    type="text"
                    value="Set up development environment"
                    className="w-full bg-transparent text-white text-lg focus:outline-none line-through hover:text-slate-400"
                    readOnly
                  />
                  <div className="text-slate-500 text-sm mt-1">
                    Completed 2 days ago
                  </div>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-slate-400 hover:text-blue-400 transition-colors p-2">
                    <Edit3 size={18} />
                  </button>
                  <button className="text-slate-400 hover:text-red-400 transition-colors p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Clear Completed */}
          <div className="mt-8 text-center">
            <button className="text-slate-400 hover:text-red-400 transition-colors font-medium">
              Clear completed tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}