---
layout: base
title:  'Uppsala Group on Conversion Best Practice and Tools'
---

# Uppsala Group on Conversion Best Practice and Tools

Aitziber, Barbara, Filip, Giuseppe, Lilian, Natalia, Verginica, Željko

## Minimal requirements for a UD treebank

- No lower limit on size, the only compulsory annotation fields are `ID`, `FORM`, `CPOS`, `HEAD`, and `DEPREL`
- **Incorrect/suspect dependencies**: best marked in MISC, if we use an agreed-upon keyword maybe this could be honored by the visualizer
- **Diffs**: a list of the most important diffs would be good to have, because this information is currently not available in one place. This is especially important for treebanks that are being used as a reference, so as not to propagate diffs
- **Docs**: as precise as possible, encourage code release, minimally list the main steps
- **Consistency**: patterns to check consistency could be written down during the conversion and included in the validator. The problem here is that universally true/false patterns which would be useful at the same time are hard to find.
- **XML**: The toolchain should support CoNLL-X (both for tokens and words). No UD XML scheme needed.

## Annotation tools

At least these were mentioned, feel free to expand!

- [TrED](http://ufal.mff.cuni.cz/tred/)
- [DgAnnotator](http://www.di.unipi.it/~attardi/software.html)
- [brat](http://brat.nlplab.org)
- [yEd](http://www.yworks.com/en/products/yfiles/yed/)
- [whatswrong](https://github.com/riedelcastro/whatswrong)
- [Arethusa](http://sosol.perseids.org/tools/arethusa/app/#/)

## Conversion tools

- The Copenhagen group may release their networkx-based solution
- Prague uses [Treex](http://ufal.mff.cuni.cz/treex/) for nearly all tree manipulations. It is a framework written in Perl and it is open-source. More details on how to use it to transform a treebank to Universal Dependencies are given at the website of [HamleDT](http://ufal.mff.cuni.cz/hamledt/) (go to the section called “Obtaining”). Treex includes [Interset](http://ufal.mff.cuni.cz/interset/), a universal tool for conversion between various morphological tagsets, including the universal POS tags and features. (Interset can be used also separately from Treex. There is an Interset-based Perl script [in our tools repository](http://github.com/UniversalDependencies/tools/blob/master/conll_convert_tags_to_uposf.pl).)

## Search and visualization tools

- [PML-TreeQuery](https://ufal-point.mff.cuni.cz/services/pmltq/) in Prague
- [SETS](http://bionlp-www.utu.fi/dep_search/) in Turku

## Tokenization

Nearly none of the treebanks distribute the untokenized sentences. This complicates automatic induction of tokenizers from the data. It would be great to include the untokenized text, use the [SpaceAfter](http://universaldependencies.github.io/docs/format.html) mechanism of the CoNLL-U format, or at least provide data for training the tokenizers privately.

## Parallel treebank

Maybe it would be good to expand on the Cairo initiative and have a parallel text which could be annotated, so as to help new corpora get started as well as gather some UD parallel data. About 10K tokens would seem like the right size. The Cairo corpus should be mentioned somewhere on the main UD page.
