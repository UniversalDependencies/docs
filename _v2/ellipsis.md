---
layout: base
title:  'Ellipsis in UD v2'
---

# Ellipsis in UD v2

There seems to be a consensus that we should get rid of the remnant relation, but it is still unclear
what we should put in its place.
See the report from the Uppsala meeting here: [ellipsis](../2015-08-23-uppsala/ellipsis.html).
Conceivably, the enhanced dependencies could be put to use here as well.

**Dan's proposal:**

## Basic representation

* Ignore elided nodes if they would be **leaves.** This is what we already do in UD v1. Unspecified subjects in pro-drop languages may serve as an example.
* If the elided node has **just one dependent,** which is not elided (we call it _orphan_), the dependent is promoted to the position of the elided node. The relation between the orphan and the parent of the elided node is that of the elided node. Dependents of the orphan, if any, keep their relations. We already do this in UD v1 and there is a number of examples in the [Uppsala report on ellipsis](/2015-08-23-uppsala/ellipsis.html#promotion-of-a-dependent-to-the-head-position).
* If there are **two or more orphans,** one of them is selected and promoted to the position of the elided node. Its relation to the parent is that of the elided node. The other orphans are attached to the promoted orphan and the relation type describes their relation to the elided node. The following rules specify which orphan is promoted.
  * If a predicate in coordination is elided (this is the most prominent case, for which we used the `remnant` relation in UD v1), we look for candidates in this order of precedence: 1. `aux`, (`auxpass`), `cop`; 2. `xcomp`; 3. `dobj`; 4. `iobj`; 5. `nmod`; 6. `advmod`; 7. `nsubj`, (`nsubjpass`); 8. `ccomp`; 9. `csubj`, (`csubjpass`).
  * If a nominal is elided, we look for candidates in this order of precedence: 1. `amod`; 2. `nummod`; 3. `det`; 4. `nmod`; 5. `case`.
  * Language-specific documentation may modify or extend these priority lists.
  * If the above rules are not sufficient to find a single candidate, the leftmost candidate is selected (logical left-to-right ordering, disregarding the writing system).
* The [remnant](/u/dep/remnant.html) relation is no longer used in UD v2.

## Enhanced representation

(Note that there is a [separate page](enhanced.html) devoted to the specification of enhanced dependencies. This section discusses only the part needed for ellipsis.)

The enhanced dependencies encode the hypothetical tree before ellision. They bear enough information to reconstruct elided material as NULL nodes, if the user so wishes. (But they do not encode the part of speech and word form of the elided node, although it may be known in some situations.)

Elided nodes are indexed within a sentence with integers starting at 1, to distinguish possible multiple reconstructed nodes in one sentence. The full reference to the elided node is `EN`+index, e.g. `EN1`. The ordering of the indices corresponds to the order of the orphans. If there are elided nodes A and B, the ID numbers of the orphans of A are 3 and 5, and the IDs of the orphans of B are 4 and 9, then node A is referred to as `EN1` and node B as `EN2`. That's because the first A's orphan appears before the first B's orphan.

As defined in the [CoNLL-U format](/format.html#syntactic-annotation), enhanced dependencies may be specified in the DEPS column as a list of head index – relation pairs, e.g. `3:dobj|4:nsubj`. In case of ellipsis, the enhanced dependency is a path consisting of two or more dependencies and one or more elided nodes. Example: `3:conj>EN1>dobj`. Here we again start with the ID of an ancestor node, a real one that has not been elided. Then we follow the path down to the orphan. The relation between the existing ancestor and the elided node is mentioned first. The label of the elided node follows and its relation to the orphan comes last.

The following example illustrates both representations on the sentence _Mary won gold and Jane silver._

Basic representation:

~~~sdparse
Mary won gold and Jane silver .
nsubj(won, Mary)
dobj(won, gold)
cc(won,and)
conj(won, silver)
nsubj(silver, Jane)
punct(won, .)
~~~

Enhanced representation:

~~~sdparse
Mary won gold and Jane silver .
nsubj(won, Mary)
dobj(won, gold)
cc(won,and)
conj>EN1>nsubj(won, Jane)
conj>EN1>dobj(won, silver)
punct(won, .)
~~~

It is possible to encode a path containing more than one elided node. Since the nodes on the same path have the same order in terms of the first orphan, we add a rule that such nodes are numbered top-down. Example:

~~~sdparse
Mary wants to buy a book and Jenny a skirt .
nsubj(wants, Mary)
xcomp(wants, buy)
dobj(buy, book)
nsubj(buy, Mary)
conj>EN1>nsubj(wants, Jenny)
conj>EN1>xcomp>EN2>nsubj(wants, Jenny)
conj>EN1>xcomp>EN2>dobj(wants, skirt)
~~~

**Joakim's modified proposal:** I think we should continue to use promotion for the "simple" cases
of ellipsis, but I don't think we should generalize it to cases of predicate ellipsis where an argument
or modifier needs to be promoted, because this gives rise to too many "unnatural" dependencies.
Hence, I propose we limit promotion to the following cases of head ellipsis:

1. Nominals: If the head nominal is ellided, we promote dependents in the following order: amod > det > nummod > nmod > case.
2. Clauses: If the main predicate is ellided, we promote only if there is an aux or cop (or possibly advmod).
3. Modifiers: If the head of a modifier phrase is ellided, we promote if there is an advmod (or equivalent).

In cases where promotion cannot be used, we instead attach orphans to their natural grandparent with a composite label:
headrel>orphanrel. For example:

~~~sdparse
I like tea and you coffee
nsubj(like, I)
dobj(like, tea)
cc(like, and)
conj>nsubj(like, you)
conj>dobj(like, coffee)
~~~

Note that we need a new separator since either or both of the two concatenated relations can be a subtype.

If we adopt a scheme like this, then more information could be added in the enhanced representation (for example,
explicit null nodes), but the basic dependency representation would be informative enough so that parser developments
could experiment with different strategies for dealing with ellipsis (including inferring null nodes). We avoid the
occurrence of strange dependencies (such as "you" being the subject of "coffee") at the cost of a slightly more complex
basic representation (the addition of label paths). All in all, this strikes me as a reasonably compromise.
