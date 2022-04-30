---
layout: relation
title: 'dislocated:nsubj'
shortdef: 'dislocated nominal subject'
udver: '2'
---

Through different subtypes of [`dislocated`](u-dep/dislocated) we more precisely identify which argument has been dislocated in the sentence and how it is realized in this position (nominally or clausally). This information is not directly retrievable otherwise from "basic" dependencies, since the `dislocated` relation always depends on the local head.

In the translation of the example, the bold passage corresponds to the dislocated element, and the underlined passage to the dislocating one.

~~~ sdparse
Paraclitus spiritus sanctus , quem mittet pater in nomine meo , ille vos docebit omnia . \n Paraclete spirit holy , whom he-will-send father in name my , that to-ye he-will-teach all .
dislocated:nsubj(docebit,Paracletus)
flat(Paraclitus,spiritus)
nsubj(docebit,ille)
dislocated:nsubj(he-will-teach,Paraclete)
flat(Paraclete,spirit)
nsubj(he-will-teach,that)
~~~

'**The Paraclete, the Holy Ghost**, whom the Father will send in My name, <u>He</u> will teach you all things.' (*Summa contra Gentiles* citing John 14:26, ITTB)
<!-- Interlanguage links updated St lis 3 20:58:52 CET 2021 -->
