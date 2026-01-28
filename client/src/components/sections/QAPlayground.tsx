import { motion } from "framer-motion";
import { MousePointer2, AlertCircle, CheckCircle, RefreshCcw, Activity } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function QAPlayground() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [testStatus, setTestStatus] = useState<"idle" | "running" | "success" | "fail">("idle");
  const [logs, setLogs] = useState<string[]>(["Waiting for test..."]);

  const runManualTest = (type: "pass" | "fail") => {
    setTestStatus("running");
    setLogs(["Starting manual verification...", "Checking input fields..."]);
    
    setTimeout(() => {
      setLogs(prev => [...prev, "Simulating button click..."]);
    }, 800);

    setTimeout(() => {
      if (type === "pass") {
        setTestStatus("success");
        setLogs(prev => [...prev, "Result: SUCCESS (Valid input)"]);
        toast({ title: "Test Passed", description: "This is how a successful test looks!" });
      } else {
        setTestStatus("fail");
        setLogs(prev => [...prev, "Result: FAILED (Simulated bug found)"]);
        toast({ title: "Bug Found!", description: "I simulated a failure to show how I catch errors.", variant: "destructive" });
      }
    }, 1800);
  };

  return (
    <section id="playground" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Interactive Practice</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-8 uppercase leading-none">
              PRACTICE <br />
              <span className="text-muted-foreground/40">ZONE</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-10">
              This is my testing lab. You can play the role of a QA Engineer and run a "Manual Test" on this form to see how I catch bugs or verify successes.
            </p>

            <div className="space-y-4">
               <div className="flex items-center gap-4 p-4 border border-border bg-background">
                  <MousePointer2 className="h-5 w-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">Click a button to start testing</span>
               </div>
               <div className="flex gap-4">
                  <Button onClick={() => runManualTest("pass")} disabled={testStatus === "running"} className="flex-1 rounded-none h-14 bg-green-500/10 text-green-600 border border-green-500/20 hover:bg-green-500 hover:text-white transition-all font-black text-[10px] tracking-widest">
                     VERIFY SUCCESS
                  </Button>
                  <Button onClick={() => runManualTest("fail")} disabled={testStatus === "running"} className="flex-1 rounded-none h-14 bg-red-500/10 text-red-600 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all font-black text-[10px] tracking-widest">
                     CATCH BUG
                  </Button>
               </div>
            </div>
          </div>

          <Card className="bg-background border border-border rounded-none p-10 relative overflow-hidden">
             {/* 3D Hint */}
             <div className="absolute top-0 right-0 w-32 h-32 opacity-10 translate-x-10 -translate-y-10">
                <img src="/assets/3d-shapes.png" alt="" className="w-full h-full object-contain rotate-12" />
             </div>

             <div className="flex justify-between items-center mb-10">
                <div className="text-xs font-black uppercase tracking-widest">Test Subject: Login Form</div>
                <div className={`px-3 py-1 text-[10px] font-bold uppercase border ${
                  testStatus === "success" ? "border-green-500 text-green-500" :
                  testStatus === "fail" ? "border-red-500 text-red-500" :
                  "border-border text-muted-foreground"
                }`}>
                  {testStatus === "running" ? "Testing..." : testStatus.toUpperCase()}
                </div>
             </div>

             <div className="space-y-6 mb-10">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email</Label>
                  <Input value={email} onChange={e => setEmail(e.target.value)} className="rounded-none border-border h-12 bg-secondary/50" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Password</Label>
                  <Input type="password" value={password} onChange={e => setPassword(e.target.value)} className="rounded-none border-border h-12 bg-secondary/50" />
                </div>
             </div>

             <div className="bg-secondary/50 border border-border p-6 font-mono text-[10px]">
                <div className="flex items-center gap-2 mb-4 text-muted-foreground border-b border-border pb-2 uppercase font-bold tracking-widest">
                  <Activity className="h-3 w-3" /> QA Log
                </div>
                <div className="space-y-1.5 min-h-[60px]">
                   {logs.map((log, i) => (
                     <div key={i} className={log.includes("SUCCESS") ? "text-green-600 font-bold" : log.includes("FAILED") ? "text-red-600 font-bold" : ""}>
                       {log}
                     </div>
                   ))}
                   {testStatus === "running" && <div className="animate-pulse">_</div>}
                </div>
             </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
