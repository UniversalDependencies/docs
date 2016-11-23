---
layout: base
title:  'Executive Summary'
udver:  '2'
---

# Changes from v1 to v2

This document summarizes the major changes from v1 to v2 of the universal guidelines.
The primary purpose is to provide a checklist for treebank developers who want to start the transition from v1 to v2.
More background and discussion can be found in the thematic reports on [v2](index.html), which we cross-reference below.
Complete documentation of the new guidelines will follow as quickly as possible.

## Word segmentation

The ban on spaces inside words in v1 is lifted in v2 in two circumstances:

1. For languages with writing systems that use spaces to mark units smaller than word (typically syllables), spaces are allowed in any word provided that this is declared in the language-specific documentation.  
2. For other languages, spaces are allowed only for an approved and restricted list of exceptions like numbers ("100 000") and abbrevations ("i. e.") that have to be listed explicitly in the language-specific documentation.

More discussion about word segmentation can be found [here](segmentation.html).

## Part-of-speech tags

The universal tagset from v1 is basically kept intact in v2 with two minor revisions:

1. The tag `CONJ` is renamed `CCONJ` to make it more similar to the syntactic relation `cc` (and less similar to `conj`).
2. The guidelines for tags are modified in three cases:
    1. The use of `AUX` is extended from auxiliary verbs in a narrow sense to also include copula verbs and nonverbal TAMVE particles.
    2. The use of `PART` is restricted to a small set of words that must be listed in the language-specific documentation.
    3. The borderline between `PRON` and `DET` is made more flexible to accommodate cross-linguistic variation. 

More discussion about part-of-speech tags can be found [here](postags.html)

## Morphological features

The set of universal features is updated from v1 to v2 in the following ways:

1. Existing features and feature values are renamed:
    1. `Negative` → `Polarity`
    2. `Aspect=Pro` → `Aspect=Prosp`
    3. `VerbForm=Trans` → `VerbForm=Conv`
    4. `Definite=Red` → `Definite=Cons`
    5. `NumType=Gen` → `NumType=Fold` [with a more restricted meaning]
2. New features are added (or promoted to universal features):
    1. `Evident` (evidentiality) with value `Nfh` (non-first hand)
    2. `Polite` (politeness) with values `Infm` (informal), `Form` (formal), `Elev` (elevated status of referent; subtype of `Form`), `Humb` (humbled status of speaker; subtype of `Form`) 
    3. `Abbr` (abbreviation) with value `Yes`
    4. `Foreign` with value `Yes`
3. New values are added (or promoted) to existing features:
    1. `Animacy=Hum` (human)
    2. `Case=Equ` (equative) and `Case=Cmp`(comparative)
    3. `Degree=Equ` (equative)
    4. `Definite=Spec` (specific indefinite)
    5. `Number=Count` (counting form or count plural), `Number=Tri` (trial), `Number=Pauc` (paucal), `Number=Grpa` (greater paucal), `Number=Grpl` (greater plural), `Number=Inv` (inverse number)
    6. `VerbForm=Gdv` (gerundive, not gerund), `VerbForm=Vnoun` (verbal nouns other than infinitives)
    7. `Mood=Pur` (purposive)
    8. `Aspect=Iter` (iterative), `Aspect=Hab` (habitual)
    9. `Voice=Mid` (middle voice), `Voice=Antip` (antipassive), `Voice=Dir` (direct), `Voice=Inv` (inverse)
    10. `PronType=Emp` (emphatic), `PronType=Exc` (exclamative) 
    11. `Person=0`, `Person=4`
4. Unused values are removed from existing features:
    1. `Tense=Nar` (narrative)
    
Revisions to the feature system have whenever possible been made to improve clarity and consistency with other systems such as UniMorph. More discussion about features can be found [here](features.html).

## Syntactic relations 

## The CoNLL-U format
