---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation is used for any preposition introducing a nomial construction French.
Prepositions are treated as dependents of the noun they attach to or introduce in an "extended nominal projection".
Thus, UD does not treat a preposition as a mediator between a modified word and its object.
The `case` relation aims at providing a uniform analysis of prepositions and case in morphologically rich languages.

~~~ sdparse
Taxation individuelle de rentrée salariale \n Individual taxation of employment income
case(rentrée, de)
~~~

~~~ sdparse
je travaille dans le privé là \n I currently work in the private sector
case(privé, dans)
~~~

~~~ sdparse
un rassemblement devant le ministère de l' enseignement supérieur \n a gathering in front of the Ministry of Higher Education
case(ministère, devant)
case(enseignement, de)
~~~

When a preposition introduce a clause, the relation [mark]() is used

~~~ sdparse
En attendant , asseyez-vous ici \n While waiting, seat down here
mark(attendant, En)
~~~



<!-- Interlanguage links updated Út zář 29 18:41:10 CEST 2020 -->
