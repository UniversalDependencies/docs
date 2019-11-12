---
layout: base
title:  'Statistics of case in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `case`

This relation is universal.

3438 nodes (14%) are attached to their parents as `case`.

3438 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76556137289122.

The following 20 pairs of parts of speech are connected with `case`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (2503; 73% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (512; 15% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (136; 4% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (120; 3% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (66; 2% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (21; 1% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (17; 0% instances), <tt><a href="fr_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (17; 0% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (13; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (11; 0% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-DET.html">DET</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	5000	_	NUM	CD	_	2	nummod	_	_
2	dollars	_	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
3	par	_	ADP	IN	_	4	case	_	_
4	personne	_	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	_	PUNCT	,	_	7	punct	_	_
6	le	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	maximum	_	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
8	autorisé	_	VERB	VBN	Gender=Masc|Number=Sing|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 case	color:blue
1	Il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
2	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux:tense	_	_
3	travaillé	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
4	pour	_	ADP	IN	_	6	case	_	_
5	la	_	DET	DT	Gender=Fem|Number=Sing	6	det	_	_
6	BBC	_	PROPN	NNP	Gender=Fem|Number=Sing	3	obl	_	_
7	pendant	_	ADP	IN	_	9	case	_	_
8	une	_	DET	DT	Gender=Fem|Number=Sing	9	det	_	_
9	décennie	_	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
10	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 case	color:blue
1	Leur	_	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	3	det	_	_
2	premier	_	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	_
3	roi	_	NOUN	NN	Gender=Masc|Number=Sing	5	nsubj	_	_
4	fut	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
5	Mojmír	_	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	_
6	Ier	_	ADJ	JJ	Gender=Masc|Number=Sing	5	amod	_	Proper=True|SpaceAfter=No
7	,	_	PUNCT	,	_	9	punct	_	_
8	qui	_	PRON	WP	Gender=Masc|Number=Sing	9	nsubj	_	_
9	régna	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	acl:relcl	_	_
10	de	_	ADP	IN	_	11	case	_	_
11	830	_	NUM	CD	_	9	obl	_	_
12	à	_	ADP	IN	_	13	case	_	_
13	846	_	NUM	CD	_	11	nmod	_	SpaceAfter=No
14	.	_	PUNCT	.	_	5	punct	_	_

~~~


