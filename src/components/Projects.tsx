import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects') 
        .select('*');

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    }

    fetchProjects();
  }, []);

  if (loading) return <div className="text-white text-center py-10">Loading projects...</div>;

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any) => (
            <div key={project.id} className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <img src={project.image_url} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" className="text-amber-500 font-bold hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}