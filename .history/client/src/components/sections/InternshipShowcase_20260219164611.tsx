import { motion } from "framer-motion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Award } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    title: "QA Foundations – Manual Testing",
    caption: "Started the 10Pearls Shine Remote Internship Program (Sep 2025 – Nov 2025) by learning core Quality Assurance fundamentals, including requirement analysis, test case writing, bug reporting, and manual software testing methodologies."
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    title: "Automation Testing Tools",
    caption: "Progressed from manual testing to automation testing tools, gaining hands-on exposure to industry-relevant QA practices and understanding the transition from manual processes to automated test execution."
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    title: "Weekly Mentor Sessions",
    caption: "Participated in structured weekly mentor meetings where progress updates were shared, technical challenges were discussed, and expert guidance was provided to overcome blockers and improve testing strategies."
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    title: "Successful Completion & Certification",
    caption: "Successfully completed the 10Pearls Shine Internship Program and was awarded an official internship certificate, recognizing practical experience in Software Quality Assurance and testing best practices."
  }
];


export function InternshipShowcase() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Professional Growth</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.85] text-black">
              10 PEARLS <br />
              <span className="text-black/10 font-outline-2">SHINE.</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="rounded-full border-black/10 px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                <Star className="h-3 w-3 text-primary mr-2 fill-primary" />
                Internship Program
              </Badge>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40">
                <Calendar className="h-3 w-3" />
                Sep 2025 – Nov 2025
              </div>
            </div>
            <p className="text-black/60 text-lg font-bold max-w-sm leading-tight uppercase tracking-wider border-l-4 border-primary pl-6">
              A glimpse into the rigorous technical immersion at 10Pearls.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {images.map((img, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-black/5 border border-black/5">
                    <img 
                      src={img.url} 
                      alt={img.title}
                      className="h-full w-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    <div className="absolute bottom-0 left-0 p-8 w-full text-left">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-1 w-8 bg-primary rounded-full" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Phase 0{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter leading-none mb-3">
                        {img.title}
                      </h3>
                      <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest leading-relaxed">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 h-14 w-14 rounded-2xl border-black/10 bg-white text-black hover:bg-black hover:text-white transition-all shadow-xl" />
            <CarouselNext className="hidden md:flex -right-4 h-14 w-14 rounded-2xl border-black/10 bg-white text-black hover:bg-black hover:text-white transition-all shadow-xl" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
