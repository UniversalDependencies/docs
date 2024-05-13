---
layout: base
title:  'Statistics of compound in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `compound`

This relation is universal.

48 nodes (0%) are attached to their parents as `compound`.

48 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08333333333333.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (30; 63% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (12; 25% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (2; 4% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	In	in	ADP	IN	_	3	case	_	_
2	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	sito	sito	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	_
4	web	web	NOUN	NN	Gender=Masc|Number=Sing	3	compound	_	_
5	Yas	Yas	PROPN	NNP	Gender=Masc|Number=Sing	3	nmod	_	_
6	Marina	Marina	PROPN	NNP	Gender=Masc|Number=Sing	5	flat	_	_
7	Circuit	Circuit	PROPN	NNP	Gender=Masc|Number=Sing	5	flat	_	_
8	ci	ci	PRON	EX	_	9	expl	_	_
9	sono	essere	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	_
10	gli	il	DET	DT	Gender=Masc|Number=Plur	11	det	_	_
11	orari	orario	NOUN	NN	Gender=Masc|Number=Plur	9	nsubj	_	_
12	esatti	esatto	ADJ	JJ	Gender=Masc|Number=Plur	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound	color:blue
1	Prima	prima	ADV	RB	_	3	advmod	_	_
2	ha	avere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	aux	_	_
3	iniziato	iniziare	VERB	VBN	Tense=Past	0	root	_	_
4	a	a	ADP	IN	_	5	mark	_	_
5	piangere	piangere	VERB	VB	Voice=Act	3	xcomp	_	_
6	una	uno	DET	DT	Gender=Fem|Number=Sing	7	det	_	_
7	donna	donna	NOUN	NN	Gender=Fem|Number=Sing	3	nsubj	_	_
8	Yazidi	Yazidi	PROPN	NNP	Gender=Fem|Number=Sing	7	compound	_	SpaceAfter=No
9	,	,	PUNCT	,	_	13	punct	_	_
10	poi	poi	ADV	RB	_	13	advmod	_	_
11	una	uno	DET	DT	Gender=Fem|Number=Sing	13	det	_	_
12	sua	suo	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	13	det:poss	_	_
13	amica	amico	NOUN	NN	Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 compound	color:blue
1	Se	se	SCONJ	IN	_	6	mark	_	_
2	un	uno	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	impiegato	impiegare	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
4	turco	turco	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	Proper=True
5	si	si	PRON	SE	Number=Sing|Person=3	6	expl	_	_
6	licenzia	licenziare	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	9	advcl	_	SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	_
8	allora	allora	ADV	RB	_	9	advmod	_	_
9	entra	entrare	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
10	in	in	ADP	IN	_	11	case	_	_
11	gioco	gioco	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	_
12	il	il	DET	DT	Gender=Masc|Number=Sing	13	det	_	_
13	Comitato	Comitato	NOUN	NN	Gender=Masc|Number=Sing	9	nsubj	_	_
14	Aziendale	Aziendale	ADJ	JJ	Gender=Masc|Number=Sing	13	compound	_	_
15	turco	turco	ADJ	JJ	Gender=Masc|Number=Sing	13	amod	_	Proper=True|SpaceAfter=No
16	.	.	PUNCT	.	_	9	punct	_	_

~~~


