---
layout: base
title:  'Morphology'
permalink: ru/overview/morphology.html
---

# Morphology

Universal part-of-speech tags and universal features in the Russian data have been obtained
by an automatic conversion of the RTB morphological tags.

Interset uses only the tags as the source information.
In some cases, the universal POS tags and features were further (automatically) refined
based on word forms, lemmas and dependency relations.
In particular, the lemmas in RTB themselves may contain additional features;
these were removed from lemmas and converted to additional language-specific features
in the FEATS column. 
