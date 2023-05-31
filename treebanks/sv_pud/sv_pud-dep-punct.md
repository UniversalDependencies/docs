---
layout: base
title:  'Statistics of punct in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `punct`

This relation is universal.

1941 nodes (10%) are attached to their parents as `punct`.

1320 instances of `punct` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.56568778979907.

The following 10 pairs of parts of speech are connected with `punct`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PUNCT.html">PUNCT</a></tt> (1121; 58% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PUNCT.html">PUNCT</a></tt> (458; 24% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PUNCT.html">PUNCT</a></tt> (160; 8% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PUNCT.html">PUNCT</a></tt> (123; 6% instances), <tt><a href="sv_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_pud-pos-PUNCT.html">PUNCT</a></tt> (24; 1% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-PUNCT.html">PUNCT</a></tt> (22; 1% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-PUNCT.html">PUNCT</a></tt> (21; 1% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_pud-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances), <tt><a href="sv_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_pud-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sv_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 punct	color:blue
1	De	den	DET	DT|NEU|PLU|DEF	Definite=Def|Gender=Neut|Number=Plur	3	det	3:det	_
2	nya	ny	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	utgifterna	utgift	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	4	nsubj:pass	4:nsubj:pass	_
4	finansieras	finansiera	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
5	av	av	ADP	PP	_	8	case	8:case	_
6	Clintons	Clinton	PROPN	PM|GEN	Case=Gen	8	nmod:poss	8:nmod:poss	_
7	stora	stor	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	8	amod	8:amod	_
8	bankkonto	bankkonto	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	obl:agent	4:obl:agent	SpaceAfter=No
9	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 punct	color:blue
1	5 000	5 000	NUM	RG|NOM	Case=Nom	2	nummod	2:nummod	_
2	dollar	dollar	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	0:root	_
3	per	per	ADP	PP	_	4	case	4:case	_
4	person	person	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nmod	2:nmod:per	SpaceAfter=No
5	,	,	PUNCT	MID	_	2	punct	2:punct	_
6	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	8	det	8:det	_
7	högsta	hög	ADJ	JJ|SUV|UTR/NEU|SIN/PLU|DEF|NOM	Case=Nom|Definite=Def|Degree=Sup	8	amod	8:amod	_
8	belopp	belopp	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	appos	2:appos|10:nsubj:pass	_
9	som	som	PRON	HP|-|-|-	PronType=Int,Rel	10	nsubj:pass	8:ref	_
10	tillåts	tillåta	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	8	acl:relcl	8:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 punct	color:blue
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


