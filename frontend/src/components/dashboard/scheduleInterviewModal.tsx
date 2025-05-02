import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface Application {
  id: string;
  company: string;
  position: string;
}

interface ScheduleInterviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  applications: Application[];
}

const ScheduleInterviewModal: React.FC<ScheduleInterviewModalProps> = ({ isOpen, onClose, applications }) => {
  const [selectedAppId, setSelectedAppId] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-gray-300">
        <DialogHeader>
          <DialogTitle className="text-white">Schedule New Interview</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Select Application</label>
            <select
              value={selectedAppId}
              onChange={(e) => setSelectedAppId(e.target.value)}
              className="w-full rounded bg-gray-700 border border-gray-600 p-2"
            >
              <option value="">-- Select Application --</option>
              {applications.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.company} - {app.position}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Interview Date</label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-gray-700 border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Notes</label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any notes about the interview..."
              className="bg-gray-700 border-gray-600"
            />
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button>Save Interview</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleInterviewModal;
