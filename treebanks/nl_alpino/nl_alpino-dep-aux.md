---
layout: base
title:  'Statistics of aux in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="nl_alpino-dep-aux-pass.html">aux:pass</a></tt>.

3890 nodes (2%) are attached to their parents as `aux`.

3598 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.21928020565553.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (3727; 96% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (72; 2% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (68; 2% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	,,	,,	PUNCT	LET	_	7	punct	7:punct	SpaceAfter=No
2	Mijn	mijn	PRON	VNW|bez|det|stan|vol|1|ev|prenom|zonder|agr	Person=1|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
3	basisniveau	basis_niveau	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	nsubj	7:nsubj	_
4	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
5	flink	flink	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	7	advmod	7:advmod	_
6	omhoog	omhoog	ADV	BW	_	7	advmod	7:advmod	_
7	gegaan	gaan	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	LET	_	7	punct	7:punct	SpaceAfter=No
9	''	''	PUNCT	LET	_	7	punct	7:punct	_

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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	staking	staking	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	6	nsubj	6:nsubj	_
3	zou	zullen	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	6	aux	6:aux	_
4	afgelopen	af_lopen	VERB	WW|vd|prenom|zonder	VerbForm=Part	5	amod	5:amod	_
5	middernacht	middernacht	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	6	obl	6:obl	_
6	voorbij	voorbij	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
7	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	6	cop	6:cop	SpaceAfter=No
8	.	.	PUNCT	LET	_	6	punct	6:punct	_

~~~


