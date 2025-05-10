---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun is a nominal immediately following the first noun that serves to define, modify, name, or describe that noun. It includes parenthesized examples, as well as defining abbreviations in one of these structures.

~~~ sdparse
Abel-a , Soviets di ǃkhē-aob-a , ǂnoaba \n Abel-OBL , USSR POSS spy-OBL , defend
appos(Abel-a, ǃkhē-aob-a)
appos(Abel-OBL, spy-OBL)
~~~

~~~ sdparse
Abel ( Soviets di ǃkhē-aob ) \n Abel ( USSR POSS spy )
appos(Abel-1, ǃkhē-aob)
appos(Abel-8, spy)
~~~

~~~ sdparse
Soviet Union ( USSR )
appos(Union, USSR)
~~~

`appos` is intended to be used between two nominals. In general, modulo punctuation, the two halves of an apposition can be switched. For example, you could also say _Soviets di ǃkhē-aoba, Abela, ǂnoaba_ "defending the Soviet spy, Abel".

A special case of apposition in Khoekhoe is possession. In this case, instead of the regular **possessor _di_ possessed**, the structure is **possessed possessor _di_ person-gender-number marker of possessed**. The duplication of the possessed person-gender-number marker is analysed as an apposition of the possessed:

~~~ sdparse
ǁgâus ôaǃnâs di s \n bureau.3F.SG investigation 's 3F.SG
appos(ǁgâus, s)
nmod:poss(s, ôaǃnâs)
case(ôaǃnâs, di)
appos(bureau.3F.SG, 3F.SG)
nmod:poss(3F.SG, investigation)
case(investigation, 's)
~~~

The same analysis is used for the appositive possession with personal pronoun: 

~~~ sdparse
khoegu ti gu \n person.3M.PL my 3M.PL
appos(khoegu, gu)
nmod:poss(ti, gu)
appos(person.3M.PL, 3M.PL)
nmod:poss(3M.PL, my)
~~~

See [universal/appos](u-dep/appos) for more details on various apposition related issues.
<!-- Interlanguage links updated So 10. května 2025, 18:14:59 CEST -->
