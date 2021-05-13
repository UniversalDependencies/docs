---
layout: base
title:  'Statistics of nummod in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `nummod`

This relation is universal.

1067 nodes (1%) are attached to their parents as `nummod`.

738 instances of `nummod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.79475164011246.

The following 11 pairs of parts of speech are connected with `nummod`: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (745; 70% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (169; 16% instances), <tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (77; 7% instances), <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (34; 3% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (19; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="nl_lassysmall-pos-X.html">X</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="nl_lassysmall-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	2	nsubj	2:nsubj	_
2	telt	tellen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	84	84	NUM	TW|hoofd|prenom|stan	_	4	nummod	4:nummod	_
4	zetels	zetel	NOUN	N|soort|mv|basis	Number=Plur	2	obj	2:obj	SpaceAfter=No
5	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 nummod	color:blue
1	Jan	Jan	PROPN	SPEC|deeleigen	_	0	root	0:root	_
2	Baptist	Baptist	PROPN	SPEC|deeleigen	_	1	flat	1:flat	_
3	Napolitaan	Napolitaan	PROPN	SPEC|deeleigen	_	1	flat	1:flat	_
4	van	van	PROPN	SPEC|deeleigen	_	1	flat	1:flat	_
5	Os	Os	PROPN	SPEC|deeleigen	_	1	flat	1:flat	_
6	(	(	PUNCT	LET	_	7	punct	7:punct	SpaceAfter=No
7	1891-1893	1891-1893	NUM	TW|hoofd|vrij	_	1	nummod	1:nummod	SpaceAfter=No
8	)	)	PUNCT	LET	_	7	punct	7:punct	SpaceAfter=No
9	,	,	PUNCT	LET	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	oppervlakte	oppervlakte	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	LET	_	4	punct	4:punct	_
3	13.521	13.521	NUM	TW|hoofd|prenom|stan	_	4	nummod	4:nummod	_
4	km²	km²	SYM	SPEC|symb	_	1	parataxis	1:parataxis	SpaceAfter=No
5	;	;	PUNCT	LET	_	6	punct	6:punct	_
6	41,5%	41,5%	SYM	SPEC|symb	_	4	parataxis	4:parataxis	_
7	van	van	ADP	VZ|init	_	10	case	10:case	_
8	de	de	DET	LID|bep|stan|rest	Definite=Def	10	det	10:det	_
9	Belgische	Belgisch	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	10	amod	10:amod	_
10	oppervlakte	oppervlakte	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	6	nmod	6:nmod:van	_

~~~


