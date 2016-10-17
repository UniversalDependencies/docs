---
layout: base
title:  'Ellipsis in UD v2'
---

# Ellipsis in UD v2

The `remnant` relation turned out to be a non-optimal way for analyzing complex ellipitical constructions. We therefore propose the following changes for UD v2:

* The `remnant` relation should be discarded
* In the case of simple head ellipsis, the dependent should be promoted 
* In case of predicate ellipsis, we consider two alternative proposals:
  1. Use a more complex relation type that combines the relation of the elided node and its dependent (e.g., `conj>dobj`)
  2. Use promotion but introduce a new relation `orphan` for non-standard dependency relations that arises  
* The complex cases of ellipsis should be analyzed with NULL nodes in the _enhanced_ representation

## Problems with the `remnant` analysis

The [current analysis](http://universaldependencies.org/u/dep/remnant.html) of elliptical constructions using the `remnant` relation does not work well when the second clause contains additional modifiers of the elided predicate.

~~~ sdparse
They had left the company , many for good .

nsubj(left, They)
dobj(left, company)
remnant(They, many)
nmod(many, good)
~~~

In this example, _for good_ is modifying the elided _left_ of the second clause. However, as no similar modifier exists in the first clause, _for good_ cannot be attached with a _remnant_ relation and no reasonable analysis of this sentence is possible. In practice, annotators attached the extra modifier to the subject of the second clause, which incorrectly suggests that _for good_ is modifying the subject _many_.

Additional issues of the `remnant` analysis are:

* The dependency trees contain a lot of non-projective dependencies, which complicates parsing.
* The requirement that every argument/modifier of the elided predicate has an antecedent, makes it impossible to analyze cross-sentence elliptical constructions. (This would require relations crossing sentence boundaries.)

## Head ellipsis in UD v2

In the following cases of head ellipsis, we promote a modifier of the elided head.

### Nominals

If the head nominal is elided, we promote dependents in the following order: `amod` > `nummod` > `det` > `nmod` > `case`.

Examples:

~~~ sdparse
Er kauft sich ein grünes Auto und sie kauft sich ein rotes . \n He buys himself a green car and she buys herself a red .

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

If the main predicate is elided, we promote only if there is an `aux` or `cop`, or a `mark` in the form of an infinitival marker.

Example:

~~~ sdparse
Sue likes pasta and Peter does , too . 

nsubj(likes-2, Sue-1)
dobj(likes-2, pasta-3)
conj(likes-2, does-6)
nsubj(does-6, Peter-5)
advmod(does-6, too-8)
~~~

~~~ sdparse
Sue is hungry and Peter is , too . 

nsubj(hungry-3, Sue-1)
cop(hungry-3, is-2)
conj(hungry-3, is-6)
nsubj(is-6, Peter-5)
advmod(is-6, too-8)
~~~

~~~ sdparse
They will do it if they want to .

nsubj(will-2, They-1)
aux(do-3, will-2)
dobj(it-4, do-3)
advcl(do-3, want-7)
nsubj(want-7, they-6)
xcomp(want-7, to-8)
~~~

## Predicate ellipsis in _Basic_ UD v2

In more complicated cases where a predicate is elided but no `aux` or `cop` is present, promotion would lead to very unnatural and confusing relations. For example, in the following sentence, _you_ would be the subject of _coffee_, suggesting that the second clause contains a copular construction rather than an elided predicate.

~~~ sdparse
I like tea and you coffee .

nsubj(like-2, I-1)
dobj(like-2, tea-3)
nsubj(coffee-6, you-5)
conj(like-2, coffee-6)
~~~ 

We consider two alternative proposals for dealing with such cases in UD basic dependencies, one that make use of composite relations (but do not introduce any new relations) and one that instead adds a new relation tentatively dubbed `orphan` to preserve intuitions about constituency.

### Predicate ellipis 1: composite relations

The first alternative is to attach orphans to their grandparent with a composite relation of the form `headrel>orphanrel`.

Example:

~~~ sdparse
I like tea and you coffee .

nsubj(like-2, I-1)
dobj(like-2, tea-3)
conj>nsubj(like-2, you-5)
conj>dobj(like-2, coffee-6)
~~~ 

If the grandparent is also elided, the relation is composed of all three relations and the orphan is attached to its great-grandparent. 

Example:

~~~ sdparse
Mary wants to buy a book and Jenny a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
dobj(buy-4, book-6)
conj>nsubj(wants-2, Jenny-8)
conj>xcomp>dobj(wants-2, CD-10)
~~~ 

Unlike the analysis using the `remnant` relation, this proposal also allows us to analyze sentences in which the second clause contains additional modifiers.

~~~ sdparse
They had left the company , many for good .

nsubj(left, They)
dobj(left, company)
conj>nsubj(left, many)
conj>nmod(left, good)
~~~

This approach can also be used when the antecedent of the elided node is in another sentence. The artificial ROOT node is now allowed to have more than one child, but only if all are attached via composite relations, starting with `root>`.

~~~ sdparse
Mary wants to buy a book . ROOT And Jenny a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
dobj(buy-4, book-6)
root>nsubj(ROOT, Jenny)
root>xcomp>dobj(ROOT, CD)
~~~ 

### Predicate ellipis 2: orphan instead of remnant

The second alternative preserves the integrity of the second conjunct as a single subtree by (arbitrarily) promoting one of the orphans to the (subclause) root and attaching the others with a new dummy relation `orphan` (or possibly `ncc` for non-constituent coordination). Here are the same examples annotated according to this alternative:

~~~ sdparse
I like tea and you coffee .

nsubj(like-2, I-1)
dobj(like-2, tea-3)
conj(like-2, you-5)
orphan(you-5, coffee-6)
~~~ 

~~~ sdparse
Mary wants to buy a book and Jenny a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
dobj(buy-4, book-6)
conj(wants-2, Jenny-8)
orphan(Jenny-8, CD-10)
~~~ 

~~~ sdparse
They had left the company , many for good .

nsubj(left, They)
dobj(left, company)
conj(left, many)
orphan(many, good)
~~~

~~~ sdparse
Mary wants to buy a book . ROOT And Jenny a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
dobj(buy-4, book-6)
root(ROOT, Jenny)
orphan(Jenny, CD)
~~~ 

## Predicate ellipsis in _Enhanced_ UD v2

While we hold on to the principle that _basic_ UD trees have to be strict surface syntax trees, we propose to relax this requirement in the _enhanced_ representation and to allow special null nodes for sentences with elided predicates. These nodes have special word indices of the form _a.b_, where _a_ is the index of the token that would precede the elided word and _b_ is a counter. (See also the description of the [proposed changes](conll-u.html) to the CoNLL-U file format.) Whenever the _basic_ representation contains a composite relation under proposal 1 above, the _enhanced_ representation contains additional null nodes to resolve all composite relations into simple relations.

For example, the sentences from the previous section are analyzed as following in the _enhanced_ representation. (The special null nodes are labelled with _Ea.b_ .) 

~~~ sdparse
I like tea and you E5.1 coffee .

nsubj(like-2, I-1)
dobj(like-2, tea-3)
nsubj(E5.1-6, you-5)
conj(like-2, E5.1-6)
dobj(E5.1-6, coffee-7)
~~~ 

~~~ sdparse
Mary wants to buy a book and Jenny E8.1 E8.2 a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
dobj(buy-4, book-6)
conj(wants-2, E8.1-9)
nsubj(E8.1-9, Jenny-8)
xcomp(E8.1-9, E8.2-10)
dobj(E8.2-10, CD-12)
~~~ 

~~~ sdparse
They had left the company , many E7.1 for good .

nsubj(left, They)
dobj(left, company)
conj(left, E7.1)
nsubj(E7.1, many)
nmod(E7.1, good)
~~~

In the first example, the node _E5.1_ is added for the elided predicate _like_. In the second example, we add one node for the elided matrix verb _wants_ (_E8.1_) and one node for the elided embedded verb _buy_ (_E8.2_). As the elided marker _to_ does not have any dependents, we do not add a null node for it. We also recommend adding a link between the null nodes and their corresponding surface forms in the sentence (e.g., linking _E5.1_ to _like_ in the first example)?

Finally, it should be noted that, if we adopt alternative 1 for the basic dependencies, then the enhanced representation can in most cases be inferred automatically, whereas with alternative 2 additional annotation will be needed.







