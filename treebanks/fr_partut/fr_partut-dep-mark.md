---
layout: base
title:  'Statistics of mark in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `mark`

This relation is universal.

855 nodes (3%) are attached to their parents as `mark`.

854 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.49707602339181.

The following 14 pairs of parts of speech are connected with `mark`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADP.html">ADP</a></tt> (441; 52% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-SCONJ.html">SCONJ</a></tt> (300; 35% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-SCONJ.html">SCONJ</a></tt> (32; 4% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-SCONJ.html">SCONJ</a></tt> (32; 4% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (22; 3% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fr_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_partut-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-DET.html">DET</a></tt>-<tt><a href="fr_partut-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
1	Après	après	ADP	E	_	3	mark	_	_
2	avoir	avoir	AUX	VA	VerbForm=Inf	3	aux	_	_
3	sporulé	sporulé	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	ils	il	PRON	PE	Gender=Masc|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
6	pourrissent	pourrissent	NOUN	S	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 mark	color:blue
1	Je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	pense	penser	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	CS	_	7	mark	_	_
4	ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	vote	vote	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	_	_
6	se	se	PRON	P	Person=3|PronType=Prs	7	obj	_	_
7	déroule	dérouler	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
8	en	en	ADP	E	_	10	case	_	_
9	ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	10	det	_	_
10	moment	moment	NOUN	S	Gender=Masc|Number=Sing	7	obl	_	_
11	même	même	ADJ	A	Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 mark	color:blue
1	Si	si	SCONJ	CS	_	6	mark	_	_
2	maman	maman	NOUN	S	Gender=Fem|Number=Sing	6	nsubj	_	_
3	n'	ne	PART	PART	Polarity=Neg	6	advmod	_	SpaceAfter=No
4	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	pas	pas	ADV	BN	Polarity=Neg	6	advmod	_	_
6	contente	content	ADJ	A	Gender=Fem|Number=Sing	11	advcl	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	6	punct	_	_
8	personne	personne	PRON	PE	Person=3|PronType=Prs	11	nsubj	_	_
9	n'	ne	PART	PART	Polarity=Neg	11	advmod	_	SpaceAfter=No
10	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	content	content	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	11	punct	_	_

~~~


