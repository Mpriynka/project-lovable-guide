import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line
} from "recharts";
import { cn } from "@/lib/utils";

const fadeIn = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

// Conv4 data from the report
const conv4Data = {
  "1-shot": [
    { sparsity: "0%", ProtoNet: 46.33, Pretrain: 45.52 },
    { sparsity: "20%", ProtoNet: 46.33, Pretrain: 44.86 },
    { sparsity: "36%", ProtoNet: 46.21, Pretrain: 45.87 },
    { sparsity: "49%", ProtoNet: 47.37, Pretrain: 46.80 },
    { sparsity: "59%", ProtoNet: 46.79, Pretrain: 45.61 },
    { sparsity: "67%", ProtoNet: 45.35, Pretrain: 44.91 },
    { sparsity: "74%", ProtoNet: 44.70, Pretrain: 43.05 },
    { sparsity: "79%", ProtoNet: 41.38, Pretrain: 37.60 },
  ],
  "5-shot": [
    { sparsity: "0%", ProtoNet: 66.27, Pretrain: 62.48 },
    { sparsity: "20%", ProtoNet: 66.14, Pretrain: 63.00 },
    { sparsity: "36%", ProtoNet: 65.68, Pretrain: 63.22 },
    { sparsity: "49%", ProtoNet: 66.73, Pretrain: 63.55 },
    { sparsity: "59%", ProtoNet: 66.07, Pretrain: 63.22 },
    { sparsity: "67%", ProtoNet: 64.44, Pretrain: 62.64 },
    { sparsity: "74%", ProtoNet: 63.39, Pretrain: 61.56 },
    { sparsity: "79%", ProtoNet: 59.68, Pretrain: 56.68 },
  ],
};

const resnet12Data = {
  "1-shot": [
    { sparsity: "0%", ProtoNet: 59.23, Pretrain: 61.07 },
    { sparsity: "20%", ProtoNet: 58.56, Pretrain: 60.44 },
    { sparsity: "36%", ProtoNet: 59.07, Pretrain: 60.61 },
    { sparsity: "49%", ProtoNet: 58.46, Pretrain: 60.75 },
    { sparsity: "59%", ProtoNet: 57.44, Pretrain: 60.52 },
    { sparsity: "67%", ProtoNet: 55.98, Pretrain: 59.68 },
    { sparsity: "74%", ProtoNet: 53.55, Pretrain: 58.20 },
    { sparsity: "79%", ProtoNet: 47.58, Pretrain: 55.74 },
  ],
  "5-shot": [
    { sparsity: "0%", ProtoNet: 78.79, Pretrain: 78.64 },
    { sparsity: "20%", ProtoNet: 78.07, Pretrain: 78.53 },
    { sparsity: "36%", ProtoNet: 78.18, Pretrain: 78.62 },
    { sparsity: "49%", ProtoNet: 77.64, Pretrain: 78.46 },
    { sparsity: "59%", ProtoNet: 76.73, Pretrain: 78.48 },
    { sparsity: "67%", ProtoNet: 75.08, Pretrain: 77.69 },
    { sparsity: "74%", ProtoNet: 72.91, Pretrain: 76.85 },
    { sparsity: "79%", ProtoNet: 66.78, Pretrain: 74.42 },
  ],
};

const crossDomainData = [
  { sparsity: "0%", Conv4_Proto: 39.60, Conv4_Pretrain: 39.02, ResNet_Proto: 42.56, ResNet_Pretrain: 44.56 },
  { sparsity: "49%", Conv4_Proto: 40.50, Conv4_Pretrain: 39.60, ResNet_Proto: 42.20, ResNet_Pretrain: 44.72 },
  { sparsity: "79%", Conv4_Proto: 36.44, Conv4_Pretrain: 35.60, ResNet_Proto: 37.65, ResNet_Pretrain: 42.92 },
];

function Toggle({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="inline-flex rounded-lg border border-border p-0.5 bg-muted/50">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={cn(
            "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
            value === opt ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border-l-4 border-[hsl(var(--doc-green))] bg-[hsl(var(--doc-green-light))] p-4 text-sm leading-relaxed">
      {children}
    </div>
  );
}

export default function Results() {
  const [backbone, setBackbone] = useState("Conv4");
  const [shots, setShots] = useState("5-shot");

  const data = backbone === "Conv4" ? conv4Data : resnet12Data;
  const chartData = data[shots as keyof typeof data];

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-10">
      <header>
        <p className="text-sm font-semibold text-[hsl(var(--doc-blue))] mb-1">Chapter 3</p>
        <h1 className="text-3xl font-bold text-foreground">Results & Analysis</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Interactive exploration of accuracy across different sparsity levels, backbones, and shot settings.
        </p>
      </header>

      {/* Main chart */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Toggle options={["Conv4", "ResNet-12"]} value={backbone} onChange={setBackbone} />
          <Toggle options={["1-shot", "5-shot"]} value={shots} onChange={setShots} />
        </div>
        <div className="rounded-xl border border-border p-4 bg-card">
          <h3 className="text-sm font-semibold text-foreground mb-4">
            {backbone} · {shots} · 5-way Accuracy on MiniImageNet (%)
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,91%)" />
              <XAxis dataKey="sparsity" tick={{ fontSize: 12 }} />
              <YAxis domain={["auto", "auto"]} tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: "1px solid hsl(220,15%,91%)", fontSize: 12 }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="ProtoNet" fill="hsl(220,72%,50%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Pretrain" fill="hsl(262,60%,55%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Key finding */}
      <Callout>
        <strong>🎯 Key Finding:</strong> At ~50% sparsity, Conv4+ProtoNet actually <em>improves</em> over the
        dense baseline (47.37% vs 46.33% in 1-shot; 66.73% vs 66.27% in 5-shot). The "winning ticket" is real!
      </Callout>

      {/* Cross-domain */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Cross-Domain Generalization</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Models trained on MiniImageNet and tested on CUB-200 (5-way 1-shot). This evaluates whether sparse
          subnetworks transfer well to completely different visual domains.
        </p>
        <div className="rounded-xl border border-border p-4 bg-card">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={crossDomainData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,91%)" />
              <XAxis dataKey="sparsity" tick={{ fontSize: 12 }} />
              <YAxis domain={[30, 50]} tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(220,15%,91%)", fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="Conv4_Proto" stroke="hsl(220,72%,50%)" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="Conv4_Pretrain" stroke="hsl(220,72%,70%)" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="ResNet_Proto" stroke="hsl(262,60%,55%)" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="ResNet_Pretrain" stroke="hsl(262,60%,75%)" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Takeaways */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Key Takeaways</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            "Winning tickets exist in FSL — sparse subnetworks can match or beat dense models.",
            "The sweet spot is around 50% sparsity for Conv4, and up to 59% for ResNet-12 with Pretrain.",
            "ProtoNet is more sensitive to pruning than Pretrain, especially at high sparsity.",
            "ResNet-12's skip connections provide natural resilience against aggressive pruning.",
            "Cross-domain transfer is maintained at moderate sparsity but degrades significantly beyond 67%.",
          ].map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[hsl(var(--doc-green))] font-bold mt-0.5">✓</span>
              {t}
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
}
