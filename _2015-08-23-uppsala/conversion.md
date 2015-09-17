---
layout: base
title:  'Uppsala Group on Conversion Best Practice and Tools'
---

# Uppsala Group on Conversion Best Practice and Tools

Aitziber, Barbara, Filip, Giuseppe, Lilian, Natalia, Verginica, Željko

## Minimal requirements for a UD treebank

- No lower limit on size, the only compulsory annotation fields are `ID`, `FORM`, `CPOS`, `HEAD`, `DEPREL`
- **Incorrect/suspect dependencies**: best marked in MISC, if we use an agreed-upon keyword maybe this could be honored by the visualizer
- **Diffs**: a list of the most important diffs would be good to have, because this information is currently not available in one place. This is especially important for treebanks that are being used as a reference, so as not to propagate diffs
- **Docs**: as precise as possible, encourage code release, minimally list the main steps
- **Consistency**: patterns to check consistency could be written down during the conversion and included in the validator. The problem here is that universally true/false patterns which would be useful at the same time are hard to find.
- **XML**: The toolchain should support CoNLL-X (both for tokens and words). No UD XML scheme needed.

## Annotation tools

At least these were mentioned, feel free to expand!

- [TrED](https://ufal.mff.cuni.cz/tred/)
- [DgAnnotator](http://www.di.unipi.it/~attardi/software.html)
- [brat](http://brat.nlplab.org)
- [yEd](http://www.yworks.com/en/products/yfiles/yed/)
- [whatswrong](https://github.com/riedelcastro/whatswrong)
- [Arethusa](http://sosol.perseids.org/tools/arethusa/app/#/)

## Conversion tools

- The Copenhagen group may release their networkx-based solution
- Dan might comment on the Prague tools

## Tokenization

Nearly none of the treebanks distribute the untokenized sentences. This complicates automatic induction of tokenizers from the data. It would be great to include the untokenized text, use the [SpaceAfter](http://universaldependencies.github.io/docs/format.html) mechanism of the CoNLL-U format, or at least provide data for training the tokenizers privately.

## Parallel treebank

Maybe it would be good to expand on the Cairo initiative and have a parallel text which could be annotated, so as to help new corpora get started as well as gather some UD parallel data. About 10K tokens would seem like the right size. The Cairo corpus should be mentioned somewhere.
