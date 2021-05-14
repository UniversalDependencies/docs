---
layout: relation
title: 'advmod:tfrom'
shortdef: 'adverbial modifier since when'
udver: '2'
---

We differentiate subtypes of adverbial modifiers according to the tridirectionality of Hungarian adverbs:

advmod:from – relation between an adverb answering for the question „from where?” and its parent

advmod:locy – relation between an adverb answering for the question „where?” and its parent

advmod:to – relation between an adverb answering for the question „where to?” and its parent

advmod:tfrom – relation between an adverb answering for the question „from when?” and its parent

advmod:tlocy – relation between an adverb answering for the question „when?” and its parent

advmod:tto – relation between an adverb answering for the question „till when or by when?” and its parent

advmod:mode – relation between other adverbs and their parents

“According to the project, the Arab state has been able to export raw materials at a half-yearly specified value since 1996.”

~~~ sdparse
A projekt szerint az arab állam 1996-tól félévente meghatározott értékben exportálhatott nyersanyagot . \n The project according-to the Arab state 1996-from every-half-a-year specified value-at could-export raw-material .
det(projekt, A)
case(projekt, szerint)
obl(exportálhatott, projekt)
det(állam, az)
amod:att(állam, arab)
nsubj(exportálhatott, állam)
advmod:tfrom(exportálhatott, 1996-tól)
advmod:mode(meghatározott, félévente)
amod:att(értékben, meghatározott)
obl(exportálhatott, értékben)
obj(exportálhatott, nyersanyagot)
punct(exportálhatott, .-13)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:49 CEST 2021 -->
