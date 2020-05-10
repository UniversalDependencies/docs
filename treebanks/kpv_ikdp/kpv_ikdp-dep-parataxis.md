---
layout: base
title:  'Statistics of parataxis in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `parataxis`

This relation is universal.

6 nodes (0%) are attached to their parents as `parataxis`.

5 instances of `parataxis` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.33333333333333.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (4; 67% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis	color:blue
1	Сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
2	бӧрын	бӧр	ADP	Po	Case=Ine|Number=Sing	1	case	_	_
3	устроитчи	устроитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	Lang=Mixed
4	рӧбитны	рӧбитны	VERB	V	VerbForm=Inf	3	xcomp	_	Lang=Mixed|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	локті	локны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	3	parataxis	_	_
7	ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	8	nmod	_	_
8	сиктэ	сикт	NOUN	N	Case=Ill|Number=Sing	6	obl	_	_
9	да	да	PART	Pcle	_	8	advmod	_	Lang=Mixed|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 parataxis	color:blue
1	Маме	мам	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	Lang=Mixed|Note=CheckAll
2	вед	вед	PART	Pcle	_	1	advmod:mmod	_	_
3	сэчем	сэчем	ADV	Adv	_	6	advmod	_	_
4	же	жӧ	PART	Pcle	_	3	advmod	_	Lang=Mixed
5	гӧг	гӧг	NOUN	N	Case=Nom|Number=Sing	6	compound	_	_
6	баб	баб	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
7	вӧліс	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	SpaceAfter=No
8	:	:	PUNCT	CLB	_	6	punct	_	_
9	сыа	сыа	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
10	зэй	зэй	ADV	Adv	_	12	advmod:deg	_	_
11	уна	уна	ADV	Adv	_	12	advmod	_	_
12	мыйке	мыйке	PRON	Pron	Case=Nom|PronType=Ind	6	parataxis	_	SpaceAfter=No
13	,	,	PUNCT	CLB	_	14	punct	_	_
14	челядь	челядь	NOUN	N	Case=Nom|Number=Sing	15	obj	_	_
15	босьтіс	босьтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	12	conj	_	SpaceAfter=No
16	,	,	PUNCT	CLB	_	15	punct	_	_
17	примитіс	примитны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	15	conj	_	Lang=Mixed|SpaceAfter=No
18	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 parataxis	color:blue
1	Десятой	десятой	NUM	Num	NumType=Card	2	nummod	_	Lang=Rus
2	класс	класс	NOUN	N	Case=Nom|Number=Sing	3	obl	_	Lang=Mixed
3	закончитэм	закончитны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	12	advcl	_	Lang=Mixed
4	бӧрын	бӧр	ADP	Po	Case=Ine|Number=Sing	3	case	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	гожемъяснас	гожем	NOUN	N	Case=Ins|Number=Plur|Number[psor]=Sing|Person[psor]=3	12	obl	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	правда	правда	NOUN	N	Case=Nom|Number=Sing	12	parataxis	_	Lang=Rus|SpaceAfter=No
9	,	,	PUNCT	CLB	_	12	punct	_	_
10	быд	быд	PRON	Pron	PronType=Tot	11	det	_	_
11	гожем	гожем	NOUN	N	Case=Nom|Number=Sing	12	obl	_	_
12	ветлі	ветлыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
13	родительяс	родитель	NOUN	N	Case=Nom|Number=Plur	12	obl	_	Lang=Mixed
14	доре	дор	ADP	Po	Case=Ill	13	case	_	_
15	тундраа	тундра	NOUN	N	Case=Ill|Number=Sing	12	obl	_	Lang=Mixed|SpaceAfter=No
16	,	,	PUNCT	CLB	_	19	punct	_	_
17	десятой	десятой	NUM	Num	NumType=Card	18	nummod	_	Lang=Rus
18	класс	класс	NOUN	N	Case=Nom|Number=Sing	19	nmod	_	Lang=Mixed
19	закончитэм	закончитэм	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	23	advcl	_	Lang=Mixed|Note=Check
20	бӧрын	бӧр	ADP	Po	Case=Ine|Number=Sing	19	case	_	_
21	куим	куим	NUM	Num	Case=Nom|Number=Sing|NumType=Card	22	nummod	_	_
22	во	во	NOUN	N	Case=Nom|Number=Sing	23	obl	_	_
23	служиті	служитны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	12	conj	_	Lang=Mixed
24	подводнэй	подводнӧй	ADJ	A	Case=Nom|Number=Sing	25	amod	_	Lang=Mixed
25	лодка	лодка	NOUN	N	Case=Nom|Number=Sing	23	obl	_	Lang=Mixed
26	вылын	вылын	ADP	Po	Case=Ine|Number=Sing	25	case	_	SpaceAfter=No
27	,	,	PUNCT	CLB	_	28	punct	_	_
28	флотын	флот	NOUN	N	Case=Ine|Number=Sing	25	conj	_	Lang=Mixed|SpaceAfter=No
29	.	.	PUNCT	CLB	_	12	punct	_	_

~~~


