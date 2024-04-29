---
layout: base
title:  'Telugu English UD'
udver: '2'
---

# UD for Telugu English <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

In genral, the Telugu-English code-switched treebank follows the guidelines of invidiual Telugu and English treebanks. 

## Introduction
The treebank consists of edited data from the Telugu UD treebank (Rama and Vajilla, 2021), sentences from a grammar book, and the MASSIVE dataset, spoken conversational utterances in Telugu (FitzGerald et al., 2022; Bastianelli et al., 2020). The sentences were randomly selected from each corpus. The sentences were romanized and each sentence was altered to contain at least one code-switch. The sentences were then annotated following the Universal Dependencies annotation scheme.


## Language IDs
- All sentences in the treebank include at least one code-switch from Telugu to English. The language labels of the tokens are represented in the MISC column. 
- The values in the MISC column are: `te` for Telugu, `en` for English, and `univ` for punctuation and symbols.

## Tokenization and Word Segmentation
- In general, words are delimeted by whitespace characters or punctuation. 
- Puncuation are tokenized as separate tokens, with the exception of abbreviations and hyphenated compounds. 
- There are no multiword tokens. 


## Morphology

### Tags
- Telugu uses 14 of the 17 universal POS tags. There are no auxiliary verbs, symbols, and unknown words. 
- English uses all 17 universal POS tags. 
- The Telugu `PRON` vs `DET` distinction is based on word lists. 


### Features

- The treebank uses the features of inidividual [Telugu](https://github.com/UniversalDependencies/docs/blob/pages-source/_te/index.md) and [English](https://github.com/UniversalDependencies/docs/blob/pages-source/_en/index.md) treebanks.
- The features used are ID, FORM, UPOSTAG, XPOSTAG, HEAD, DEPREL, MISC. 
- The new features in this treebank are `Lang`, as described in the Language IDs section above.


## Syntax

- The treebank uses the standard syntax of inidividual [Telugu](https://github.com/UniversalDependencies/docs/blob/pages-source/_te/index.md) and [English](https://github.com/UniversalDependencies/docs/blob/pages-source/_en/index.md) treebanks.

## Treebanks

There is [1](../treebanks/qte-comparison.html) Telugu English UD treebanks:

  * [Telugu-English](../treebanks/qte_a/index.html)

## References

* Rama, Taraka and Vajilla, Sowmya (2021). The Telugu UD treebank

```
@misc{UD_Telugu-MTG,
year = {2021},
title = {The Telugu UD treebank},
author = {Rama, Taraka, Vajjala, Sowmya},
url= {https://github.com/UniversalDependencies/UD_Telugu-MTG}
}
```

* FitzGerald, J., Hench, C., Peris, C., et al., (2022). Massive: A 1m-example multilingual natural language understanding dataset with 51 typologically-diverse languages. arXiv preprint arXiv:2204.08582.

```
@misc{fitzgerald2022massive,
      title={MASSIVE: A 1M-Example Multilingual Natural Language Understanding Dataset with 51 Typologically-Diverse Languages}, 
      author={Jack FitzGerald and Christopher Hench and Charith Peris and Scott Mackie and Kay Rottmann and Ana Sanchez and Aaron Nash and Liam Urbach and Vishesh Kakarala and Richa Singh and Swetha Ranganath and Laurie Crist and Misha Britan and Wouter Leeuwis and Gokhan Tur and Prem Natarajan},
      year={2022},
      eprint={2204.08582},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}
```

* Emanuele Bastianelli, Andrea Vanzo, Pawel Swietojanski, and Verena Rieser. (2020). SLURP: A Spoken Language Understanding Resource Package. In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 7252–7262, Online. Association for Computational Linguistics.

```
@inproceedings{bastianelli-etal-2020-slurp,
    title = "{SLURP}: A Spoken Language Understanding Resource Package",
    author = "Bastianelli, Emanuele  and
      Vanzo, Andrea  and
      Swietojanski, Pawel  and
      Rieser, Verena",
    booktitle = "Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)",
    month = nov,
    year = "2020",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2020.emnlp-main.588",
    doi = "10.18653/v1/2020.emnlp-main.588",
    pages = "7252--7262",
    abstract = "Spoken Language Understanding infers semantic meaning directly from audio data, and thus promises to reduce error propagation and misunderstandings in end-user applications. However, publicly available SLU resources are limited. In this paper, we release SLURP, a new SLU package containing the following: (1) A new challenging dataset in English spanning 18 domains, which is substantially bigger and linguistically more diverse than existing datasets; (2) Competitive baselines based on state-of-the-art NLU and ASR systems; (3) A new transparent metric for entity labelling which enables a detailed error analysis for identifying potential areas of improvement. SLURP is available at https://github.com/pswietojanski/slurp."
}
```
