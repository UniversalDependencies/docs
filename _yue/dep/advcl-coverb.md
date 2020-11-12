---
layout: relation
title: 'advcl:coverb'
shortdef: 'adverbial coverb phrase'
udver: '2'
---

Coverb phrases in Cantonese are roughly equivalent to prepositional phrases in other languages. They are headed by a coverb followed by an object (analogous to preposition + object) and together introduce an extra argument, such as beneficiary, instrument, comitative, etc. Most of these Cantonese coverbs can take verbal markers (2-4), however, and therefore these phrases are considered clausal adjuncts here (in contrast to Mandarin where they are treated as prepositional phrases).

~~~ conllu
# visual-style 4 2 advcl:coverb	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	我	_	PRON	_	_	4	nsubj	_	1SG
2	幫	_	VERB	_	_	4	advcl:coverb	_	help/for
3	佢	_	PRON	_	_	2	obj	_	3SG
4	做	_	VERB	_	_	0	root	_	do
5	咗	_	AUX	_	_	4	aux	_	PERF
6	功課	_	NOUN	_	_	4	obj	_	homework

1	"I	_	_	_	_	0	_	_	_
2	did	_	_	_	_	0	_	_	_
3	homework	_	_	_	_	0	_	_	_
4	for	_	_	_	_	0	_	_	_
5	her."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 5 2 advcl:coverb	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	佢	_	PRON	_	_	5	nsubj	_	3SG
2	同	_	VERB	_	_	5	advcl:coverb	_	with
3	得	_	AUX	_	_	2	aux	_	can
4	我哋	_	PRON	_	_	2	obj	_	1PL
5	傾偈	_	VERB	_	_	0	root	_	chat

1	"He	_	_	_	_	0	_	_	_
2	can	_	_	_	_	0	_	_	_
3	chat	_	_	_	_	0	_	_	_
4	with	_	_	_	_	0	_	_	_
5	us."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 5 2 advcl:coverb	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	佢	_	PRON	_	_	5	nsubj	_	3SG
2	同	_	VERB	_	_	5	advcl:coverb	_	with
3	晒	_	PART	_	_	2	compound:quant	_	QF
4	我哋	_	PRON	_	_	2	obj	_	1PL
5	傾偈	_	VERB	_	_	0	root	_	chat

1	"He	_	_	_	_	0	_	_	_
2	chat	_	_	_	_	0	_	_	_
3	with	_	_	_	_	0	_	_	_
4	all	_	_	_	_	0	_	_	_
5	of	_	_	_	_	0	_	_	_
6	us."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 6 2 advcl:coverb	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	佢	_	PRON	_	_	6	nsubj	_	3SG
2	同	_	VERB	_	_	6	advcl:coverb	_	with
3	唔	_	ADV	_	_	4	advmod	_	NEG
4	同	_	VERB	_	_	2	conj	_	with
5	我哋	_	PRON	_	_	2	obj	_	1PL
6	傾偈	_	VERB	_	_	0	root	_	chat
7	呀	_	PART	_	_	6	discourse:sp	_	chat

1	"Is	_	_	_	_	0	_	_	_
2	he	_	_	_	_	0	_	_	_
3	going	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	chat	_	_	_	_	0	_	_	_
6	with	_	_	_	_	0	_	_	_
7	us."	_	_	_	_	0	_	_	_

~~~

### References

- Francis, Elaine J. and Stephen Matthews. 2006. 'On Serial Verb Constructions in Cantonese.' In Aikhenvald, Alexandra Y. and R.M.W. Dixon (Eds), Seria Verb Constructions: A Cross-Linguistic Typology, 69-86, Oxford University Press.
- Matthews, Stephen and Virginia Yip. 2011. Cantonese: A Comprehensive Grammar, 2nd ed. Routledge.
<!-- Interlanguage links updated Čt lis 12 09:43:10 CET 2020 -->
