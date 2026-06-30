---
layout: relation
title:  'punct'
shortdef : 'punctuation'
udver: '2'
---

This element is used for any piece of punctuation in a clause. Tokens with the relation `punct` always attach to content words (except in cases of ellipsis) and can never have dependents.

The last punctuation mark of the sentence (usually a full stop or interrogative/exclamation mark) depends on the root: 
~~~ sdparse
Tu puikiai padirbėjai ! \n You worked excellently !
punct(padirbėjai, !-4)
punct(worked, !-9)
~~~

A punctuation mark separating coordinated units is attached to the following conjunct:
~~~ sdparse
Mes pirkome obuolių , kriaušių ir bananų . \n We bought apples , pears and bananas .
punct(kriaušių, ,-4)
punct(pears, ,-13)
~~~

Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity:
~~~ sdparse
Suknelė , kurią pirkau prieš penkerius metus , vis dar madinga . \n The dress , which I bought five years ago , is still fashionable .
punct(pirkau, ,-2)
punct(pirkau, ,-8)
punct(bought, ,-16)
punct(bought, ,-23)
~~~

A punctuation mark preceding or following a dependent unit is attached to that unit:
~~~ sdparse
Jis grįžo vėlai , todėl nepaskambino . \n He came-back late , therefore he-did-not-call .
punct(nepaskambino, ,-4)
punct(he-did-not-call, ,-12)
~~~

A punctuation mark that sets off a vocative is attached to the vocative form, unless the vocative is followed by a subordinate clause of a complex sentence. In that case, the second comma is attached to the predicate of the subordinate clause.
~~~ sdparse
Ateik , Jonai . \n Come , Jonas .
punct(Jonai, ,-2)
punct(Jonas, ,-7)
~~~

Paired punctuation marks (e.g. quotes and brackets, sometimes also dashes, commas and other) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.
~~~ sdparse
Svarbus pastatas – Valdovų rūmai – jau pastatytas . \n An-important building – The-Palace of-the-Grand Dukes – has-been-built already .
punct(rūmai, –-3)
punct(rūmai, –-6)
punct(The-Palace, –-13)
punct(The-Palace, –-17)
~~~

Abbreviations are joined with the punctuation mark that immediately follows them.
~~~ sdparse
Šv . Luko koplyčia . \n St . Luke’s Chapel .
punct(Luko, Šv)
punct(Luke’s, St)
~~~

In the quoted direct speech, the punctuation mark following the quotation is attached to the root. Punctuation marks that indicate the quotation (quotation marks) are attached to the predicate of the quotation.
~~~ sdparse
„ Jis tuoj ateis “ , – pasakė kolegė . \n „ He will-come soon “ , – said the-colleague .
punct(pasakė, ,-6)
punct(pasakė, –-7)
punct(ateis, „-1)
punct(ateis, “-5)
punct(said, ,-17)
punct(said, –-18)
punct(will-come, „-12)
punct(will-come, “-16)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:43 CEST -->
