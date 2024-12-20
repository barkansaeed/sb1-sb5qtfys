import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-4 bg-white">
      <div className="text-center text-gray-600">
        Made by AI with <Heart className="w-4 h-4 inline-block text-red-500 mx-1" fill="currentColor" />
      </div>
    </footer>
  );
}