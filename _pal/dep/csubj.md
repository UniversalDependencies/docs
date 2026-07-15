---
layout: relation
title: 'csubj'
shortdef: '<shortdef>'
udver: '2'
---

Clausal subjects can be finite or infinite. They appear in situ or, if overly long, dislocated following the main verb. There can be a resumptive pronoun, which is annotated as `dislocated:res` because its presence does not necessarily indicate a dislocation of the clausal constituent.

- "And whoever (is) poor (is) happy by what?"
~~~ sdparse
ud kē driyōš pad čē huram \n and who poor by what happy
nsubj(driyōš, kē)
csubj(huram, driyōš)
case(čē, pad)
obl(huram, čē)
~~~

- "And (it is) best to guard oneself against sin at any place and time."
~~~ sdparse
ud pad harw gāh ud zamān xwēštan az wināh pahrēxtan weh \n and at every place and time self from sin protect better
cc(weh, ud-1)
csubj(weh, pahrēxtan)
case(gāh, pad)
det(gāh, harw)
conj(gāh, zamān)
cc(zamān, ud-5)
obj(pahrēxtan, xwēštan)
obl(pahrēxtan, wināh)
case(wināh, az)
~~~

- "And this, too, (is) obvious that Ohrmazd has created this creation."
~~~ sdparse
ud ēn =iz paydāg kū ohrmazd ēn dām dād ēstēd \n and this also obvious that Ohrmazd this creation created stands
dislocated:res(paydāg, ēn-2)
csubj(paydāg, dād)
mark(dād, kū)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:56 CEST -->
