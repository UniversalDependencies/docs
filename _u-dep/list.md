---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items. In lists with more than two items, all
items of the list should modify the first one. If a list is something like a list of paragraphs
(for example, describing items in a catalogue), then each item will be one or more sentences and
no list relations appear, as we do not have relations between sentences.
However, informal and web text often contains passages which are meant to be interpreted as lists
but are parsed as single sentences. For example, email signatures often contain these structures,
in the form of contact information: the different contact information items are labeled as `list`.

~~~ sdparse
Steve Jones sj@abc.xyz University of Arizona
flat:name(Steve, Jones)
list(Steve, sj@abc.xyz)
list(Steve, University)
nmod(University, Arizona)
case(Arizona, of)
~~~

If the fields in the list are explicit and have a key-value structure,
the key-value pair relations are labeled as [appos]().

~~~ sdparse
Steve Jones Phone: 555-9814 Email: jones@abc.edf
flat:name(Steve-1, Jones-2)
list(Steve-1, Phone:-3)
list(Steve-1, Email:-5)
appos(Phone:-3, 555-9814-4)
appos(Email:-5, jones@abc.edf-6)
~~~

Another place where `list` has been used is for a sequence of attributes or descriptive terms used as the title line of a review (such as product or restaurant reviews, etc.):

~~~ sdparse
Long Lines , Silly Rules , Rude Staff , Ok Food
list(Lines, Rules)
list(Lines, Staff)
list(Lines, Food)
amod(Lines, Long)
amod(Rules, Silly)
amod(Staff, Rude)
amod(Food, Ok)
punct(Rules, ,-3)
punct(Staff, ,-6)
punct(Food, ,-9)
~~~

However, `list` should not be over-used. If a construction can easily be analyzed using the grammatical relations of standard sentences, typically as a coordinated structure, then it should be analyzed with these more standard relations, even if it is laid out as a list typographically.  In particular, when the list is written as a single sentence, with commas and overt coordination, then it should be analyzed as a coordinated structure.

For list items, the de facto decision taken in [issue 156](https://github.com/UniversalDependencies/docs/issues/156) is that, for enumerated lists, regardless of whether the items are numbered with arabic, roman, or other numerals, or are given letters, we will regard the item contents as the head, and the item enumerator will be a `nummod` of it and given the part of speech `NUM`. Any punctuation with the list item will be a `punct` dependent of the item enumerator. For itemized lists with bullet, dash or similar markers, the current standard is to give the marker a `PUNCT` part of speech and then to give it the dependency relation `punct` to the head of the item content.

<!-- Interlanguage links updated St lis 3 20:58:56 CET 2021 -->
