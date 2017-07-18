---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation is used for any preposition in French. Prepositions are treated as dependents of the noun they attach to or introduce in an "extended nominal projection". Thus, UD does not treat a preposition as a mediator between a modified word and its object. The `case` relation aims at providing a uniform analysis of prepositions and case in morphologically rich languages. 

~~~ sdparse
Taxation individuelle de rentrée salariale \n Individual taxation of employment income
case(rentrée, de)
~~~

~~~ sdparse
En attendant , asseyez-vous ici \n While waiting, seat down here
case(attendant, En)
~~~
 
 In FrenchSpoken we also use the `case` relation. Here are a few examples from FrenchSpoken:
 
~~~ sdparse
je travaille dans le privé là \n I currently work in the private sector
case(privé, dans)
~~~
 
~~~ sdparse
un rassemblement devant le ministère de l'enseignement supérieur \n a gathering in front of the Ministry of Higher Education
case(ministère, devant)
case(enseignement, de)
~~~ 
