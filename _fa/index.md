---
layout: base
title:  'Persian UD'
udver: '2'
---

# UD for Persian <span class="flagspan"><img class="flag" src="../flags/svg/IR.svg" /></span>
UD Persian contains data from multiple treebanks created by different teams at different times and with often different conversion tools. Currently there are two treebanks: [Seraji](https://github.com/UniversalDependencies/UD_Persian-Seraji) and [PerDT](https://github.com/UniversalDependencies/UD_Persian-PerDT).

* [Seraji](https://universaldependencies.org/treebanks/fa_seraji/index.html): The Persian Universal Dependency Treebank (Persian UD) is the converted version of the Uppsala Persian Dependency Treebank (UPDT) (Seraji, 2015). The treebank has its original annotation scheme based on Stanford Typed Dependencies (de Marneffe et al., 2006; de Marneffe and Manning, 2008). The scheme was extended for Persian to include the language specific syntactic relations that could not be covered by the primary scheme developed for English. The treebank consists of 6000 sentence of written texts with large domain variations, in terms of different genres (containing newspaper articles, fictions, technical descriptions, and documents about culture and art) and tokenization. The variations in the tokenization are due to the orthographic variations of compound words and fixed expressions in the language. The original UPDT was developed by Mojgan Seraji, under the supervision of Joakim Nivre and Carina Jahani at Uppsala University. Apart from the universal annotation scheme and the general rules in the UD, the Persian UD and the UPDT differ further in tokenization. All words containing unsegmented clitics (pronominal and copula clitics) annotated with complex labels in the UPDT have been separated from the clitics and received distinct labels in the Persian UD. The conversion of the UPDT to the Universal Dependencies has been carried out semi-automatically. In this process, we used a conversion script for reversing the head and dependent relations in the prepositional modifier (prep) and object of a preposition (pobj). Furthermore, we have used other scripts tailored for Persian to separate different types of clitics from their host. Subsequently we added different rules for rewriting the coarse-grained part-of-speech tags and the dependency labels. In the current release, only a subset of the morphological features has been included. Adding the rest of the morphological features, as well as lemmas, remain as future work. We are extremely thankful to Filip Ginter for his help in developing the conversion scripts for Persian.
* [PerDT](https://universaldependencies.org/treebanks/fa_perdt/index.html): [The Persian Universal Dependency Treebank (PerUDT)](https://universaldependencies.org/treebanks/fa_perdt/index.html) is based on <a href="https://www.aclweb.org/anthology/N13-1031v1.pdf"> Persian Dependency Treebank (PerDT) </a>(Rasooli et al.,2013). The original Treebank consists of 29K sentences sampled from contemporary Persian text in different genres including: news, academic papers, magazine articles and fictions. This treebank was annotated based on a language-specific schema and its automatic conversion involved three main steps: revising tokenization, POS mapping and dependency mapping. In tokenization step, in order to separate multiword inflections of simple verbs grouped as one token in PerDT, we followed the guidelines in (Rasooli et al., 2013, Table 3) to automatically find the main verbs. Also we automatically separated pronominal clitics.  In POS conversion step, we used the state of the art <a href="https://arxiv.org/abs/2003.08875"> BERT-based Persian NER tagger</a> (Taher et al.,2020) with manual corrections to extend recall. Through seven different entities detected by tagger, we used Person and Location to mark PROPN tags.  PerDT contains 43 syntactic relations with no straightforward mapping for most of them, conjunctions arranged from the beginning of the sentence to the end and more importantly, prepositions regarded as the head of prepositional phrases and auxiliary verbs as the head of sentences. So we rearranged the order of conjunctions from end to the beginning through a script and tailored rules to convert each kind of relation to its UD version properly. Through the whole process and at the end of each step, we investigated the results and applied manual corrections if it was needed.  



## Tokenization and Word Segmentation

Words are generally delimited by whitespace or punctuation. No tokens in any of the UD Persian corpora currently contain whitespace. There are some multi-word tokens in the data in case of clitics.

## Morphology
See specific documentations of each treebank.

- [Seraji](https://universaldependencies.org/treebanks/fa_seraji/index.html)
- [PerDT](https://universaldependencies.org/treebanks/fa_perdt/index.html)

### Tags

See specific documentations of each treebank.

- [Seraji](https://universaldependencies.org/treebanks/fa_seraji/index.html)
- [PerDT](https://universaldependencies.org/treebanks/fa_perdt/index.html)
 
### Features

See specific documentations of each treebank.

- [Seraji](https://universaldependencies.org/treebanks/fa_seraji/index.html)
- [PerDT](https://universaldependencies.org/treebanks/fa_perdt/index.html)

## Syntax

Standard deprels are used, except for some of the follwing relations:

- [Seraji](https://universaldependencies.org/treebanks/fa_seraji/index.html): This corpus uses 10 relation subtypes: acl:relcl, aux:pass, cc:preconj, compound:lvc, compound:prt, det:predet, flat:foreign, nmod:poss, nsubj:nc, nsubj:pass.
- [PerDT](https://universaldependencies.org/treebanks/fa_perdt/index.html): This corpus uses 7 relation subtypes: aux:pass, compound:lv, compound:lvc, flat:name, flat:num, nsubj:pass, obl:arg.


## Treebanks

There are two Persian UD treebanks:

  * [UD_Persian-Seraji](https://github.com/UniversalDependencies/UD_Persian-Seraji)
  * [UD_Persian-PerDt](https://github.com/UniversalDependencies/UD_Persian-PerDT)


