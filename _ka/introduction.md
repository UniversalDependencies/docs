---
layout: base
title:  'Introduction'
permalink: introduction.html
udver: '2'
---

# Introduction

The Georgian UD Treebank (UD_Georgian-GLC) is the first syntactically annotated corpus of Georgian. The annotations have been performed on a representative sample of sentences randomly selected from the GLC (Doborjginidze et al. 2013). The annotations provide information about the grammatical structure and dependencies within the sentences, allowing a better understanding of the syntactic structure of the Georgian language. The tokenization and segmentation principles in the GLC (Google Language Codes) differ slightly from those represented in the UD (Universal Dependencies) specifications, particularly regarding multiword tokens and, the UD specifications' approach has been adopted to avoid the above-mentioned difference. Morpho-syntactic annotation already discussed in Lobzhanidze (2022) was automatically converted to meet the requirements of the UD. Thus, the UD_Georgian-GLC incorporates automatic annotation for lemmas (LEMMA), part-of-speech categories (UPOS; XPOS), morphological features (FEATS), transliteration and tokenization issues (MISC). The heads of the current words (HEADS), dependency relations (DEPREL), and enhanced dependency graph (DEPS) have been automatically converted, reviewed, and manually corrected. 
The current version of the UD_Georgian-GLC treebank includes 152 utterances (sentences) or 2123 tokens. In future releases, the UD_Georgian-GLC treebank will expand the available data by incorporating additional texts. The primary objective is to provide a more comprehensive and representative dataset for training and analysis purposes.

## Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | "Sentence" segmented according to dependency tree, "tokenization" from original GLC annotation supplemented with additional automatic tokenizaton of multiword tokens. |
| FORM | From the original GLC annotation. |
| LEMMA | From the original GLC annotation. |
| UPOSTAG | Mapped from the original GLC annotation. |
| XPOSTAG | From Doborjginidze et al. (2013) and Lobzhanidze (2022) |
| FEATS | Mapped from the original GLC annotation. |
| HEAD | Converted automatically with manual corrections |
| DEPREL | Converted automatically with manual corrections |
| DEPS | Converted automatically with manual corrections |
| MISC | Converted automatically |

## References

* Doborjginidze, N., Lobzhanidze, I., Gunia, I. (2012). Georgian language corpus. http://corpora.iliauni.edu.ge/. Accessed 15 July 2023.
* Doborjginidze, N., Lobzhanidze, I., Mirianashvili, G. (2014). Corpus of Georgian Chronicles. http://corpora.iliauni.edu.ge/. Accessed 15 July 2023.
* Lobzhanidze, I. (2022). Finite-State Computational Morphology: An Analyzer and Generator for Georgian. Cham: Springer.
