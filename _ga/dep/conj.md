---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

UD coordination has a right-adjunct structure (note that this differs from the structure of the Irish Dependency Treebank). The first conjunct (conjoined element) is the head of the conjoined phrase and all other conjuncts are dependents, labelled with the `conj` relation. 

### Examples

_<b>Tigh</b> Tábhairne agus <b>Lóistín</b> atá anois ann_ 'Public <b>House</b> and <b>Accomodation</b> is what's there now'

~~~ sdparse
Tigh Tábhairne agus Lóistín atá anois ann \n House of_Tavern and Accommodation that_is now there
conj(Tigh,Lóistín)
cc(Lóistín, agus)
~~~

_ionaid <b>oidhreachta</b>, <b>chultúrtha</b> agus <b>Ghaeilge</b>_  '<b>heritage</b>, <b>culture</b> and <b>Irish language</b> centre'

~~~ sdparse
ionaid oidhreachta , chultúrtha agus Ghaeilge \n centre heritage, culture and Irish_language
conj(oidhreachta,chultúrtha)
conj(oidhreachta,Ghaeilge)
cc(Ghaeilge, agus)
~~~




