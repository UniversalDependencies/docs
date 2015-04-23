---
layout: base
title:  'Migration Guidelines'
permalink: en/overview/migration-guidelines.html
---

# Migration Guidelines

The following list provides for each relation in the original Stanford Dependencies representation the name of
the equivalent relation in the Universal Dependencies representation. For some relations there doesn't exist
a 1:1 mapping. In these cases you'll find a description of how different instances of the relation are treated
according to the UD representation. The list also provides the name of the GrammaticalRelation object as defined
in Stanford CoreNLP and the Stanford Parser.


### `acomp`: `xcomp`

`acomp` no longer exists as a relation in UD and has been folded into [`xcomp`](en-dep/xcomp). 

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

Note that in the _enhanced_ representation (formerly known as _CCprocessed_ representation), the 
relation name and the coordinating conjunction are now separated by `:` instead of `_`, e.g. 
`conj:and` instead of `conj_and`.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CONJUNCT`

### `cop`: `cop`

`cop` relations in SD are still annotated as [`cop`](en-dep/cop) in UD.

Unlike in the SD representation, prepositional phrases and adverbial phrases are also 
treated as the head of a copular construction in UD as illustrated in the following examples:

~~~ sdparse
She is here
cop(here-3, is-2)
root(ROOT-0, here-3)
~~~

~~~ sdparse
He is in the house
cop(house-5, is-2)
root(ROOT-0, house-5)
~~~

Note that this change is currently only partially implemented in the Stanford Parser. In copular
constructions with an adverbial predicate the copula verb is still treated as the head. 

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.COPULA`


### `csubj`: `csubj`

`csubj` relations in SD are still annotated as [`csubj`](en-dep/csubj) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CLAUSAL_SUBJECT`


### `csubjpass`: `csubjpass`

`csubjpass` relations in SD are still annotated as [`csubjpass`](en-dep/csubjpass) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CLAUSAL_PASSIVE_SUBJECT`


### `dep`: `dep`

`dep` relations in SD are still annotated as [`dep`](en-dep/dep) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.GrammaticalRelation.DEPENDENT`


### `discourse`: `discourse`

`discourse` relations in SD are still annotated as [`discourse`](en-dep/discourse) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.DISCOURSE_ELEMENT`


### `dobj`: `dobj`

`dobj` relations in SD are still annotated as [`dobj`](en-dep/dobj) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.DIRECT_OBJECT`


### `expl`: `expl`

`expl` relations in SD are still annotated as [`expl`](en-dep/expl) in UD.

According to the UD guidelines the pleonastic _it_ should also have the `expl` relation. This is the
case in the manually annotated treebank but the Stanford Parser currently does not treat instances
of the pleonastic _it_ differently.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.EXPLETIVE`


### `goeswith`: `goeswith`

`goeswith` relations in SD are still annotated as [`goeswith`](en-dep/goeswith) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.GOES_WITH`


### `iobj`: `iobj`

`iobj` relations in SD are still annotated as [`iobj`](en-dep/iobj) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.INDIRECT_OBJECT`


### `mark`: `mark`

`mark` relations in SD are still annotated as [`mark`](en-dep/mark) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.MARKER`


### `mwe`: `mwe`

`mwe` relations in SD are still annotated as [`mwe`](en-dep/mwe) in UD.

However, the list of expressions which are considered multi-word expressions has changed. See the 
description of the [`mwe` relation](en-dep/mwe) for the list of multi-word expressions.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.MULTI_WORD_EXPRESSION`


### `neg`: `neg`

`neg` relations in SD are still annotated as [`neg`](en-dep/neg) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.NEGATION_MODIFIER`


### `nn`: `compound`

The `nn` relation in SD has been renamed to [`compound`](en-dep/compound) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.COMPOUND_MODIFIER`


### `npadvmod`: `nmod:npmod`

The `npadvmod` relation in SD has been renamed to [`nmod:npmod`](en-dep/nmod-npmod) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.NP_ADVERBIAL_MODIFIER


### `nsubj`: `nsubj`

`nsubj` relations in SD are still annotated as [`nsubj`](en-dep/nsubj) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.NOMINAL_SUBJECT`


### `nsubjpass`: `nsubjpass`

`nsubjpass` relations in SD are still annotated as [`nsubjpass`](en-dep/nsubj) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.NOMINAL_PASSIVE_SUBJECT`


### `num`: `nummod`

The `num` relation in SD has been renamed to [`nummod`](en-dep/nummod) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.NUMERIC_MODIFIER`


### `number`: `compound`

The `number` relation in SD no longer exists as a relation in UD and has been folded into [`compound`](en-dep/compound). 

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.COMPOUND`


