import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface InterviewProps {
  id: string;
  company: string;
  position: string;
  interviewDate: string;
  status: string;
  notes: string;
}

const InterviewCard: React.FC<{ interview: InterviewProps }> = ({ interview }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg p-4 bg-gray-800 mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">{interview.company}</h2>
          <p className="text-sm text-gray-400">{interview.position}</p>
          <p className="text-sm text-gray-400">Scheduled on: {interview.interviewDate}</p>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
              interview.status === "Pending"
                ? "bg-yellow-500 text-black"
                : interview.status === "Scheduled"
                ? "bg-blue-600 text-white"
                : "bg-green-600 text-white"
            }`}
          >
            {interview.status}
          </span>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronUp className="w-5 h-5 text-gray-300" /> : <ChevronDown className="w-5 h-5 text-gray-300" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 text-gray-300 space-y-3">
          <p><strong>Notes:</strong> {interview.notes}</p>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary">Reschedule</Button>
            <Button size="sm" variant="destructive">Mark as Completed</Button>
          </div>
        </div>
      )}
    </div>
  );
};

const Interviews = () => {
  const dummyInterviews = [
    { id: "1", company: "Google", position: "Frontend Developer", interviewDate: "2025-06-15", status: "Scheduled", notes: "Prepare for technical test" },
    { id: "2", company: "Amazon", position: "UX/UI Designer", interviewDate: "2025-06-20", status: "Pending", notes: "Portfolio presentation" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">My Interviews</h1>
      <div className="space-y-4">
        {dummyInterviews.length > 0 ? (
          dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))
        ) : (
          <p className="text-gray-500">No interviews scheduled yet.</p>
        )}
      </div>
    </div>
  );
};

export default Interviews;
