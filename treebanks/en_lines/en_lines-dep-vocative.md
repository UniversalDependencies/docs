---
layout: base
title:  'Statistics of vocative in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `vocative`

This relation is universal.

103 nodes (0%) are attached to their parents as `vocative`.

56 instances of `vocative` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.68932038834951.

The following 13 pairs of parts of speech are connected with `vocative`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (44; 43% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (26; 25% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (9; 9% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (6; 6% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="en_lines-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 vocative	color:blue
1	Find	find	VERB	IMP	Mood=Imp|VerbForm=Fin	0	root	_	_
2	anything	anything	PRON	IND-SG-NOM	Number=Sing	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	1	punct	_	_
4	Dad	dad	NOUN	SG-NOM	Number=Sing	1	vocative	_	SpaceAfter=No
5	?	?	PUNCT	QuestionMark	_	6	punct	_	_
6	said	say	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	1	parataxis	_	_
7	Fred	Fred	PROPN	SG-NOM	Number=Sing	6	nsubj	_	_
8	eagerly	eagerly	ADV	_	_	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 vocative	color:blue
1	Thank	thank	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	you	you	PRON	PERS-P2	_	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	1	punct	_	_
4	Mr	mr	NOUN	SG-NOM	Number=Sing	5	nmod	_	_
5	Donnay	Donnay	PROPN	SG-NOM	Number=Sing	1	vocative	_	SpaceAfter=No
6	.	.	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 vocative	color:blue
1	Ah	ah	INTJ	_	_	8	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Comma	_	1	punct	_	_
3	sir	Sir	NOUN	SG-NOM	Case=Nom	8	vocative	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	3	punct	_	_
5	this	this	PRON	DEM-SG	Number=Sing|PronType=Dem	8	nsubj	_	_
6	is	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	a	a	DET	IND-SG	Definite=Ind|PronType=Art	8	det	_	_
8	danger	danger	NOUN	SG-NOM	Number=Sing	0	root	_	_
9	you	you	PRON	PERS-P2	_	12	nsubj	_	_
10	must	must	AUX	PRES-AUX	VerbForm=Fin	12	aux	_	_
11	not	not	PART	NEG	_	12	advmod	_	_
12	face	face	VERB	INF	VerbForm=Inf	8	acl:relcl	_	SpaceAfter=No
13	!	!	PUNCT	ExclMark	_	8	punct	_	_

~~~


