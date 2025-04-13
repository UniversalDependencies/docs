---
layout: base
title:  'Pesh UD'
udver: '2'
---

# UD for Pesh <span class="flagspan"><img class="flag" src="../../flags/svg/HN.svg" /></span>

The [Pesh language](https://glottolog.org/resource/languoid/id/pech1241) (aka Paya) is a member of the Chibchan language family. The language is spoken by about 500 speakers in Honduras.


## Tokenization and Word Segmentation

The Pesh treebank is an extension of an oral corpus (https://www.elararchive.org/dk0392) interlinearized and glossed on a morphological basis.
Tokenization was made into words (with and without affixes) and clitics while the syntactic information contained in affixes is annotated by morphological features of the affixed words. Clitics arepreceded by an “=” sign in the transcription.
As we are dealing with oral data, we have chosen discourse units as the basic transcription unit.

## Morphology

This is an overview only. For more detailed discussion and examples, see the list of Pesh POS tags and Pesh features.

### Tags

The language specific tagset is the original annotation made from the extended version of the Leipzig Glossing Rules. (Available at [here](https://corpafroas.huma-num.fr/glosses.html))
The UD tagset is based on a conversion from the previous annotation to UPOS.
There is no separate class of adjectives in Pesh. Adnominal modifiers expressing property concepts are tagged `NOUN`.
Pesh uses 16 of the universal tags (SYM is not relevant for oral data).


### Features

The Pesh treebank uses nine universal features: `AdvType`, `Animacy`, `Case`, `Clusivity`, `Person`, `PronType`, `Reflex`, `VerbForm`, `Voice`.
`Case` has 3 possible values: Erg, Abs, Nom. `Case` marking is optional except for interrogative clauses, relative clauses and the pseudo-passive construction. 
One language specific value associated with the Pesh VERB has been added to the scheme:
Appl = Applicative for the Valency feature

## Syntax

The dependency analysis is a conversion of the manual annotation to SUD format. For more information, see [SUD guidelines](https://surfacesyntacticud.github.io/guidelines/u/).
Pesh is a verb final language in which other word orders are possible depending on the information structure.
Pesh is a prodrop language. In addition to a possible independent lexical or pronominal subject (tagged nsubj), the VERB contains agreement features for Person.
We have direct object with obj, indirect object with iobj.

## Treebanks

There is [one](../treebanks/pay-comparison.html) Pesh UD treebank:

  * [Pesh-ChibErgIS](../treebanks/pay_chisbergis)

