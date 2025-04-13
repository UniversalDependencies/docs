---
layout: base
title:  'Occitan UD'
udver: '2'
---

# UD for Occitan <span class="flagspan"><img class="flag" src="../../flags/svg/FR-OCC.svg" /></span>
Occitan is a Romance language spoken across the south of France and in several areas of Italy and Spain. It shares numerous linguistic properties with several other Romance languages: it displays number and gender inflection marks on all members of the NP, and it has tense, person and number inflection marks on finite verbs. It is also a pro-drop language with relatively free word order and as such it is closer to Catalan, Spanish and Italian than to French and other regional languages from the north of France.

Furthermore, there is no single standardized variety of Occitan. Occitan has numerous varieties organized in 6 dialectal groups (Auvernhàs, Gascon, Lengadocian, Lemosin, Provençau and Vivaro-Aupenc). Also, there is no global spelling standard. Two different spelling norms are predominant today, one called the classical, based on the Occitan troubadours’ medieval spelling, and the other closer to the French language conventions.

## Tokenization and Word Segmentation
Whitespace signals word boundaries in Occitan. Additionally, some prepositions form multiword tokens with the masculin and plural forms of the determinate article. These are segmented into their components according to the UD Tokenization guidelines. Examples include forms such as *dau* (*de* + *lo*), *als* (*a* + *los*), *pel* (*per* + *lo*), etc.

## Morphology

### Tags

All UD tags are allowed for Occitan.

The Gascon varieties of Occitan have so-called *enunciative particles*, which are positioned in front of the verb and which signal the modality of a clause or sentence. These are annotated as *PART*.

The only verbs considered as auxiliairies are *aver* (*to have*) and *èsser* (*to be*) and their variants. They are considered as auxiliairies when they are part of a complex verb form, in which case they carry the TAM markers.

---

### Features

Occitan displays number (singular and plural) and gender (masculin and feminine) marks on all members of the NP, and the finite verbs are marked for tense, person and number.

---

## Syntax

Occitan is a pro-drop language with relatively free word order.

The verb *èsser* and its variants function as the copula.

Among subtypes of dependency relations, currently only *nsubj:outer* is used.

There is also one language-specific dependency: *discourse:enunc*, which is used to link the enunciative particle (see Morphology) to the head of the clause in which it appears.


---

## Treebanks

There is 1 Occitan UD treebank:

  * [Occitan-TTB](../treebanks/oc_ttb/index.html)
