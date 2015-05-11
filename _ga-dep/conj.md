---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

UD coordination has a right-adjunct structure (note that this differs from the structure of the Irish Dependency Treebank). The first conjunct (conjoined element) is the head of the conjoined phrase and all other conjuncts are dependents, labelled with the `conj` relation. 

~~~ sdparse
Tigh Tábhairne agus Lóistín atá anois ann \n Public Bar and Hotel is what is there now.
conj(Tigh,Lóistín)
conj(Bar,Hotel)
~~~

~~~ sdparse
ionaid oidhreachta , chultúrtha agus Ghaeilge \n heritage, culture and Irish language centre.
conj(oidhreachta,chultúrtha)
conj(oidhreachta,Ghaeilge)
~~~




