---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

The `discourse` relation is used for discourse expressions and markers with grammatical properties
that distinguish them from expressions appearing in typical syntagmatic relations
(like [advmod](), [obl](), [advcl](), [parataxis](), [vocative](), etc.).
Most centrally this includes:

  * [interjections](u-pos/INTJ): expressive words (_oh_, _Welcome_), feedback markers (_yes_, _uh-huh_), fillers (_um_)
  * [particles](u-pos/PART) that cannot be classified as adverbs, adpositions, etc. in the language.
    Such particles may carry a range of pragmatic meanings, including:
      - question particles (Kʼicheʼ _la_, Mandarin _ne_)
      - vocative particles (Arabic _ya_, Coptic/Greek _ō_)
  * list enumerators (e.g. _1._, _(a)_ marking an item in a sequence)
  * emojis/emoticons with an extra-syntactic expressive function

[^1]: Bullets, by contrast, are considered [punctuation](u-pos/PUNCT) and attach as [punct]().

These discourse elements are attached to the head of the most relevant nearby unit, often a clause.

While many expressions carry pragmatics, `discourse` is reserved as a syntactic function
for constructions signaling discourse meaning in grammatically distinctive ways.
The precise criteria for identifying such constructions must be decided on a language-specific basis,
bearing in mind that grammaticalization lies on a continuum. In English, for example, we exclude
from `discourse` any items from the lexical class of adverbs (_actually_) and
prepositional phrases (_in other words_); these are simply [advmod]() and [obl](), respectively,
even when functioning pragmatically as discourse markers.

~~~ sdparse
I am 21 , well , will be in November .
nsubj(21, I)
cop(21, am)
parataxis(21, be)
discourse(be, well)
aux(be, will)
obl(be, November)
case(November, in)
punct(21, .)
punct(well, ,-4)
punct(well, ,-6)
~~~

~~~ sdparse
Iguazu is in Argentina :)
discourse(Argentina-4, :)-5)
~~~

~~~ sdparse
5/NUM . Cool for 10 minutes and serve .
discourse(Cool, 5)
punct(5, .-2)
~~~

~~~ sdparse
To enter the stadium , you must not have — ( a ) a weapon ; ( b ) any food ; and ( c ) any drink .
discourse(weapon, a-12)
discourse(food, b)
discourse(drink, c)
conj(weapon, food)
conj(weapon, drink)
cc(drink, and)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:34:36 CEST -->
