import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../component/card';
//import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/component/table';
import { axiosInstance } from '../api/axiosInstance';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get('/projects');
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Project Dashboard</h1>

      <Card className="rounded-2xl shadow-lg border border-gray-200">
        <CardContent className="p-4">
          {loading ? (
            <p className="text-gray-500 text-sm">Loading projects...</p>
          ) : error ? (
            <p className="text-red-500 text-sm">{error}</p>
          ) : projects.length === 0 ? (
            <p className="text-gray-500 text-sm">No projects found.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Manager</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Deadline</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {projects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell>{project.title}</TableCell>
                    <TableCell>{project.manager}</TableCell>
                    <TableCell>{project.status}</TableCell>
                    <TableCell>{project.deadline}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
