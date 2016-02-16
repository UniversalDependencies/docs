---
layout: base
title:  'Uppsala Group on Ellipsis'
---

# Uppsala Group on Ellipsis

_(Arne Skjærholt, Chris Manning, Dan Zeman, Verginica Mititelu)_

This topic is related to the Github issues
<a href="http://github.com/UniversalDependencies/docs/issues/164">#164</a> and
<a href="http://github.com/UniversalDependencies/docs/issues/188">#188</a>.

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

#### Examples

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

### Attaching all orphans to the grandparent

This is similar to promotion but instead of selecting just one orphan to be promoted, we attach
all orphans to the grandparent node (or more precisely: to the next available ancestor in the
hierarchy). This approach is taken in the Prague family of treebanks. It is not officially used
in the current version of UD but in practice it can be found at least in the Czech UD 1.1 data
because the current conversion procedure ignores ellipsis.

#### Labels

The options listed for the promotion approach also apply here, and there is one additional
option:

* Chain of labels. Take the path between the visible ancestor and the orphan, traverse one or
  more elided nodes and on the way collect all dependency relations. This approach is taken in
  the Ancient Greek & Latin Dependency Treebanks.

#### Examples

In the Latin sentence (segment) _beatus qui legit et qui audiunt verba prophetiae et servant ea
quae in ea scripta sunt tempus enim prope est_, a copula is missing; this would not be a problem
in UD but the Latin treebank uses the Prague annotation style and the copula was supposed to
head the whole sentence. The orphans are attached directly to the artificial `ROOT` node and the
relations are labeled with chained labels such as `PNOM_ExD0_PRED`. The first in the chain is
the relation of the orphan to the missing copula: `PNOM`. The indexed `ExD` actually represents
the missing node, not a relation. And the `PRED` is the Prague label for the root relation.

~~~ sdparse
ROOT beatus qui legit et qui audiunt verba prophetiae et servant ea …
PNOM_ExD0_PRED(ROOT, beatus)
COORD_ExD0_PRED(ROOT, et-5)
SBJ_CO(et-5, legit)
COORD(et-5, et-10)
SBJ_CO(et-10, audiunt)
SBJ_CO(et-10, servant)
SBJ(legit, qui-3)
SBJ(audiunt, qui-6)
OBJ(audiunt, verba)
ATR(verba, prophetiae)
OBJ(servant, ea)
~~~

One problem with the grandparent approach that can be also seen in the above example is that it
may result in several nodes attached directly to the artificial `ROOT` node. In UD, this would
mean that __multiple nodes have the `root` relation.__ While this is not explicitly banned in the
version 1 of the guidelines (and it occasionally appears in the release 1.1 of the data), there
is a community consensus that we want to avoid it. So we cannot use the grandparent solution,
at least not in the top level of the tree.

### An empty `NULL` node

It is possible to insert an empty node that represents the elided word. The orphans are then
attached to this empty node and all relations can keep their labels. We do not do this in the
current version of UD but it is used e.g. in the Hindi treebank, in the Russian treebank and
elswhere. Instead of the word forms, these nodes are often labeled `NULL`, in SynTagRus they
are called `#Fantom`, elsewhere there may be just an underscore `_` representing an empty word.

While this is the most expressive mechanism, it also postulates content for which there is no
direct evidence in the sentence. Hence we should be careful and the introduction of `NULL` nodes
should be restricted. The situation in which they are most needed is when there are several
orphans and it is not clear whether and which of them could be promoted to the head position.

There are concerns about the influence of `NULL` nodes on parsing (a parser now has to learn
where to introduce a `NULL` node in the input sentence). Also, some people believe that
a structure with empty nodes is less intuitive for users lacking linguistic background (but other
people think the opposite, and we are not aware of studies that would measure intuitivity :-)).

#### Examples

