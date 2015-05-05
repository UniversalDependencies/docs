---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

The UD coordindation is in a right-adjunct structure (Note that this differs from the structure of the Irish Dependency Treebank). The first conjunct (conjoined element) is the head of the conjoined phrase and all other conjuncts are dependents, labelled with the `conj' relation. 

~~~ sdparse
Tigh Tábhairne agus Lóistín atá anois ann \n Public Bar and Hotel is what is there now.
conj(Tigh,Lóistín)
~~~

~~~ sdparse
ionaid oidhreachta, chultúrtha agus Ghaeilge \n heritage, culture and Irish language centre.
conj(oidhreachta,chultúrtha)
conj(oidhreachta,Ghaeilge)
~~~


