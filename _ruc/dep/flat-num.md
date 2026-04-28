---
layout: relation
title: 'flat:num'
shortdef: 'flat multiword number'
udver: '2'
---

The `flat:num` subtype of the [flat]() relation is used to connect parts of a multiword numeral that are not linked by coordination.

Elements that are connected by a conjunction are instead analyzed using [conj]() and [cc]().

~~~ sdparse
lukumi lwenda kyendai na musanju . \n thousand nine_hundred ninety and seven .
flat:num(lukumi, lwenda)
flat:num(lukumi, kyendai)
cc(musanju, na)
conj(lukumi, musanju)
flat:num(thousand, nine_hundred)
flat:num(thousand, ninety)
cc(seven, and)
conj(thousand, seven)
~~~