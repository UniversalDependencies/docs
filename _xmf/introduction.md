---
layout: base
title:  'Introduction'
permalink: xmf/overview/introduction.html
udver: '2'
---

# Introduction

The Megrelian UD Treebank (UD_Megrelian-MLC) is the first syntactically annotated corpus of Megrelian. The annotations have been performed on a representative sample of sentences randomly selected from the MLC (Gersamia et al. 2022). The annotations provide information about the lemmata, PoS-es and features of Megrelian. Morpho-syntactic annotation already provided in Gersamia et al. (2022) was automatically converted to meet the requirements of the UD. Thus, the UD_Megrelian-MLC incorporates automatic annotation for lemmas (LEMMA), part-of-speech categories (UPOS; XPOS), morphological features (FEATS), transliteration and tokenization issues (MISC). The heads of the current words (HEADS), dependency relations (DEPREL), and enhanced dependency graph (DEPS) are not done yet. 
The current version of the UD_Megrelian-MLC treebank includes 150 utterances (sentences). In future releases, the UD_Megrelian-MLC treebank will expand the available data by incorporating additional texts from the Megrelian Language Corpus available at xmf.iliauni.edu.ge . The primary objective is to provide a more comprehensive and representative dataset for training and analysis purposes.

## Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | "Sentence" segmented according to dependency tree, "tokenization" from original MLC annotation supplemented with additional automatic tokenizaton of multiword tokens. |
| FORM | From the original MLC annotation. |
| LEMMA | From the original MLC annotation. |
| UPOSTAG | Mapped from the original MLC annotation. |
| XPOSTAG | From Gersamia et al. (2022) and Kartozia et al. (2010) |
| FEATS | Mapped from the original MLC annotation. |
| HEAD | - |
| DEPREL | - |
| DEPS | - |
| MISC | Converted automatically |

## References

* Gersamia, R., Lobzhanidze, I., ed. The Megrelian Language Corpus. Megrelian Language Corpus, 4 April. 2022(v1). Web, https://xmf.iliauni.edu.ge/. Accessed 26 June 2025.
* Kartozia, G., Gersamia, R., Lomia, M., Tskhadaia, T. (2010). Linguistic Analysis of Megrelian. Tbilisi: Ilia State University.
