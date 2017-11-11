---
layout: base
title:  'Statistics of root in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `root`

This relation is universal.

3891 nodes (4%) are attached to their parents as `root`.

3891 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.91338987406836.

The following 10 pairs of parts of speech are connected with `root`: -<tt><a href="sr-pos-VERB.html">VERB</a></tt> (2813; 72% instances), -<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (530; 14% instances), -<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (399; 10% instances), -<tt><a href="sr-pos-AUX.html">AUX</a></tt> (54; 1% instances), -<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (35; 1% instances), -<tt><a href="sr-pos-ADV.html">ADV</a></tt> (34; 1% instances), -<tt><a href="sr-pos-PRON.html">PRON</a></tt> (18; 0% instances), -<tt><a href="sr-pos-NUM.html">NUM</a></tt> (5; 0% instances), -<tt><a href="sr-pos-PART.html">PART</a></tt> (2; 0% instances), -<tt><a href="sr-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Druga	drugi	NUM	_	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	2	nummod	_	_
2	dvojica	dvojica	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	4	aux	_	_
4	rekli	reći	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
5	da	da	SCONJ	_	_	7	mark	_	_
6	neće	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
7	prisustvovati	prisustvovati	VERB	_	VerbForm=Inf	4	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Njegove	njegov	PRON	_	Case=Nom|Gender=Fem|Number=Plur|Person=3|Poss=Yes	2	det	_	_
2	izjave	izjava	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	_	_
3	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	5	cop	_	_
4	dobro	dobro	ADV	_	Degree=Pos	5	advmod	_	_
5	primljene	primiti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	posebno	posebno	ADV	_	Degree=Pos	9	advmod	_	_
8	među	među	ADP	_	Case=Ins	9	case	_	_
9	političarima	političar	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	5	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	Poreklom	poreklo	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	6	parataxis	_	_
2	iz	iz	ADP	_	Case=Gen	3	case	_	_
3	Afrike	Afrika	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	_
5	nilski	nilski	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	_
6	konji	konj	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	_
7	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	8	cop	_	_
8	vegetarijanci	vegetarijanac	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


