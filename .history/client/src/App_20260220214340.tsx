import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import LearningDetail from "@/pages/LearningDetail";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />  {/* <-- Add this */}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/learning/:id" component={LearningDetail} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/security" component={SecurityPage} />
        <Route path="/system" component={SystemPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="min-h-[40vh] bg-white text-black py-24 px-6 md:px-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-8 text-black/90 tracking-tighter uppercase">PRIVACY PROTOCOL</h1>
        <p className="max-w-xl text-black/40 text-base md:text-lg leading-relaxed font-bold uppercase tracking-widest">
          Your data security is Arisha's top priority. This portfolio does not collect personal information beyond what is voluntarily submitted through the communication protocol.
        </p>
        <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-16 text-primary font-black uppercase tracking-widest hover:underline text-sm">Return to Base</a>
      </div>
    </PageWrapper>
  );
}

function SecurityPage() {
  return (
    <PageWrapper>
      <div className="min-h-[40vh] bg-white text-black py-24 px-6 md:px-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-8 text-black/90 tracking-tighter uppercase">SECURITY INFRASTRUCTURE</h1>
        <p className="max-w-xl text-black/40 text-base md:text-lg leading-relaxed font-bold uppercase tracking-widest">
          All communication is transmitted via encrypted channels. Our QA methodology ensures that every line of code is validated for vulnerabilities.
        </p>
        <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-16 text-primary font-black uppercase tracking-widest hover:underline text-sm">Return to Base</a>
      </div>
    </PageWrapper>
  );
}

function SystemPage() {
  return (
    <PageWrapper>
      <div className="min-h-[40vh] bg-white text-black py-24 px-6 md:px-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-8 text-black/90 tracking-tighter uppercase">SYSTEM STATUS</h1>
        <p className="max-w-xl text-black/40 text-base md:text-lg leading-relaxed font-bold uppercase tracking-widest">
          All systems operational. V4.0.0 Global QA Infrastructure Online.
        </p>
        <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-16 text-primary font-black uppercase tracking-widest hover:underline text-sm">Return to Base</a>
      </div>
    </PageWrapper>
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
