---
layout: base
title:  'Statistics of obl:tmod in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ga_cadhan-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ga_cadhan-dep-obl-prep.html">obl:prep</a></tt>.

41 nodes (1%) are attached to their parents as `obl:tmod`.

31 instances of `obl:tmod` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.85365853658537.

The following 5 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (29; 71% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (7; 17% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obl:tmod	color:blue
1	Níor	níor	PART	_	PartType=Vb|Polarity=Neg|Tense=Past	2	advmod	_	_
2	óladar	ól	VERB	_	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past	0	root	_	_
3	aon	aon	DET	_	PronType=Ind	4	det	_	_
4	deoch	deoch	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	obj	_	_
5	le	le	ADP	_	_	7	case	_	_
6	dhá	dó	NUM	_	Form=Len|NumType=Card	7	nummod	_	_
7	lá	lá	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	obl:tmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obl:tmod	color:blue
1	Tri	trí	NUM	_	NumType=Card	2	nummod	_	_
2	naimhde	namhaid	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	0	root	_	_
3	an	an	DET	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	anma	anam	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	_
5	gach	gach	DET	_	Definite=Def	6	det	_	_
6	am	am	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	obl:tmod	_	_
7	diabhal	diabhal	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	saoghal	saol	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	's	agus	CCONJ	_	_	13	cc	_	_
12	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	13	nmod:poss	_	_
13	cholann	colainn	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Fem|Number=Sing	7	conj	_	_
14	da	dá	SCONJ	_	_	15	mark	_	_
15	mbera	beir	VERB	_	Form=Ecl|Mood=Sub|Number=Sing|Person=2|Tense=Pres	20	advcl	_	_
16	tusa	tú	PRON	_	Number=Sing|Person=2|PronType=Emp	15	nsubj	_	_
17	a	a	DET	_	Number=Plur|Person=3|Poss=Yes	18	nmod:poss	_	_
18	mbuaidh	bua	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Sing	15	obj	_	_
19	sin	sin	PRON	_	PronType=Dem	18	det	_	_
20	rachair	téigh	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Fut	2	parataxis	_	_
21	go	go	PART	_	PartType=Ad	22	mark:prt	_	_
22	réidh	réidh	ADJ	_	Degree=Pos	20	advmod	_	_
23	don	do	ADP	_	Number=Sing|PronType=Art	24	case	_	_
24	Righthigh	rítheach	NOUN	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing	20	obl	_	SpaceAfter=No
25	.	.	PUNCT	_	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 obl:tmod	color:blue
1	Bíodh	bí	VERB	_	Mood=Imp|Number=Sing|Person=3	14	advcl	_	_
2	nar	is	AUX	_	Polarity=Neg|PronType=Rel|Tense=Past|VerbForm=Cop	3	cop	_	_
3	dhiongmhála	diongbháil	ADJ	_	Degree=Pos|Form=Len	1	ccomp	_	_
4	lat-sa	le	ADP	_	Number=Sing|Person=2|PronType=Emp	3	obl:prep	_	_
5	ar	ar	ADP	_	_	6	case	_	_
6	ttecht	teacht	NOUN	_	Form=Ecl|VerbForm=Inf	3	parataxis	_	_
7	go	go	ADP	_	_	8	case	_	_
8	háois	aois	NOUN	_	Case=Nom|Form=HPref|Gender=Fem|Number=Sing	6	obl	_	_
9	ársachta	ársaíocht	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	beatha	beatha	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	3	nsubj	_	_
11	mesardha	measartha	ADJ	_	Case=Gen|Gender=Fem|Number=Sing	10	amod	_	_
12	denas	denus	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	obl:tmod	_	_
13	dob	is	PART	_	Form=VF|PartType=Sup|Tense=Past|VerbForm=Cop	14	mark:prt	_	_
14	fheárr	maith	ADJ	_	Degree=Cmp,Sup|Form=Len	0	root	_	_
15	í	í	PRON	_	Gender=Fem|Number=Sing|Person=3	14	nsubj	_	_
16	na	ná	SCONJ	_	_	17	mark	_	_
17	braighdenas	braighdeanas	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	14	advcl	_	SpaceAfter=No
18	.	.	PUNCT	_	_	14	punct	_	_

~~~


