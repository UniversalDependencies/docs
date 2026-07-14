---
layout: relation
title: 'compound:lvc'
shortdef: '<shortdef>'
udver: '2'
---

Light-verb constructions are prevalent in New Persian and they appear in Middle Persian texts as well. In a number of cases, the construction is ambiguous. In *passox kirdan* 'to make the answer', the noun can be taken as object and the complement clause as an attributive clause of that object. However, as *passox kirdan* appears like a speech verb, the analysis as a light-verb construction is preferred.

- "(One) should not be ashamed of these two things: one, of illnes, and second, of a poor relative."
~~~ sdparse
az ēn dō tis šarm nē abāyēd kirdan ēk az wēmārīh ud dudīgar az xwēšāwand ī driyōš \n from this two thing shame not must do one from illnes and second from relative EZ poor
compound:lvc(kirdan, šarm)
advmod(abāyēd, nē)
xcomp(abāyēd, kirdan)
~~~

- "(One) should spend the profit on good deeds!"
~~~ sdparse
bar pad kirbag uzēnag kirdan \n profit at good_deed expense make.NEC
compound:lvc(kirdan, uzēnag)
obj(kirdan, bar)
~~~

- preferred analysis: "The spirit of wisdom replied that wisdom which (is) not accompanied by goodness cannot be considered as wisdom."
~~~ sdparse
mēnōy ī xrad passox kird kū xrad kē =š wehīh nē abāg pad xrad nē dārišn \n spirit EZ wisdom reply made that wisdom REL it goodness not with as wisdom not consider.NEC
compound:lvc(kird, passox)
mark(dārišn, kū)
ccomp(kird, dārišn)
~~~
- dispreferred analysis: "The spirit of wisdom gave the answer that wisdom which (is) not accompanied by goodness cannot be considered as wisdom."
~~~ sdparse
mēnōy ī xrad passox kird kū xrad kē =š wehīh nē abāg pad xrad nē dārišn \n spirit EZ wisdom reply made that wisdom REL it goodness not with as wisdom not consider.NEC
obj(kird, passox)
mark(dārišn, kū)
acl(passox, dārišn)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:51 CEST -->
