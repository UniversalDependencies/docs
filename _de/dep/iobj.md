---
udver: '2'
layout: relation
title: 'iobj'
shortdef: 'indirect object'
---

The UD relation `iobj` is used in situations where a verb has two objects. The crucial point is that both must qualify
as objects under the UD guidelines, that is, both must be core arguments. Some types of nominals that are labeled as
objects by the traditional grammar of German are thus not objects in UD. In particular, the “indirect object” may be
understood as a dative object outside UD, but the morphological dative is an oblique marking in German, hence a dative
nominal can be attached as neither `iobj` nor [obj](); it must be [obl]() or its subtype, and we use [obl:arg]() for it.

~~~ sdparse
Die Frau gibt dem Kind einen Apfel . \n The woman gives the child an apple .
obj(gibt, Apfel)
obl:arg(gibt, Kind)
obj(gives, apple)
obl:arg(gives, child)
~~~

In a rare case however, a verb may take two accusative objects:

~~~ sdparse
Die Nachrichten kosteten den Vorstandsvorsitzenden seinen Job . \n The news cost the CEO his job .
iobj(kosteten, Vorstandsvorsitzenden)
obj(kosteten, Job)
iobj(cost, CEO)
obj(cost, job)
~~~

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:17 CEST -->
