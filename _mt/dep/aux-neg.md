---
layout: relation
title: 'aux:neg'
shortdef: 'negative auxiliary'
udver: '2'
---

This is a subtype of [aux](), used for the negative auxiliaries and particles _оз, не, абу_.

The negative auxiliary, when attached to a predicate,
typically carries some of the tense/aspect/modality suffixes as well as person/number agreement suffixes.

Although they do not function as an auxiliary when attached to non-predicate words or phrases,
we use `aux:neg` for all forms and uses of the negative auxiliary paradigm and particles.

~~~ sdparse
— Мый татӧн оз гленитчы ? \n – What don't you like _about this_ ?
aux:neg(синтть, апак)
~~~

~~~ sdparse
Ме татӧн не ӧтнам . \n I am not here alone .
aux:neg(ӧтнам, не)
~~~

~~~ sdparse
Висьтавны этӧ абу кыв . \n There is no word to say that.
aux:neg(Висьтавны, абу)
~~~

~~~ sdparse
Кузь ойӧн абу он . \n There is no sleep in the long night .
aux:neg(стя, ашезь)
~~~

~~~ sdparse
Тят учсе тя шрать ваксса . \n — Don't wait next to this table !
aux:neg(учсе, Тят)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:52 CEST 2021 -->
