---
layout: base
title:  'Statistics of cc:preconj in UD_North_Sami'
udver: '2'
---

## Treebank Statistics: UD_North_Sami: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="sme-dep-cc.html">cc</a></tt>.

10 nodes (0%) are attached to their parents as `cc:preconj`.

10 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6.

The following 4 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="sme-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme-pos-ADV.html">ADV</a></tt> (7; 70% instances), <tt><a href="sme-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="sme-pos-ADV.html">ADV</a></tt>-<tt><a href="sme-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="sme-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sme-pos-ADV.html">ADV</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Nu	nu	ADV	Adv	_	2	advmod	_	_
2	dahke	dahkat	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	sihke	sihke	ADV	Adv	_	4	cc:preconj	_	_
4	dálonat	dálon	NOUN	N	Case=Nom|Number=Plur	2	nsubj	_	_
5	ja	ja	CCONJ	CC	_	4	cc	_	_
6	badjeolbmot	badjeolmmoš	NOUN	N	Case=Nom|Number=Plur	4	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc:preconj	color:blue
1	–	–	PUNCT	PUNCT	_	2	punct	_	_
2	Álggu	álgu	NOUN	N	Case=Gen|Number=Sing	5	obl	_	_
3	rájes	rájes	ADP	Po	_	2	case	_	_
4	lea	leat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	leamaš	leat	VERB	V	Aspect=Perf|VerbForm=Part	0	root	_	_
6	sihke	sihke	ADV	Adv	_	7	cc:preconj	_	_
7	sámegielat	sámegielat	ADJ	A	_	10	amod	_	_
8	ja	ja	CCONJ	CC	_	7	cc	_	_
9	dárogielat	dárogielat	ADJ	A	_	7	amod	_	_
10	oahppit	oahppi	NOUN	N	Case=Nom|Number=Plur	5	nsubj	_	SpaceAfter=No
11	,	,	PUNCT	CLB	_	10	punct	_	_
12	ollu	ollu	ADJ	A	_	14	amod	_	_
13	sámegielat	sámegielat	ADJ	A	_	14	amod	_	_
14	oahppit	oahppi	NOUN	N	Case=Nom|Number=Plur	10	conj	_	SpaceAfter=No
15	,	,	PUNCT	CLB	_	5	punct	_	_
16	ollu	ollu	ADJ	A	_	18	amod	_	_
17	dárogielat	dárogielat	ADJ	A	_	18	amod	_	_
18	sámit	sápmi	NOUN	N	Case=Nom|Number=Plur	10	conj	_	SpaceAfter=No
19	,	,	PUNCT	CLB	_	5	punct	_	_
20	maiddái	maiddái	ADV	Adv	_	5	advmod	_	_
21	rivgooahppit	rivgooahppi	NOUN	N	Case=Nom|Number=Plur	10	conj	_	SpaceAfter=No
22	,	,	PUNCT	CLB	_	5	punct	_	_
23	muhtimat	muhtin	PRON	Pron	Case=Nom|Number=Plur|PronType=Ind	21	conj	_	_
24	Lulli-Norggas	Lulli-Norga	PROPN	N	Case=Loc|Number=Sing	23	nmod	_	_
25	eret	eret	ADV	Adv	_	24	advmod	_	SpaceAfter=No
26	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc:preconj	color:blue
1	-	-	PUNCT	PUNCT	_	2	punct	_	_
2	Gea	gea	INTJ	Interj	_	4	discourse	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	juhkki	juhkat	VERB	V	Mood=Imp|Number=Dual|Person=2|VerbForm=Fin	0	root	_	_
5	vel	vel	ADV	Adv	_	4	advmod	_	_
6	liema	liepma	NOUN	N	Case=Acc|Number=Sing	4	obj	_	_
7	vai	vai	SCONJ	CS	_	8	mark	_	_
8	liegganeahppi	liegganit	VERB	V	Mood=Ind|Number=Dual|Person=2|Tense=Pres|VerbForm=Fin	4	advcl	_	_
9	sihke	sihke	ADV	Adv	_	10	cc:preconj	_	_
10	siskkáldasat	siskkáldasat	ADV	Adv	_	8	advmod	_	_
11	ja	ja	CCONJ	CC	_	10	cc	_	_
12	olgguldasat	olgguldasat	ADV	Adv	_	10	advmod	_	SpaceAfter=No
13	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


