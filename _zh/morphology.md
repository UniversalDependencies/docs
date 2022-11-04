---
layout: base
title:  'Morphology'
udver: '2'
---

# Morphology

## UD Chinese

[Description not currently available.]



## UD Chinese-CFL

### Lemmas

The lemma is the same as the word, except when the word contains a spelling error. See <a href="http://universaldependencies.org/zh/overview/tokenization.html#UD">Tokenization section for UD Chinese-CFL</a> for a definition of a spelling error.

### Part-of-speech tags

POS tagging is performed on the basis of the lemma, rather than the word. Hence, in the sentence \*不關多貴我也買, 不關 is not tagged as VERB but rather as SCONJ, on account of its lemma 不管.

When determining the POS, one usually considers both the "morphological evidence", i.e., the linguistic form of the word, as well as the "distributional evidence", i.e., its syntactic use in the sentence. In a well-formed sentence, these two kinds of evidence should agree; in learner text, however, they may conflict (Ragheb and Dickinson, 2014).

Consider the word 可怕 _kepa_ "scary" in the sentence \*我可怕他 "\*I scary him". Morphological evidence suggests the word 可怕 _kepa_ "scary" should be tagged as an adjective (ADJ), reflecting its normal usage. Distributional evidence suggests it should be tagged as a verb, since the trailing pronoun 他 _ta_ "him" implies its use as a verb with a direct object.

When these two kinds of evidence contradict one another, the morphological evidence prevails. The example sentence is thus tagged as:

我/PN 可怕/ADJ 他/PN

However, we also include the "distributional POS tag" (in column 3 of the `.conllux` file).

### Features

Features are not currently implemented.



## UD Chinese-HK

### Lemmas

Lemmas are not used in this treebank since Mandarin is majorly isolating.

### Features

Features are not used in this treebank since Mandarin is majorly isolating.



## UD Chinese-PatentChar

### Lemmas

Lemmas are not used in this treebank since Mandarin is majorly isolating.


### Part-of-speech tags

Like the tokenization, the part-of-speech tags are fistly automatically distributed by the vote of their corresponding POS taggers (SpaCy tagger, Trankit tagger and Stanza tagger), and then manually corrected.


### Features

Features are not used in this treebank since Mandarin is majorly isolating.




