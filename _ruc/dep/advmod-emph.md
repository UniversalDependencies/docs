---
layout: relation
title: 'advmod:emph'
shortdef: 'emphasizing word, intensifier'
udver: '2'
---

In Ruuli, the `advmod:emph` relation is used for focus clitics *=mbe*, *=na*/*na=* (tagged [PART]() with [InfStruct]()=`Foc`), and the topic particle *=te* (tagged [PART]() with [InfStruct]()=`Top`).

These clitics emphasize the constituent to which they attach. Accordingly, they depend on the head of that constituent. An exception arises when an information structure clitic attaches directly to a conjunction; in such cases, it instead depends on the root of the clause.

* *=mbe*, as in *Okwo<b>mbe</b> notambula nolya* "There you would walk and eat," where *=mbe* focuses *okwo* "there".
* *=na* or *na=*, as in *Njee<b>na</b> neelumira eyo* "I also cultivate for myself there," where *=na* has the scope over *nje* "I".
* *=te*, as in *Enkulaakulana<b>te</b> netabbaawo* "There is no development there," where *=te* has the scope over *enkulaakulana* "development".
* *=te* following a conjunction, as in *Ate<b>te</b> leka nkukobere…* "And let me tell you…", where *=te* is a dependent of the clause head *leka* "let".

~~~ sdparse
Okwo mbe notambula nolya . \n There FOC you_walk you_eat .
advmod:emph(Okwo, mbe)
advmod:emph(There, FOC)
~~~

~~~ sdparse
Njee na neelumira eyo . \n I ADD.FOC cultivate_for_myself there .
advmod:emph(Nje, na)
advmod:emph(I, ADD.FOC)
~~~

~~~ sdparse
Enkulaakulana te netabbaawo . \n Development TOP is_not there .
advmod:emph(Enkulaakulana, te)
advmod:emph(Development, FOC)
~~~

~~~ sdparse
Ate te leka nkukobere … \n And TOP let I_tell_you …
advmod:emph(leka, te)
advmod:emph(let, FOC)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:11:39 CEST -->
