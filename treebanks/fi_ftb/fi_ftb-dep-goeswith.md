---
layout: base
title:  'Statistics of goeswith in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `goeswith`

This relation is universal.

7 nodes (0%) are attached to their parents as `goeswith`.

7 instances of `goeswith` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (3; 43% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (1; 14% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 goeswith	color:blue
1	Kun	kun	SCONJ	Pcle,CS	_	12	mark	_	_
2	tusina	tusina	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nmod	_	_
3	Chopinin	chopin	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	4	nmod	_	_
4	preludeja	preludi	NOUN	N,Pl,Par	Case=Par|Number=Plur	12	obj	_	_
5	,	,	PUNCT	Pun	_	4	punct	_	FTB-rel=phrm
6	pari	pari	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card	7	nummod	_	_
7	valssia	valssi	NOUN	N,Sg,Par	Case=Par|Number=Sing	4	conj	_	_
8	ja	ja	CCONJ	Pcle,CC	_	10	cc	_	_
9	b-molli	b-molli	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	10	goeswith	_	Alt=goeswith
10	skertso	skertso	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	conj	_	_
11	oli	olla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	aux	_	_
12	singottu	singota	VERB	V,Pass,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	19	advcl	_	_
13	kirkkosaliin	kirkkosali	NOUN	N,Sg,Ill	Case=Ill|Number=Sing	12	nmod	_	_
14	,	,	PUNCT	Pun	_	13	punct	_	_
15	olokin	olo	NOUN	N,Sg,Nom,Kin	Case=Nom|Clitic=Kin|Number=Sing	19	nsubj:cop	_	_
16	alkoi	alkaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	19	aux	_	_
17	olla	olla	AUX	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	19	cop	_	_
18	kiusallisen	kiusallinen	ADJ	A,Sg,Gen	Case=Gen|Number=Sing	19	amod	_	_
19	mukava	mukava	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
20	.	.	PUNCT	Pun	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 goeswith	color:blue
1	Siis	siis	PART	Pcle	_	4	advmod	_	_
2	semmosta	semmoinen	DET	A,Dem,Sg,Par	Case=Par|Number=Sing|PronType=Dem	4	amod	_	Alt=DET
3	ruokaruoka	ruokaruoka	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	goeswith	_	Alt=goeswith
4	tyyppistä	tyyppinen	ADJ	A,Sg,Par	Case=Par|Number=Sing	0	root	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 goeswith	color:blue
1	Passissa	passi	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	3	nmod	_	_
2	hänellä	hän	PRON	Pron,Pers,Sg3,Ade	Case=Ade|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
3	lukee	lukea	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	syntymäpaikkana	syntymäpaikka	NOUN	N,Sg,Ess	Case=Ess|Number=Sing	3	nmod	_	_
5	Wiipuri	wiipuri	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	3	nsubj	_	_
6	,	,	PUNCT	Pun	_	5	punct	_	_
7	tupla	tupla	ADJ	A	_	8	goeswith	_	Alt=goeswith
8	veellä	vee	NOUN	N,Sg,Ade	Case=Ade|Number=Sing	5	nmod	_	_
9	,	,	PUNCT	Pun	_	8	punct	_	_
10	ja	ja	CCONJ	Pcle,CC	_	14	cc	_	_
11	siitä	se	PRON	Pron,Dem,Sg,Ela	Case=Ela|Number=Sing|PronType=Dem	14	nmod	_	_
12	hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	nsubj:cop	_	_
13	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	_	_
14	ylpeä	ylpeä	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	3	conj	_	_
15	.	.	PUNCT	Pun	_	14	punct	_	_

~~~


