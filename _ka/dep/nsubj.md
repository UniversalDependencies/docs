---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject (<code>nsubj</code>) is a nominal which is the syntactic subject of a clause. In Georgian a nominal subject is a nominal which is the (ergative, nominative or dative) subject of the verbal predicate. The governor of this relation is typically a verb with the following exceptions: when the verb is a copular verb, the <code>nsubj</code> relation is headed by the complement of the copular verb, which can be an adjective or a noun. E.g.

~~~ sdparse
თეთრ მარმარილოს კიბეებზე ყვაოდა დილა/NOUN. \n 'Morning was blooming on the white marble stairs.'
nsubj(ყვაოდა, დილა)
~~~
~~~ sdparse
თითქოს ზოსიმე მღვდელს ენამ/NOUN უყივლა. \n 'It was as if the priest Zosime had felt something.'
nsubj(უყივლა, ენამ)
~~~
~~~ sdparse
ძვირფასმა/ADJ მაჩუქა პატარა ცინდალი. \n 'The dear one gave me a small balsam.' 
nsubj(მაჩუქა, ძვირფასმა)
~~~
~~~ sdparse
ქუჩები და მოედნები უზრუნველად მოსეირნე გოგო-ბიჭებს/NOUN აევსო. \n 'Carefree walking girls and boys filled streets and squares.' 
nsubj(აევსო, გოგო-ბიჭებს)
~~~

**NB**
Note that when the verb is used in the passive voice the nominal syntactic subject is marked with the subtype [nsubj:pass](_ka/dep/nsubj-pass).
When the subject is clausal, it's preferable to use other specialized relations ([csubj](_ka/dep/csubj) or its subtype [csubj:pass](_ka/dep/csubj-pass).
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:07 CET -->
