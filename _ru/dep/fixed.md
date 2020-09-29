---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
---

The fixed relation is one of the three relations (compound, fixed, flat) for special kinds of multiword expressions. It is used for fixed grammaticized expressions that behave like function words or short adverbials. The first word is always taken as the head, with all subsequent words as direct dependents.In Russian it is used for multi-word prepositions.

~~~ sdparse
В отличие от тебя , мне нечего стыдиться . \n In contrast to you , I-have nothing to-be-ashamed .
fixed(В, отличие)
fixed(В, от)
case(тебя, В)
fixed(In, contrast)
fixed(In, to)
case(you, In)
~~~

Multi-word prepositions usually form a contiguous span of the sentence. In exceptional cases however, they can be interrupted
by emphasizers and other words:

~~~ sdparse
в сравнении , например , с долгом \n in comparison , for-example , to loans
fixed(в, сравнении)
fixed(в, с)
case(долгом, в)
advmod:emph(долгом, например)
fixed(in, comparison)
fixed(in, to)
case(loans, in)
advmod:emph(loans, for-example)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:18 CEST 2020 -->
