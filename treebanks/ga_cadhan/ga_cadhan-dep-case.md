---
layout: base
title:  'Statistics of case in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="ga_cadhan-dep-case-voc.html">case:voc</a></tt>.

518 nodes (11%) are attached to their parents as `case`.

518 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35521235521236.

The following 9 pairs of parts of speech are connected with `case`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (435; 84% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (57; 11% instances), <tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (11; 2% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-PART.html">PART</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 case	color:blue
1	Thangas	tar	VERB	_	Form=Len|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
2	abhaile	abhaile	ADV	_	_	1	advmod	_	_
3	air	ar	ADP	_	_	5	case	_	_
4	mo	mo	DET	_	Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	_
5	socracht	socracht	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 case	color:blue
1	Do	de	ADP	_	_	2	case	_	_
2	ríoghaibh	rí	NOUN	_	Case=Dat|Definite=Def|Gender=Masc|Number=Plur	0	root	_	_
3	Tuaithe	tuath	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	2	nmod	_	_
4	Dé	Dia	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	_
5	Danann	Danann	PROPN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	4	nmod	_	_
6	ann	i	ADP	_	Gender=Masc|Number=Sing|Person=3	2	nmod	_	_
7	so	seo	DET	_	PronType=Dem	6	det	_	SpaceAfter=No
8	,	,	PUNCT	_	_	2	punct	_	_
9	agus	agus	CCONJ	_	_	11	cc	_	_
10	d'	de	ADP	_	_	11	case	_	SpaceAfter=No
11	fhad	fad	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	2	conj	_	_
12	a	a	DET	_	Number=Plur|Person=3|Poss=Yes	13	nmod:poss	_	_
13	bhflaithis	flaitheas	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Plur	11	nmod	_	_
14	ar	ar	ADP	_	_	15	case	_	_
15	Éirinn	Éire	PROPN	_	Case=Dat|Definite=Def|Gender=Fem|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 case	color:blue
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


