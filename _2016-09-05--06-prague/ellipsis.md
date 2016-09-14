---
layout: base
title:  'Ellipsis in UD v2'
---

# Ellipsis in UD v2

The `remnant` relation turned out to be a non-optimal way for analyzing complex ellipitical constructions. We therefore propose the following changes for UD v2:

* The `remnant` relation should be discarded
* In the case of simple head ellipsis, the dependent should be promoted 
* In case of predicate ellipsis, a more complex relation type that combines the relation of the elided node and its dependent should be used (e.g., `conj>dobj`)
* The complex cases of ellipsis should be analyzed with NULL nodes in the _enhanced_ representation

## Problems with the `remnant` analysis

The [current analysis](http://universaldependencies.org/u/dep/remnant.html) of elliptical constructions using the `remnant` relation does not work well when the second clause contains additional modifiers of the elided predicate.

~~~ sdparse
They had left the company , many for good .

nsubj(left, They)
dobj(left, company)
remnant(They, many)
nmod(good, many)
~~~

In this example, _for good_ is modifying the elided _left_ of the second clause. However, as no similar modifier exists in the first clause, _for good_ cannot be attached with a _remnant_ relation and no reasonable analysis of this sentence is possible. In practice, annotators attached the extra modifier to the subject of the second clause, which incorrectly suggests that _for good_ is modifying the subject _many_.

Additional issues of the `remnant` analysis are:

* The dependency trees contain a lot of non-projective dependencies, which complicates parsing.
* The requirement that every argument/modifier of the elided predicate has an antecedent, makes it impossible to analyze cross-sentence elliptical constructions. (This would require relations crossing sentence boundaries.)

## Head ellipsis in UD v2

In the following cases of head ellipsis, a modifier of the elided head is being promoted.

### Nominals

If the head nominal is elided, we promote dependents in the following order: `amod` > `det` > `nummod` > `nmod` > `case`.

Examples:

~~~ sdparse
Er kauft sich ein grünes Auto und sie kauft sich ein rotes .\nHe buys himself a green car and she buys herself a red .

nsubj(kauft-2, Er-1)
det(Auto-6, ein-4)
amod(Auto-6, grünes-5)
dobj(kauft-2, Auto-6)
conj(kauft-2, kauft-9)
nsubj(kauft-9, sie-8)
dobj(kauft-9, rotes-12)
det(rotes-12, ein-11)
~~~

~~~ sdparse
She saw every animal at the zoo but he saw only some .

nsubj(saw-2, She-1)
det(animal-4, every-3)
dobj(saw-2, animal-4)
conj(saw-2, saw-10)
advmod(some-12, only-11)
dobj(saw-10, some-12)
~~~

~~~ sdparse
She saw three monkeys and he saw two .

nsubj(saw-2, She-1)
nummod(monkeys-4, three-3)
dobj(saw-2, monkeys-4)
conj(saw-2, saw-7)
dobj(saw-7, two-8)
~~~

### Clauses

If the main predicate is elided, we promote only if there is an `aux` or `cop` (or possibly `advmod` or `mark` in the form of infinitival markers).

Example:

~~~ sdparse
Sue likes pasta and Peter does , too . 

nsubj(likes-2, Sue-1)
dobj(likes-2, pasta-3)
conj(likes-2, does-6)
nsubj(does-6, Peter-5)
advmod(does-6, too-8)
~~~


__Open questions:__

Should we also promote adverbial modifiers as in the following example? (__Sebastian__: I think we should not because of the weird `nsubj` relation between the subject and the adverb, and instead treat such examples the same way we treat predicate ellipsis.)

~~~ sdparse
Sue needs a good friend , and probably Peter , too . 

nsubj(needs-2, Sue-1)
dobj(needs-2, friend-5)
conj(needs-2, too-11)
advmod(too-11, probably-8)
nsubj(too-11, Peter-9)
~~~


Should we also promote infinitival markers as in the following example? (__Sebastian__: I think we should.)

~~~ sdparse
They will do it if they want to .

nsubj(will-2, They-1)
aux(do-3, will-2)
dobj(it-4, do-3)
advcl(want-7, they-6)
xcomp(want-7, to-8)
~~~


### Modifiers

If the head of a modifier phrase is elided, we promote if there is an `advmod` (or equivalent).

@Joakim: Did you have an example in mind when you wrote that? I couldn't think of one in English or German.

## Predicate ellipsis in Basic UD v2



## Predicate ellipsis in Enhanced UD v2

