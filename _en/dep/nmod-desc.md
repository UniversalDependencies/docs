---
layout: relation
title:  'nmod:desc'
shortdef : 'descriptor modifier in nominal'
udver: '2'
---

** IMPLEMENTATION IN PROGRESS **

This relation subtype applies to nominal modifiers that we term __descriptors__.
These are bare nominals that occur in or with a name, and are not prepositional/possessive
or part of the English compound construction.
For [personal names](#personal-names), titles and role descriptions are a prime example.
[Business names](#business-names) may include descriptors like _Inc._
Semantically, a descriptor assigns a referent to a class or may disambiguate the referent
where the main part of a proper name is not a sufficiently unique identifier.
Crucially, omitting the descriptor does not affect the grammaticality of the expression
(and does not come across as an abbreviation of the full name).

Descriptors are bare modifiers (i.e. the descriptor noun lacks a determiner, possessive, or numeral).
This distinguishes them from appositives: the [appos]() relation holds between two *full* nominals.
In principle, descriptors are a special case of [nmod:unmarked]().

## Personal Names

One descriptor construction is the pre- or postmodification of a personal name with a (bare nominal) role or title:

** NOTE: we need to standardize UPOS. [SYM]() says that Dr. and Mr. are NOUN but in English treebanks they are predominantly PROPN. **

~~~ sdparse
Mr./NOUN Magoo/PROPN
nmod:desc(Magoo, Mr.)
~~~

~~~ sdparse
Professor/NOUN Charles/PROPN J./PROPN Fillmore/PROPN , Ph.D./PROPN
nmod:desc(Charles, Professor)
flat(Charles, J.)
flat(Charles, Fillmore)
nmod:desc(Charles, Ph.D.)
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

A descriptor must be omissible, but not all omissible parts of a name are descriptors:
if the main part of a name has multiple parts such that there are at least two plausible heads,
[flat]() is the appropriate choice, as is the case with the main parts of a personal name.

Non-numeric generational suffixes are also `nmod:desc`
(but see [Numbered Entities](#numbered-entities) below):

~~~ sdparse
JFK/PROPN Jr./PROPN
nmod:desc(JFK, Jr.)
~~~

## Business Names

Corporate suffixes like _Inc._, _Corp._, and _LLC_ (as well as their non-abbreviated forms)
are considered optional descriptors as they are often omitted from the name of the company.
Regardless of etymology, they are tagged [PROPN]().

~~~ sdparse
Apple/PROPN Inc./PROPN
nmod:desc(Apple, Inc.)
~~~

## Complex Dates and Addresses

These are considered to have time or place modifiers, and thus fall under [nmod:unmarked]().

## Idiosyncratic Name Patterns Analyzed as Flat Expressions

In addition to the main parts of a personal name, further name patterns analyzed with [flat]()
rather than a headed construction are given below.
Note that the morphosyntax of name patterns differs by language, with some exhibiting agreement
(as a sign of head or modifier status) where it is lacking in English,
so a flat analysis of an English expression may not hold for its translation into another language.

### Numbered Entities

When the name of a category combines with a (pseudo)number to form a name,
and the number is serving as an identifier rather than as a quantifier, we use [flat]():[^1]

~~~ sdparse
page/NOUN 394/NUM
flat(page, 394)
~~~

~~~ sdparse
Route/PROPN 66/NUM
flat(Route, 66)
~~~

~~~ sdparse
Room/PROPN B/PROPN
flat(Room, B)
~~~

The "number X" construction also serves to clarify that a number is serving as an identifier;
"number X" forms a flat expression that can be combined within a larger flat expression:

~~~ sdparse
What is behind door/NOUN number/NOUN 3/NUM ?
flat(door, number)
flat(number, 3)
~~~

A product name that includes a model or version number is considered a flat expression:

~~~ sdparse
Nikon/PROPN D7000/PROPN
flat(Nikon, D7000)
~~~

~~~ sdparse
Firefox/PROPN 43/NUM
flat(Firefox, 43)
~~~

~~~ sdparse
World/PROPN War/PROPN II/NUM
flat(World, War)
flat(World, II)
~~~

For simplicity, regnal/generational number suffixes are considered part of flat expressions
just like version numbers, though they semantically resemble [_Jr._ and _Sr._](#personal-names):

~~~ sdparse
Queen/PROPN Elizabeth/PROPN II/NUM
nmod:desc(Elizabeth, Queen)
flat(Elizabeth, II)
~~~

[^1]: This is a departure from a guideline articulated previously: according to [de Marneffe et al. (2021)](https://doi.org/10.1162/coli_a_00402), p. 285, the (pseudo)number attaches as [nmod](), though the main point of that passage is to articulate why [nummod]() is not appropriate (no rationale for headedness is presented).

### Place names

We also use [flat]() for toponyms/names of establishments where the noun representing the entity type comes first.
This word order is anomalous relative to other English constructions such that
tests for headedness are inconclusive:

~~~ sdparse
Lake/PROPN Mead/PROPN
flat(Lake, Mead)
~~~

~~~ sdparse
Mount/PROPN Everest/PROPN
flat(Mount, Everest)
~~~

~~~ sdparse
Hotel/PROPN California/PROPN
flat(Hotel, California)
~~~

By contrast, if the identificational part of the toponym precedes the entity type,
this is analyzed as a regular right-headed [compound]() dependency:

~~~ sdparse
Mirror/PROPN Lake/PROPN
compound(Lake, Mirror)
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:15:42 CEST -->
