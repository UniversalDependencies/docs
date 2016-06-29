---
layout: base
title:  'Ellipsis in UD v2'
---

# Ellipsis in UD v2

There seems to be a consensus that we should get rid of the remnant relation, but it is still unclear
what we should put in its place.
See the report from the Uppsala meeting here: [ellipsis](../2015-08-23-uppsala/ellipsis.html).
Conceivably, the enhanced dependencies could be put to use here as well.

Dan's proposal:

## Basic representation

* Ignore elided nodes if they would be **leaves.** This is what we already do in UD v1. Unspecified subjects in pro-drop languages may serve as an example.
* If the elided node has **just one dependent,** which is not elided (we call it _orphan_), the dependent is promoted to the position of the elided node. The relation between the orphan and the parent of the elided node is that of the elided node. Dependents of the orphan, if any, keep their relations. We already do this in UD v1 and there is a number of examples in the [Uppsala report on ellipsis](/2015-08-23-uppsala/ellipsis.html#promotion-of-a-dependent-to-the-head-position).
* If there are **two or more orphans,** one of them is selected and promoted to the position of the elided node. Its relation to the parent is that of the elided node. The other orphans are attached to the promoted orphan and the relation type describes their relation to the elided node. The following rules specify which orphan is promoted.
  * A predicate in coordination is elided (this is the most prominent case, for which we used the `remnant` relation in UD v1). We look for candidates in this order of precedence: 1. `aux`, (`auxpass`), `cop`; 2. `xcomp`; 3. `dobj`; 4. `iobj`; 5. `nmod`; 6. `advmod`; 7. `nsubj`, (`nsubjpass`); 8. `ccomp`; 9. `csubj`, (`csubjpass`).
  * A noun is elided. We look for candidates in this order of precedence: 1. `amod`; 2. `nummod`; 3. `det`; 4. `nmod`.
  * Language-specific documentation may modify or extend these priority lists.
  * If the above rules are not sufficient to find a single candidate, the leftmost candidate is selected (logical left-to-right ordering, disregarding the writing system).

## Enhanced representation

The enhanced dependencies encode the hypothetical tree before ellision. They bear enough information to reconstruct elided material as NULL nodes, if the user so wishes. (But they do not encode the part of speech and word form of the elided node, although it may be known in some situations.)

Elided nodes are indexed within a sentence with integers starting at 1, to distinguish possible multiple reconstructed nodes in one sentence. The full reference to the elided node is `EN`+index, e.g. `EN1`. The ordering of the indices corresponds to the order of the orphans. If there are elided nodes A and B, the ID numbers of the orphans of A are 3 and 5, and the IDs of the orphans of B are 4 and 9, then node A is referred to as `EN1` and node B as `EN2`. That's because the first A's orphan appears before the first B's orphan.

As defined in the [CoNLL-U format](/format.html), enhanced dependencies may be specified in the DEPS column a list of head index – relation pairs, e.g. `4:nsubj|3:dobj`. In case of ellipsis, the enhanced dependency is a path consisting of two or more dependencies and one or more elided nodes. Example: `3:conj>EN1>dobj`. Here we again start with the ID of an ancestor node, a real one that has not been elided. Then we follow the path down to the orphan. The relation between the existing ancestor and the elided node is mentioned first. The label of the elided node follows and its relation to the orphan comes last.

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
conj>EN1>nsubj(won, Jane)
conj>EN1>dobj(won, silver)
~~~
