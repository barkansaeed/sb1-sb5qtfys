import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const categoryColors = {
  simple: 'bg-green-100 text-green-800',
  medium: 'bg-orange-100 text-orange-800',
  complex: 'bg-blue-100 text-blue-800',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-6">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryColors[project.category]}`}>
          {project.category}
        </span>
        <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-gray-600">{project.description}</p>
      </div>
    </div>
  );
}