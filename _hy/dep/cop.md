---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the nominal predicate _(ստորոգելիական վերադիր)_ and
the copular verb _<b>եմ</b>_ or _<b>լինեմ</b>_ “to be”.
The verbs _դառնալ, թվալ, երևալ, ձևանալ, մնալ, հաշվել_ etc. “to become”, despite being counted among copular verbs by some authors,
is not analyzed as `cop`.

We normally take a copula as a dependent of its complement (the nominal predicate).
The nominal predicate is usually a [noun](NOUN), an [adjective](ADJ), a [pronoun](PRON)
or a <a href="../feat/VerbForm.html#participle">participle</a>.

~~~ sdparse
Արամը ազնիվ մարդ է ։ \n Aram is honest man .
cop(մարդ, է)
cop(man, is)
~~~

~~~ sdparse
Արամը ազնիվ է ։ \n Aram is honest .
cop(ազնիվ, է)
cop(honest, is)
~~~

~~~ sdparse
Արդեն ուշ էր ։ \n It was late .
cop(ուշ, էր)
cop(late, was)
~~~

Note that subject participle and infinitive may be also used as nominal predicate with copula.

~~~ sdparse
Նա հարբեցող է ։ \n He is a-drunkard .
cop(հարբեցող, է)
cop(a-drunkard, is)
~~~

The nominal predicate may also be expressed using a prepositional phrase.

~~~ sdparse
Նվերը տուփի մեջ է ։ \n Present is in the-box .
cop(տուփի, է)
cop(the-box, is)
case(տուփի, մեջ)
case(the-box, in)
~~~

Phrases expressing the state of the subject are clear predicates, e.g. _Գյուտը խառնակ մտքերի մեջ էր_ “Gyut was in strange thoughts”.
Under the v2 guidelines, prepositional phrases expressing locations are also considered predicates, to increase parallelism across languages.
Thus the following sentences receive parallel analyses:

- _Հյուղակը հեղեղատի մյուս ափին էր։_ “.”
- _Նույն տագնապալի վիճակում էր Գոհարը։_ “.”
- _Նորից իմ սենյակում էր։_ “.”

- _Lenka je skvělá._ “Lenka is brilliant.”
- _Lenka je v kondici._ “Lenka is in shape.”
- _Lenka je v kuchyni._ “Lenka is in the kitchen.”

In contrast, the following two are no longer parallel:

- _Նորից իմ սենյակում էր։_ “.”
- _Նորից մնաց իմ սենյակում։_ “.”

~~~ sdparse
Հյուղակը հեղեղատի մյուս ափին էր ։ \n Lenka is in shape .
cop(ափին, էր)
cop()
amod(ափին, մյուս)
amod()
nmod:poss(ափին, հեղեղատի)
nmod:poss()
nsubj(ափին, Հյուղակը)
nsubj()
~~~

~~~ sdparse
Նույն տագնապալի վիճակում էր Գոհարը ։ \n Lenka is in shape .
cop(վիճակում, էր)
cop()
amod(վիճակում, տագնապալի)
amod()
advmod(տագնապալի, Նույն)
advmod()
nsubj(վիճակում, Գոհարը)
nsubj()
~~~

~~~ sdparse
Նորից իմ սենյակում էր ։ \n Lenka is in shape .
cop(սենյակում, էր)
cop()
advmod(սենյակում, Նորից)
advmod()
nmod:poss(սենյակում, իմ)
nmod:poss()
~~~
