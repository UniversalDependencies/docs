---
layout: base
title:  'Statistics of orphan in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `orphan`

This relation is universal.

7 nodes (0%) are attached to their parents as `orphan`.

5 instances of `orphan` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14285714285714.

The following 7 pairs of parts of speech are connected with `orphan`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (1; 14% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (1; 14% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (1; 14% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 orphan	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj|3.1:nsubj|5:nsubj|14:nsubj	_
2	also	also	ADV	RB	_	3	advmod	3:advmod	_
3	built	build	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	and	and	CCONJ	CC	_	5	cc	5:cc	_
5	renovated	renovate	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	conj	3:conj:and	_
6	five	five	NUM	CD	NumType=Card	8	nummod	8:nummod	_
7	traditional	traditional	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	markets	market	NOUN	NNS	Number=Plur	3	obj	3:obj|5:obj	_
9	in	in	ADP	IN	_	10	case	10:case	_
10	2013	2013	NUM	CD	NumType=Card	3	obl	3:obl:in	_
11	and	and	CCONJ	CC	_	14	cc	3.1:cc|14:cc	_
12	four	four	NUM	CD	NumType=Card	14	nummod	14:nummod	_
13	traditional	traditional	ADJ	JJ	Degree=Pos	14	amod	14:amod	_
14	markets	market	NOUN	NNS	Number=Plur	3	conj	3:conj:and|3.1:obj	_
15	in	in	ADP	IN	_	16	case	16:case	_
16	2014	2014	NUM	CD	NumType=Card	14	orphan	3.1:obl:in	SpaceAfter=No
17	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 orphan	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
2	northern	northern	ADJ	JJ	Degree=Pos	3	amod	3:amod	_
3	portion	portion	NOUN	NN	Number=Sing	8	nsubj:pass	8:nsubj:pass|15:nsubj:pass	_
4	of	of	ADP	IN	_	6	case	6:case	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	_
6	Caucasus	Caucasus	PROPN	NNP	Number=Sing	3	nmod	3:nmod:of	_
7	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	8:aux:pass	_
8	known	know	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
9	as	as	ADP	IN	_	11	case	11:case	_
10	the	the	DET	DT	Definite=Def|PronType=Art	11	det	11:det	_
11	Ciscaucasus	Ciscaucasus	PROPN	NNP	Number=Sing	8	obl	8:obl:as	_
12	and	and	CCONJ	CC	_	15	cc	8.1:cc|15:cc	_
13	the	the	DET	DT	Definite=Def|PronType=Art	15	det	15:det	_
14	southern	southern	ADJ	JJ	Degree=Pos	15	amod	15:amod	_
15	portion	portion	NOUN	NN	Number=Sing	8	conj	8:conj:and|8.1:nsubj:pass	_
16	as	as	ADP	IN	_	18	case	18:case	_
17	the	the	DET	DT	Definite=Def|PronType=Art	18	det	18:det	_
18	Transcaucasus	Transcaucasus	PROPN	NNP	Number=Sing	15	orphan	8.1:obl:as	SpaceAfter=No
19	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 orphan	color:blue
1	During	during	ADP	IN	_	3	case	3:case	_
2	this	this	DET	DT	Number=Sing|PronType=Dem	3	det	3:det	_
3	time	time	NOUN	NN	Number=Sing	8	obl	8:obl:during	SpaceAfter=No
4	,	,	PUNCT	,	_	8	punct	8:punct	_
5	Marcelle	Marcelle	PROPN	NNP	Number=Sing	8	nsubj:pass	8:nsubj:pass	_
6	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	8:aux:pass	_
7	often	often	ADV	RB	_	8	advmod	8:advmod	_
8	left	leave	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
9	alone	alone	ADV	RB	_	8	advmod	8:advmod	_
10	in	in	ADP	IN	_	12	case	12:case	_
11	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	_
12	room	room	NOUN	NN	Number=Sing	8	obl	8:obl:in	_
13	while	while	SCONJ	IN	_	18	mark	18:mark	_
14	Piaf	Piaf	PROPN	NNP	Number=Sing	18	nsubj	18:nsubj|25:nsubj	_
15	and	and	CCONJ	CC	_	16	cc	16:cc	_
16	Mômone	Mômone	PROPN	NNP	Number=Sing	14	conj	14:conj:and|18:nsubj	_
17	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	18	cop	18:cop	_
18	out	out	ADV	RB	_	8	advcl	8:advcl:while	_
19	on	on	ADP	IN	_	21	obj	21:obj	_
20	the	the	DET	DT	Definite=Def|PronType=Art	21	det	21:det	_
21	streets	street	NOUN	NNS	Number=Plur	18	obl	18:obl	_
22	or	or	CCONJ	CC	_	25	cc	18.1:cc|25:cc	_
23	at	at	ADP	IN	_	25	case	25:case	_
24	the	the	DET	DT	Definite=Def|PronType=Art	25	det	25:det	_
25	club	club	NOUN	NN	Number=Sing	18	conj	8:advcl:at|18:conj:or|18.1:nsubj	_
26	singing	sing	VERB	VBG	VerbForm=Ger	25	orphan	18.1:obl	SpaceAfter=No
27	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


