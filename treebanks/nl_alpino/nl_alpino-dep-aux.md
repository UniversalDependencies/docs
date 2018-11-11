---
layout: base
title:  'Statistics of aux in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="nl_alpino-dep-aux-pass.html">aux:pass</a></tt>.

4615 nodes (2%) are attached to their parents as `aux`.

4228 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.05048754062839.

The following 12 pairs of parts of speech are connected with `aux`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (4311; 93% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (133; 3% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (126; 3% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (16; 0% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-DET.html">DET</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-X.html">X</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	,,	,,	PUNCT	LET	_	7	punct	7:punct	SpaceAfter=No
2	Mijn	mijn	PRON	VNW|bez|det|stan|vol|1|ev|prenom|zonder|agr	Person=1|PronType=Prs	3	nmod:poss	3:nmod:poss	_
3	basisniveau	basisniveau	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	nsubj	7:nsubj	_
4	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
5	flink	flink	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	7	advmod	7:advmod	_
6	omhoog	omhoog	ADV	BW	_	7	advmod	7:advmod	_
7	gegaan	gaan	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	LET	_	7	punct	7:punct	SpaceAfter=No
9	''	''	PUNCT	LET	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Die	die	PRON	VNW|aanw|pron|stan|vol|3|getal	Person=3|PronType=Dem	4	nsubj	4:nsubj	_
2	zou	zullen	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	4	aux	4:aux	_
3	te	te	ADV	BW	_	4	advmod	4:advmod	_
4	machtig	machtig	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
5	worden	worden	AUX	WW|inf|vrij|zonder	VerbForm=Inf	4	cop	4:cop	_
6	in	in	ADP	VZ|init	_	7	case	7:case	_
7	Europa	Europa	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	obl	4:obl:in	SpaceAfter=No
8	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	Nee	nee	INTJ	TSW	_	6	parataxis	6:parataxis	SpaceAfter=No
2	,	,	PUNCT	LET	_	1	punct	1:punct	_
3	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	6	nsubj	6:nsubj	_
4	waren	zijn	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	6	aux	6:aux	_
5	geen	geen	DET	VNW|onbep|det|stan|prenom|zonder|agr	_	6	det	6:det	_
6	zenuwen	zenuw	NOUN	N|soort|mv|basis	Number=Plur	0	root	0:root	_
7	geweest	zijn	AUX	WW|vd|vrij|zonder	VerbForm=Part	6	cop	6:cop	SpaceAfter=No
8	.	.	PUNCT	LET	_	6	punct	6:punct	_

~~~


