---
layout: relation
title: 'dislocated:obj'
shortdef: 'dislocated object'
udver: '2'
---

Through different subtypes of [`dislocated`](u-dep/dislocated) we more precisely identify which argument has been dislocated in the sentence and how it is realized in this position (nominally or clausally). This information is not directly retrievable otherwise from "basic" dependencies, since the `dislocated` relation always depends on the local head.

In the translation of the example, the bold passage corresponds to the dislocated element, and the underlined passage to the dislocating one.

~~~ sdparse
Et quod tunc humanum genus fuerit felix in pacis universalis tranquillitate hoc ystoriographi omnes , hoc poete illustres , hoc etiam scriba mansuetudinis Cristi testari dignatus est . \n And that then human kind had-been happy in of-peace universal calm this historians all , this poets illustrious , this also chronicler of-mildness of-Christ to-witness honoured is . 
dislocated:obj(ystoriographi,felix)
orphan(ystoriographi,hoc-12)
orphan(poete,hoc-16)
obj(testari,hoc-20)
dislocated:obj(historians,happy)
orphan(historians,this-40)
orphan(poets,this-44)
obj(to-witness,this-48)
~~~

'**That mankind was then happy in the calm of universal peace** is attested by all historians and by famous poets; even the chronicler of Christ's gentleness deigned to bear witness to <u>it</u>.' (*De Monarchia*, UDante)

* The [`orphan`](u-dep/orphan) relations actually correspond to an `obj`; in this co-ordination, all conjuncts but the last one are elliptical of *dignatus est testari* '[has] deigned to bear witness to'.
<!-- Interlanguage links updated St lis 3 20:58:52 CET 2021 -->
