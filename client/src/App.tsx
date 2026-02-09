import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import LearningDetail from "@/pages/LearningDetail";
import NotFound from "@/pages/not-found";

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black p-20 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-black mb-10 text-primary">PRIVACY PROTOCOL</h1>
      <p className="max-w-2xl text-center text-black/60 text-lg leading-relaxed font-medium uppercase tracking-widest">
        Your data security is Arisha's top priority. This portfolio does not collect personal information beyond what is voluntarily submitted through the communication protocol.
      </p>
      <a href="/" className="mt-20 text-primary font-black uppercase tracking-widest hover:underline">Return to Base</a>
    </div>
  );
}

function SecurityPage() {
  return (
    <div className="min-h-screen bg-white text-black p-20 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-black mb-10 text-primary">SECURITY INFRASTRUCTURE</h1>
      <p className="max-w-2xl text-center text-black/60 text-lg leading-relaxed font-medium uppercase tracking-widest">
        All communication is transmitted via encrypted channels. Our QA methodology ensures that every line of code is validated for vulnerabilities.
      </p>
      <a href="/" className="mt-20 text-primary font-black uppercase tracking-widest hover:underline">Return to Base</a>
    </div>
  );
}

function SystemPage() {
  return (
    <div className="min-h-screen bg-white text-black p-20 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-black mb-10 text-primary">SYSTEM STATUS</h1>
      <p className="max-w-2xl text-center text-black/60 text-lg leading-relaxed font-medium uppercase tracking-widest">
        All systems operational. V4.0.0 Global QA Infrastructure Online.
      </p>
      <a href="/" className="mt-20 text-primary font-black uppercase tracking-widest hover:underline">Return to Base</a>
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/learning/:id" component={LearningDetail} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/security" component={SecurityPage} />
      <Route path="/system" component={SystemPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
