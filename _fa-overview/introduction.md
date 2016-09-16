---
layout: base
title:  'Introduction'
permalink: fa/overview/introduction.html
---

# Introduction

The Persian Universal Dependency Treebank (Persian UD) is the converted version of the Uppsala Persian Dependency Treebank (UPDT) (Seraji, 2015). The treebank has its original annotation scheme based on Stanford Typed Dependencies (de Marneffe et al., 2006; de Marneffe and Manning, 2008). The scheme was extended for Persian to include the language specific syntactic relations that could not be covered by the primary scheme developed for English. The treebank consists of 6000 sentence of written texts with large domain variations, in terms of different genres (containing newspaper articles, fictions, technical descriptions, and documents about culture and art) and tokenization. The variations in the tokenization are due to the orthographic variations of compound words and fixed expressions in the language. The original UPDT was developed by Mojgan Seraji, under the supervision of Joakim Nivre and Carina Jahani at Uppsala University.

Apart from the universal annotation scheme and the general rules in the UD, the Persian UD and the UPDT differ further in tokenization. All words containing unsegmented clitics (pronominal and copula clitics) annotated with complex labels in the UPDT have been separated from the clitics and received distinct labels in the Persian UD.

The conversion of the UPDT to the Universal Dependencies has been carried out semi-automatically. In this process, we used a conversion script for reversing the head and dependent relations in the prepositional modifier (prep) and object of a preposition (pobj). Furthermore, we have used other scripts tailored for Persian to separate different types of clitics from their host. Subsequently we added different rules for rewriting the coarse-grained part-of-speech tags and the dependency labels. In the current release, only a subset of the morphological features has been included. Adding the rest of the morphological features, as well as lemmas, remain as future work. We are extremely thankful to Filip Ginter for his help in developing the conversion scripts for Persian.

## References

* De Marneffe, Marie-Catherine, Bill MacCartney, and Christopher D. Manning. 2006. Generating typed dependency parses from phrase structure parses. In Proceedings of the 5th International Conference on Language Resources and Evaluation (LREC).
* De Marneffe, Marie-Catherine, and Christopher D. Manning. 2008. Stanford Typed Dependencies Representation. In Proceedings of the COLING’08 Workshop on Cross-Framework and Cross-Domain Parser Evaluation.
* Seraji Mojgan. 2015. Morphosyntactic Corpora and Tools for Persian. PhD Thesis. Studia Linguistica Upsaliensia 16.
