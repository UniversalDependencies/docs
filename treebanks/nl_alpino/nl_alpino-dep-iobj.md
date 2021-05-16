---
layout: base
title:  'Statistics of iobj in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `iobj`

This relation is universal.

549 nodes (0%) are attached to their parents as `iobj`.

324 instances of `iobj` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.56284153005464.

The following 12 pairs of parts of speech are connected with `iobj`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (297; 54% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (162; 30% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (58; 11% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (9; 2% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Dat	dat	PRON	VNW|aanw|pron|stan|vol|3o|ev	Person=3|PronType=Dem	2	nsubj	2:nsubj	_
2	gaf	geven	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	me	me	PRON	VNW|pr|pron|obl|red|1|ev	Case=Acc|Person=1|PronType=Prs	2	iobj	2:iobj|10:nsubj:xsubj	_
4	de	de	DET	LID|bep|stan|rest	Definite=Def	2	compound:prt	2:compound:prt	_
5	tijd	tijd	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	fixed	4:fixed	_
6	om	om	ADP	VZ|init	_	10	mark	10:mark	_
7	eens	eens	ADV	BW	_	10	advmod	10:advmod	_
8	na	na	ADP	VZ|fin	_	10	compound:prt	10:compound:prt	_
9	te	te	ADP	VZ|init	_	10	mark	10:mark	_
10	denken	na_denken	VERB	WW|inf|vrij|zonder	VerbForm=Inf	2	xcomp	2:xcomp	_
11	over	over	ADP	VZ|init	_	13	case	13:case	_
12	mijn	mijn	PRON	VNW|bez|det|stan|vol|1|ev|prenom|zonder|agr	Person=1|Poss=Yes|PronType=Prs	13	nmod:poss	13:nmod:poss	_
13	instelling	instelling	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	10	obl	10:obl:over	SpaceAfter=No
14	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 iobj	color:blue
1	Okker	Okker	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
2	zwaaide	toe_zwaaien	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	_
4	tegenstander	tegenstander	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	iobj	2:iobj	_
5	lof	lof	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	obj	2:obj	_
6	toe	toe	ADP	VZ|fin	_	2	compound:prt	2:compound:prt	SpaceAfter=No
7	:	:	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 iobj	color:blue
1	Natuurlijk	natuurlijk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	10	advmod	10:advmod	_
2	had	hebben	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	10	aux	10:aux	_
3	iedereen	iedereen	PRON	VNW|onbep|pron|stan|vol|3p|ev	Person=3|PronType=Ind	10	nsubj	10:nsubj	_
4	Van	Van	PROPN	SPEC|deeleigen	_	10	iobj	10:iobj	_
5	der	der	PROPN	SPEC|deeleigen	_	4	flat	4:flat	_
6	Schans	Schans	PROPN	SPEC|deeleigen	_	4	flat	4:flat	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	8	det	8:det	_
8	titel	titel	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	10	obj	10:obj	_
9	zo	zo	ADV	BW	_	10	advmod	10:advmod	_
10	gegund	gunnen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	LET	_	10	punct	10:punct	_

~~~


