---
layout: base
title:  'Statistics of compound in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="et_ewt-dep-compound-prt.html">compound:prt</a></tt>.

13 nodes (0%) are attached to their parents as `compound`.

7 instances of `compound` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (8; 62% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 15% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (2; 15% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	2004.	2004.	ADJ	N	Case=Gen|Number=Sing|NumForm=Digit|NumType=Ord	2	amod	2:amod	_
2	aasta	aasta	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
3	seisuga	seis	NOUN	S	Case=Com|Number=Sing	5	obl	5:obl	_
4	võis	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
5	rääkida	rääkima	VERB	V	VerbForm=Inf	0	root	0:root	_
6	12	12	NUM	N	NumForm=Digit|NumType=Card	8	nummod	8:nummod	_
7	miljonist	miljon	NUM	N	Case=Ela|Number=Sing|NumType=Card	6	compound	6:compound	_
8	kilovatt-tunnist	kilo_vatt-tund	NOUN	S	Case=Ela|Number=Sing	5	obl	5:obl	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 compound	color:blue
1	Aga	aga	CCONJ	J	_	9	cc	9:cc	_
2	eks	eks	ADV	D	_	9	advmod	9:advmod	_
3	keelega	keel	NOUN	S	Case=Com|Number=Sing	5	obl	5:obl	_
4	nii	nii	ADV	D	_	5	advmod	5:advmod	_
5	ongi,et	ongine	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	6:amod	_
6	enamik	enamik	NOUN	S	Case=Nom|Number=Sing	9	obj	9:obj	_
7	teadmistest	teadmine	NOUN	S	Case=Ela|Number=Plur	6	nmod	6:nmod	_
8	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	9:aux	_
9	omandatud	omandama	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
10	ikka	ikka	ADV	D	_	11	advmod	11:advmod	_
11	varem	varem	ADV	D	_	9	advmod	9:advmod	_
12	ja	ja	CCONJ	J	_	19	cc	19:cc	_
13	viimased	viimane	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	14	amod	14:amod	_
14	kordamised	kordamine	NOUN	S	Case=Nom|Number=Plur	19	nsubj:cop	19:nsubj	_
15	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	cop	19:cop	_
16	lihtsalt	lihtsalt	ADV	D	_	19	advmod	19:advmod	_
17	reeglite	reegel	NOUN	S	Case=Gen|Number=Plur	19	obl	19:obl	_
18	üle	üle	ADV	D	_	19	compound	19:compound	_
19	vaatamamised	vaatamamine	NOUN	S	Case=Nom|Number=Plur	9	conj	9:conj	SpaceAfter=No
20	.	.	PUNCT	Z	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Sai	saama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
2	Inglismaa	Inglis_maa	PROPN	S	Case=Gen|Number=Sing	4	nmod	4:nmod	_
3	õppimis	õppimis	NOUN	S	Case=Nom|Number=Sing	4	compound	4:compound	_
4	eelistustest	eelistus	NOUN	S	Case=Ela|Number=Plur	5	obl	5:obl	_
5	räägitud	rääkima	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


