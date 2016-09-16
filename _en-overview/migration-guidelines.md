---
layout: base
title:  'Migration Guidelines'
permalink: en/overview/migration-guidelines.html
---

# Migration Guidelines

## Introduction

## Changes Affecting the Tree Structure

This section lists the changes to the represenation that affect the structure of dependency trees.

### Treatment of Copular Constructions

The first difference between between Universal Dependencies and Stanford Dependencies is the treatment of copular constructions. While only nominal and adjectival predicates were treated as heads of copular constructions in the Stanford Dependencies represtnation, we also treat prepositional and adverbial predicates as the head of [copular](en-dep/cop) constructions in the Universal Dependencies represenation.


~~~ sdparse
ROOT He is in the house .
cop(house, is)
root(ROOT, house)
~~~

~~~ sdparse
ROOT She is here .
cop(here, is)
root(ROOT, here)
~~~

~~~ sdparse
ROOT She is a lawyer .
cop(lawyer, is)
root(ROOT, lawyer)
~~~

Note that this change is currently only partially implemented in the Stanford Parser. In copular
constructions with an adverbial predicate the copula verb is still treated as the head. The change
will be completely implemented in future versions of the parser.

### Treatment of Prepositional Phrases

Another major difference between Universal Dependencies and Stanford Dependencies is the treatment of prepositional phrases. In the Stanford Dependencies representation the preposition is always being treated the head of the prepositional phrase while in the Universal Dependencies represenation the head of a prepositional phrase is always a content word -- either a noun phrase or the main predicate of a clause introduced by a preposition. The preposition itself is attached to the head of the prepositional phrase with the case [case](en-dep/case) or a [marker](en-dep/mark) relation.

If the prepositional phrase only consists of a preposition followed by a noun phrase we use the [nmod](en-dep/nmod) relation between the head of the prepositional phrase and the noun or predicate which it modifies.

#### Examples:

~~~ sdparse
The office of the chair .
case(chair-5, of-3)
nmod(office-2, chair-5)
~~~

~~~ sdparse
There is a ball on the table .
case(table-7, on-5)
nmod(is-2, table-7)
~~~

If the prepositional phrase consists of a preposition followed by a clause we either use the [acl](en-dep/nmod) or [advcl](en-dep/advcl) relation between the head of the prepositional phrase and the noun or predicate it modifies. `acl` is being used whenever the prepositional phrase modifies a noun unless it is a predicate in a [copular](en-dep/cop) construction. `advcl` is being used whenever the prepositional phrase modifies a verb, adjective or nominal predicate in a copular construction. The preposition is attached as a [marker](en-dep/mark).

#### Examples:

~~~ sdparse
The accident happened as the night was falling .
mark(falling, as)
advcl(happened, falling)
~~~

In this example the prepositional phrase modifies a verb, namely _happened_, and therefore we use `advcl`.

~~~ sdparse
I am just very nervous after watching the movie .
mark(watching, after)
advcl(nervous, watching)
~~~

In this example the prepositional phrase modifies an adjectival predicate, namely _nervous_, and therefore we use `advcl`.

~~~ sdparse
We have no information on whether users are experiencing problems .
mark(experiencing, on)
acl(information, experiencing)
~~~

In this example the prepositional phrase modifies a noun phrase, namely _information_, and therefore we use `acl`.

~~~ sdparse
The war was a long way from being over .
cop(way, was)
mark(over, from)
advcl(war, over)
~~~

In this example the prepositional phrase modifies a nominal predicate in a copular construction, namely _war_, and therefore we use `advcl`. Also note that the prepositional phrase does also contain a copular construction and therefore the adverbial predicate _over_ is the head of the prepositional phrase.


### Multi-Word Expressions

There are two differences regarding the treatment of multi-word expressions in Universal Dependencies as compared to Stanford Dependencies. First, multi-word expressions are now always head-inital and all other words in the expression depend on the first word. Second, the list of expressions which are being treated as multi-word expressions changed. See the description of the [mwe relation](en-dep/mwe) for a complete list of multi-word expressions in UD.


## Mapping of Stanford Dependencies to Universal Dependencies

The following list provides for each relation in the original Stanford Dependencies representation the name of
the equivalent relation in the Universal Dependencies representation. For some relations there doesn't exist
a 1:1 mapping. In these cases you'll find a description of how different instances of the relation are treated
in the UD representation. The list also provides the name of the GrammaticalRelation object as defined
in Stanford CoreNLP and the Stanford Parser. Relations that were renamed, folded into other relations or changed otherwise are highlighted in <b>red</b>.


### <b>`acomp`: `xcomp`</b>

