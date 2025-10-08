import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";

export const useUserSession = () => {
  // State to hold the session and loading status
  const [session, setSession] = useState<null | Session>(null);
  const [loading, setLoading] = useState(true);

  // Fetch the session on mount and set up a listener for auth state changes
  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    // Listen for changes to auth state (logged in, signed out, etc.)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    // Initial fetch
    fetchSession();
    return () => subscription.unsubscribe();
  }, []);
  // Return the session and loading state
  return { session, loading };
};
