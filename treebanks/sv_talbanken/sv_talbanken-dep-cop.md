---
layout: base
title:  'Statistics of cop in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `cop`

This relation is universal.

1715 nodes (2%) are attached to their parents as `cop`.

1548 instances of `cop` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36443148688047.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (961; 56% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (627; 37% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (78; 5% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (19; 1% instances), <tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (11; 1% instances), <tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="sv_talbanken-pos-DET.html">DET</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	2	nsubj	2:nsubj	_
2	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	anledning	anledning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	2:obj	_
4	att	att	PART	IE	_	6	mark	6:mark	_
5	vara	vara	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	cop	6:cop	_
6	pessimistisk	pessimistisk	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	3	acl	3:acl:att	SpaceAfter=No
7	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 cop	color:blue
1	Sakta	sakta	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	10	nsubj	10:nsubj	_
2	och	och	CCONJ	KN	_	6	cc	6:cc	_
3	kanske	kanske	ADV	AB	_	6	advmod	6:advmod	_
4	rent	ren	ADV	AB|POS	Degree=Pos	6	advmod	6:advmod	_
5	av	av	ADP	PP	_	4	fixed	4:fixed	_
6	avsaktande	avsaktande	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	1	conj	1:conj:och|10:nsubj	_
7	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
8	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	10	det	10:det	_
9	rätta	rätt	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	10	amod	10:amod	_
10	ordet	ord	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	MAD	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Annat	annan	PRON	PN|NEU|SIN|IND|SUB/OBJ	Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	0	root	0:root	_
2	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	1	cop	1:cop	_
3	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	1	nsubj	1:nsubj	_
4	i	i	ADP	PP	_	5	case	5:case	_
5	bondesamhället	bondesamhälle	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	1	obl	1:obl:i	SpaceAfter=No
6	.	.	PUNCT	MAD	_	1	punct	1:punct	_

~~~


