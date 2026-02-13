import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Solution } from './sections/Solution';
import { HowItWorks } from './sections/HowItWorks';
import { Governance } from './sections/Governance';
import { UseCases } from './sections/UseCases';
import { Demo } from './sections/Demo';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Governance />
      <UseCases />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
