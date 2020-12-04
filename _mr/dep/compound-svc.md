---
layout: relation
title: 'compound:svc'
shortdef: 'serial compound verb'
udver: '2'
---

`compound:svc` marks compound verb constructs, in non-nominal complex predicates.
These typically consist of a non-finite verb and a semantically bleached finite verb,
although both verbs being finite is not impossible.
The relation is governed by the finite verb that controls the argument structure of the construct,
and the same finite verb also governs all relevant arguments.
If both verbs are finite, the finite verb that controls the argument structure is the head.
These verbs are also often the semantic heads of the clause.

~~~ sdparse
तो पुस्तक वाचत राहिला . \n He book.NSG read-PPRS stayed-NSG .
compound:svc(राहिला, वाचत)
compound:svc(stayed-NSG, read-PPRS)
nsubj(राहिला, तो)
nsubj(stayed-NSG, He)
~~~

~~~ sdparse
त्याला खुर्ची विकावी लागली . \n He chair.FSG sell-SUBJ-FSG attached-FSG .
compound:svc(लागली, विकावी)
compound:svc(attached-FSG, sell-SUBJ-FSG)
obj(विकावी, खुर्ची)
obj(sell-SUBJ-FSG, chair.FSG)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:19 CET 2020 -->
