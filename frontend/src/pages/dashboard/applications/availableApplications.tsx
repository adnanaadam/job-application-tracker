import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ApplicationProps {
  id: string;
  company: string;
  position: string;
  status: string;
  notes: string;
}

const AvailableApplication: React.FC<{ application: ApplicationProps }> = ({ application }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg p-4 bg-gray-800 mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">{application.company}</h2>
          <p className="text-gray-400">{application.position}</p>
        </div>

        <div className="flex items-center gap-4">
          <span
            className={`inline-block px-2 py-1 text-xs rounded ${
              application.status === "Pending"
                ? "bg-yellow-500 text-black"
                : application.status === "Interview Scheduled"
                ? "bg-blue-600 text-white"
                : "bg-green-600 text-white"
            }`}
          >
            {application.status}
          </span>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronUp className="w-5 h-5 text-gray-300" /> : <ChevronDown className="w-5 h-5 text-gray-300" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 text-gray-300 space-y-2">
          <p><strong>Notes:</strong> {application.notes}</p>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary">Edit</Button>
            <Button size="sm" variant="destructive">Delete</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableApplication;
