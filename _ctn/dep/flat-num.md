---
layout: relation
title: 'flat:num'
shortdef: 'flat multiword number'
udver: '2'
---

The `flat:num` subtype of the `flat` relation is used to connect parts of a multi-word numeral that are not connected by a conjunction.

~~~ sdparse
dui sai pacas mililitarlekki \n two hundred fifty milliliter.APPROX
nummod(sai, dui)
nummod(hundred, two)
nummod(mililitarlekki, sai)
nummod(milliliter.APPROX, hundred)
flat:num(sai, pacas)
flat:num(hundred, fifty)
~~~
<!-- Interlanguage links updated Út 10. listopadu 2026, 22:38:47 CET -->
