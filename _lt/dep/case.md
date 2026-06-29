---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation is used for any case-marking element which is treated as a separate syntactic word (prepositions and postpositions). Case-marking elements are treated as dependents of the noun they attach to or introduce.

~~~ sdparse
Aš einu į universitetą . \n I go to the-university .
case(universitetą, į)
case(the-university, to)
~~~

~~~ sdparse
Aš ateisiu po vidurnakčio . \n I will-come after midnight .
case(vidurnakčio, po)
case(midnight, after)
~~~

~~~ sdparse
Aš einu namų link . \n I am-going toward home .
case(namų, link)
case(home, toward)
~~~

~~~ sdparse
Tavo dėka aš išsigelbėjau . \n Thanks to-you , I was-saved .
case(Tavo, dėka)
case(to-you, Thanks)
~~~

In some cases, oblique markers can also be nouns, when in a word sequence the first word is in the genitive case.

~~~ sdparse
Nieko blogo vaiko atžvilgiu nepadariau . \n I-didn’t-do anything bad toward the-child .
case(vaiko, atžvilgiu)
case(the-child, toward)
~~~

In order to decide which nouns are obliques – [obl]() and which should be marked with `case`, it is important to consider the following aspects:

1. If a noun is part of a word sequence whose first word is adjectival (agreeing), then it is not considered an oblique and `case` is not marked; for example, rankiniu būdu “in a manual way” → būdu _“way”_  is annotated as [obl]() as it is an adjective.

2. If a noun can be replaced by preposition then it is annotated with `case`. For example, _Gaisro atveju skambinkite telefonu. “In case of fire call by phone.”_ the word _gaisro “fire”_  is not adjectival; it can be replaced by a prepositional phrase – e.g., _per gaisrą “during the fire.”_ The noun _atveju “in case”_ is annotated as `case`, while _gaisro “fire”_ is annotated as [obl]().

<!-- Interlanguage links updated Po 29. června 2026, 18:11:52 CEST -->
