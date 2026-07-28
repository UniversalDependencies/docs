---
layout: base
title:  'Statistics of obl in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `obl`

This relation is universal.

60 nodes (5%) are attached to their parents as `obl`.

34 instances of `obl` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.55.

The following 7 pairs of parts of speech are connected with `obl`: <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (48; 80% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (4; 7% instances), <tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="axm_armtdp-pos-ADP.html">ADP</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="axm_armtdp-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="axm_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl	color:blue
1	Եւ	եւ	CCONJ	_	_	12	cc	_	_
2	որ	որ	SCONJ	_	_	5	mark	_	_
3	գաղտուկ	գաղտուկ	ADJ	_	Degree=Pos	4	amod	_	_
4	մեղանք	մեղանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Ptan|Style=Arch	5	xcomp	_	_
5	լինի	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	12	advcl	_	_
6	յ	ի	ADP	_	AdpType=Prep	7	case	_	_
7	երկիրն	յերկիր	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	5	obl	_	_
8	՝	՝	PUNCT	_	_	12	punct	_	_
9	զ	զ	ADP	_	AdpType=Prep	10	case	_	_
10	այն	այն	PRON	_	Case=Acc|Deixis=Remt|Number=Sing|PronType=Dem	12	obj	_	_
11	խոստովանհայրքն	խոստովանհայր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur|Style=Var	12	nsubj	_	_
12	ուղղեն	ուղղել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
13	։	։	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 obl	color:blue
1	Եւ	եւ	CCONJ	_	_	5	cc	_	_
2	նշան	նշան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	_
3	իւր	իւր	DET	_	Case=Nom|Number=Sing|Person=3|PronType=Poss|Style=Arch	4	det:poss	_	_
4	խայթածին	խայթած	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	2	nmod:poss	_	_
5	այս	այս	PRON	_	Deixis=Prox|PronType=Dem	0	root	_	_
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No
7	.	.	PUNCT	_	_	8	punct	_	_
8	ուռենայ	ուռենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	5	parataxis	_	_
9	խայթածն	խայթած	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	8	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	եւ	եւ	CCONJ	_	_	12	cc	_	_
12	խաղաւարտէ	խաղաւարտել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	8	conj	_	_
13	աստ	աստ	ADV	_	Deixis=Prox|PronType=Dem	12	advmod	_	_
14	եւ	եւ	CCONJ	_	_	15	cc	_	_
15	անդ	անդ	ADV	_	Deixis=Remt|PronType=Dem	13	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	եւ	եւ	CCONJ	_	_	18	cc	_	_
18	ելնէ	ելնել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	12	conj	_	_
19	յ	ի	ADP	_	AdpType=Prep	20	case	_	_
20	իւրմէն	ինք	PRON	_	Case=Abl|Number=Sing|Person=3|PronType=Prs|Style=Arch	18	obl	_	_
21	գիջութիւն	գիջութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	18	nsubj	_	_
22	եւ	եւ	CCONJ	_	_	23	cc	_	_
23	յարիւն	արիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll|Typo=Yes	21	conj	_	_
24	ջուրի	ջուր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	23	nmod	_	_
25	նման	նման	ADP	_	AdpType=Post	24	case	_	SpaceAfter=No
26	,	,	PUNCT	_	_	29	punct	_	_
27	եւ	եւ	CCONJ	_	_	29	cc	_	_
28	ստամոքն	ստամոք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	29	nsubj	_	_
29	ցաւէ	ցաւել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	12	conj	_	SpaceAfter=No
30	:	:	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 32 obl	color:blue
1	Եթէ	եթէ	SCONJ	_	_	4	mark	_	_
2	իժ	իժ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	nmod	_	_
3	օձն	օձ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	_
4	խայթէ	խայթել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	_
5	զ	զ	ADP	_	AdpType=Prep	6	case	_	_
6	մարդն	մարդ	NOUN	_	Animacy=Hum|Case=Acc|Definite=Def|Number=Sing	4	obj	_	_
7	՝	՝	PUNCT	_	_	9	punct	_	_
8	նշանն	նշան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	9	nsubj	_	_
9	այս	այս	PRON	_	Deixis=Prox|PronType=Dem	0	root	_	_
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	որ	որ	SCONJ	_	_	15	mark	_	_
13	լինի	լինիլ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	15	cop	_	_
14	ցաւն	ցաւ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	15	nsubj	_	_
15	շատ	շատ	ADV	_	_	9	acl	_	_
16	ի	ի	ADP	_	AdpType=Prep	18	case	_	_
17	խայթած	խայթել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	18	acl	_	_
18	տեղն	տեղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	15	obl	_	_
19	եւ	եւ	CCONJ	_	_	20	cc	_	_
20	լնու	լնուլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	15	conj	_	_
21	զ	զ	ADP	_	AdpType=Prep	22	case	_	_
22	մարմինն	մարմին	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	20	obj	_	_
23	ցաւով	ցաւ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	20	obl	_	SpaceAfter=No
24	,	,	PUNCT	_	_	28	punct	_	_
25	զի	զի	SCONJ	_	_	28	mark	_	_
26	իւր	իւր	DET	_	Case=Nom|Number=Sing|Person=3|PronType=Poss|Style=Arch	27	det:poss	_	_
27	թոյնքն	թոյն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	28	nsubj	_	_
28	տաք	տաք	ADJ	_	Degree=Pos	15	advcl	_	_
29	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	28	cop	_	_
30	եւ	եւ	CCONJ	_	_	31	cc	_	_
31	չոր	չոր	ADJ	_	Degree=Pos	28	conj	_	_
32	հրոյ	հուր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	28	obl	_	_
33	նման	նման	ADP	_	AdpType=Post	32	case	_	SpaceAfter=No
34	։	։	PUNCT	_	_	9	punct	_	_

~~~


