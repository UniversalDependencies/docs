---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

UD coordination has a right-adjunct structure (note that this differs from the structure of the Irish Dependency Treebank). The first conjunct (conjoined element) is the head of the conjoined phrase and all other conjuncts are dependents, labelled with the `conj` relation. 

### Examples

_Tigh Tábhairne agus <b>Lóistín</b> atá anois ann_ 'Public House and <b>Accomodation</b> is what's there now'

~~~ sdparse
Tigh Tábhairne agus Lóistín atá anois ann \n House of_Tavern and Accommodation that_is now there
conj(Tigh,Lóistín)
cc(Lóistín, agus)
~~~

_ionaid oidhreachta, <b>chultúrtha</b> agus <b>Ghaeilge</b>_  'heritage, <b>culture</b> and <b>Irish language</b> centre'

~~~ sdparse
ionaid oidhreachta , chultúrtha agus Ghaeilge \n centre heritage, culture and Irish_language
conj(oidhreachta,chultúrtha)
conj(oidhreachta,Ghaeilge)
cc(Ghaeilge, agus)
~~~

The coordinating conjunction _ná_ can also mean 'than' and is treated as follows:

_Ná déan níos mó moille ná mar is <b>gá</b>._ 'Don't delay for any longer than <b>necessary</b>.'

~~~ sdparse
Ná déan níos mó moille ná mar is gá . \n IMP_NEG do SUP(pres) more of_delay than as COP necessary . 
conj(déan, gá)
cc(gá, ná)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:19 CET 2020 -->
