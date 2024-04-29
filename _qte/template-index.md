---
layout: base
title:  'Telugu English UD'
udver: '2'
---

# UD for Telugu English <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

In genral, the Telugu-English code-switched treebank follows the guidelines of invidiual Telugu and English treebanks. 

## Language IDs
- All sentences in the treebank include at least one code-switch. The language information of tokens are represented in the `MISC` column. 
- The values in the `MISC` column are: te for Telugu, en for English, and univ for punctuation and symbols.

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
- The new features in this treebank are `Lang`, as described in the Language IDs section.


## Syntax

- The treebank uses the standard syntax of inidividual [Telugu](https://github.com/UniversalDependencies/docs/blob/pages-source/_te/index.md) and [English](https://github.com/UniversalDependencies/docs/blob/pages-source/_en/index.md) treebanks.


## Treebanks

There is [1](../treebanks/qte-comparison.html) Telugu English UD treebank:

  * [Telugu-English](../treebanks/qte_a/index.html)
