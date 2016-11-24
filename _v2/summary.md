---
layout: base
title:  'Executive Summary'
udver:  '2'
---

# Executive summary of changes from v1 to v2

This document summarizes the major changes from v1 to v2 of the universal guidelines.
The primary purpose is to provide a checklist for treebank developers who want to start the transition from v1 to v2.
More background and discussion can be found in the thematic reports on [v2](index.html), which we cross-reference below.
Complete documentation of the new guidelines will follow as quickly as possible.

## Word segmentation

The ban on spaces inside words in v1 is lifted in v2 in two circumstances:

1. For languages with writing systems that use spaces to mark units smaller than word (typically syllables), spaces are allowed in any word provided that this is declared in the language-specific documentation.  
2. For other languages, spaces are allowed only for an approved and restricted list of exceptions like numbers ("100 000") and abbrevations ("i. e.") that have to be listed explicitly in the language-specific documentation.

More discussion can be found in the section on [word segmentation](segmentation.html).

## Part-of-speech tags

The universal tagset from v1 is basically kept intact in v2 with two minor revisions:

1. The tag `CONJ` is renamed `CCONJ` to make it more similar to the syntactic relation `cc` (and less similar to `conj`).
2. The guidelines for tags are modified in three cases:
    1. The use of `AUX` is extended from auxiliary verbs in a narrow sense to also include copula verbs and nonverbal TAME particles (tense, aspect, mood, evidentiality, and, sometimes, voice or polarity particles).
    2. The use of `PART` is restricted to a small set of words that must be listed in the language-specific documentation.
    3. The borderline between `PRON` and `DET` is made more flexible to accommodate cross-linguistic variation. 

More discussion can be found in the section on [part-of-speech tags](postags.html)

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
    
Revisions to the feature system have whenever possible been made to improve clarity and consistency with other systems such as UniMorph. More discussion can be found in the section on [features](features.html).

## Syntactic relations 

Although most syntactic relations are the same in v2 as in v1, the guidelines have often been improved by providing more explicit criteria and examples from multiple languages. In this summary, we only list cases where relations have been 
removed, added or renamed, or where the use of an existing relation has changed significantly. 

### Clauses and dependents of predicates

1. The `dobj` relation is renamed `obj` because this seems to be more easily reconcilable with the intended interpretation of "second core argument" or "P/A argument" (without connection to specific cases or semantic roles). 
2. The `nsubjpass`, `csubjpass` and `auxpass` relations are removed. The use of subtypes nsubj:pass, csubj:pass and aux:pass is strongly encouraged for languages where these distinctions are relevant.
3. The `nmod` relation, which in v1 was used for nominals modifying either predicates or other nominals, is in v2 restricted to modifying nominals. A new relation `obl` (oblique) is introduced for oblique dependents of predicates. 
4. The `cop` relation is restricted to function words (verbal or nonverbal) whose sole function is to link a nonverbal predicate to its subject and which does not add any meaning other than grammaticalized TAME categories. The range of constructions that are analyzed using the `cop` relation is subject to language-specific variation but can be identified using universal guidelines.

More discussion about 1-3 and 4 can be found in the sections on [core-dependents](core-dependents.html) and [copula and nonverbal predicates](copula.html), respectively.

### Coordination and ellipsis 

1. Coordinating conjunctions (`cc`) and punctuation (`punct`) inside coordinated structures are in v2 attached to the immediately succeding conjunct (instead of the first conjunct as in v1).
2. The `remnant` relation used to analyze ellipsis in v1 is removed. A new relation `orphan` is introduced in order to analyze ellipsis in a way that preserves the integrity of clauses and minimizes the use of special relations. 

More discussion about 1 and 2 can be found in the sections on [coordination](coordination.html) and [ellipsis](ellipsis.html), respectively.

### Functional relations

1. A new relation `clf` (classifier) is added for nominal classifiers.
2. The `aux` relation is extended from auxiliary verbs in a narrow sense to also include nonverbal TAME particles (in analogy with the extended use of the part-of-speech tag `AUX`).
3. The `auxpass` relation is removed from the set of universal relations (see above).
4. The `cop` relation is restricted to pure linking words (see above).
5. The `neg` relation is removed from the set of universal relations, and polarity is instead encoded in a feature.

More discussion about 1-3 and 4 can be found in the sections on [functional relations](function.html) and [semantic categories](semantic-categories.html), respectively.

### Multiword expressions



## The CoNLL-U format
