import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const NewApplication = () => {
  const navigate = useNavigate();

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");
  const [applicationDate, setApplicationDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here, you can add the logic to save the application data (e.g., save to Firebase or database)
    if (!company || !position || !status || !applicationDate) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Success message
    toast.success("Application added successfully!");

    // Redirect to applications page
    navigate("/applications");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Add New Application</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <Input
          type="date"
          placeholder="Application Date"
          value={applicationDate}
          onChange={(e) => setApplicationDate(e.target.value)}
          required
        />
        <Textarea
          placeholder="Status (e.g., Pending, Interview, Offer)"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">
          Add Application
        </Button>
      </form>
    </div>
  );
};

export default NewApplication;
