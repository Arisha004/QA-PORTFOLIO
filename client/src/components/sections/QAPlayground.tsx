import { useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, Bug, CheckCircle, AlertTriangle } from "lucide-react";
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
  const [consoleLogs, setConsoleLogs] = useState<string[]>(["> Ready to test..."]);

  const runTest = (scenario: "success" | "fail") => {
    setTestStatus("running");
    setConsoleLogs(prev => [...prev, `> Starting ${scenario === "success" ? "Valid" : "Invalid"} Login Test...`]);
    
    setTimeout(() => {
      setConsoleLogs(prev => [...prev, "> Locating email input...", "> Entering data..."]);
    }, 500);

    setTimeout(() => {
      setConsoleLogs(prev => [...prev, "> Clicking submit button...", "> Waiting for response..."]);
    }, 1500);

    setTimeout(() => {
      if (scenario === "success") {
        setTestStatus("success");
        setConsoleLogs(prev => [...prev, "> TEST PASSED: User logged in successfully."]);
        toast({
          title: "Test Passed",
          description: "Login flow executed successfully.",
          variant: "default",
        });
      } else {
        setTestStatus("fail");
        setConsoleLogs(prev => [...prev, "> TEST FAILED: Invalid credentials error expected but not found (Simulated)."]);
        toast({
          title: "Test Failed",
          description: "Simulated bug found in login flow.",
          variant: "destructive",
        });
      }
    }, 2500);
  };

  return (
    <section id="playground" className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Interactive QA Playground</h2>
          <p className="text-muted-foreground max-w-2xl">
            Experience my testing workflow live. Trigger automated test scripts on this component and watch real-time validation and logging.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Test Subject */}
          <Card className="p-8 border-white/10 bg-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-bold text-xl">Login Component</h3>
              <div className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-muted-foreground">v2.1.0</div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  placeholder="user@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-white/10 focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50 border-white/10 focus:border-primary/50"
                />
              </div>
              <Button className="w-full bg-primary/20 text-primary hover:bg-primary/30 border border-primary/50">
                Sign In
              </Button>
            </div>

            {/* Micro-interaction markers that appear during test */}
            {testStatus === "running" && (
              <motion.div 
                className="absolute inset-0 bg-primary/5 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </Card>

          {/* Test Controls & Console */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <Button 
                onClick={() => runTest("success")} 
                disabled={testStatus === "running"}
                className="flex-1 bg-green-500/10 text-green-500 border border-green-500/20 hover:bg-green-500/20"
              >
                <Play className="mr-2 h-4 w-4" /> Run Happy Path
              </Button>
              <Button 
                onClick={() => runTest("fail")} 
                disabled={testStatus === "running"}
                className="flex-1 bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20"
              >
                <Bug className="mr-2 h-4 w-4" /> Simulate Bug
              </Button>
            </div>

            <Card className="bg-black/80 border-white/10 font-mono text-sm p-4 h-[300px] overflow-y-auto relative">
              <div className="absolute top-2 right-2 flex gap-1">
                <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-muted-foreground mb-2 pb-2 border-b border-white/10">Test Runner Console</div>
              <div className="space-y-1">
                {consoleLogs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={
                      log.includes("PASSED") ? "text-green-400" : 
                      log.includes("FAILED") ? "text-red-400" : 
                      "text-gray-300"
                    }
                  >
                    {log}
                  </motion.div>
                ))}
                {testStatus === "running" && (
                  <span className="inline-block w-2 h-4 bg-primary animate-pulse align-middle ml-1"></span>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
