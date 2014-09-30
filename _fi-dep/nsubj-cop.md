---
layout: base
title:  'nsubj:cop'
shortdef : 'nominal copular subject'
---

## {{ page.title }}: {{ page.shortdef }}

The dependency type {{ page.title }} is used for the nominal subject
of a copular clause. The predicative is the head of the copular
clause, and also the governor of the {{ page.title }} dependency.

<!-- Annotating copular clauses is discussed in Section [copulas](#sec-copulas).-->

<!-- fname:nsubj-cop.pdf -->
~~~ sdparse
Matto on jo kuiva . \n The_mat is already dry .
nsubj:cop(kuiva-4, Matto-1)
cop(kuiva-4, on-2)
advmod(kuiva-4, jo-3)
punct(kuiva-4, .-5)
~~~
