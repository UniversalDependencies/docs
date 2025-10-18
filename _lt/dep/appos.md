---
layout: relation
title:  'appos'
shortdef : 'appositional modifier'
udver: '2'
---

An appositional modifier of an NP serves to define, modify, name, or describe that NP. It includes parenthesized examples, as well as defining abbreviations in one of these structures. What is marked as appos is often set off by commas or parentheses.

~~~ sdparse
Atvyko Jonas , mano brolis . \n Arrived John , my bother .
appos(Jonas, brolis)
appos(John, brother)
~~~

~~~ sdparse
Toks vaikas, negavęs norimo daikto (saldainio ar žaislo), ima jo reikalauti. \n Such a-child, not-having-received the-desired item (a-candy or a-toy), starts demanding it.
appos(daikto, saldainio)
appos(item, a-candy)
~~~

Clarifying expressions introduced by emphatic words such as_ ypač (especially), būtent (namely), kaip ir (such as), t. y. (i.e.), toks kaip (like)_, and similar are also marked with appos.

~~~ sdparse
Reikia suplanuoti informavimo priemones, tokias kaip dalyvavimą televizijos laidose. \n It-is-necessary to-plan information measures, such as participation in-television programs.
appos(priemones, dalyvavimą)
appos(measures, participation)
~~~

appos is also used to link key-value pairs in addresses, signatures, etc.

~~~ sdparse
Elektroninis paštas jonas@abc.lt \n Email address jonas@abc.lt
appos(paštas, jonas@abc.lt)
appos(address, jonas@abc.lt)
~~~

appos is used to mark abbreviations.

~~~ sdparse
Vytauto Didžiojo universitetas (VDU). \n Vytautas Magnus University (VMU).
appos(universitetas, VDU)
appos(University, VMU)
~~~
