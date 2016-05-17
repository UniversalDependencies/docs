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
* In Latvian subordinate clause can be introduced by an adverb, e.g., _kad_, _kur_, or noun _kuriene_ in prepositional construction and these cases can not be automatically relabeled as [SCONJ]().
* Some adjectivized participles are not marked with [VerbForm]()`=Part` and has no [Voice]() feature, if original treebank has no such information.
* Some adverbs that have been formed from adjectivized participles, e.g., _ziedošāk_, are not marked `VerbForm=Trans`, if original treebank has no such information.
* Adverbs that have been formed from adjectives, e.g., _labi_, _labāk_, _vislabāk_, has no [Degree]() feature (they should!), because original treebank has no such information.
* Negatives are marked only for verbs as treebank contains no such information for other parts of speach and adding them authomatically would introduce too much errors.
* Reflexiveness is marked on verbs.
* Nouns denominating names of the fractions, e.g. _trešdaļa_, _simtdaļa_ are not currently labeled as [NumType]()`=Frac`.
* Nouns denominating names of large numbers, e.g. _simts_, _tūkstotis_ might not be labeled as `NumType=Ord`.
