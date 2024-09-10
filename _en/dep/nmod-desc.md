---
layout: relation
title:  'nmod:desc'
shortdef : 'descriptor modifier in nominal'
udver: '2'
---

** PROPOSAL DRAFT **

This relation subtype applies to nominal modifiers that we term __descriptors__.
These are nominals that premodify a name or identifier, adding categorical information
about the referent. Descriptors are determinerless modifiers, in which respect they are distinguished
from appositives (the [appos]() relation holds between two *full* nominals).
They may, however, be pluralized, and typically modify a proper name or identifier rather than a category noun,
which distinguishes them from typical noun compound modifiers.

One descriptor construction is the premodification of a personal name with a (determinerless) role or title:

~~~ sdparse
Professor Charles J. Fillmore
nmod:desc(Charles, Professor)
flat(Charles, J.)
flat(Charles, Fillmore)
~~~

~~~ sdparse
actor and social activist Martin Sheen
nmod:desc(Martin, actor)
conj(actor, activist)
cc(activist, and)
amod(activist, social)
flat(Martin, Sheen)
~~~

~~~ sdparse
friend of the pod Ron Klain
nmod(friend, pod)
nmod:desc(Ron, friend)
flat(Ron, Klain)
~~~

Certain name patterns (for places, textual units, etc.) incorporate a descriptor that clarifies the entity type.

~~~ sdparse
Lake Mead
nmod:desc(Mead, Lake)
~~~

## Numbered Entities

When an entity is identified by a number, it commonly follows an entity type that underscores the referring
(rather than quantifying) function of the number:

~~~ sdparse
page 394/NUM[ExtPos=PROPN]
nmod:desc(394, page)
~~~

The "number X" construction also serves to clarify that a number is serving as an identifier; the word "number" as a descriptor
can stack with an entity type descriptor:

~~~ sdparse
What is behind door number 3/NUM[ExtPos=PROPN] ?
nmod:desc(3, door)
nmod:desc(3, number)
~~~

With numbered entities, it is recommended to specify `ExtPos=PROPN` on the number
to clarify that it behaves externally as a (locally or globally conventionalized) proper name.

## TODO: other kinds of entities

## Morphosyntactic Properties

### Omissibility

Descriptors are best analyzed as modifiers. Their heads cannot be omitted without adding a determiner:

- an article by Professor Fillmore / *an article by Professor
- a speech by actor and activist Martin Sheen / *a speech by actor and activist
- We drove to Lake Mead. / *We drove to Lake.
- Open your book and turn to page 394. / *Open your book and turn to page.

Personal name descriptors may be freely omitted:

- an article by Fillmore
- a speech by Martin Sheen

Other kinds of heads may not always identify a unique referent without the descriptor to clarify.
Still, the descriptor can usually be omitted with sufficently rich context:

- We drove to Mead. (assuming common ground that Mead is a lake)
- Open your book and turn to 394. (assuming common ground that a location in the book is best identified by a page number)

### Pluralization

An important characteristic of descriptors is that they may be pluralized if headed by a coordination:

~~~ sdparse
Professors Fillmore and Kay
nmod:desc(Fillmore, Professors)
conj(Fillmore, Kay)
~~~

~~~ sdparse
Lakes Michigan and Erie
nmod:desc(Michigan, Lakes)
conj(Michigan, Erie)
~~~

Abbreviated descriptors like "Mr." may, however, resist such pluralization.

That a descriptor may be pluralized to "agree" with its coordinated head distinguishes this construction
from nominal compound modifiers ([compound]()), which are rarely morphologically plural even where there is semantic multiplicity:
_egg carton_, not \*_eggs carton_; _egg farmers and distributors_, not \*_eggs farmers and distributors_.

### Ellipsis

- John prefers Lake Michigan and Mary, (Lake) Erie.
- John read Chapter 1, Mary (Chapter) 2, and Kim (Chapter) 3.
- *John prefers actor Sheen and Mary, activist (Sheen).
- *John read Chapter 1, Mary Section (1), and Kim page (1).

This shows that descriptors are targets for ellipsis rather than contrast in this construction,
and should be treated as modifiers, like compound modifier nouns rather than compound heads:

- *Rex prefers vacation food and Rover, home (food).
- Rex prefers vacation food and Rover, (vacation) activities.

# Old draft below

_NOTE: This is a new subtype. Other documentation pages ([appos](), [flat](), [nmod](), [/dep/](https://universaldependencies.org/en/dep/), ...) will need to be updated._

A descriptor is a nominal modifier that is less than a full nominal phrase (as would be required for [appos]()),
and is not forming a complex concept warranting [compound]().

Descriptors are mainly titles and similar phrases modifying a proper name, and generally lack [case]() or [det]() dependents.

~~~ sdparse
Rev. Dr. Martin Luther King
nmod:desc(Martin, Rev.)
nmod:desc(Martin, Dr.)
flat(Martin, Luther)
flat(Martin, King)
~~~

In journalistic style we see determinerless modifiers like:

~~~ sdparse
prominent journalist Bill Moyers
amod(journalist, prominent)
nmod:desc(Bill, journalist)
flat(Bill, Moyers)
~~~

Contrast the version with a determiner or possessive, in which the two parts are reversible, warranting [appos]():

~~~ sdparse
the prominent journalist Bill Moyers
det(journalist, the)
amod(journalist, prominent)
appos(journalist, Bill)
flat(Bill, Moyers)
~~~

~~~ sdparse
my friend Bill Moyers
nmod:poss(friend, my)
appos(friend, Bill)
flat(Bill, Moyers)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:22 CEST -->
