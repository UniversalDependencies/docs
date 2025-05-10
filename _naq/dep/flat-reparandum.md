---
layout: relation
title: 'flat:reparandum'
shortdef: 'repeated reparandum'
udver: '2'
---

The `flat:reparandum` subtype of the `flat` relation is used to connect several false starts of one word.

~~~ sdparse
[ ti ti ] tita \n [ ti ti ] I
flat:reparandum(ti-2, ti-3)
reparandum(tita, ti-2)
flat:reparandum(ti-8, ti-9)
reparandum(I, ti-8)
~~~

~~~ sdparse
[ ti ] [ ti ] tita \n [ ti ] [ ti ] I
flat:reparandum(ti-2, ti-5)
reparandum(tita, ti-2)
flat:reparandum(ti-10, ti-13)
reparandum(I, ti-10)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:35 CEST -->
