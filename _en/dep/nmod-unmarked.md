---
layout: relation
title: 'nmod:unmarked'
shortdef : 'unmarked nominal modifier'
udver: '2'
---

This relation is a subtype of the [nmod]() relation that applies
when a non-possessive modifier within a nominal takes the form of a 
nominal lacking a preposition (a.k.a. a noun phrase). It is 
"unmarked" in that, unlike most `nmod`s, it has no adposition or
genitive marking.

`nmod:unmarked` merges two older subtypes, `nmod:npmod` and `nmod:tmod`.
It has a clause-level countepart: [obl:unmarked]().

Examples include:

(i) temporal modifiers

~~~ sdparse
For lunch , any day this week is fine !
nmod:unmarked(day, week)
~~~

(ii) rate expressions with meaning equivalent to "per"

~~~ sdparse
IBM earned $ 5 a share
nmod:unmarked($, share)
~~~

(iii) elementary properties

~~~ sdparse
I want that color kitten
nmod:unmarked(kitten, color)
~~~

~~~ sdparse
a pizza the size of the sun
nmod:unmarked(pizza, size)
~~~

(iv) emphatic reflexive pronouns

~~~ sdparse
Einstein himself was in attendance .
nmod:unmarked(Einstein, himself)
~~~

(v) "a couple" as pre-head quantifier

~~~ sdparse
You can have a couple/NOUN cookies .
det(couple, a)
nmod:unmarked(cookies, couple)
~~~

(vi) scientific scale postmodifiers

~~~ sdparse
7/NUM degrees/NOUN Fahrenheit/PROPN
nummod(degrees, 7)
nmod:unmarked(degrees, Fahrenheit)
~~~

## Locations

** DRAFT - NOT YET IMPLEMENTED **

_For discussion of multiword place names like <b>Lake Mead</b> and <b>Route 66</b>, see [nmod:desc]()._

Identifiers of specific locations are often complex, incorporating multiple levels of granularity.
For some such descriptions, the locational parts are juxtaposed—perhaps with punctuation like commas or dashes, but without prepositions
or other clear grammatical indication of headedness.
Common examples include cities, where the city name is conventionally paired with a state/province/country name (*<b>Berkeley, California, USA</b>*);
street addresses, where a house number is related to a street name, and possibly to a subunit;
and even textual references (*<b>Act IV, Scene 1</b>* in a play).
The order of granularity is [big-endian](https://en.wikipedia.org/wiki/Endianness) for some of these naming patterns and little-endian for others.

In the absence of morphosyntactic cues, we rely on semantics to determine the dependency relations:
the most specific locator serves as the head of all the others in the expression, provided that the
expression is short enough that it would tend to occur as a nominal in a wider sentence.
Dependents attach as `nmod:unmarked`:

~~~ sdparse
Berkeley/PROPN , California/PROPN , USA/PROPN
nmod:unmarked(Berkeley, California)
nmod:unmarked(Berkeley, USA)
~~~

The city name heads both the state and country names, though any pair of these elements
might occur without the third.

~~~ sdparse
110/NUM Sproul/PROPN Hall/PROPN
nmod:unmarked(110, Hall)
compound(Hall, Sproul)
~~~

Here, *Sproul Hall* names a building and *110* is the room or office number within the building.
The room number is more specific, and is therefore the head. The same applies to apartment numbers,
even if presented after the house number and street.
Because the house number and street are clearly grouped together, the house number heads the street name:

~~~ sdparse
221B/PROPN Baker/PROPN St./PROPN , Apt./PROPN E/PROPN
nmod:unmarked(221B, St.)
compound(St., Baker)
flat(Apt., E)
nmod:unmarked(Apt., 221B)
~~~

Where the name of an institutional branch or campus juxtaposes the name of the institution followed by the name of a place, the institution is the head
(but prepositional phrases are structured as usual):

~~~ sdparse
University/PROPN of/ADP Wisconsin/PROPN – Madison/PROPN
nmod(University, Wisconsin)
nmod:unmarked(University, Madison)
~~~

If the expression follows an extragrammatical format like a full postal address, the major parts are connected via [list]():

~~~ sdparse
110/NUM Sproul/PROPN Hall/PROPN , Berkeley/PROPN , California/PROPN , USA/PROPN 94704/NUM
list(110, Berkeley)
list(110, 94704)
~~~

~~~ sdparse
Harry/PROPN Potter/PROPN , 12/NUM Grimmauld/PROPN Place/PROPN , London/PROPN
flat(Harry, Potter)
list(Harry, 12)
list(Harry, London)
~~~

## Dates

Locations in time follow the same principles as spatial [locations](#locations):

~~~ sdparse
8/NUM[NumType=Card] October/PROPN 1963/NUM[NumType=Card]
nmod:unmarked(8, October)
nmod:unmarked(8, 1963)
~~~

~~~ sdparse
October/PROPN 8/NUM[NumType=Card] , 1963/NUM[NumType=Card]
nmod:unmarked(8, October)
nmod:unmarked(8, 1963)
~~~

~~~ sdparse
October/PROPN 8th/NUM[NumType=Ord] , 1963/NUM[NumType=Card]
nmod:unmarked(8th, October)
nmod:unmarked(8th, 1963)
~~~

*BC*, *AD*, and similar eras modify the year:

~~~ sdparse
October/PROPN 1963/NUM[NumType=Card] AD/NOUN
nmod:unmarked(October, 1963)
nmod:unmarked(1963, AD)
~~~

Where two labels apply to the same temporal unit, [appos]() may be suitable:

~~~ sdparse
It starts at/ADP 8:00/NUM[NumType=Card] a.m./NOUN EST/PROPN on/ADP Monday/PROPN , October/PROPN 8/NUM[NumType=Card] , 1963/NUM[NumType=Card] .
obl(starts, 8:00)
case(8:00, at)
nmod:unmarked(8:00, a.m.)
nmod:unmarked(8:00, EST)
nmod(8:00, Monday)
case(Monday, on)
appos(Monday, 8)
nmod:unmarked(8, October)
nmod:unmarked(8, 1963)
~~~

For date+time collocations in machine-readable formats, [list]() is recommended:

~~~ sdparse
01/01/1970/NUM 12:30:00/NUM PM/NOUN
list(01/01/1970, 12:30:00)
nmod:unmarked(12:30:00, PM)
~~~

**History:** Prior to release 2.15, case (i) (temporal modifiers)
had a separate subtype called [nmod:tmod](), and [nmod:npmod]()
was used for the non-temporal ones.
<!-- Interlanguage links updated So 10. května 2025, 18:15:46 CEST -->
