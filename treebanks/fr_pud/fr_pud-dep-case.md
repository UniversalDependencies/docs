---
layout: base
title:  'Statistics of case in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `case`

This relation is universal.

3415 nodes (14%) are attached to their parents as `case`.

3415 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74816983894583.

The following 20 pairs of parts of speech are connected with `case`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (2459; 72% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (527; 15% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (131; 4% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (109; 3% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (69; 2% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (26; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (21; 1% instances), <tt><a href="fr_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (17; 0% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (16; 0% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (13; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (11; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-DET.html">DET</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	5000	5000	NUM	CD	_	2	nummod	_	_
2	dollars	dollar	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
3	par	par	ADP	IN	_	4	case	_	_
4	personne	personne	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	le	le	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	maximum	maximum	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
8	autorisé	autoriser	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 case	color:blue
1	Il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	nsubj	_	wordform=il
2	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	travaillé	travailler	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	pour	pour	ADP	IN	_	6	case	_	_
5	la	le	DET	DT	Gender=Fem|Number=Sing	6	det	_	_
6	BBC	BBC	PROPN	NNP	Gender=Fem|Number=Sing	3	obl	_	_
7	pendant	pendant	ADP	IN	_	9	case	_	_
8	une	un	DET	DT	Gender=Fem|Number=Sing	9	det	_	_
9	décennie	décennie	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 case	color:blue
1	Leur	son	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	3	det	_	wordform=leur
2	premier	premier	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	_
3	roi	roi	NOUN	NN	Gender=Masc|Number=Sing	5	nsubj	_	_
4	fut	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	_
5	Mojmír	Mojmír	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	_
6	Ier	premier	ADJ	JJ	Gender=Masc|Number=Sing	5	amod	_	Proper=True|SpaceAfter=No|wordform=ier
7	,	,	PUNCT	,	_	9	punct	_	_
8	qui	qui	PRON	WP	Gender=Masc|Number=Sing	9	nsubj	_	_
9	régna	régner	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl:relcl	_	_
10	de	de	ADP	IN	_	11	case	_	_
11	830	830	NUM	CD	_	9	obl	_	_
12	à	à	ADP	IN	_	13	case	_	_
13	846	846	NUM	CD	_	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


