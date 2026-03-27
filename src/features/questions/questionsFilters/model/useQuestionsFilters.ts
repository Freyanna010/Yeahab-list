import { useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';

import { QUESTIONS_LIMIT } from '@/entities/question/model/constans';

export const useQuestionsFilters = (defaultPage = 1) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || defaultPage;
  const limit = QUESTIONS_LIMIT;
  const searchQuery = searchParams.get('search') || undefined;

  const skills = useMemo(() => {
    const raw = searchParams.get('skills');
    return raw ? raw.split(',').filter(Boolean) : undefined;
  }, [searchParams]);

  const specializationId = useMemo(() => {
    const raw = searchParams.get('specializationId');
    return raw ? Number(raw) : undefined;
  }, [searchParams]);

  const complexity = useMemo(() => {
    const raw = searchParams.get('complexity');
    return raw
      ? raw
          .split(',')
          .map(Number)
          .filter((n) => !isNaN(n))
      : undefined;
  }, [searchParams]);

  const rate = useMemo(() => {
    const raw = searchParams.get('rate');
    return raw ? Number(raw) : undefined;
  }, [searchParams]);

  const setPage = useCallback(
    (newPage: number) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set('page', String(newPage));
        return next;
      });
    },
    [setSearchParams]
  );

  const setSearchQuery = useCallback(
    (query: string | undefined) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (query) {
          next.set('search', query);
        } else {
          next.delete('search');
        }
        return next;
      });
    },
    [setSearchParams]
  );

  const setSkills = useCallback(
    (skills: string[] | undefined) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (skills && skills.length) {
          next.set('skills', skills.join(','));
        } else {
          next.delete('skills');
        }
        return next;
      });
    },
    [setSearchParams]
  );

  const setSpecializationId = useCallback(
    (id: number | undefined) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (id) {
          next.set('specializationId', String(id));
        } else {
          next.delete('specializationId');
        }
        return next;
      });
    },
    [setSearchParams]
  );

  const setComplexity = useCallback(
    (complexity: number[] | undefined) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (complexity && complexity.length) {
          next.set('complexity', complexity.join(','));
        } else {
          next.delete('complexity');
        }
        return next;
      });
    },
    [setSearchParams]
  );

  const setRate = useCallback(
    (rate: number | undefined) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (rate) {
          next.set('rate', String(rate));
        } else {
          next.delete('rate');
        }
        return next;
      });
    },
    [setSearchParams]
  );

  const resetFilters = useCallback(() => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete('search');
      next.delete('skills');
      next.delete('specializationId');
      next.delete('complexity');
      next.delete('rate');
      next.set('page', String(defaultPage));
      return next;
    });
  }, [setSearchParams, defaultPage]);

  return {
    page,
    limit,
    searchQuery,
    skills,
    specializationId,
    complexity,
    rate,
    setPage,
    setSearchQuery,
    setSkills,
    setSpecializationId,
    setComplexity,
    setRate,
    resetFilters,
  };
};
