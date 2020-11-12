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
Matto on jo kuiva . \n The_mat is already dry .
nsubj:cop(kuiva-4, Matto-1)
cop(kuiva-4, on-2)
advmod(kuiva-4, jo-3)
punct(kuiva-4, .-5)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:32 CET 2020 -->
