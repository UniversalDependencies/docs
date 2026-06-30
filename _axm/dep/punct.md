---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This relation is used for any punctuation sign in a clause.

~~~ conllu
# visual-style 8 6 punct color:blue
1	Եւ	եւ	CCONJ	_	_	5	cc	_	_
2	ազգ	ազգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	_
3	մի	մի	DET	_	PronType=Art	2	det	_	_
4	այլ	այլ	DET	_	PronType=Ind	2	det	_	_
5	կայ	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	8	nsubj	_	_
8	ասի	ասիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	2	acl:relcl	_	_
9	ատօրօս	ատօրօս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	8	xcomp	_	_
~~~

Tokens with the relation `punct` always attach to content words (except in cases of ellipsis) and can never have dependents.
Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply.
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the following conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

~~~ conllu
# visual-style 15 7 punct color:blue
# visual-style 15 12 punct color:blue
# visual-style 15 19 punct color:blue
1	Եւ	եւ	CCONJ	_	_	15	cc	_	_
2	ի	ի	ADP	_	AdpType=Prep	3	case	_	_
3	կռիւ	կռիւ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Sing	15	obl	_	_
4	ուր	ուր	ADV	_	PronType=Rel	6	advmod	_	_
5	թագաւորն	թագաւոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	_
6	ուրդի	ուրդիլ	VERB	_	Aspect=Prosp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	3	acl:relcl	_	SpaceAfter=No
7	՝	՝	PUNCT	_	_	15	punct	_	_
8	նա	նա	SCONJ	_	_	15	mark	_	_
9	երբ	երբ	ADV	_	PronType=Rel	11	advmod	_	_
10	սուրն	սուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	11	nsubj	_	_
11	վերնա	վերնալ	VERB	_	Aspect=Prosp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	15	advcl	_	SpaceAfter=No
12	՝	՝	PUNCT	_	_	15	punct	_	_
13	նա	նա	SCONJ	_	_	15	mark	_	_
14	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	15	cop	_	_
15	պատեհ	պատեհ	ADJ	_	Degree=Pos	0	root	_	_
16	այլ	այլ	DET	_	PronType=Ind	17	det	_	_
17	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	18	obj	_	_
18	սպաննել	սպաննել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	15	csubj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	15	punct	_	_
 ~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:35:18 CEST -->
