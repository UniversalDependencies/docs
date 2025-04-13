---
layout: relation
title: 'discourse:filler'
shortdef: 'filler sound in spoken data'
udver: '2'
---

The `discourse:filler` subtype of the [discourse]() relation is used in spoken data for speaker sounds acting as filled pauses to prolong planning time (they correspond to a pause rather than a real word).
The filler is attached to the head of the most relevant clause (usually the root of the sentence), even if this causes non-projectivity. 

~~~ sdparse
tukaj je so stvari eee zelo jasne ne \n here is are things err very clear right
discourse:filler(clear,err)
~~~

~~~ sdparse
eee danes bom predstavil predavanje eee skupaj z očetom \n err today I-will give talk err togeter with father
discourse:filler(predstavil,eee-1)
discourse:filler(predstavil,eee-6)
discourse:filler(give,err-11)
discourse:filler(give,err-16)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:51 CET -->
