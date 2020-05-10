---
layout: base
title:  'Statistics of list in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `list`

This relation is universal.

12 nodes (0%) are attached to their parents as `list`.

12 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.66666666666667.

The following 6 pairs of parts of speech are connected with `list`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 58% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (1; 8% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 list	color:blue
1	Teenuse	teenus	NOUN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	kasutamiseks	kasutamine	NOUN	S	Case=Tra|Number=Sing	4	obl	4:obl	_
3	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	saata	saatma	VERB	V	VerbForm=Inf	3	csubj	3:csubj	_
5	SMS	SMS	NOUN	Y	Abbr=Yes	6	nmod	6:nmod	_
6	sõnum	sõnum	NOUN	S	Case=Nom|Number=Sing	4	obj	4:obj	_
7	kujul	kuju	NOUN	S	Case=Ade|Number=Sing	4	obl	4:obl	_
8	"	"	PUNCT	Z	_	9	punct	9:punct	SpaceAfter=No
9	PEATUS	peatus	NOUN	S	Case=Nom|Number=Sing	7	appos	7:appos	_
10	peatuse	peatus	NOUN	S	Case=Gen|Number=Sing	11	nmod	11:nmod	_
11	nimi	nimi	NOUN	S	Case=Nom|Number=Sing	9	list	9:list	_
12	liini	liin	NOUN	S	Case=Gen|Number=Sing	13	nmod	13:nmod	_
13	number	number	NOUN	S	Case=Nom|Number=Sing	9	list	9:list	SpaceAfter=No
14	"	"	PUNCT	Z	_	9	punct	9:punct	_
15	lühinumbrile	lühi_number	NOUN	S	Case=All|Number=Sing	4	obl	4:obl	_
16	1311	1311	NUM	N	NumForm=Digit|NumType=Card	15	nummod	15:nummod	SpaceAfter=No
17	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 39 list	color:blue
1	Töö	töö	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
2	ajaline	ajaline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	paindlikkus	paindlikkus	NOUN	S	Case=Nom|Number=Sing	4	nsubj	4:nsubj	_
4	väljendub	väljenduma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	tööturu	töö_turg	NOUN	S	Case=Gen|Number=Sing	6	nmod	6:nmod	_
6	parameetrites	parameeter	NOUN	S	Case=Ine|Number=Plur	4	obl	4:obl	_
7	nagu	nagu	SCONJ	J	_	13	mark	13:mark	SpaceAfter=No
8	:	:	PUNCT	Z	_	13	punct	13:punct	_
9	·	·	PUNCT	Z	_	13	punct	13:punct	_
10	täis-	täis	ADJ	A	Case=Nom|Degree=Pos|Hyph=Yes|Number=Sing	13	amod	13:amod	_
11	ja	ja	CCONJ	J	_	12	cc	12:cc	_
12	osaajaga	osa_aeg	NOUN	S	Case=Com|Number=Sing	10	conj	10:conj	_
13	töö	töö	NOUN	S	Case=Nom|Number=Sing	6	appos	6:appos	SpaceAfter=No
14	;	;	PUNCT	Z	_	17	punct	17:punct	_
15	osaajaga	osa_aeg	NOUN	S	Case=Com|Number=Sing	16	nmod	16:nmod	_
16	töötamise	töötamine	NOUN	S	Case=Gen|Number=Sing	17	nmod	17:nmod	_
17	põhjused	põhjus	NOUN	S	Case=Nom|Number=Plur	13	conj	13:conj	_
18	·	·	PUNCT	Z	_	19	punct	19:punct	_
19	kõrvaltöö	kõrval_töö	NOUN	S	Case=Nom|Number=Sing	13	list	13:list	_
20	·	·	PUNCT	Z	_	21	punct	21:punct	_
21	tööaeg	töö_aeg	NOUN	S	Case=Nom|Number=Sing	13	list	13:list	SpaceAfter=No
22	;	;	PUNCT	Z	_	26	punct	26:punct	_
23	rohkem	rohkem	ADV	D	_	26	advmod	26:advmod	_
24	ja	ja	CCONJ	J	_	25	cc	25:cc	_
25	vähem	vähem	ADV	D	_	23	conj	23:conj	_
26	töötamine	töötamine	NOUN	S	Case=Nom|Number=Sing	21	conj	21:conj	_
27	ja	ja	CCONJ	J	_	29	cc	29:cc	_
28	nende	see	PRON	P	Case=Gen|Number=Plur|PronType=Dem	29	nmod	29:nmod	_
29	põhjused	põhjus	NOUN	S	Case=Nom|Number=Plur	26	conj	26:conj	_
30	·	·	PUNCT	Z	_	26	punct	26:punct	_
31	alaline	alaline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	34	amod	34:amod	_
32	ja	ja	CCONJ	J	_	33	cc	33:cc	_
33	ajutine	ajutine	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	31	conj	31:conj	_
34	töö	töö	NOUN	S	Case=Nom|Number=Sing	13	list	13:list	_
35	·	·	PUNCT	Z	_	36	punct	36:punct	_
36	vaheajad	vahe_aeg	NOUN	S	Case=Nom|Number=Plur	13	list	13:list	_
37	töötamises	töötamine	NOUN	S	Case=Ine|Number=Sing	36	nmod	36:nmod	_
38	·	·	PUNCT	Z	_	39	punct	39:punct	_
39	jt	jt	ADV	Y	Abbr=Yes	13	list	13:list	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 list	color:blue
1	Ja	ja	CCONJ	J	_	2	cc	2:cc	_
2	mõtlen	mõtlema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z	_	8	punct	8:punct	_
4	et	et	SCONJ	J	_	8	mark	8:mark	_
5	kui	kui	SCONJ	J	_	8	mark	8:mark	_
6	käed	käsi	NOUN	S	Case=Nom|Number=Plur	8	obj	8:obj	_
7	raudu	raud	NOUN	S	Case=Add|Number=Plur	8	obl	8:obl	_
8	panevad	panema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	advcl	11:advcl	SpaceAfter=No
9	,	,	PUNCT	Z	_	11	punct	11:punct	_
10	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
11	neil	tema	PRON	P	Case=Ade|Number=Plur|Person=3|PronType=Prs	2	ccomp	2:ccomp	_
12	juba	juba	ADV	D	_	11	advmod	11:advmod	_
13	2	2	NUM	N	NumForm=Digit|NumType=Card	16	nummod	16:nummod	SpaceAfter=No
14	:	:	PUNCT	Z	_	15	punct	15:punct	_
15	0	0	NUM	N	NumForm=Digit|NumType=Card	13	list	13:list	_
16	edumaa	edu_maa	NOUN	S	Case=Nom|Number=Sing	11	nsubj:cop	11:nsubj	SpaceAfter=No
17	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


