---
layout: base
title:  'Statistics of cop in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `cop`

This relation is universal.

536 nodes (2%) are attached to their parents as `cop`.

517 instances of `cop` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19216417910448.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (210; 39% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (194; 36% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (51; 10% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (31; 6% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (27; 5% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (10; 2% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cop	color:blue
1	parce	parce	SCONJ	_	_	9	mark	_	ExtPos=SCONJ|Idiom=Yes
2	que	que	SCONJ	_	_	1	fixed	_	InIdiom=Yes
3	euh	euh	INTJ	_	_	9	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
6	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	pas	pas	ADV	_	Polarity=Neg	9	advmod	_	_
8	très	très	ADV	_	_	9	advmod	_	_
9	douée	doué	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
10	en	en	ADP	_	_	11	case	_	_
11	philosophie	philosophie	NOUN	_	Gender=Fem|Number=Sing	9	obl:mod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	base	base	NOUN	_	Gender=Fem|Number=Sing	9	obl:mod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	soixante-quinze	soixante-quinze	NUM	_	Number=Plur	5	nummod	_	_
5	grammes	gramme	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
6	de	de	ADP	_	_	7	case	_	_
7	beurre	beurre	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	me	le	PRON	_	_	4	dep:comp	_	_
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	aperçue	apercevoir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	que	que	SCONJ	_	_	8	mark	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	SpaceAfter=No
7	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	ccomp	_	_
9	qui	qui	PRON	_	_	11	nsubj	_	_
10	les	le	PRON	_	Number=Plur|Person=3|PronType=Prs	11	obj	_	_
11	empêchait	empêcher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	advcl:cleft	_	_
12	de	de	ADP	_	_	13	mark	_	_
13	gonfler	gonfler	VERB	_	VerbForm=Inf	11	ccomp	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


