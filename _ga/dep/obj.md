---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The `obj` label is used to mark the relationship between a verb and its direct object.


### Examples

_Bhailigh siad eolas_  'They collected <b>information</b>'

~~~ sdparse
Bhailigh siad eolas \n Collected they information
obj(Bhailigh, eolas)
~~~

The object of a verb is the second most core argument of a verb after the subject, even in case where the subject is implicit. 

_Dhíreofaí <b>aird</b> ar dhuine ar leith i ngach seisiún._  '<b>Attention</b> would be paid to one person in particular in each session'

~~~ sdparse
Dhíreofaí aird ar dhuine ar leith i ngach seisiún. \n Would_be_directed attention on a person aside in each session.
obj(Dhíreofaí, aird)
~~~

Note that the object of an infinitival phrase occurs before the infinitive form (Verbal Noun), despite Irish being a VSO language.

_<b>eolas</b> a chur ar fáil_   'to make <b>information</b> available'

~~~ sdparse
eolas a chur ar fáil \n information to put at available
obj(chur, eolas)
~~~

Impersonal/autonomous verbs are used to create phrases similar to the English passive. However, unlike English, the object does not become the subject of this verb form, and remains labelled as `obj`.

_An lá a cuireadh <b>é</b>_  'The day <b>he</b> was buried'

~~~ sdparse
An lá a cuireadh é \n The day that was_buried he
obj(cuireadh, é)
~~~

NOTE: We treat nominal dependents of verbal nouns as `obj`.

_...gan do bheith ag <b>caitheamh</b> an </b>lae</b>..._  '...without spending the <b>day</b>...'

~~~ sdparse
gan do bheith ag caitheamh an lae \n without to being at_the spending of_the day
obj(caitheamh, lae)
~~~
