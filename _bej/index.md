---
layout: base
title:  'Beja UD'
udver: '2'
---

# UD for Beja <span class="flagspan"><img class="flag" src="../../flags/svg/SD.svg" /></span>

## Tokenization and Word Segmentation

The dependencies presented in the Universal Dependencies framework are based on a lexical approach of the syntax, the first step of the processing chain is then naturally constituted by a consideration of the tokenization. The idea is to extract the syntactic information related to the words in the discourse chain through the realized split.

 * In the context of Martine Vanhove's work on the initial glossed corpus, we decided to operate a morphological segmentation which allows to highlight a number of elements related to the morphology and the syntax of the language, as Beja contains several affixes and clitics that reflect syntactic functions. In particular, we separate the inflectional affixes and clitics like `a- dif =ho:b (1SG leave SCONJ)`.
 * As we are dealing with oral data, we have punctuation tokens that mark breaks in the prosodic sequence, a single slash (/) indicates a minor boundary between two intonation units while a double slash (//) indicates a major prosodic break between two intonation units.


## Morphology

This is an overview only. For more detailed discussion and examples, see the list of [Beja POS tags](_bej/pos/index.html)
and [Beja features](feat/index.html).


### Tags

 * The language specific tagset is the original annotation made from the extended version of the Leipzig Glossing Rules. (Available at [here](https://corpafroas.huma-num.fr/glosses.html))
 * The UD tagset is based on a conversion from the previous annotation to UPOS.
 * Beja uses 16 of the universal tags (with the exception of SYM, which is not relevant for oral data)
 * Due to morphological segmentation, affixes are analyzed according to their distributional/syntactic properties in the sentence, they can be tagged as PRO in case they carry out the pronominal subject index function, as SCONJ in case of a nominalizater marking a converb, as PART if it is a case marker, AUX to highlight verbal derivational affixes or as X in case of a phonic element, a false start or a swallowing noise. The same thing happens for clitics that can be DET or PRON.


### Features

 * Beja treebank uses 21 universal features
 * Two langage specific features have been added to the scheme: Singulative which is used to distinguish collective nouns that designate a single entity with a boolean value (Yes if it is a singulative), TokenType to describe the token type due to morphological segmentation (with values affix, clitic, stem and unfinished) and VerbClass to mark both verb classes in Beja (with values 1 and 2).
 * We also added specific values :
	* Augmentative for the Degree feature (`Aspect=Aug`)
	* Aorist for the Aspect feature (`Aspect=Aor`)
	* Perfective for the Aspect feature (`Aspect=Pfv`)


## Syntax

 * Bedja is mostly a final-headed language. The reverse order can also be found sometimes, for reasons related to the organization of the informational structure.
 * The dependency analysis is a conversion of the manual annotation to SUD format. For more information, see [SUD guidelines](https://surfacesyntacticud.github.io/guidelines/u/)
 * Beja subjects are mostly noun phrases in inital position and are analyse by a standard nsubj relation. In addition to a possible independent lexical or pronominal subject, the Beja verb calls for an attached pronominal subject marker. This construction will be described via the language-specific sub-relation `aff` to the nsubj relation (`nsubj:aff`).
 * This process is the same used to describe other affixes relations. We have `obj:aff`,`case:aff`, `aux:aff`, `mark:aff` and `dep:aff`.
 * The complement is mostly pre-posed at the head of the phrase. We have direct object with `obj`, indirect object with `iobj`.


## Treebanks

There are [1](../treebanks/bej-comparison.html) Beja UD treebank:

  * [Beja-NSC](../treebanks/bej_nsc/index.html)
