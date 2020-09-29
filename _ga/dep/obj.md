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

The interrogative pronoun _cad_ (lit. 'what') is labelled as `obj` when it is fronted. 

_Is cuma <b>cad</b> eile a socraíodh ag Comhdháil Nice..._ 'Regardless of <b>whatever</b> else was decided at the Nice convention...

~~~ sdparse
Is cuma cad eile a socraíodh ag Comhdháil Nice... \n COP regardless what else that was_decided at Conference Nice...
obj(socraíodh, cad)
~~~

_<b>Cad</b> a d'ith sí?_ '<b>What</b> did she eat?

~~~ sdparse
Cad a d'ith sí? \n What that did_eat she?
obj(d'ith, Cad)
~~~

Impersonal/autonomous verbs are used to create phrases similar to the English passive. However, unlike English, the object does not become the subject of this verb form, and remains labelled as `obj`.

_An lá a cuireadh <b>é</b>_  'The day <b>he</b> was buried'

~~~ sdparse
An lá a cuireadh é \n The day that was_buried he
obj(cuireadh, é)
~~~

NOTE: We treat nominal dependents of verbal nouns as `obj` whether the definite article is present or not. 

_...gan do bheith ag <b>caitheamh</b> an <b>lae</b>..._  '...without <b>spending</b> the <b>day</b>...'

~~~ sdparse
gan do bheith ag caitheamh an lae \n without to being at_the spending of_the day
obj(caitheamh, lae)
~~~

_Is ag <b>déanamh</b> <b>cáca</b> atá mé._  'I'm <b>making</b> a <b>cake</b>'

~~~ sdparse
Is ag déanamh cáca atá mé \n Is at_the making of_a_cake that_am I
obj(déanamh, cáca)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:59 CEST 2020 -->
