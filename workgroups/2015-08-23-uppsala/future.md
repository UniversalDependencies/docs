---
layout: base
title:  'Uppsala Group on Future of UD'
---

# Uppsala Group on Future of UD

Aitziber, Anders, Filip, Jan, Jenna, Tommi, Veronika, Zeljko

This group discussed possible extensions towards annotation of semantics. 

## Discussion covered the following topics:

- semantic roles: which ones, extent, representation
- word senses: which "ontology", difficulties with IAA
- propbanking/valency
- conjunct propagation
- Named entities (wrt to existing annotation guidelines in UD)
- Grounding
- co-reference, information structure, discourse
- ellipsis / NULL element addition
- in view of preceding group discussions, especially MWE group, LVCs and idioms
- principles, minimal set of annotation to be called "semantic annotation"


## Group-internal consensus:

- no change to current format and structure - if anything, must be "add-on" (only addition to current scheme and format)
- basis features to include in "UD Semantics 1.0":
  - exlicitly identified content words
  - graph structure over content words, with conjunct propagated ("effective heads")
  - labeled relations on every "semantic" edge (~30 types: not semantic roles, but rather arguments as in propbank, plus non-argument relations as in PDT)
  - LVCs and idioms annotated
  - Named entities, labeled at least on "top level" hierarchy (~5-7 classes)
  - NULL words: only positively defined
  - WSD with caution (maybe not in UD Semantics 1.0 - which ontology??)
  - something should be out by end of next year (process: survey of treebanks, guidelines, annotation)
- minimal set for a treebank to be considered as having semantic annotation: content words, all relations (with effective heads resolved), labels at least for verbs and their arguments

## Report and discussion with all

- several concerns raised
  - do "enhanced" things first
  - named entities, LVCs, idioms perhaps the most pressing in terms of need?
- several non-group people expressed interest to contribute to the process
