---
layout: base
title:  'Uppsala Group on Ellipsis'
---

# Uppsala Group on Ellipsis

_(Arne Skjærholt, Chris Manning, Dan Zeman, Verginica Mititelu)_

Ellipsis is a fairly universal phenomenon, yet it is admittedly underspecified in the Universal
Dependencies guidelines. It should be documented in the
[Specific constructions](../u/overview/specific-syntax.html#ellipsis) section of each language
because it affects many different relations. As of today, there is a section on this topic in the
universal part, and in
[Czech](../cs/overview/specific-syntax.html#ellipsis) and
[English](../en/overview/specific-syntax.html#unpronounced-material).
But there are not satisfactory solutions to all instances of ellipsis.

We do not have to handle ellipsis if the elided nodes are leaves in our representation. Following
one of the core principles of UD, “do not annotate things that are not there,” we for instance
do not add all the missing subjects in pro-drop languages. However, if the deleted node has
dependents that were not deleted, we have to specify where these _orphans_ should now be attached
and what should be the label of the relation.

Especially tricky are cases where a verb is elided and there is more than one orphaned
dependent.

## Possible approaches

In a nutshell:

 * Promotion
 * Grandparent
 * NULL node
 * Remnant

We have identified several possible approaches to orphaned dependents. Some of them are not
used in the current version of the UD standard but they are used in other dependency treebanks.

### Promotion of a dependent to the head position

This is the easiest thing to do when there is only one orphan. If there are two or more
orphans, it may not always be apparent which one should be promoted.
It is currently used in UD at various places. We need to document the examples more carefully;
but it is difficult to search for them in the data, as there is no specific label that would give
them away.

In English:

While auxiliaries are normally not analyzed as being heads, when a verb has been elided from VP ellipsis, the auxiliary inherits the head-status. This includes the _to_ nonfinite auxiliary.

~~~sdparse
Mary did n't leave , John did
parataxis(leave, did-7)
nsubj(did-7, John)
~~~

~~~sdparse
So please update whatever you need to
dobj(update, whatever)
rcmod(whatever, need)
xcomp(need, to)
~~~

Similarly, when a preposition is stranded in a passive construction, the preposition receives the `nmod` label on account of lacking a nominal head.

~~~sdparse
That matter was talked about in detail already
nmod(talked, about)
~~~

In Czech:

If the head noun is missing from a noun phrase, i.e. there is just an adjective, possibly also a numeral or
a determiner, then one orphan is selected as the main dependent and it gets promoted:

~~~ sdparse
Zatímco mně zbylo pět malých zelených jablíček , Petra měla tři velká červená . \n While to-me remained five small green apples , Petra had three big red .
dobj(měla, červená)
dobj(had, red)
nummod(červená, tři)
nummod(red, three)
amod(červená, velká)
amod(red, big)
~~~

#### Labels

* The promoted child is attached with the same relation as its deleted parent would be if it was
  not deleted. The other orphans (if any) are attached to the promoted node with the relation
  that they would have to the deleted node. This seems to be the current approach in UD.
* The relations have a special label that essentially just says “do not trust me, there is
  something missing here.” For example, the Prague treebanks use the `ExD` label.
* A combination of the above. The relations are categorized but there is an additional flag that
  warns about the ellipsis. For example, the original annotation of the Danish treebank has this.