import { Project } from '../../types/project';
import { useProjectMutations } from '../../hooks/useProjectMutations';

interface DeleteConfirmationModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteConfirmationModal({
  project,
  isOpen,
  onClose,
}: DeleteConfirmationModalProps) {
  const { deleteProject } = useProjectMutations();

  const handleDelete = async () => {
    try {
      await deleteProject(project.id);
      onClose();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Delete Project</h2>
        <p className="mb-6">
          Are you sure you want to delete "{project.title}"? This action cannot be
          undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}