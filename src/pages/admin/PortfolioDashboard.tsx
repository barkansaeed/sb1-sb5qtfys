import { useState } from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import ProjectsGrid from '../../components/admin/ProjectsGrid';
import ProjectModal from '../../components/admin/ProjectModal';
import DeleteConfirmationModal from '../../components/admin/DeleteConfirmationModal';
import { useProjects } from '../../hooks/useProjects';
import { Project } from '../../types/project';
import Footer from '../../components/Footer';

export default function PortfolioDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { projects, loading, error } = useProjects();

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleDelete = (project: Project) => {
    setSelectedProject(project);
    setIsDeleteModalOpen(true);
  };

  const handleAddNew = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow p-4">
        <AdminHeader 
          onSearch={setSearchQuery}
          onAddNew={handleAddNew}
        />
        
        <ProjectsGrid
          projects={projects}
          loading={loading}
          error={error}
          searchQuery={searchQuery}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {isModalOpen && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}

        {isDeleteModalOpen && selectedProject && (
          <DeleteConfirmationModal
            project={selectedProject}
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}