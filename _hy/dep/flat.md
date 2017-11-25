---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

`flat` is one of the relations for compounding in UD.
In Armenian it is used to join the first name of a person with the patronymic and the last name.

The leftmost name is always the head and the other name(s) are attached to it.

The relation is not used to attach adjectives to nouns within multi-word names of places, organizations etc (e.g. _Երևանի պետական համալսարան_).

~~~ sdparse
Նախագահ Լևոն Տեր-Պետրոսյանը երեկ այցելել է Երևանի պետական համալսարան . \n President Levon Ter-Petrosyan yesterday visited Yerevan State University .
flat(Լևոն, Պետրոսյան)
flat(Levon, Petrosyan)
det(Պետրոսյան, Տեր)
det(Petrosyan, Ter)
nmod(Լևոն, Նախագահ)
nmod(Levon, President)
amod(համալսարան, պետական)
amod(University, State)
nmod(Համալսարան, Երևանի)
nmod(University, Yerevan)
~~~

~~~ sdparse
Խոսրով Գ Կոտակ \n Khosrov III the Small
flat(Խոսրով, Գ)
flat(Գ, Կոտակ)
flat(Khosrov, III)
flat(III, Small)
~~~

~~~ sdparse
Նյու Յորք \n New York
flat(Նյու, Յորք)
flat(New, York)
~~~