### `parataxis`: `parataxis`

`parataxis` relations in SD are still annotated as [`parataxis`](en-dep/parataxis) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.NOMINAL_PASSIVE_SUBJECT`


### `poss`: `nmod:poss`

The `poss` relation in SD has been renamed to [`nmod:poss`](en-dep/nmod-poss) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.POSSESSION_MODIFIER`


### `possesive`: `case`

The `possesive` relation in SD no longer exists as a relation in UD and has been folded into [`case`](en-dep/case). 

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CASE_MARKER`


### `pcomp`: `acl` or `advcl` 

Prepositional phrases are treated differently in UD and therefore the `pcomp` relation no longer exists.
See [#TreatmentOfPrepositonalPhrases]() for more details on when to use `acl` and when `advcl`.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CLAUSAL_MODIFIER` (`acl`)

`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.ADV_CLAUSE_MODIFIER` (`advcl`)


### `pobj`: `nmod`

The `pobj` relation in SD has been renamed to [`nmod`](en-dep/nmod) in UD.

Note that prepositional phrases are treated differently in UD and not only the name of this relation
but also the tree structure changed. See [#TreatmentOfPrepositonalPhrases]() for more details on the
new treatment of prepositional phrases. 

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.NOMINAL_MODIFIER`


### `preconj`: `conj:preconj`

The `preconj` relation in SD has been renamed to [`conj:preconj`](en-dep/conj-preconj) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.PRECONJUNCT`


### `predet`: `det:predet`

The `predet` relation in SD has been renamed to [`det:predet`](en-dep/det-predet) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.PREDETERMINER`


### `prep`: `case`

The `prep` relation in SD has been renamed to [`case`](en-dep/case) in UD.

Note that prepositional phrases are treated differently in UD and not only the name of this relation
but also the tree structure changed. See [#TreatmentOfPrepositonalPhrases]() for more details on the
new treatment of prepositional phrases. 

Further, the `possesive` relation is now also annotated as `case` in UD.

The various `prep_<PREPOSITION>` relations in the _collapsed_ and _CCprocessed_ SD representations 
have been replaced with `nmod:<PREPOSITION>` relations in the UD _enhanced_ representation.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CASE_MARKER`


### `prepc`: `acl` or `advcl`

The `prepc_<PREPOSITION>` relations in the _collapsed_ and _CCprocessed_ SD representations have been 
replaced with `acl:<PREPOSITION>` and `advcl:<PREPOSITION>` relations in the UD _enhanced_ representation. 

See [#TreatmentOfPrepositonalPhrases]() for more details on the new treatment of prepositional phrases. 


### `prt`: `compound:prt`

The `prt` relation in SD has been renamed to [`compound:prt`](en-dep/compound-prt) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.PHRASAL_VERB_PARTICLE`


### `punct`: `punct`

`punct` relations in SD are still annotated as [`punct`](en-dep/punct) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.PUNCTUATION`


### `quantmod`: `advmod`

The `quantmod` relation in SD no longer exists as a relation in UD and has been folded into [`advmod`](en-dep/advmod). 

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.ADVERBIAL_MODIFIER`


### `ref`: `ref`

`ref` relations in SD are still annotated as `ref` in UD.

Note that referents are only part of th _enhanced_ UD representation.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.REFERENT`


### `root`: `root`

`root` relations in SD are still annotated as [`root`](en-dep/punct) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.GrammaticalRelation.ROOT`


### `root`: `root`

`root` relations in SD are still annotated as [`root`](en-dep/punct) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.GrammaticalRelation.ROOT`


### `tmod`: `nmod:tmod`

The `tmod` relation in SD has been renamed to [`nmod:tmod`](en-dep/nmod-tmod) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.TEMPORAL_MODIFIER`


### `vmod`: `acl` or `advcl`

The `vmod` relation in SD no longer exists as a relation in UD and has been folded into the [`acl`](en-dep/acl) and [`advcl`](en-dep/advcl) relations in UD.

The `acl` relation is used for clauses that modify a noun unless the noun is a predicate in a copular 
construction. The `advcl` relation is used for clauses that modify a verb or any other predicate.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CLAUSAL_MODIFIER` (`acl`)

`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.ADV_CLAUSE_MODIFIER` (`advcl`)


### `xcomp`: `xcomp`

`xcomp` relations in SD are still annotated as [`xcomp`](en-dep/xcomp) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.XCLAUSAL_COMPLEMENT`


