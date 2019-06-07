---
layout: base
title:  'Statistics of det:predet in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="it_vit-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_vit-dep-det-poss.html">det:poss</a></tt>.

359 nodes (0%) are attached to their parents as `det:predet`.

359 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1142061281337.

The following 5 pairs of parts of speech are connected with `det:predet`: <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (348; 97% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (6; 2% instances), <tt><a href="it_vit-pos-DET.html">DET</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:predet	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Ind	3	det:predet	_	_
2	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	movimenti	movimento	NOUN	S	Gender=Masc|Number=Plur	0	root	_	_
4	tra	tra	ADP	E	_	6	case	_	_
5	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	televisioni	televisione	NOUN	S	Gender=Fem|Number=Plur	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 18 det:predet	color:blue
1	-	-	PUNCT	FC	_	2	punct	_	_
2	afferma	affermare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	parataxis	_	_
3	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	trader	trader	X	SW	Foreign=Yes	2	nsubj	_	_
5	americano	americano	ADJ	A	Gender=Masc|Number=Sing	4	amod	_	_
6	-	-	PUNCT	FC	_	2	punct	_	_
7	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	prospettive	prospettiva	NOUN	S	Gender=Fem|Number=Plur	12	nsubj	_	_
9	inflazionistiche	inflazionistico	ADJ	A	Gender=Fem|Number=Plur	8	amod	_	_
10	li	li	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=3|PronType=Prs	12	obj	_	_
11	hanno	avere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	convinti	convincere	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
13	a	a	ADP	E	_	14	mark	_	_
14	buttar	buttare	VERB	V	VerbForm=Inf	12	ccomp	_	_
15	si	si	PRON	PC	Clitic=Yes|Gender=Masc|Person=3|PronType=Prs	14	expl	_	_
16	su	su	ADP	E	_	20	case	_	_
17	quasi	quasi	ADV	B	_	18	advmod	_	_
18	tutte	tutto	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	20	det:predet	_	_
19	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	20	det	_	_
20	Commodities	Commodities	PROPN	SP	_	14	obl	_	SpaceAfter=No
21	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:predet	color:blue
1	Hinault	Hinault	PROPN	SP	_	2	nsubj	_	_
2	aveva	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	molta	molto	DET	T	Gender=Fem|Number=Sing|PronType=Tot	4	det:predet	_	_
4	più	più	DET	DI	PronType=Ind	5	det	_	_
5	classe	classe	NOUN	S	Gender=Fem|Number=Sing	2	obj	_	_
6	di	di	ADP	E	_	7	case	_	_
7	me	me	PRON	PE	Number=Sing|Person=3|PronType=Prs	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


