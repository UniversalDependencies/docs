---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

The `mark` relation is used for words marking a clause as subordinate to another clause. This typically applies to **subordinating conjunctions** that introduce subordinate clauses of various kinds. The head of the relation is the head of the subordinate clause, and the dependent is the subordinating conjunction. 

~~~ sdparse
Ko si enkrat na vrhu , se je težko vrniti . \n When you-are once at the-top , it is hard to-go-back .
advcl(težko,si)
mark(si,Ko)
advcl(hard,you-are)
mark(you-are,When)
~~~
~~~ sdparse
Honorar , ki ga bo prejela , naj bi imel sedem številk . \n The-fee , that it she-will receive , is supposed-to have seven figures .
acl(Honorar,prejela)
mark(prejela,ki)
acl(The-fee,receive)
mark(receive,that)
~~~
~~~ sdparse
Razmislite , ali je ta beseda ustrezna za naslov romana .  \n Consider , if is this word appropriate for title of-novel .
ccomp(Razmislite,ustrezna)
mark(ustrezna,ali)
ccomp(Consider,appropriate)
mark(appropriate,if)
~~~

When the role of the subordinating conjunction is performed by a fixed phrase (fixed), the `mark` relation takes the first word in the string as its dependent (the head of the fixed phrase). 
~~~ sdparse
Tako nam ni preostalo drugega , kot da smo pustili nepopito pijačo in odšli . \n Thus to-us not-aux-PAST remained anything-else , other than aux-PAST we-left undrunk drink and we-left .
advcl(preostalo,pustili)
mark(pustili,kot)
fixed(kot,da)
advcl(remained,we-left-26)
mark(we-left-26,other)
fixed(other,than)
~~~
