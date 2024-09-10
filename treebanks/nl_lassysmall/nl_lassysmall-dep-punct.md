---
layout: base
title:  'Statistics of punct in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `punct`

This relation is universal.

34583 nodes (12%) are attached to their parents as `punct`.

19843 instances of `punct` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.41641847150334.

The following 16 pairs of parts of speech are connected with `punct`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (15504; 45% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (7576; 22% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (5165; 15% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (1866; 5% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (1621; 5% instances), <tt><a href="nl_lassysmall-pos-X.html">X</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (973; 3% instances), <tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (534; 2% instances), <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (490; 1% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (360; 1% instances), <tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (229; 1% instances), <tt><a href="nl_lassysmall-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (130; 0% instances), <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (58; 0% instances), <tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (36; 0% instances), <tt><a href="nl_lassysmall-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (18; 0% instances), <tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (12; 0% instances), <tt><a href="nl_lassysmall-pos-INTJ.html">INTJ</a></tt>-<tt><a href="nl_lassysmall-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 punct	color:blue
1	Het	het	DET	LID|bep|stan|evon	Definite=Def	2	det	2:det	_
2	Vlaams	Vlaams	PROPN	SPEC|deeleigen	_	4	nsubj	4:nsubj	_
3	Gewest	Gewest	PROPN	SPEC|deeleigen	_	2	flat	2:flat	_
4	beheert	beheren	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	ook	ook	ADV	BW	_	4	advmod	4:advmod	_
6	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	7:det	_
7	gewestwegen	gewest_weg	NOUN	N|soort|mv|basis	Number=Plur	4	obj	4:obj	_
8	in	in	ADP	VZ|init	_	9	case	9:case	_
9	Vlaanderen	Vlaanderen	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	obl	4:obl:in	SpaceAfter=No
10	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 punct	color:blue
1	Bart	Bart	PROPN	SPEC|deeleigen	_	0	root	0:root	_
2	De	De	PROPN	SPEC|deeleigen	_	1	flat	1:flat	_
3	Wever	Wever	PROPN	SPEC|deeleigen	_	1	flat	1:flat	SpaceAfter=No
4	:	:	PUNCT	LET	_	6	punct	6:punct	_
5	algemeen	algemeen	ADJ	ADJ|prenom|basis|zonder	Degree=Pos	6	amod	6:amod	_
6	voorzitter	voorzitter	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	1	appos	1:appos	_
7	(	(	PUNCT	LET	_	9	punct	9:punct	SpaceAfter=No
8	sinds	sinds	ADP	VZ|init	_	9	case	9:case	_
9	23	23	NUM	TW|hoofd|vrij	_	6	nmod	6:nmod:sinds	_
10	oktober	oktober	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	9	flat	9:flat	_
11	2004	2004	NUM	TW|hoofd|vrij	_	9	flat	9:flat	SpaceAfter=No
12	)	)	PUNCT	LET	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 punct	color:blue
1	Antwerpen	Antwerpen	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	LET	_	3	punct	3:punct	_
3	Gerda	Gerda	PROPN	SPEC|deeleigen	_	1	parataxis	1:parataxis	_
4	Van	Van	PROPN	SPEC|deeleigen	_	3	flat	3:flat	_
5	Langendonck	Langendonck	PROPN	SPEC|deeleigen	_	3	flat	3:flat	_

~~~


