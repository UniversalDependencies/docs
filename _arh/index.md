---
layout: base
title:  'Ika UD'
udver: '2'
---

# UD for Ika <span class="flagspan"><img class="flag" src="../../flags/svg/CO.svg" /></span>

The [Ika language](https://glottolog.org/resource/languoid/id/arhu1242) is a member of the Chibchan language family. The language is spoken by about 25,000 speakers in Colombia.


## Tokenization and Word Segmentation

The Ika treebank is interlinearized and glossed on a morphological basis.
Tokenization was made into words (with and without affixes) and clitics while the syntactic information contained in affixes is annotated by morphological features of the affixed words. Clitics are preceded by an “=” sign in the transcription.
As we are dealing with oral data, we have chosen discourse units as the basic transcription unit.

## Morphology

This is an overview only. For more detailed discussion and examples, see the list of Ika POS tags and Ika features.

### Tags

The language specific tagset is the original annotation made from the extended version of the Leipzig Glossing Rules. (Available [here](https://corpafroas.huma-num.fr/glosses.html))
The UD tagset is based on a conversion from the previous annotation to UPOS.

Ika uses 16 of the universal tags (SYM is not relevant for oral data).


### Features

The Ika treebank uses three universal features: `Animacy`, `Case`, `Definiteness`.
All universal features annotations were applied to the head of the argument phrase. That means that in cases where the argument involved a copular construction, the annotation was assigned to the copula itself, as it functions as the syntactic head.

`Case` has 4 possible values: Erg, Abs, Nom, Dat.
Ergative was assigned to subjects of transitive and ditransitive subjects.
Nominative case was assigned to subjects of clauses containing a first person subject and/or object, since ergative case marking is categorically ungrammatical in such contexts.
Absolutive was assigned to subjects of intransitive verbs and (direct) objects.

`Definiteness` is not overtly marked in the language, but was inferred from context.




## Syntax

The dependency analysis is a conversion of the manual annotation to SUD format. For more information, see [SUD guidelines](https://surfacesyntacticud.github.io/guidelines/u/).
Ika is a verb final language in which other argument orders are possible depending on the information structure (OSV, OVS, SVO).
Ika is a prodrop language; every argument can be dropped. In addition to a possible independent lexical or pronominal subject (tagged nsubj), the VERB contains agreement features for Person.
We have direct object with obj, indirect object with iobj.


## Treebanks

There is [one](../treebanks/arh-comparison.html) Ika UD treebank:

  * [Ika-ChibErgIS](../treebanks/arh_chisbergis)