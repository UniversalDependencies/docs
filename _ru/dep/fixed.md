---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is one of the three flat relations for multiword expressions (MWEs) (the other two being [flat]() and [compound]()). It is used for certain fixed grammaticized expressions that behave like function words or short adverbials. Fixed MWEs are annotated in a flat structure, where all subsequent words in the expression are attached to the first one using the fixed label. The assumption is that these expressions do not have any internal syntactic structure (except from a historical perspective) and that the structural annotation is in principle arbitrary. 

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
по сравнению же с долгом \n in comparison , namely , to loans
fixed(по, сравнению)
fixed(in, comparison)
fixed(по, с)
fixed(in, to)
case(долгом, по)
case(loans, in)
advmod(долгом, же)
advmod(loans, namely)
~~~

Another type of interruption is caused by a possessive determiner or adjective. In this case, the annotations of the multiword preposition with a regular genitive and with a possessive element are not parallel: 

~~~ sdparse
за счет чего \n by means of-which
fixed(за, счет)
fixed(by, means)
nmod(за, чего)
nmod(by, of-which)
~~~

~~~ sdparse
за чей счет \n by whose means
fixed(за, счет)
fixed(by, means)
det(счет, чей)
det(means, whose)
~~~

<!-- Interlanguage links updated St lis 3 20:58:53 CET 2021 -->
