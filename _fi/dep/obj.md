---
layout: relation
title:  'dobj'
shortdef : 'direct object'
---

The dependency type `obj` is used for (nominal) direct objects of the
verb.

<!-- fname:dobj1.pdf -->
~~~ sdparse
Hän sulki oven . \n He closed the_door .
nsubj(sulki-2, Hän-1)
dobj(sulki-2, oven-3)
punct(sulki-2, .-4)
~~~

As in Finnish a passive clause does not have a subject, and what in
English would be considered the passive subject, is in Finnish the
direct object, the type `nsubjpass` is not used in TDT, but the type
`obj` is used instead.

<!-- fname:dobj2.pdf -->
~~~ sdparse
Päätös tehtiin marraskuussa . \n The_decision was_made in_November .
dobj(tehtiin-2, Päätös-1)
nmod(tehtiin-2, marraskuussa-3)
punct(tehtiin-2, .-4)
~~~

<!-- Fine distinctions in special cases of subjects, objects and
object-cased amount adverbials are discussed in Section
[subj-obj](#sec-subj-obj).-->
<!-- Interlanguage links updated Čt lis 12 09:43:34 CET 2020 -->
