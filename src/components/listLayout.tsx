import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

const listContext = createContext<{ sw: Record<string, string>[]; panel: string }>(null as never);

const ListLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const [panel, setPanel] = useState('close');
  const [sw, setSw] = useState([]);

  useEffect(() => {
    const p = router.query.slug?.[0] ?? 'close';

    setPanel(p);
  }, [router]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((body) => setSw(body.results));
  }, []);

  return <listContext.Provider value={{ sw, panel }}>{children}</listContext.Provider>;
};

export const useListContext = () => useContext(listContext);

export default ListLayout;
