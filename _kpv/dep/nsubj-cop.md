---
layout: relation
title:  'nsubj:cop'
shortdef : 'nominal copular subject'
---

The dependency type `nsubj:cop` is used for the nominal subject
of a copular clause. The predicative is the head of the copular
clause, and also the governor of the `nsubj:cop` dependency.

<!-- Annotating copular clauses is discussed in Section [copulas](#sec-copulas).-->

<!-- fname:nsubj-cop.pdf -->
~~~ sdparse
Джодж дӧраыс кос нин . \n The_mat is already dry .
nsubj:cop(кос-3, дӧраыс-2)
nmod(дӧраыс-2, джодж-1)
advmod(кос-3, нин-4)
punct(кос-3, .-5)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:32 CET 2020 -->
