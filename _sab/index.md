---
layout: base
title:  'Bokota UD'
udver: '2'
---

# UD for Bokota <span class="flagspan"><img class="flag" src="../../flags/svg/PA.svg" /></span>

The [Bokota language](https://glottolog.org/resource/languoid/id/boko1272) is a member of the Chibchan language family. The language is spoken by about 500 speakers in Panama. The variant of the Bokota treebank is spoken in the Comarca Ngobe-Bugle, at the border of the Veraguas Province, along the Caribbean coast. The other known variant of the language is called Buglere, and is spoken in the province of Chiriqui, in Panama.


## Tokenization and Word Segmentation

The Bokota treebank is interlinearized and glossed on a morphological basis.
Tokenization was made into words. Clitics arepreceded by an “=” sign in the transcription.
As we are dealing with oral data, we have chosen discourse units as the basic transcription unit.
This is work in progress, the tokenisation might change in future versions.


## Morphology

This is an overview only. For more detailed discussion and examples, see the list of Bokota POS tags and Bokota features.


### Tags

The language specific tagset is the original annotation made from the extended version of the Leipzig Glossing Rules. (Available at [here](https://corpafroas.huma-num.fr/glosses.html))
The UD tagset is based on a conversion from the previous annotation to UPOS. 
Bokota uses 15 of the universal tags (SYM and INTJ are not used).
Spanish borrowings are tagged as X (upos) when they are not integrated in the grammar. They are tagged with their spanish upos when they are integrated. 


### Features

The Bokota treebank uses universal features. No language specific feature have been used yet. 
Spanish borrowings have a Lang feature specifying their origin. 
Verbs are further specified for transitivity.


## Syntax

The dependency analysis is a conversion of the manual annotation to SUD format. For more information, see [SUD guidelines](https://surfacesyntacticud.github.io/guidelines/u/).
Bokota is an SOV language in which other word orders are possible depending on the information structure.
In Bokota, subjects and objects are strongly restricted to the preverbal domain. 
The behaviour of auxiliaries allows to desambiguate the reference in the preverbal domain where a strict S AUX OV order is expected.
Adverbial and oblique elements have a prefered position in the post-verbal domain. 


## Treebanks

There is one Bokota UD treebank:

  * [Bokota-ChibErgIS](../treebanks/sab_chibergis)
