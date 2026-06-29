---
layout: relation
title: 'reparandum'
shortdef: 'overridden disfluency'
udver: '2'
---

`Reparandum` tag is used to indicate disfluencies overridden in a speech repair. For example:

1. the speaker makes an error and immediately self-corrects, e.g.,

~~~ sdparse
Aš esu mačiusi tokių mokyt- dėstytojų . \n I have-seen such teach- lecturers .
reparandum(dėstytojų, mokyt-)
reparandum(lecturers, teach-)
~~~

2. stuttering / unintentional repetition, e.g.,

~~~ sdparse
Ten buvo kažkoks past- pastatas . \n There was some build- building .
reparandum(pastatas, past-)
reparandum(building, build-)
~~~

3. the speaker repeats the same word several times, e.g.,

~~~ sdparse
Aš kalbėjau ir ir ir mane pertraukė . \n I was-speaking and and and I was-interrupted .
conj(pertraukė, ir-5)
reparandum(ir-5, ir-3)
reparandum(ir-5, ir-4)
conj(was-interrupted, and-14)
reparandum(and-14, and-12)
reparandum(and-14, and-13)
~~~

The correct word is the head. The dependency points from the correct word (the one corrected to) to the erroneous word. The erroneous word may be either full or partial.
<!-- Interlanguage links updated Po 29. června 2026, 18:13:13 CEST -->
