---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

The `dobj` label is used to mark the relationship between a verb and its direct object.

~~~ sdparse
Bhailigh siad eolas \n They collected information
dobj(Bhailigh, eolas)
~~~

Note that the object of infinitive phrase occurs before the infinitive form (Verbal Noun), despite Irish being a VSO language.

~~~ sdparse
eolas a chur ar fáil \n to make information available
dobj(chur, eolas)
~~~

Impersonal/ Autonomous verbs are used to create phrases similar to the English passive. However, unlike English, the object does not become the subject of this verb form, and remains labelled as `dobj`.

~~~ sdparse
An lá a cuireadh é \n The day he was buried
dobj(cuireadh, é)
~~~



