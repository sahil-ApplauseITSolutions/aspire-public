import { useState, useEffect } from 'react';

export const useLoading = (initialState = false, delay = 500) => {
  const [isLoading, setIsLoading] = useState(initialState);

  const setLoading = (state) => {
    setIsLoading(state);
  };

  const simulateLoading = (duration = 2000) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), duration);
  };

  return {
    isLoading,
    setLoading,
    simulateLoading,
    setIsLoading
  };
};

export const useSectionLoading = (sections = []) => {
  const [loadingStates, setLoadingStates] = useState(
    sections.reduce((acc, section) => ({ ...acc, [section]: false }), {})
  );

  const setSectionLoaded = (sectionName) => {
    setLoadingStates(prev => ({
      ...prev,
      [sectionName]: false
    }));
  };

  const setSectionLoading = (sectionName) => {
    setLoadingStates(prev => ({
      ...prev,
      [sectionName]: true
    }));
  };

  const simulateSectionLoading = (sectionName, duration = 1500) => {
    setSectionLoading(sectionName);
    setTimeout(() => setSectionLoaded(sectionName), duration);
  };

  return {
    loadingStates,
    setSectionLoaded,
    setSectionLoading,
    simulateSectionLoading,
    isAnyLoading: Object.values(loadingStates).some(Boolean)
  };
};
