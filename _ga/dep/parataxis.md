---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---


The `parataxis` relation is a relation between the main verb of a clause and other sentential elements, such as a sentential parenthetical, a clause after a ":" or a ";", or two sentences placed side by side without any explicit coordination or subordination. More information can be found on the universal dependency page ([u-dep/parataxis]())

### Example

_Fuaireamar é seo ; <b>féach</b> an é cóta do mhic é nó nach é?_ `We found this ; <b>look</b> is it your son's coat or not?'

~~~ sdparse
Fuaireamar é seo ; féach an é cóta do mhic é nó nach é? \n Found_we it this ; look is it coat your son it or not it?
parataxis(Fuaireamar,féach)
~~~


_An bhfuil cead agam mo chéad cheist a chur: <b>Cé</b> hiad féin agus céard a tharlós dóibh?_ `Can I ask my first question ; <b>who</b> are they and what will happen to them?'

~~~ sdparse
An bhfuil cead agam mo chéad cheist a chur : Cé hiad féin agus céard a tharlós dóibh ? \n The_is permission at_me my first question to put : Who they themselves and what that will_happen to_them ?
parataxis(bhfuil, Cé)
~~~
<!-- Interlanguage links updated Út zář 29 20:32:01 CEST 2020 -->
