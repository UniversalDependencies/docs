---
layout: relation
title: 'mwe'
shortdef: 'multi-word expression'
---

The multi-word expression (modifier) relation is one of the
relations for compounding and it is intended for function words.
In Czech it is used for multi-word prepositions.
The leftmost word is the head and all the other words are attached as its `mwe` modifiers.

~~~ sdparse
В отличие от тебя , мне нечего стыдиться . \n In contrast to you I-have nothing to-be-ashamed .
mwe(В, отличие)
mwe(В, от)
case(тебя, В)
mwe(In, contrast)
mwe(In, to)
case(you, In)
~~~

Multi-word prepositions usually form a contiguous span of the sentence. In exceptional cases however, they can be interrupted
by emphasizers and other words:

~~~ sdparse
в сравнении , например , с долгом \n in comparison for-example to loans
mwe(в, сравнении)
mwe(в, с)
case(долгом, с)
advmod:emph(долгом, например)
mwe(in, comparison)
mwe(in, to)
case(loans, to)
advmod:emph(loans, for-example)
~~~
