import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const references = [
  "J. Frankle and M. Carlin, \"The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks,\" ICLR 2019.",
  "T. Chen, J. Frankle, S. Chang, S. Liu, Y. Zhang, Z. Wang, and M. Carlin, \"The Lottery Ticket Hypothesis for Pre-trained BERT Networks,\" NeurIPS 2020.",
  "J. Snell, K. Swersky, and R. Zemel, \"Prototypical Networks for Few-shot Learning,\" NeurIPS 2017.",
  "Y. Tian, Y. Wang, D. Krishnan, J. B. Tenenbaum, and P. Isola, \"Rethinking Few-Shot Image Classification: A Good Embedding Is All You Need?,\" ECCV 2020.",
  "O. Vinyals, C. Blundell, T. Lillicrap, K. Kavukcuoglu, and D. Wierstra, \"Matching Networks for One Shot Learning,\" NeurIPS 2016.",
  "C. Finn, P. Abbeel, and S. Levine, \"Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks,\" ICML 2017.",
  "S. Ravi and H. Larochelle, \"Optimization as a Model for Few-Shot Learning,\" ICLR 2017.",
  "H. Li, A. Kadav, I. Durdanovic, H. Samet, and H. P. Graf, \"Pruning Filters for Efficient ConvNets,\" ICLR 2017.",
  "S. Han, J. Pool, J. Tran, and W. J. Dally, \"Learning both Weights and Connections for Efficient Neural Networks,\" NeurIPS 2015.",
  "K. He, X. Zhang, S. Ren, and J. Sun, \"Deep Residual Learning for Image Recognition,\" CVPR 2016.",
  "C. Wah, S. Branson, P. Welinder, O. Berg, and P. Perona, \"The Caltech-UCSD Birds-200-2011 Dataset,\" Technical Report CNS-TR-2011-001, 2011.",
  "A. Morcos, H. Yu, M. Paganini, and Y. Tian, \"One ticket to win them all: generalizing lottery ticket initializations across datasets and optimizers,\" NeurIPS 2019.",
  "V. Ramanujan, M. Wortsman, A. Kembhavi, A. Farhadi, and M. Rastegari, \"What's Hidden in a Randomly Weighted Neural Network?,\" CVPR 2020.",
];

export default function References() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-8">
      <header>
        <p className="text-sm font-semibold text-[hsl(var(--doc-blue))] mb-1">Appendix</p>
        <h1 className="text-3xl font-bold text-foreground">References</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Key papers and resources that informed this research.
        </p>
      </header>

      <ol className="space-y-3">
        {references.map((ref, i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span className="text-muted-foreground font-mono text-xs mt-0.5 shrink-0 w-6 text-right">
              [{i + 1}]
            </span>
            <span className="text-muted-foreground leading-relaxed">{ref}</span>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}
