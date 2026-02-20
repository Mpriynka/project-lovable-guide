import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Target, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Scissors,
    title: "50% Smaller Models",
    desc: "Remove half the network weights while preserving — or even improving — accuracy.",
    color: "bg-[hsl(var(--doc-blue-light))] text-[hsl(var(--doc-blue))]",
  },
  {
    icon: Target,
    title: "Maintained Accuracy",
    desc: "Winning tickets match or beat the full dense network on few-shot tasks.",
    color: "bg-[hsl(var(--doc-green-light))] text-[hsl(var(--doc-green))]",
  },
  {
    icon: Smartphone,
    title: "Edge-Ready AI",
    desc: "Smaller models mean real-time inference on phones, drones, and IoT devices.",
    color: "bg-[hsl(var(--doc-orange-light))] text-[hsl(var(--doc-orange))]",
  },
  {
    icon: Zap,
    title: "Faster Training",
    desc: "Sparse subnetworks converge faster with less compute and memory.",
    color: "bg-[hsl(var(--doc-purple-light))] text-[hsl(var(--doc-purple))]",
  },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-sm font-semibold text-[hsl(var(--doc-blue))] mb-2">B.Tech Research Project</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
          Lottery Ticket Hypothesis for
          <br />
          <span className="bg-gradient-to-r from-[hsl(var(--doc-blue))] to-[hsl(var(--doc-purple))] bg-clip-text text-transparent">
            Few-Shot Image Classification
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed">
          What if you could remove half a neural network and make it <em>better</em> at learning from just a handful of examples?
          This research explores exactly that.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            to="/introduction"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/results"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            View Results
          </Link>
        </div>
      </motion.section>

      {/* Highlight cards */}
      <section className="grid gap-4 sm:grid-cols-2">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fade}
            className="rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
          >
            <div className={`inline-flex rounded-lg p-2.5 ${h.color}`}>
              <h.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-foreground">{h.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Team */}
      <section className="rounded-xl border border-border p-6 bg-muted/30">
        <h2 className="text-base font-semibold text-foreground mb-3">Team & Institution</h2>
        <div className="grid gap-2 text-sm text-muted-foreground">
          <p><span className="font-medium text-foreground">Authors:</span> Ankit Kumar Yadav, Aman Clement Xess</p>
          <p><span className="font-medium text-foreground">Supervisor:</span> Dr. Deepak Mishra</p>
          <p><span className="font-medium text-foreground">Institution:</span> Indian Institute of Technology Jodhpur</p>
          <p><span className="font-medium text-foreground">Department:</span> Computer Science & Engineering</p>
        </div>
      </section>
    </div>
  );
}