~~~ sdparse
दीवाली के दिन जुआ खेलें मगर NULL घर में या होटल में \n dīvālī ke dina juā kheleṁ magara NULL ghara meṁ yā hoṭala meṁ \n Diwali of day gambling play but play house in or hotel in
r6(दिन, दीवाली)
r6(dina, dīvālī)
r6(day, Diwali)
lwg_psp(दीवाली, के)
lwg_psp(dīvālī, ke)
lwg_psp(Diwali, of)
k7t(खेलें, दिन)
k7t(kheleṁ, dina)
k7t(play-31, day)
k2(खेलें, जुआ)
k2(kheleṁ, juā)
k2(play, gambling)
ccof(मगर, खेलें)
ccof(magara, kheleṁ)
ccof(but, play-31)
ccof(मगर, NULL-7)
ccof(magara, NULL-20)
ccof(but, play-33)
k7p(NULL-7, या)
k7p(NULL-20, yā)
k7p(play-33, or)
ccof(या, घर)
ccof(yā, ghara)
ccof(or, house)
lwg_psp(घर, में-9)
lwg_psp(ghara, meṁ-22)
lwg_psp(house, in-35)
ccof(या, होटल)
ccof(yā, hoṭala)
ccof(or, hotel)
lwg_psp(होटल, में-12)
lwg_psp(hoṭala, meṁ-25)
lwg_psp(hotel, in-38)
~~~

### The `remnant` relation

This is an approach [currently used in UD](../u/dep/remnant.html)
and it is actually the only relation we designed
specifically for ellipsis; nevertheless, it only targets one special case of ellipsis. It is
usually caused by coordination of clauses that share the same predicate but differ in arguments.
Example: _John won bronze, Mary silver, and Sandy gold._

~~~ sdparse
John won bronze , Mary silver , and Sandy gold
nsubj(won-2, John-1)
dobj(won-2, bronze-3)
remnant(John-1, Mary-5)
remnant(Mary-5, Sandy-9)
remnant(bronze-3, silver-6)
remnant(silver-6, gold-10)
~~~

The motivation here is to preserve the types of dependency relations without introducing a new
node. However, there are also drawbacks:

* nonprojectivity, parsing difficulty
* technical links rather than linguistically motivated dependencies
* it cannot encode that corresponding dependents in one chain have different relations, although
  we may occasionally need it
* there is evidence of cases where the `remnant` relation cannot be used (and promotion is not
  suitable either, because we still have two or more orphans). The material where the remnants
  ought to be attached may be missing because it is understood from the extra-sentential context.
  It is possible that we will see an incomplete sentence—e.g. a part of the above example:
  _And Sandy gold._

## Recommendation

There was a consensus that the `remnant` relation is not a good solution and should be eventually
replaced by something else. We did not reach a consensus of what that something else should be.
Restricted usage of `NULL` nodes was found somewhat appealing by some group members, and
opposed by others. Chains of labels is a possible alternative that almost encodes the same
information as the `NULL` nodes (unless there are multiple nodes missing, resulting in attachment
ambiguity). It was also proposed to use the promotion approach, even for the price that we will
have to select one argument of the verb and attach the other arguments to it.

Obviously we need to continue the discussion in a larger group online. This is a __long-term goal__
anyway, as we are not allowed to modify the guidelines before October 1, 2015, and we are not
going to implement any change in the planned November release. But we may want to put a warning
to the description of `remnant` that a revision is under consideration.

As a __short-term goal,__ we should get rid of the multi-root structures in all the languages,
although it is not explicitly required by the current guidelines. Since we cannot use `remnant`
for them, we have to resort to promotion. It is not clear which of the multiple orphans to
promote (we could say that e.g. `dobj` has precedence over `nsubj`, but we would have to
construct large tables for all possible combinations of orphans), we propose that the first
orphan is always selected, and the other orphans are attached directly to it. The promoted orphan
inherits the `root` relation from the deleted verb, while the other orphans keep their dependency
relation labels as if they were attached to the verb. If the orphans have their own dependents,
their relations will be preserved as in the following example:

~~~ sdparse
ROOT And Robert the fourth place .
root(ROOT, And)
nsubj(And, Robert)
dobj(And, place)
punct(And, .)
amod(place, fourth)
det(place, the)
~~~
