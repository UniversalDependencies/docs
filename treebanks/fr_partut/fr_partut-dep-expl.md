---
layout: base
title:  'Statistics of expl in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `expl`

This relation is universal.

203 nodes (1%) are attached to their parents as `expl`.

195 instances of `expl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50738916256158.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (180; 89% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (17; 8% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="fr_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl	color:blue
1	Nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	ne	ne	PART	PART	Polarity=Neg	3	advmod	_	_
3	savons	savoir	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	pas	pas	ADV	BN	Polarity=Neg	3	advmod	_	_
5	ce	ce	PRON	PD	Number=Sing|Person=3|PronType=Dem	3	obj	_	_
6	qui	qui	PRON	PR	PronType=Rel	8	nsubj	_	_
7	se	se	PRON	P	Person=3|PronType=Prs	8	expl	_	_
8	passe	passer	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl	color:blue
1	Considérant	considérer	VERB	V	Tense=Pres|VerbForm=Part	0	root	_	_
2	qu'	que	SCONJ	CS	_	5	mark	_	SpaceAfter=No
3	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
4	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	essentiel	essentiel	ADJ	A	Gender=Masc|Number=Sing	1	ccomp	_	_
6	d'	de	ADP	E	_	7	mark	_	SpaceAfter=No
7	encourager	encourager	VERB	V	VerbForm=Inf	5	csubj	_	_
8	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	développement	développement	NOUN	S	Gender=Masc|Number=Sing	7	obj	_	_
10	de	de	ADP	E	_	11	case	_	_
11	relations	relation	NOUN	S	Gender=Fem|Number=Plur	9	nmod	_	_
12	amicales	amical	ADJ	A	Gender=Fem|Number=Plur	11	amod	_	_
13	entre	entre	ADP	E	_	14	case	_	_
14	nations	nation	NOUN	S	Gender=Fem|Number=Plur	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	Est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
2	-il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	vrai	vrai	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
4	que	que	SCONJ	CS	_	6	mark	_	_
5	Facebook	Facebook	PROPN	SP	_	6	nsubj	_	_
6	va	aller	VERB	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	csubj	_	_
7	facturer	facturer	VERB	V	VerbForm=Inf	6	xcomp	_	_
8	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	utilisation	utilisation	NOUN	S	Gender=Fem|Number=Sing	7	obj	_	_
10	de	de	ADP	E	_	12	case	_	_
11	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	site	site	NOUN	S	Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
13	?	?	PUNCT	FS	_	3	punct	_	_

~~~


