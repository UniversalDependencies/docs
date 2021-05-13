---
layout: base
title:  'Statistics of acl in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_partut-dep-acl-relcl.html">acl:relcl</a></tt>.

487 nodes (2%) are attached to their parents as `acl`.

467 instances of `acl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.37987679671458.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (454; 93% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (16; 3% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 acl	color:blue
1	Après	après	ADP	E	_	3	mark	_	_
2	avoir	avoir	AUX	VA	VerbForm=Inf	3	aux	_	_
3	sporulé	sporulé	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	ils	il	PRON	PE	Gender=Masc|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
6	pourrissent	pourrissent	NOUN	S	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	C'	ce	PRON	PD	PronType=Dem	3	nsubj	_	SpaceAfter=No
2	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ceci	ceci	PRON	PD	Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	qui	qui	PRON	PR	PronType=Rel	6	nsubj	_	_
5	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	6	obj	_	_
6	conduira	conduire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	3	acl	_	_
7	à	à	ADP	E	_	9	mark	_	_
8	le	le	PRON	P	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
9	voter	voter	VERB	V	VerbForm=Inf	6	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	Les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	crédits	crédit	NOUN	S	Gender=Fem|Number=Plur	4	nsubj:pass	_	_
3	sont	être	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	autorisés	autoriser	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
5	par	par	ADP	E	_	7	case	_	_
6	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	autorité	autorité	NOUN	S	Gender=Fem|Number=Sing	4	obl:agent	_	_
8	budgétaire	budgétaire	ADJ	A	Number=Sing	7	acl	_	_
9	dans	dans	ADP	E	_	11	case	_	_
10	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	limite	limite	NOUN	S	Gender=Fem|Number=Sing	4	obl	_	_
12	de	de	ADP	E	_	14	case	_	_
13	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	14	det	_	_
14	perspectives	perspective	NOUN	S	Gender=Fem|Number=Plur	11	nmod	_	_
15	financières	financier	ADJ	A	Gender=Fem|Number=Plur	14	amod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	4	punct	_	_

~~~


