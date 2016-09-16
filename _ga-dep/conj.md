---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

UD coordination has a right-adjunct structure (note that this differs from the structure of the Irish Dependency Treebank). The first conjunct (conjoined element) is the head of the conjoined phrase and all other conjuncts are dependents, labelled with the `conj` relation. 

### Examples

_Tigh <b>Tábhairne</b> agus <b>Lóistín</b> atá anois ann_ 'A Public Bar and Hotel is what is there now'

~~~ sdparse
Tigh Tábhairne agus Lóistín atá anois ann \n Houses Tavern and Accommodation that_is now there
conj(Tábhairne,Lóistín)
~~~

_ionaid oidhreachta, <b>chultúrtha</b> agus <b>Ghaeilge</b>_  'heritage, <b>culture</b> and <b>Irish language</b> centre'

~~~ sdparse
ionaid oidhreachta , chultúrtha agus Ghaeilge \n centre heritage, culture and Irish_language
conj(oidhreachta,chultúrtha)
conj(oidhreachta,Ghaeilge)
~~~




