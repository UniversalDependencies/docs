---
layout: relation
title:  'nmod:poss'
shortdef : 'possessive nominal modifier'
udver: '2'
---

A subtype of [nmod](), `nmod:poss` is used for a possessive modifier preceding its nominal head. The modifier could be a possessive pronoun or a noun with a genitive case clitic (e.g. _'s_). This relation is not used for other pre-head modifiers such as noun compounds or quotative phrases.

~~~ sdparse
Marie 's book
nmod:poss(book, Marie)
case(Marie, 's)
~~~

~~~ sdparse
my book
nmod:poss(book, my)
~~~

If preceded by a determiner, the determiner normally belongs within the possessive phrase:

~~~ sdparse
the Chair 's office
det(Chair-2, the-1)
nmod:poss(office-4, Chair-2)
case(Chair-2, 's-3)
~~~

However, when the possessive modifier denotes kind rather than a referent, the determiner attaches outside the possessive phrase:

~~~ sdparse
a children 's story
det(story, a)
nmod:poss(story, children)
case(children, 's)
~~~

The indefinite article clearly agrees in number with _story_ and not _children_.

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:24 CEST -->
