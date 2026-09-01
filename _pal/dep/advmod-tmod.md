---
layout: relation
title: 'advmod:tmod'
shortdef: 'temporal adverbial'
udver: '2'
---

Adverbial modifiers can be specified as temporal.

The word _pas_ "after" can both be spatial (following), temporal (then, afterwards), and logical (then, thus). In case of doubt, it is annotated without modification.<br>If _pas_ modifies a [case]() relation, it is linked to the head of the case relation.

- "Then (he) created Ardwahišt and then Šahrewar, then Spandārmad and then Hordād (and) Amurdād."
~~~ sdparse
pas ardwahišt ud pas šahrewar pas spandārmad ud pas hordād amurdād brēhēnīd \n after Ardwahišt and after Šahrewar after Spandārmad and after Hordād Amurdād created
advmod:tmod(ardwahišt, pas)
advmod:tmod(šahrewar, pas-4)
advmod:tmod(spandārmad, pas-6)
advmod:tmod(hordād, pas-9)
~~~

- "And after the judgement, (the soul is) in its own joy."
~~~ sdparse
ud pas az āmār pad ān ī xwēš urwāhm \n and after from consideration in that EZ own joy
advmod:tmod(āmār, pas)
case(āmār, az)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:38 CEST -->
