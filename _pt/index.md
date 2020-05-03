---
layout: base
title:  'Portuguese UD'
udver: '2'
---

# UD for Portuguese <span class="flagspan"><img class="flag" src="../../flags/svg/PT.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/BR.svg" /></span>

Preliminary documentation for Portuguese treebanks.

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* Compounds with hyphen are annotated as MWT (multi-word tokens) and splitted into tokens without the hyphen. That is, `homen-aranha` become two tokens `homen` and `aranha`.
* Mesoclisis (`contar-lhe-ei` would be `contar`, `lhe` and `ei`) and enclisis (`sentem-se` become `sentem` and `se`) follow the same rule.

## Morphology

### Tags

This is an overview only. We are following the UD rules as close as
possible. Moreover, we are using MWEPOS in the Misc field to specify
the POS tag of multi-word expressions as a whole.

### Features

More in the future.

### Lemmas

* For NOUN, the singular form.
* For PROPN, the same form preserving the capitalization.
* For ADJ and DET, masculine and singular form.
* For VERB and AUX, the infinitive of the verb.
* For PRON, if noun, follow the NOUN rule, if adjective pronouns,
  follow the ADJ rule.

## Syntax


* Only `ser` and `estar` should be consider copulas. 

More next.

---

## Treebanks

There are [3](../treebanks/pt-comparison.html) LANGUAGE UD treebanks:

  * [Portuguese-Bosque](../treebanks/pt_bosque/index.html)
  * [Portuguese-GSD](../treebanks/pt_gsd/index.html)
  * [Portuguese-PUD](../treebanks/pt_pud/index.html)
