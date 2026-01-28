import { Card } from "@/components/ui/card";
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const data = [
  {
    name: 'Performance',
    uv: 98,
    fill: '#4ade80',
  },
  {
    name: 'Accessibility',
    uv: 100,
    fill: '#60a5fa',
  },
  {
    name: 'Best Practices',
    uv: 95,
    fill: '#facc15',
  },
  {
    name: 'SEO',
    uv: 100,
    fill: '#f472b6',
  }
];

export function PerformanceObservatory() {
  return (
    <section id="performance" className="py-24 bg-muted/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Performance Observatory</h2>
            <p className="text-muted-foreground max-w-2xl">
              Real-time metrics from Lighthouse and Core Web Vitals. Because functionality without performance is a bug.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-mono text-green-400 bg-green-400/10 px-4 py-2 rounded-full border border-green-400/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Live Monitoring Active
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <Card className="col-span-1 lg:col-span-2 p-6 glass-panel min-h-[400px] flex flex-col justify-center items-center">
             <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={20} data={data}>
                  <RadialBar
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    dataKey="uv"
                  />
                  <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{ right: 0 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1b26', border: '1px solid #333', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
             </div>
             <p className="text-center text-sm text-muted-foreground mt-4 font-mono">Current Build Metrics</p>
          </Card>

          {/* Vitals Cards */}
          <div className="space-y-4">
            <MetricCard label="LCP (Largest Contentful Paint)" value="0.8s" status="good" />
            <MetricCard label="FID (First Input Delay)" value="12ms" status="good" />
            <MetricCard label="CLS (Cumulative Layout Shift)" value="0.002" status="good" />
            <MetricCard label="TTFB (Time to First Byte)" value="45ms" status="good" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ label, value, status }: { label: string, value: string, status: "good" | "warning" | "bad" }) {
  const color = status === "good" ? "text-green-400 border-green-400/20 bg-green-400/5" : 
                status === "warning" ? "text-yellow-400 border-yellow-400/20 bg-yellow-400/5" : 
                "text-red-400 border-red-400/20 bg-red-400/5";
  
  return (
    <Card className={`p-4 border ${color} flex justify-between items-center`}>
      <span className="text-sm font-mono text-muted-foreground">{label}</span>
      <span className="text-xl font-bold font-display">{value}</span>
    </Card>
  )
}
