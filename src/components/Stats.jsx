import React, { useState } from 'react'
import axios from 'axios';
import { Terminal } from 'lucide-react';

function Stats() {
    const [todos, setTodos] = useState([]);

    const tasks = axios.get(`${import.meta.env.VITE_URL}`); // Fetch tasks from the server
    tasks.then(response => {
        setTodos(response.data.rows);
    }).catch(error => {
        console.error('Error fetching tasks:', error);
    });


    const stats = {
        total: todos.length,
        completed: todos.filter(t => t.completed).length,
        active: todos.filter(t => !t.completed).length,
        highPriority: todos.filter(t => t.priority === 'high' && !t.completed).length
    };



    return (
        <>
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

        </>
    )
}

export default Stats