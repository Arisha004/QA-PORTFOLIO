import { Card } from "@/components/ui/card";
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const data = [
  {
    name: 'Efficiency',
    uv: 85,
    fill: '#222222',
  },
  {
    name: 'Accuracy',
    uv: 95,
    fill: '#555555',
  },
  {
    name: 'Learning',
    uv: 90,
    fill: '#888888',
  }
];

export function PerformanceObservatory() {
  return (
    <section id="performance" className="section-padding bg-secondary/30 border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Monitoring</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-8 uppercase leading-none">
              Learning <br className="hidden lg:block" />
              <span className="text-muted-foreground/40">Reports</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              I use tools like Lighthouse and Browser DevTools to track the quality of my practice projects. This data helps me understand how to build better software.
            </p>
            
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
               {["Performance Audit", "Accessibility Check", "Best Practices"].map(item => (
                 <div key={item} className="flex items-center gap-4 p-4 border border-border bg-background text-left">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{item}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative w-full">
             {/* 3D Hint */}
             <div className="absolute -top-10 -right-10 w-24 h-24 md:w-40 md:h-40 opacity-10 pointer-events-none">
                <img src="/assets/3d-shapes.png" alt="" className="w-full h-full object-contain" />
             </div>

             <Card className="p-6 md:p-10 glass-card min-h-[350px] md:min-h-[450px] flex flex-col justify-center items-center rounded-none border-border overflow-hidden">
                <div className="w-full h-[300px] md:h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={20} data={data}>
                      <RadialBar
                        background
                        dataKey="uv"
                      />
                      <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{ right: 0, fontSize: '10px' }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'white', border: '1px solid #eee', borderRadius: '0px', fontSize: '10px' }}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40 mt-8">Practice Project Quality Metrics</div>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
