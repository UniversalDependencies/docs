---
layout: base
title:  'Statistics of nummod in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `nummod`

This relation is universal.

40 nodes (1%) are attached to their parents as `nummod`.

38 instances of `nummod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt> (34; 85% instances), <tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt> (5; 13% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	An	an	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
2	naomhadh	naoi	NUM	_	NumType=Ord	3	amod	_	_
3	la	lá	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	fichiod	fiche	NUM	_	NumType=Card	3	nummod	_	_
5	.i.	.i.	ADJ	_	Abbr=Yes	6	amod	_	_
6	dia	Dé	PROPN	_	Definite=Def|Number=Sing	3	appos	_	_
7	satharn	Satharn	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	Trí	trí	NUM	_	NumType=Card	2	nummod	_	_
2	fichid	fiche	NUM	_	NumType=Card	6	nummod	_	_
3	agus	agus	CCONJ	_	_	5	cc	_	_
4	trí	trí	NUM	_	NumType=Card	5	nummod	_	_
5	céad	céad	NUM	_	NumType=Card	2	conj	_	_
6	seisreach	seisreach	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
7	fearainn	fearann	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
8	i	i	ADP	_	_	11	case	_	_
9	san	an	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
10	triocha	tríocha	NUM	_	NumType=Card	11	nummod	_	_
11	chéad	céad	NUM	_	Form=Len|NumType=Card	6	nmod	_	_
12	amhlaidh	amhlaidh	ADV	_	_	6	advmod	_	_
13	sin	sin	PRON	_	PronType=Dem	12	fixed	_	SpaceAfter=No
14	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Cíall	ciall	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	a	a	PART	_	Form=Indirect|PartType=Vb|PronType=Rel	3	mark:prt	_	_
3	ndubhairt	abair	VERB	_	Form=Ecl|Mood=Ind|Person=1|Tense=Past|Typo=Yes	1	acl:relcl	_	CorrectForm=ndubhart
4	annso	anseo	ADV	_	_	1	parataxis	_	_
5	dhuit	do	ADP	_	Form=Len|Number=Sing|Person=2	1	parataxis	_	_
6	a	a	PART	_	PartType=Voc	7	case:voc	_	_
7	úa	ua	NOUN	_	Case=Voc|Definite=Def|Gender=Masc|Number=Sing	3	vocative	_	_
8	na	an	DET	_	Case=Gen|Definite=Def|Number=Plur|PronType=Art	10	det	_	_
9	ttrí	trí	NUM	_	Form=Ecl|NumType=Card	10	nummod	_	_
10	nAodh	Aodh	PROPN	_	Case=Gen|Definite=Def|Form=Ecl|Gender=Masc|Number=Plur	7	nmod	_	_
11	n-oirdhuirc	oirirc	NOUN	_	Case=Gen|Definite=Def|Form=Ecl|Gender=Masc|NounType=Weak|Number=Plur	10	nmod	_	_
12	i	i	ADP	_	_	13	case	_	_
13	ndoigh	dóigh	NOUN	_	Case=Nom|Form=Ecl|Gender=Fem|Number=Sing	1	parataxis	_	_
14	go	go	PART	_	PartType=Cmpl	15	mark:prt	_	_
15	mbeith	bí	VERB	_	Form=Ecl|Mood=Sub|Tense=Pres	13	acl	_	_
16	gráin	gráin	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	15	nsubj	_	_
17	ó	ó	ADP	_	_	18	case	_	_
18	thoil	toil	NOUN	_	Case=Nom|Form=Len|Gender=Fem|Number=Sing	15	obl	_	_
19	agad	ag	ADP	_	Number=Sing|Person=2	15	xcomp:pred	_	_
20	ar	ar	ADP	_	_	21	case	_	_
21	ghlóir	glóir	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Fem|Number=Sing	16	nmod	_	_
22	an	an	DET	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	tshaoghoil	saol	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	21	nmod	_	SpaceAfter=No
24	.	.	PUNCT	_	_	1	punct	_	_

~~~


