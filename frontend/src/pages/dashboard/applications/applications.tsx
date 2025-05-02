import NewApplicationModal from "@/components/dashboard/newApplicationModal";
import AvailableApplications from "./availableApplications";

const dummyApplications = [
  { id: "1", company: "Google", position: "Frontend Developer", status: "Pending", notes: "Follow up in 2 days" },
  { id: "2", company: "Netflix", position: "UI/UX Designer", status: "Interview Scheduled", notes: "Prepare portfolio" },
];

const Applications = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">My Applications</h1>
        <NewApplicationModal />
      </div>

      <div className="space-y-4">
        {dummyApplications.length > 0 ? (
          dummyApplications.map((app) => (
            <AvailableApplications key={app.id} application={app} />
          ))
        ) : (
          <p className="text-gray-500">No applications yet. Click “New Application” to add your first!</p>
        )}
      </div>
    </div>
  );
};

export default Applications;
