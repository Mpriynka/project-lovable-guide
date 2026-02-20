import { motion } from "framer-motion";
import { Brain, Layers, Lightbulb, HeartPulse, Leaf, Wifi } from "lucide-react";

const fadeIn = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

function Callout({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" }) {
  const styles = type === "tip"
    ? "border-[hsl(var(--doc-green))] bg-[hsl(var(--doc-green-light))]"
    : "border-[hsl(var(--doc-blue))] bg-[hsl(var(--doc-blue-light))]";
  return (
    <div className={`rounded-lg border-l-4 p-4 text-sm leading-relaxed ${styles}`}>
      {children}
    </div>
  );
}

export default function Introduction() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-10">
      <header>
        <p className="text-sm font-semibold text-[hsl(var(--doc-blue))] mb-1">Chapter 1</p>
        <h1 className="text-3xl font-bold text-foreground">Introduction</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Two of the biggest challenges in modern AI are <strong>data scarcity</strong> and <strong>model efficiency</strong>.
          This project tackles both at once.
        </p>
      </header>

      {/* Few-Shot Learning */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Brain className="h-5 w-5 text-[hsl(var(--doc-blue))]" /> What is Few-Shot Learning?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Imagine trying to recognize a new bird species after seeing just <strong>one or two photos</strong>.
          Humans do this effortlessly — we extract key features (beak shape, color pattern) and generalize instantly.
          Few-Shot Learning (FSL) teaches machines to do the same.
        </p>
        <Callout type="info">
          <strong>Analogy:</strong> Traditional deep learning is like studying 10,000 flashcards before an exam.
          Few-shot learning is like glancing at 5 examples and acing the test anyway.
        </Callout>
        <p className="text-muted-foreground leading-relaxed">
          In a typical FSL setup, we use <strong>N-way K-shot</strong> classification: choose N classes,
          provide K examples each (the <em>support set</em>), and test on new images (the <em>query set</em>).
          Common settings are 5-way 1-shot and 5-way 5-shot.
        </p>
      </section>

      {/* Lottery Ticket Hypothesis */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Layers className="h-5 w-5 text-[hsl(var(--doc-purple))]" /> The Lottery Ticket Hypothesis
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          In 2019, Jonathan Frankle and Michael Carlin proposed a fascinating idea: inside every large neural network,
          there exists a <strong>smaller subnetwork</strong> (a "winning ticket") that — when trained in isolation
          from the same initial weights — can match the full network's performance.
        </p>
        <Callout type="tip">
          <strong>Think of it like this:</strong> A 100-person company might have a core team of 50 people doing
          all the critical work. Removing the other 50 doesn't hurt productivity — and sometimes the smaller team
          communicates better and gets <em>more</em> done.
        </Callout>
        <p className="text-muted-foreground leading-relaxed">
          The process of finding these tickets is called <strong>Iterative Magnitude Pruning (IMP)</strong>:
          train the full network, remove the smallest-magnitude weights, rewind the remaining weights to their
          initial values, and repeat.
        </p>
      </section>

      {/* Why combine? */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-[hsl(var(--doc-orange))]" /> Why Combine Them?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Few-shot models already work with limited data, but they're still large networks.
          If we can find winning tickets inside FSL models, we get <strong>compact models that learn
          efficiently from minimal data</strong> — perfect for real-world deployment.
        </p>
      </section>

      {/* Applications */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Real-World Applications</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { icon: Leaf, title: "Agriculture", desc: "Identify crop diseases from just a few images per disease type." },
            { icon: HeartPulse, title: "Healthcare", desc: "Diagnose rare conditions where labeled medical images are scarce." },
            { icon: Wifi, title: "Edge Devices", desc: "Run efficient models on drones, phones, and IoT sensors in real-time." },
          ].map((app) => (
            <div key={app.title} className="rounded-lg border border-border p-4">
              <app.icon className="h-5 w-5 text-[hsl(var(--doc-green))] mb-2" />
              <h3 className="text-sm font-semibold text-foreground">{app.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
