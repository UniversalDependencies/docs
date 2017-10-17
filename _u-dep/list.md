---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items. In lists with more than two items, all items of the list should modify the first one. Informal and web text often contains passages which are meant to be interpreted as lists but are parsed as single sentences. Email signatures often contain these structures, in the form of contact information: the different contact information items are labeled as `list`; the key-value pair relations are labeled as [appos]().

~~~ sdparse
Steve Jones Phone: 555-9814 Email: jones@abc.edf
flat:name(Steve-1, Jones-2)
list(Steve-1, Phone:-3)
list(Steve-1, Email:-5)
appos(Phone:-3, 555-9814-4)
appos(Email:-5, jones@abc.edf-6)
~~~

Another place where `list` has been used is for a sequence of attributes or descriptive terms used as the title line of a review (such as product or restaurant reviews, etc.:

~~~ sdparse
Long Lines , Silly Rules , Rude Staff , Ok Food
list(Lines, Rules)
list(Lines, Staff)
list(Lines, Food)
~~~

However, `list` should not be over-used. If a construction can be easily analyzed using the grammatical relations of standard sentences, such as when there is overt coordination, then it should be analyzed with these more standard relations, even if it is laid out as a list typographically.