`acomp` no longer exists as a relation in UD and has been folded into [`xcomp`](en-dep/xcomp). 

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.XCLAUSAL_COMPLEMENT`

### <b>`advcl`: `advcl`</b>

`advcl` relations in SD are still annotated as [`advcl`](en-dep/advcl) in UD. 

Note, however, that this relation is now also used for prepositional phrases modifying a predicate (some instances of `pcomp` and `prepc` in SD) and for reduced non-finite verbal modifiers that modify a predicate (some instances of `vmod` in SD).

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.ADV_CLAUSE_MODIFIER`

### <b>`advmod`: `advmod`</b>

`advmod` relations in SD are still annotated as [`advmod`](en-dep/advmod) in UD.

Note, however, that this relation is now also used for quantifier phrase modifiers (`quantmod` in SD).

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.ADVERBIAL_MODIFIER`


### <b>`agent`: `nmod:agent`</b>

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


### <b>`conj`: `conj`</b>

`conj` relations in SD are still annotated as [`conj`](en-dep/conj) in UD.

Note that in the _enhanced_ representation (formerly known as _CCprocessed_ representation), the 
relation name and the coordinating conjunction are now separated by `:` instead of `_`, e.g. 
`conj:and` instead of `conj_and`.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CONJUNCT`

### <b>`cop`: `cop`</b>

`cop` relations in SD are still annotated as [`cop`](en-dep/cop) in UD.

Unlike in the SD representation, prepositional phrases and adverbial phrases are also 
treated as the head of copular constructions in UD as illustrated in the following examples:

~~~ sdparse
ROOT She is here
cop(here, is)
root(ROOT, here)
~~~

~~~ sdparse
ROOT He is in the house
cop(house, is)
root(ROOT, house)
~~~

Note that this change is currently only partially implemented in the Stanford Parser. In copular
constructions with an adverbial predicate the copula verb is still treated as the head. The change
will be completely implemented in future versions of the parser.

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


### <b>`expl`: `expl`</b>

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


### <b>`mwe`: `mwe`</b>

`mwe` relations in SD are still annotated as [`mwe`](en-dep/mwe) in UD.

However, the list of expressions which are considered multi-word expressions has changed. See the 
description of the [`mwe` relation](en-dep/mwe) for the list of multi-word expressions.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.MULTI_WORD_EXPRESSION`


### `neg`: `neg`

`neg` relations in SD are still annotated as [`neg`](en-dep/neg) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.NEGATION_MODIFIER`


### <b>`nn`: `compound`</b>

The `nn` relation in SD has been renamed to [`compound`](en-dep/compound) in UD.

This relation is now also used for elements of compound numbers instead of the `number` relation in SD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.COMPOUND_MODIFIER`


### <b>`npadvmod`: `nmod:npmod`</b>

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


### <b>`num`: `nummod`</b>

The `num` relation in SD has been renamed to [`nummod`](en-dep/nummod) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.NUMERIC_MODIFIER`


### <b>`number`: `compound`</b>

The `number` relation in SD no longer exists as a relation in UD and has been folded into [`compound`](en-dep/compound). 

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.COMPOUND`


### `parataxis`: `parataxis`

`parataxis` relations in SD are still annotated as [`parataxis`](en-dep/parataxis) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.NOMINAL_PASSIVE_SUBJECT`


### <b>`poss`: `nmod:poss`</b>

The `poss` relation in SD has been renamed to [`nmod:poss`](en-dep/nmod-poss) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.POSSESSION_MODIFIER`


### <b>`possesive`: `case`</b>

The `possesive` relation in SD no longer exists as a relation in UD and has been folded into [`case`](en-dep/case). 

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CASE_MARKER`


### <b>`pcomp`: `acl` or `advcl`</b>

