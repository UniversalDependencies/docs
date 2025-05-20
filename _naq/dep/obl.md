---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or other adverb. In most cases, the oblique nominal is followed by a [postposition](naq-pos/ADP).

~~~ sdparse 
Petrub ge oms ǃnâ go ǂgâ . \n Petru DECL house in RPST enter .
obl(ǂgâ, oms)
case(oms, ǃnâ)
obl(enter, house)
case(house, in)
~~~

The oblique nominal representing the agent of a passive verb is noted with the subtype [obl:agent]().

~~~ sdparse
Petrub ge Marias xa ge mîǁamhe . \n Petru DECL Maria by PST be_offended .
nsubj:pass(mîǁamhe, Petrub)
obl:agend(mîǁamhe, Marias)
case(Marias, xa)
nsubj:pass(be_offended, Petru)
obl:agent(be_offended, Maria)
case(Maria, by)
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:15:56 CEST -->
