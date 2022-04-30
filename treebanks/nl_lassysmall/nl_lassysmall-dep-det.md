---
layout: base
title:  'Statistics of det in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `det`

This relation is universal.

10063 nodes (10%) are attached to their parents as `det`.

10062 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41905992248832.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (8218; 82% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (1347; 13% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (303; 3% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (109; 1% instances), <tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (53; 1% instances), <tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (14; 0% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="nl_lassysmall-pos-X.html">X</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Leden	lid	NOUN	N|soort|mv|basis	Number=Plur	0	root	0:root	_
2	in	in	ADP	VZ|init	_	4	case	4:case	_
3	de	de	DET	LID|bep|stan|rest	Definite=Def	4	det	4:det	_
4	Kamer	kamer	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	1	nmod	1:nmod:in	_
5	van	van	ADP	VZ|init	_	6	case	6:case	_
6	Volksvertegenwoordigers	volksvertegenwoordiger	NOUN	N|soort|mv|basis	Number=Plur	4	nmod	4:nmod:van	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Leden	lid	NOUN	N|soort|mv|basis	Number=Plur	0	root	0:root	_
2	in	in	ADP	VZ|init	_	4	case	4:case	_
3	het	het	DET	LID|bep|stan|evon	Definite=Def	4	det	4:det	_
4	Vlaams	Vlaams	PROPN	SPEC|deeleigen	_	1	nmod	1:nmod:in	_
5	Parlement	Parlement	PROPN	SPEC|deeleigen	_	4	flat	4:flat	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	4	nsubj:pass	4:nsubj:pass	_
2	Schelde	Schelde	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	1	flat	1:flat	_
3	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	beschouwd	beschouwen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
5	als	als	SCONJ	VG|onder	_	6	mark	6:mark	_
6	grens	grens	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	xcomp	4:xcomp	_
7	tussen	tussen	ADP	VZ|init	_	10	case	10:case	_
8	de	de	DET	LID|bep|stan|rest	Definite=Def	10	det	10:det	_
9	beide	beide	DET	VNW|onbep|grad|stan|prenom|met-e|mv|basis	_	10	det	10:det	_
10	rijken	rijk	ADJ	ADJ|nom|basis|met-e|mv-n	Degree=Pos	6	nmod	6:nmod:tussen	SpaceAfter=No
11	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


