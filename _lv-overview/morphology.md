---
layout: base
title:  'Morphology'
permalink: lv/overview/morphology.html
---

# Morphology

Universal part-of-speech tags and universal features in the Latvian data have been obtained by an automatic conversion of the Latvian Treebank morphological tags, also taking into account syntactic roles (to distinguish [DET]() from [PRON]()), lemmas and wordforms.

Lemmas from Latvian Treebank is used as-is except "words with spaces", where spliting on whitespaces provides correct result in all known cases.

Currently no language specific tags or features are used.

## Known discrepancies

* All words lacking Latvian morphology are marked as residuals or abrievations in Latvian Treebank. Thus, sometimes it is impossible to convert automaticaly correctly, and something that should be labeled as noun or adjective in UD are mislabeled as [X]().
* Some adjectivized participles are not marked with [VerbForm]()`=Part` and has no [Voice]() feature, if original treebank has no such information.
* Some adverbs that have been formed from adjectivized participles, e.g., _ziedošāk_ "in a more flowering manner", _peļami_ "in a blameworthy manner", are not marked `VerbForm=Trans`, if original treebank has no such information.
* Adverbs that have been formed from adjectives, e.g., _labi_ "in a good manner", _labāk_ "in a better manner", _vislabāk_ "in the best manner", has no [Degree]() feature (they should!), because original treebank has no such information.
* [Polarity]() are marked only for verbs in finite form as treebank contains no such information for other parts of speach and adding them authomatically would introduce too much errors. From version 2.0 also some particles and interjections have marked polarity.
* Reflexiveness is marked on verbs.
* Nouns denominating names of the fractions, e.g. _trešdaļa_ "third part", _simtdaļa_ "hundred part", are not currently labeled as [NumType]()`=Frac`.
* Nouns denominating names of large numbers, e.g. _simts_ "hundred", _tūkstotis_ "thousand", might not be labeled as `NumType=Ord`.

## Other
* Most of the participles in Latvian have [Degree]() feature.
* Currently all verbs are annotated as [VERB]() and never as AUX. This is done because auxilliary verbs in Latvian have full inflectional system and can act as main verb. Thus, this distinction is syntactical, not morphological.

