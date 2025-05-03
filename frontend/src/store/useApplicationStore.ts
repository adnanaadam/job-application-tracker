import { create } from "zustand";

interface Application {
  id: string;
  company: string;
  position: string;
  status: "Applying" | "Applied" | "Bookmarked" | "Completed";
  notes: string;
}

interface Interview {
  id: string;
  company: string;
  position: string;
  interviewDate: string;
  status: "Interviewing" | "Scheduled on" | "Completed";
  notes: string;
}

interface Offer {
  id: string;
  company: string;
  position: string;
  offerDate: string;
  status: "Offered" | "Accepted" | "Rejected";
  notes: string;
}

interface ApplicationState {
  applications: Application[];
  interviews: Interview[];
  offers: Offer[];

  addApplication: (app: Application) => void;
  addInterview: (interview: Interview) => void;
  addOffer: (offer: Offer) => void;
  removeApplication: (id: string) => void;
  removeInterview: (id: string) => void;
  removeOffer: (id: string) => void;
  updateApplicationStatus: (id: string, status: "Applying" | "Applied" | "Bookmarked" | "Completed") => void;
  updateInterviewStatus: (id: string, status: "Interviewing" | "Scheduled on (date)" | "Completed") => void;
  updateOfferStatus: (id: string, status: "Offered" | "Accepted" | "Rejected") => void;
}

export const useApplicationStore = create<ApplicationState>((set) => ({
  applications: [],
  interviews: [],
  offers: [],

  // Add a new application
  addApplication: (app) =>
    set((state) => ({
      applications: [...state.applications, app],
    })),

  // Add a new interview
  addInterview: (interview) =>
    set((state) => ({
      interviews: [...state.interviews, interview],
    })),

  // Add a new offer
  addOffer: (offer) =>
    set((state) => ({
      offers: [...state.offers, offer],
    })),

  // Remove an application by ID
  removeApplication: (id) =>
    set((state) => ({
      applications: state.applications.filter((app) => app.id !== id),
    })),

  // Remove an interview by ID
  removeInterview: (id) =>
    set((state) => ({
      interviews: state.interviews.filter((interview) => interview.id !== id),
    })),

  // Remove an offer by ID
  removeOffer: (id) =>
    set((state) => ({
      offers: state.offers.filter((offer) => offer.id !== id),
    })),

  // Update application status and move to the correct section
  updateApplicationStatus: (id, status) =>
    set((state) => {
      const updatedApplications = state.applications.map((app) => {
        if (app.id === id) {
          const newApp = { ...app, status };

          // If the application moves to interview or offer, remove it from applications
          if (status === "Interviewing" || status === "Scheduled on (date)") {
            state.applications = state.applications.filter((app) => app.id !== id);
            state.interviews = [...state.interviews, newApp];
          } else if (status === "Offered" || status === "Accepted" || status === "Rejected") {
            state.applications = state.applications.filter((app) => app.id !== id);
            state.offers = [...state.offers, newApp];
          }

          return newApp;
        }
        return app;
      });
      return { applications: updatedApplications };
    }),

  // Update interview status
  updateInterviewStatus: (id, status) =>
    set((state) => ({
      interviews: state.interviews.map((interview) =>
        interview.id === id ? { ...interview, status } : interview
      ),
    })),

  // Update offer status
  updateOfferStatus: (id, status) =>
    set((state) => ({
      offers: state.offers.map((offer) =>
        offer.id === id ? { ...offer, status } : offer
      ),
    })),
}));
