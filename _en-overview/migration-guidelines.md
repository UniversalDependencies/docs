---
layout: base
title:  'Introduction'
permalink: en/overview/migration-guidelines.html
---

# Migration Guidelines

The following list provides for each relation in the original Stanford Dependencies representation the name of
the equivalent relation in the Universal Dependencies representation. For some relations there doesn't exist
a 1:1 mapping. In these cases you'll find a description of how different instances of the relation are treated
according to the UD representation. The list also provides the name of the GrammaticalRelation object as defined
in Stanford CoreNLP and the Stanford Parser.


### `acomp`: `xcomp`

`acomp` no longer exists as a relation in UD and is folded into [`xcomp`](en-dep/xcomp). 

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.XCLAUSAL_COMPLEMENT`

### `advcl`: `advcl`

`advcl` relations in SD are still annotated as [`advcl`](en-dep/advcl) in UD. 

Note, however, that this relation is now also used for prepositional phrases modifying a predicate (some instances of `pcomp` and `prepc` in SD) and for reduced non-finite verbal modifiers that modify a predicate (some instances of `vmod` in SD).

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.ADV_CLAUSE_MODIFIER`

### `advmod`: `advmod`

`advmod` relations in SD are still annotated as [`advmod`](en-dep/advmod) in UD.

Note, however, that this relation is now also used for quantifier phrase modifiers (`quantmod` in SD).

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.ADVERBIAL_MODIFIER`


### `agent`: `nmod:agent`

This relation has been renamed to `nmod:agent`.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.AGENT`


### `amod`: `amod`

`amod` relations in SD are still annotated as [`amod`](en-dep/amod) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.ADJECTIVAL_MODIFIER`


### `appos`: `appos`

`appos` relations in SD are still annotated as [`appos`](en-dep/appos) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.APPOSITIONAL_MODIFIER`

### `aux`: `aux`

`aux` relations in SD are still annotated as [`aux`](en-dep/aux) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.AUX_MODIFIER`


### `auxpass`: `auxpass`

`auxpass` relations in SD are still annotated as [`auxpass`](en-dep/auxpass) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.AUX_PASSIVE_MODIFIER`


### `cc`: `cc`

`cc` relations in SD are still annotated as [`cc`](en-dep/cc) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.COORDINATION`


### `ccomp`: `ccomp`

`ccomp` relations in SD are still annotated as [`ccomp`](en-dep/ccomp) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CLAUSAL_COMPLEMENT`


### `conj`: `conj`

`conj` relations in SD are still annotated as [`conj`](en-dep/conj) in UD.

Note that in the _enhanced_ representation (formerly known as _CCprocessed_ representation), the relation name and the coordinating conjunction are now separated by `:` instead of `_`, e.g. `conj:and` instead of `conj_and`.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CONJUNCT`





