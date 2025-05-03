import { create } from "zustand";

interface Application {
  id: string;
  company: string;
  position: string;
  status: string;
  notes: string;
}

interface Interview {
  id: string;
  company: string;
  position: string;
  interviewDate: string;
  status: string;
  notes: string;
}

interface Offer {
  id: string;
  company: string;
  position: string;
  offerDate: string;
  status: string;
  notes: string;
}

interface ApplicationState {
  applications: Application[];
  interviews: Interview[];
  offers: Offer[];

  addApplication: (app: Application) => void;
  addInterview: (interview: Interview) => void;
  addOffer: (offer: Offer) => void;
  promoteApplicationToInterview: (appId: string, interviewDate: string) => void;
}

export const useApplicationStore = create<ApplicationState>((set) => ({
  applications: [],
  interviews: [],
  offers: [],

  // Add Application: automatically add to interview if status is "Scheduled"
  addApplication: (app) =>
    set((state) => ({
      applications: [...state.applications, app],
      interviews:
        app.status === "Scheduled"
          ? [
              ...state.interviews,
              {
                id: app.id,
                company: app.company,
                position: app.position,
                interviewDate: "", // Empty until interview scheduled
                status: app.status,
                notes: app.notes,
              },
            ]
          : state.interviews,
    })),

  // Add Interview: add to both interviews and applications (promote status)
  addInterview: (interview) =>
    set((state) => ({
      interviews: [...state.interviews, interview],
      applications: state.applications.map((app) =>
        app.id === interview.id
          ? { ...app, status: interview.status, notes: interview.notes }
          : app
      ),
    })),

  // Add Offer: add to both offers and applications (update offer status)
  addOffer: (offer) =>
    set((state) => ({
      offers: [...state.offers, offer],
      applications: state.applications.map((app) =>
        app.id === offer.id
          ? { ...app, status: offer.status, notes: offer.notes }
          : app
      ),
    })),

  // Promote an Application to an Interview with a date
  promoteApplicationToInterview: (appId, interviewDate) =>
    set((state) => {
      const app = state.applications.find((a) => a.id === appId);
      if (!app) return state;

      const newInterview: Interview = {
        id: app.id,
        company: app.company,
        position: app.position,
        interviewDate,
        status: "Scheduled",
        notes: app.notes,
      };

      return {
        interviews: [...state.interviews, newInterview],
        applications: state.applications.map((a) =>
          a.id === appId ? { ...a, status: "Scheduled" } : a
        ),
      };
    }),
}));
