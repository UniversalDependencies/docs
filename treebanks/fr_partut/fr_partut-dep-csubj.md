---
layout: base
title:  'Statistics of csubj in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fr_partut-dep-csubj-pass.html">csubj:pass</a></tt>.

63 nodes (0%) are attached to their parents as `csubj`.

61 instances of `csubj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.88888888888889.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (35; 56% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (17; 27% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (7; 11% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 csubj	color:blue
1	Le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	travail	travail	NOUN	S	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	fait	faire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	8	punct	_	_
6	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	expl	_	_
7	s'	se	PRON	P	Person=3|PronType=Prs	8	expl	_	SpaceAfter=No
8	agit	agir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	conj	_	_
9	encore	encore	ADV	B	_	12	advmod	_	_
10	d'	de	ADP	E	_	12	mark	_	SpaceAfter=No
11	en	en	PRON	PE	Person=3|PronType=Prs	14	nmod	_	_
12	assurer	assurer	VERB	V	VerbForm=Inf	8	csubj	_	_
13	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	respect	respect	NOUN	S	Gender=Masc|Number=Sing	12	obj	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
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


