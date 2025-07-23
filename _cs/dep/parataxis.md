---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

The parataxis relation (from Greek for “place side by side”) is a
relation between a word (often the main predicate of a sentence) and other
elements, such as a sentential parenthetical.

## An inventory of constructions to which parataxis has been applied

### Interjected clauses and phrases

~~~ sdparse
V posledních letech se srovnávání rozšiřuje , přinejmenším pokud jde o platy , na sousední státy . \n In recent years is comparison extended , at-least as concerns about salaries , to neighboring countries .
parataxis(rozšiřuje, jde)
parataxis(extended, concerns)
~~~

### News article bylines

The `parataxis` relation should be used to connect the parts of a news article byline.
There does not seem to be a better relation to use.

~~~ sdparse
Washington ( CNN ) :
parataxis(Washington, CNN)
~~~

## Other constructions where parataxis is an option according to the universal guidelines but it is not used in Czech

### Reported speech

The universal guidelines assumed (both in v1 and v2) that reported speech following a colon would form a main clause
that attaches to the preceding main clause with a `parataxis` relation (hence the speech verb would be its parent,
but the relation would not be [ccomp](), which is normally used when there is a complementizer instead of the colon).
If the speech verb occurred as a medial or final parenthetical, the relation would be reversed and the speech verb
would be attached as a `parataxis` of the reported speech. These rules were never implemented in the Czech data, due
to technical reasons (legacy annotation did not provide enough information for conversion to UD). In February 2022,
a [guidelines amendment](/changes.html) changed the treatment of reported speech, now preferring `ccomp` over
`parataxis` in all cases but the speech verb embedded in the middle of the reported speech. Czech still uses `ccomp`
in all cases; the embedded speech verb is now the only case where it differs from the universal guidelines.

~~~ sdparse
Ten člověk , řekl Honza , odjel brzy ráno . \n The guy , said Honza , left early in-the-morning .
ccomp(řekl, odjel)
ccomp(said, left)
~~~

### Loosely coordinated main clauses

The corresponding [English examples](/u/dep/parataxis.html) are labeled as “side-by-side sentences” and “paired clauses
with non-conjunction connective”. Unfortunately, such cases are not and cannot be well defined. Coordination can be
asyndetic (i.e., without a conjunction word), and “non-conjunction” connectives, such as adverbs, can be said to have
grammaticalized as conjunctions and tagged [CCONJ](). There is no reason why the following sentences should not receive
the same analysis. In particular, there is no reason why the variant without conjunction should receive an analysis
similar to parentheticals.

* _Jana šla do školy a Petr se vrátil domů._ “Jana went to school and Petr returned home.”
* _Jana šla do školy, Petr se vrátil domů._ “Jana went to school, Petr returned home.”

A possible exception could be when two sentences, delimited by sentence-final punctuation and capitalization of the
next word, are analyzed in one tree. Strictly speaking, this is an error in sentence segmentation, but occasionally
there may be reasons why correcting the segmentation is not desirable (e.g., to maintain 1-1 sentence mapping in
parallel corpora). However, even here, coordination of sentences seems to be a reasonable analysis of the situation,
which preserves parallelism with the above examples.

* _Jana šla do školy. Petr se vrátil domů._ “Jana went to school. Petr returned home.”

~~~ sdparse
Jana šla do školy , Petr se vrátil domů . \n Jana went to school , Petr himself returned home .
conj(šla, vrátil)
conj(went, returned)
~~~

## Diffs

### Prague Dependency Treebank

At present the PDT data converted to UD use `parataxis` only for interjected parentheticals.
The other examples above are analyzed differently (legacy PDT structure).

<!-- Interlanguage links updated So 10. května 2025, 18:16:06 CEST -->
