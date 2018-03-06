---
layout: base
title:  'Statistics of aux in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="nl-dep-aux-pass.html">aux:pass</a></tt>.

4630 nodes (2%) are attached to their parents as `aux`.

4271 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.04730021598272.

The following 11 pairs of parts of speech are connected with `aux`: <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (4305; 93% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (151; 3% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (137; 3% instances), <tt><a href="nl-pos-PRON.html">PRON</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (14; 0% instances), <tt><a href="nl-pos-ADV.html">ADV</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="nl-pos-DET.html">DET</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="nl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="nl-pos-NUM.html">NUM</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="nl-pos-X.html">X</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="nl-pos-SYM.html">SYM</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	,,	,,	PUNCT	LET	_	7	punct	_	SpaceAfter=No
2	Mijn	mijn	PRON	VNW|bez|det|stan|vol|1|ev|prenom|zonder|agr	Person=1|PronType=Prs	3	nmod:poss	_	_
3	basisniveau	basisniveau	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	nsubj	_	_
4	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	flink	flink	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	7	advmod	_	_
6	omhoog	omhoog	ADV	BW	_	7	advmod	_	_
7	gegaan	gaan	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	LET	_	7	punct	_	SpaceAfter=No
9	''	''	PUNCT	LET	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	Nee	nee	INTJ	TSW	_	6	parataxis	_	SpaceAfter=No
2	,	,	PUNCT	LET	_	1	punct	_	_
3	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	6	nsubj	_	_
4	waren	zijn	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	6	aux	_	_
5	geen	geen	DET	VNW|onbep|det|stan|prenom|zonder|agr	_	6	det	_	_
6	zenuwen	zenuw	NOUN	N|soort|mv|basis	Number=Plur	0	root	_	_
7	geweest	zijn	AUX	WW|vd|vrij|zonder	VerbForm=Part	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	LET	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Die	die	PRON	VNW|aanw|pron|stan|vol|3|getal	Person=3|PronType=Dem	4	nsubj	_	_
2	zou	zullen	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	4	aux	_	_
3	te	te	ADV	BW	_	4	advmod	_	_
4	machtig	machtig	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	_	_
5	worden	worden	AUX	WW|inf|vrij|zonder	VerbForm=Inf	4	cop	_	_
6	in	in	ADP	VZ|init	_	7	case	_	_
7	Europa	Europa	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	LET	_	4	punct	_	_

~~~


