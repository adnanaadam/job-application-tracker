import { useParams, Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const dummyApplications = [
  { id: "1", company: "Google", position: "Frontend Developer", status: "Pending", notes: "Follow up in 2 days" },
  { id: "2", company: "Netflix", position: "UI/UX Designer", status: "Interview Scheduled", notes: "Prepare portfolio" },
];

const ViewApplication = () => {
  const { id } = useParams<{ id: string }>();

  const application = dummyApplications.find((app) => app.id === id);

  if (!application) {
    return <p className="text-gray-400">Application not found.</p>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Application Details</h1>
        <Button asChild variant="secondary">
          <Link to="/dashboard/applications">Back to Applications</Link>
        </Button>
      </div>

      <Card className="bg-gray-800 border border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-white">Company</h2>
            <p className="text-gray-300">{application.company}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Position</h2>
            <p className="text-gray-300">{application.position}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Status</h2>
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
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Notes</h2>
            <p className="text-gray-300">{application.notes}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewApplication;