Prepositional phrases are treated differently in UD and therefore the `pcomp` relation no longer exists.
See the section [Treatment of Prepositional Phrases](#treatment-of-prepositional-phrases) for more details on when to use `acl` or `advcl`.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CLAUSAL_MODIFIER` (`acl`)

`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.ADV_CLAUSE_MODIFIER` (`advcl`)


### <b>`pobj`: `nmod`</b>

The `pobj` relation in SD has been renamed to [`nmod`](en-dep/nmod) in UD.

Note that prepositional phrases are treated differently in UD and not only the name of this relation
but also the tree structure changed. See the section [Treatment of Prepositional Phrases](#treatment-of-prepositional-phrases) for more details on the new treatment of prepositional phrases.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.NOMINAL_MODIFIER`


### <b>`preconj`: `conj:preconj`</b>

The `preconj` relation in SD has been renamed to [`conj:preconj`](en-dep/conj-preconj) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.PRECONJUNCT`


### <b>`predet`: `det:predet`</b>

The `predet` relation in SD has been renamed to [`det:predet`](en-dep/det-predet) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.PREDETERMINER`


### <b>`prep`: `case` or `mark`</b>

Prepositional phrases are treated differently in UD. See the section [Treatment of Prepositional Phrases](#treatment-of-prepositional-phrases) for more details on the new treatment of prepositional phrases. 

The various `prep_<PREPOSITION>` relations in the _collapsed_ and _CCprocessed_ SD representations 
have been replaced with `nmod:<PREPOSITION>` relations in the UD _enhanced_ representation.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CASE_MARKER`

`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.MARKER`

### <b>`prepc`: `acl` or `advcl`</b>

The `prepc_<PREPOSITION>` relations in the _collapsed_ and _CCprocessed_ SD representations have been 
replaced with `acl:<PREPOSITION>` and `advcl:<PREPOSITION>` relations in the UD _enhanced_ representation. 

See the section [Treatment of Prepositional Phrases](#treatment-of-prepositional-phrases) for more details.

### <b>`prt`: `compound:prt`</b>

The `prt` relation in SD has been renamed to [`compound:prt`](en-dep/compound-prt) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.PHRASAL_VERB_PARTICLE`


### `punct`: `punct`

`punct` relations in SD are still annotated as [`punct`](en-dep/punct) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.PUNCTUATION`


### <b>`quantmod`: `advmod`</b>

The `quantmod` relation in SD no longer exists as a relation in UD and has been folded into [`advmod`](en-dep/advmod). 

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.ADVERBIAL_MODIFIER`


### `ref`: `ref`

`ref` relations in SD are still annotated as `ref` in UD.

Note that referents are only part of the _enhanced_ UD representation.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.REFERENT`


### `root`: `root`

`root` relations in SD are still annotated as [`root`](en-dep/punct) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.GrammaticalRelation.ROOT`


### <b>`tmod`: `nmod:tmod`</b>

The `tmod` relation in SD has been renamed to [`nmod:tmod`](en-dep/nmod-tmod) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.TEMPORAL_MODIFIER`


### <b>`vmod`: `acl` or `advcl`</b>

The `vmod` relation in SD no longer exists as a relation in UD and has been folded into the [`acl`](en-dep/acl) and [`advcl`](en-dep/advcl) relations in UD.

The `acl` relation is used for clauses that modify a noun unless the noun is a predicate in a copular 
construction. The `advcl` relation is used for clauses that modify a verb or any other predicate.

See the section [Treatment of Prepositional Phrases](#treatment-of-prepositional-phrases) for more details on when to use
`acl` or `advcl`.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.CLAUSAL_MODIFIER` (`acl`)

`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.ADV_CLAUSE_MODIFIER` (`advcl`)


### `xcomp`: `xcomp`

`xcomp` relations in SD are still annotated as [`xcomp`](en-dep/xcomp) in UD.

#### GrammaticalRelation object:
`edu.stanford.nlp.trees.UniversalEnglishGrammaticalRelations.XCLAUSAL_COMPLEMENT`

## New Relations

The UD represenation also introduces the following new relations which did not exist in SD.

* [`dislocated`](en-dep/dislocated)
* [`foreign`](en-dep/foreign)
* [`list`](en-dep/list)
* [`remnant`](en-dep/remnant)
* [`vocative`](en-dep/vocative)

## _Enhanced_ Universal Depencies

Apart from the the basic representation, the Stanford parser also provided several post-processed representations including the _collapsed_ and _CCprocessed_ representations. The main purpose of the _collapsed_ representation was to collapse prepositions to get direct dependencies between content words. Considering the new [treatment of prepositional phrases](#treatment-of-prepositional-phrases) the basic representation already has direct dependencies between content words which makes the _collapsed_ representation largely obsolete. On the other hand, the propagation of conjunt dependencies still adds useful dependencies in UD. 

For these reasons we decided to reduce the total number of representations to the following three:

* _basic_ representation
* _enhanced_ representation
* _enhanced-tree_ representation preserving a tree structure

The _basic_ representation uses the dependencies defined above, and forms a tree structure. Each
word in the sentence is the dependent of exactly one thing, either another word in the sentence or the
distingushed _ROOT_ token. 

The _enhanced_ representation roughly corresponds to the _CCprocessed_ representation in SD. However, there are two main differences:

* The delimiter between the original relation name and the conjunction or the preposition was changed from `_` to `:`. For example, what used to be `conj_and` is now `conj:and`, or `prep_in_front_of` is now `nmod:in_front_of`. 
* We no longer delete words in the _enhanced_ representation.



