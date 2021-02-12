---
layout: relation
title:  'nsubj'
shortdef : 'nominal subject'
udver: '2'
---

The dependency type `nsubj` marks nominal subjects of the non-copular
clause.

<!-- For thorough discussion of different types of subjects in
Finnish, see Section [subj-obj](#sec-subj-obj).-->

<!-- fname:nsubj_basic.pdf -->
~~~ sdparse
Eeva tuli töistä . \n Eeva came from_work .
nsubj(tuli-2, Eeva-1)
nmod(tuli-2, töistä-3)
punct(tuli-2, .-4)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:32 CET 2020 -->
