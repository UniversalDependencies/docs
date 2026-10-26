---
layout: base
title:  'Statistics of parataxis in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `parataxis`

This relation is universal.

27 nodes (2%) are attached to their parents as `parataxis`.

27 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 24.8888888888889.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (18; 67% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (3; 11% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 parataxis	color:blue
1	Եւ	եւ	CCONJ	_	_	9	cc	_	_
2	թէ	թէ	SCONJ	_	_	6	mark	_	_
3	յ	ի	ADP	_	AdpType=Prep	5	case	_	_
4	ոչ	ոչ	PART	_	Polarity=Neg	5	advmod:emph	_	_
5	կամայ	կամ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing|Style=Rare	6	obl	_	_
6	լինայ	լինալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	9	advcl	_	SpaceAfter=No
7	՝	՝	PUNCT	_	_	9	punct	_	_
8	հնար	հնար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	nsubj	_	_
9	չկայ	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	14	punct	_	_
11	զ	զ	ADP	_	AdpType=Prep	12	case	_	_
12	կէս	կէս	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Sing	14	obj	_	_
13	գնոցն	գին	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	12	nmod:poss	_	_
14	տայ	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	9	parataxis	_	_
15	ազգին	ազգ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	14	iobj	_	SpaceAfter=No
16	՝	՝	PUNCT	_	_	18	punct	_	_
17	եւ	եւ	CCONJ	_	_	18	cc	_	_
18	տուգանք	տուգանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	14	conj	_	SpaceAfter=No
19	։	։	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 21 parataxis	color:blue
1	Եւ	եւ	CCONJ	_	_	13	cc	_	_
2	թէ	թէ	SCONJ	_	_	6	mark	_	_
3	յ	ի	ADP	_	AdpType=Prep	5	case	_	_
4	ոչ	ոչ	PART	_	Polarity=Neg	5	advmod:emph	_	_
5	կամայ	կամ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing|Style=Rare	6	obl	_	_
6	լինի	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	13	advcl	_	_
7	սպաննութիւնն	սպաննութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	SpaceAfter=No
8	՝	՝	PUNCT	_	_	13	punct	_	_
9	նա	նա	SCONJ	_	_	13	mark	_	_
10	կէսն	կէս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	13	nsubj	_	_
11	այսոր	այս	PRON	_	Case=Dat|Deixis=Prox|Number=Sing|PronType=Dem	10	nmod:poss	_	_
12	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	գին	գին	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
14	որ	որ	SCONJ	_	_	17	mark	_	_
15	ի	ի	ADP	_	AdpType=Prep	16	case	_	_
16	դարպասն	դարպաս	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	17	obl	_	_
17	տան	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl	_	SpaceAfter=No
18	.	.	PUNCT	_	_	21	punct	_	_
19	եւ	եւ	CCONJ	_	_	21	cc	_	_
20	դարպասն	դարպաս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	21	nsubj	_	_
21	կիսէ	կիսել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	13	parataxis	_	_
22	ընդ	ընդ	ADP	_	AdpType=Prep	25	case	_	_
23	սպանած	սպաննել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|Typo=Yes|VerbForm=Part|Voice=Act	24	acl	_	_
24	թուրքին	թուրք	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	25	nmod:poss	_	_
25	ազգն	ազգ	NOUN	_	Animacy=Hum|Case=Acc|Definite=Def|Number=Sing	21	obl	_	SpaceAfter=No
26	։	։	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 34 parataxis	color:blue
1	Եւ	եւ	CCONJ	_	_	7	cc	_	_
2	թէ	թէ	SCONJ	_	_	5	mark	_	_
3	այլազգի	այլազգի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	_
4	քրիստոնէ	քրիստոնէ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	obj	_	_
5	սպաննէ	սպաննել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No
6	՝	՝	PUNCT	_	_	7	punct	_	_
7	մեռնի	մեռնիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	18	punct	_	_
9	եւ	եւ	CCONJ	_	_	18	cc	_	_
10	թէ	թէ	SCONJ	_	_	14	mark	_	_
11	յ	ի	ADP	_	AdpType=Prep	13	case	_	_
12	ոչ	ոչ	PART	_	Polarity=Neg	13	advmod:emph	_	_
13	կամայ	կամ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing|Style=Rare	14	obl	_	_
14	սպաննէ	սպաննել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	18	advcl	_	SpaceAfter=No
15	՝	՝	PUNCT	_	_	18	punct	_	_
16	երկու	երկու	NUM	_	NumForm=Word|NumType=Card	17	nummod	_	_
17	ձեռսն	ձեռք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Plur	18	nsubj:pass	_	_
18	կտրվի	կտրել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	7	parataxis	_	_
19	եւ	եւ	CCONJ	_	_	23	cc	_	_
20	զ	զ	ADP	_	AdpType=Prep	22	case	_	_
21	արեան	արիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	22	nmod:poss	_	_
22	գինն	գին	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	23	obj	_	_
23	վճարէ	վճարել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	18	conj	_	SpaceAfter=No
24	.	.	PUNCT	_	_	34	punct	_	_
25	եւ	եւ	CCONJ	_	_	34	cc	_	_
26	ընդհանուր	ընդհանուր	ADJ	_	_	27	amod	_	_
27	գին	գին	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	34	nsubj	_	_
28	արեան	արիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	27	nmod:poss	_	_
29	քրիստոնէին	քրիստոնէ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	28	nmod:poss	_	SpaceAfter=No
30	.	.	PUNCT	_	_	31	punct	_	_
31	ԳՃ	Գճ	NUM	_	NumForm=Armenian|NumType=Card	33	nummod	_	SpaceAfter=No
32	.	.	PUNCT	_	_	31	punct	_	_
33	դեկան	դեկան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	34	nmod	_	_
34	պերպեռատ	պերպեռատ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	parataxis	_	_
35	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	34	cop	_	SpaceAfter=No
36	,	,	PUNCT	_	_	38	punct	_	_
37	եւ	եւ	CCONJ	_	_	38	cc	_	_
38	այլ	այլ	ADV	_	_	34	conj	_	_
39	ինչ	ինչ	PRON	_	ExtPos=PRON|PronType=Rel	42	xcomp	_	_
40	որ	որ	PART	_	_	39	fixed	_	_
41	մարդն	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	42	nsubj	_	_
42	լինի	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	38	orphan	_	SpaceAfter=No
43	։	։	PUNCT	_	_	7	punct	_	_

~~~


