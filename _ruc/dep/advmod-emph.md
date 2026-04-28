---
layout: relation
title: 'advmod:emph'
shortdef: 'emphasizing word, intensifier'
udver: '2'
---

In Ruuli, the `advmod:emph` relation is used for focus clitics *=mbe*, *=na* (or *na=*), and *=te* (tagged [PART]() with [InfStruct]()=`Foc`).

These particles emphasize the constituent to which they attach. Accordingly, they depend on the head of that constituent. An exception arises when a focus clitic attaches directly to a conjunction; in such cases, it instead depends on the root of the clause.

* *=mbe*, as in *Okwo<b>mbe</b> notambula nolya* "There you would walk and eat," where *=mbe* focuses *okwo* "there".
* *=na* or *na=*, as in *Njee<b>na</b> neelumira eyo* "I also cultivate for myself there," where *=na* focuses *nje* "I".
* *=te*, as in *Enkulaakulana<b>te</b> netabbaawo* "There is no development there," where *=te* focuses *enkulaakulana* "development".
* *=te* following a conjunction, as in *Ate<b>te</b> leka nkukobere...* "And let me tell you...", where *=te* depends on the clause head *leka* "let" as its governor.

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
Enkulaakulana te netabbaawo . \n Development FOC is_not there .
advmod:emph(Enkulaakulana, te)
advmod:emph(Development, FOC)
~~~

~~~ sdparse
Ate te leka nkukobere ... \n And FOC let I_tell_you ...
advmod:emph(leka, te)
advmod:emph(let, FOC)
~~~