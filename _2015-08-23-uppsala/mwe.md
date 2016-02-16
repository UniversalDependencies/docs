---
layout: base
title:  'Uppsala Group on Multiword Expressions'
---

# Uppsala Group on Multiword Expressions

_(Aaron Smith, Alessandro Lenci, Anders Johannsen, Jan Hajic, Marie-Catherine de Marneffe, Veronika Vincze)_

The group discussion involved three main topics: the treatment of light verb constructions, the treatment of other MWEs and multiword abbreviations.

## Light verb constructions (LVCs)

Currently there are three different approaches in the UD treebanks concerning the treatment of LVCs (see a forthcoming poster at the next PARSEME meeting):

* LVCs are not distinguished from normal verb+argument phrases (as in English), e.g. _take a flight to Stockholm_ is annotated similarly to _give a book to Mary_: both arguments are attached to the verb
* LVCs are marked structurally (as in Swedish), e.g. in _take a flight to Stockholm_, _Stockholm_ is attached to _flight_ rather than to the verb
* LVCs are marked with extended labels (as in Hungarian), e.g. in _take a flight_, _flight_ has a special label (`dobj:lvc`) that marks its syntactic function and its being an LVC component

During the discussion, we argued that in LVCs, the syntactic and semantic heads of the structure are different, hence we should treat syntactic and semantic aspects differently. We propose to apply a simple syntactic relation between the verb and its argument at the syntactic level, whereas the argument of the construction should be attached to the noun whenever it is possible (i.e. the noun and the argument can stand on their own without the verb). However, the LVC-ness of the construction should be marked at the semantic level, i.e. as an enhanced relation.

## Multiword expressions

As for idioms, we propose a similar annotation scheme: general syntactic labels should be given and idiomacity should be marked at the enhanced (semantic) level.

We clarified the definitions of the relations `compound` and `mwe` (the existing guidelines do not change):

* `compound` should be applied only for morphosyntactically non-standard constructions (e.g. noun-noun compounds, adjective-adjective compounds, etc.)
* `mwe` should be applied to less transparent constructions that are similar to collocations (e.g. multiword conjunctions)

## Multiword abbreviations

Most tokenizers treat MW abbreviations differently, depending on the fact whether it includes a delimiter within (e.g. _e.g._) or not (e.g. _etc._). Thus this issue is related to tokenization and is still to be resolved. As a preliminary suggestion, however, we agreed that the relation `mwe` (or the enhanced relation `mwe:abbrev`) should be applied in between the tokens in case MW abbreviations are to be split up.



