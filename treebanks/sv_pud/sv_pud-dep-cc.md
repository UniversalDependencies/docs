---
layout: base
title:  'Statistics of cc in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `cc`

This relation is universal.

595 nodes (3%) are attached to their parents as `cc`.

589 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.34285714285714.

The following 9 pairs of parts of speech are connected with `cc`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (232; 39% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (221; 37% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (63; 11% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (57; 10% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (7; 1% instances), <tt><a href="sv_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (7; 1% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 cc	color:blue
1	Det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	obj	3:obj	_
2	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	nsubj	3:nsubj	_
3	säger	säga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	dislocated	15:dislocated	_
4	och	och	CCONJ	KN	_	7	cc	7:cc	_
5	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	7	obj	7:obj	_
6	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nsubj	7:nsubj	_
7	gör	göra	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj:och	SpaceAfter=No
8	,	,	PUNCT	MID	_	3	punct	3:punct	_
9	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	15	dislocated	15:dislocated	_
10	–	–	PUNCT	MID	_	9	punct	9:punct	_
11	faktiskt	faktiskt	ADV	AB|POS	Degree=Pos	9	advmod	9:advmod	SpaceAfter=No
12	,	,	PUNCT	MID	_	9	punct	9:punct	_
13	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	15	nsubj	15:nsubj	_
14	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	15:cop	_
15	otroligt	otrolig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
16	.	.	PUNCT	MAD	_	15	punct	15:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Strategin	strategi	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
2	ger	ge	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	intäkter	intäkt	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	2	obj	2:obj	_
4	genom	genom	ADP	PP	_	5	case	5:case	_
5	sponsorer	sponsor	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	2	obl	2:obl:genom	_
6	och	och	CCONJ	KN	_	7	cc	7:cc	_
7	marknadsföring	marknadsföring	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	conj	2:obl:genom|5:conj:och	SpaceAfter=No
8	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Durán	Durán	PROPN	PM|NOM	Case=Nom	2	nsubj	2:nsubj|4:nsubj	_
2	agerar	agera	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	som	som	SCONJ	KN	_	4	mark	4:mark	_
4	talesman	talesman	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	xcomp	2:xcomp	_
5	och	och	CCONJ	KN	_	6	cc	7.1:cc	_
6	Ángel	Ángel	PROPN	PM|NOM	Case=Nom	2	conj	7.1:nsubj|9:nsubj	_
7	Pintado	Pintado	PROPN	PM|NOM	Case=Nom	6	flat:name	6:flat:name	_
8	som	som	SCONJ	KN	_	9	mark	9:mark	_
9	kassör	kassör	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	orphan	7.1:xcomp	SpaceAfter=No
10	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


