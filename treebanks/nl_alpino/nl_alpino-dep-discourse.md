---
layout: base
title:  'Statistics of discourse in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `discourse`

This relation is universal.

65 nodes (0%) are attached to their parents as `discourse`.

48 instances of `discourse` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.96923076923077.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-INTJ.html">INTJ</a></tt> (40; 62% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-INTJ.html">INTJ</a></tt> (11; 17% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-INTJ.html">INTJ</a></tt> (5; 8% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_alpino-pos-INTJ.html">INTJ</a></tt> (4; 6% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-INTJ.html">INTJ</a></tt> (3; 5% instances), <tt><a href="nl_alpino-pos-INTJ.html">INTJ</a></tt>-<tt><a href="nl_alpino-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_alpino-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 discourse	color:blue
1	Nee	nee	INTJ	TSW	_	8	discourse	8:discourse	SpaceAfter=No
2	,	,	PUNCT	LET	_	1	punct	1:punct	_
3	ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	8	nsubj	8:nsubj	_
4	heb	hebben	AUX	WW|pv|tgw|ev	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	8	aux	8:aux	_
5	niets	niets	PRON	VNW|onbep|pron|stan|vol|3o|ev	Person=3|PronType=Ind	8	obj	8:obj	_
6	tegen	tegen	ADP	VZ|init	_	7	case	7:case	_
7	Wout-Jan	Wout-Jan	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	obl	8:obl:tegen	_
8	gezegd	zeggen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	LET	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Nee	nee	INTJ	TSW	_	6	discourse	6:discourse	SpaceAfter=No
2	,	,	PUNCT	LET	_	1	punct	1:punct	_
3	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	6	nsubj	6:nsubj	_
4	waren	zijn	AUX	WW|pv|verl|mv	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	6	aux	6:aux	_
5	geen	geen	DET	VNW|onbep|det|stan|prenom|zonder|agr	PronType=Neg	6	det	6:det	_
6	zenuwen	zenuw	NOUN	N|soort|mv|basis	Number=Plur	0	root	0:root	_
7	geweest	zijn	AUX	WW|vd|vrij|zonder	VerbForm=Part	6	cop	6:cop	SpaceAfter=No
8	.	.	PUNCT	LET	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	Nee	nee	INTJ	TSW	_	9	discourse	9:discourse	SpaceAfter=No
2	,	,	PUNCT	LET	_	1	punct	1:punct	_
3	er	er	ADV	VNW|aanw|adv-pron|stan|red|3|getal	_	9	advmod	9:advmod	_
4	waren	zijn	AUX	WW|pv|verl|mv	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	9	cop	9:cop	_
5	mensen	mens	NOUN	N|soort|mv|basis	Number=Plur	9	nsubj	9:nsubj	_
6	achter	achter	ADP	VZ|init	_	8	case	8:case	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def|PronType=Art	8	det	8:det	_
8	schermen	scherm	NOUN	N|soort|mv|basis	Number=Plur	9	obl	9:obl:achter	_
9	werkzaam	werkzaam	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	LET	_	9	punct	9:punct	_

~~~


