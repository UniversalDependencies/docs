---
layout: base
title:  'Statistics of ccomp in UD_North_Sami'
udver: '2'
---

## Treebank Statistics: UD_North_Sami: Relations: `ccomp`

This relation is universal.

76 nodes (1%) are attached to their parents as `ccomp`.

70 instances of `ccomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.98684210526316.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="sme-pos-VERB.html">VERB</a></tt>-<tt><a href="sme-pos-VERB.html">VERB</a></tt> (68; 89% instances), <tt><a href="sme-pos-VERB.html">VERB</a></tt>-<tt><a href="sme-pos-ADJ.html">ADJ</a></tt> (5; 7% instances), <tt><a href="sme-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="sme-pos-VERB.html">VERB</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 ccomp	color:blue
1	Sávan	sávvat	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
2	didjiide	don	PRON	Pron	Case=Ill|Number=Plur|Person=2|PronType=Prs	1	obl	_	_
3	lihku	lihkku	NOUN	N	Case=Acc|Number=Sing	1	obj	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	vástidii	vástidit	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	Evo	Evo	PROPN	N	_	5	nsubj	_	_
7	Morales	Morales	PROPN	N	Case=Nom|Number=Sing	6	flat	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	Dat	dat	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	nsubj	_	_
2	lea	leat	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	dehálaš	dehálaš	ADJ	A	Case=Nom|Number=Sing	5	ccomp	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	lohká	lohkat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	Svein	Svein	PROPN	N	_	5	nsubj	_	_
7	Ottar	Ottar	PROPN	N	_	6	flat	_	_
8	Helander	Helander	PROPN	N	Case=Nom|Number=Sing	7	flat	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 ccomp	color:blue
1	Ja	ja	CCONJ	CC	_	7	mark	_	_
2	go	go	SCONJ	CS	_	1	conj	_	_
3	johttámuš	johttát	NOUN	V*	Case=Nom|Number=Sing	7	nsubj	_	_
4	dál	dál	ADV	Adv	_	7	advmod	_	_
5	lea	leat	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	nu	nu	ADV	Adv	_	7	advmod	_	_
7	áddjái	áddjái	ADJ	A	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	11	punct	_	_
9	ahte	ahte	SCONJ	CS	_	11	mark	_	_
10	eai	ii	VERB	V	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin	11	aux:neg	_	_
11	beasa	beassat	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	7	ccomp	_	_
12	mátkái	mátki	NOUN	N	Case=Ill|Number=Sing	11	obl	_	SpaceAfter=No
13	,	,	PUNCT	CLB	_	7	punct	_	_
14	de	de	ADV	Adv	_	15	advmod	_	_
15	šaddá	šaddat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	_
16	ein	ein	ADV	Adv	_	15	advmod	_	_
17	čoaskáseabbu	čoaskkis	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	15	xcomp	_	_
18	ilbmi	ilbmi	NOUN	N	Case=Nom|Number=Sing	15	nsubj	_	_
19	ja	ja	CCONJ	CC	_	15	cc	_	_
20	seavdnjadeapput	seavdnjat	ADJ	A	Case=Nom|Degree=Cmp|Number=Plur	21	xcomp	_	_
21	šaddet	šaddat	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	conj	_	_
22	ijat	idja	NOUN	N	Case=Nom|Number=Plur	21	nsubj	_	SpaceAfter=No
23	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


