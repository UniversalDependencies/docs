---
layout: relation
title:  'obl:agent'
shortdef : 'oblique agent in passive construction'
udver: '2'
---

The label `obl:agent` is used to mark the agent in the genitive case when it appears with passive verbs:
~~~ sdparse
Katė buvo gaudoma šuns . \n The-cat was being-chased by-the-dog .
obl:agent(gaudoma, šuns)
obl:agent(being-chased, by-the-dog)
~~~

When the agent occurs with passive verbs used attributively, the genitive is also annotated as `obl:agent`:
~~~ sdparse
Mano parašytas darbas . \n The-work written by-me .
obl:agent(parašytas, Mano)
obl:agent(written, by-me)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:31 CEST -->
