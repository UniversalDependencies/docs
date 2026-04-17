---
layout: relation
title: 'reparandum'
shortdef: 'overridden disfluency'
udver: '2'
---

`Reparandum` tag is used to indicate disfluencies overridden in a speech repair. For example:

1. the speaker makes an error and immediately self-corrects, e.g.,

~~~ sdparse
Aš esu mačiusi tokių mokyt- dėstytojų. \n I have-seen such teach- lecturers.
reparandum(dėstytojų, mokyt-)
reparandum(lecturers, teach-)
~~~

2. stuttering / unintentional repetition, e.g.,

~~~ sdparse
Ten buvo kažkoks past- pastatas. \n There was some build- building.
reparandum(pastatas, past-)
reparandum(building, build-)
~~~

3. the speaker repeats the same word several times, e.g.,

~~~ sdparse
Aš kalbėjau ir1 ir2 ir3 mane pertraukė. \n I was-speaking and1 and2 and3 I was-interrupted.
reparandum(ir 3 , ir1, ir2 )
reparandum(and 3 , and 1 and 2 )
~~~

The correct word is the head. The dependency points from the correct word (the one corrected to) to the erroneous word. The erroneous word may be either full or partial.
