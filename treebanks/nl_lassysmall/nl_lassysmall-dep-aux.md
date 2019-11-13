---
layout: base
title:  'Statistics of aux in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="nl_lassysmall-dep-aux-pass.html">aux:pass</a></tt>.

593 nodes (1%) are attached to their parents as `aux`.

525 instances of `aux` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71838111298482.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (572; 96% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Multiculturaliteit	multiculturaliteit	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	nsubj	5:nsubj	_
2	heeft	hebben	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
3	bij	bij	ADP	VZ|init	_	4	case	4:case	_
4	ons	ons	PRON	VNW|pr|pron|obl|vol|1|mv	Case=Acc|Person=1|PronType=Prs	5	obl	5:obl:bij	_
5	geleid	leiden	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
6	tot	tot	ADP	VZ|init	_	7	case	7:case	_
7	multicriminaliteit	multicriminaliteit	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	obl	5:obl:tot	SpaceAfter=No
8	.	.	PUNCT	LET	_	5	punct	5:punct	_
9	"	"	PUNCT	LET	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 aux	color:blue
1	Het	het	DET	LID|bep|stan|evon	Definite=Def	2	det	2:det	_
2	resultaat	resultaat	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	9	nsubj	9:nsubj	_
3	van	van	ADP	VZ|init	_	5	case	5:case	_
4	zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	5	nmod:poss	5:nmod:poss	_
5	opleiding	opleiding	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	nmod	2:nmod:van	_
6	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	9	aux	9:aux	_
7	niet	niet	ADV	BW	_	9	advmod	9:advmod	_
8	zo	zo	ADV	BW	_	9	advmod	9:advmod	_
9	schitterend	schitterend	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
10	geweest	zijn	AUX	WW|vd|vrij|zonder	VerbForm=Part	9	cop	9:cop	SpaceAfter=No
11	.	.	PUNCT	LET	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Dat	dat	PRON	VNW|aanw|pron|stan|vol|3o|ev	Person=3|PronType=Dem	4	nsubj	4:nsubj	_
2	moest	moeten	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	4	aux	4:aux	_
3	"	"	PUNCT	LET	_	4	punct	4:punct	SpaceAfter=No
4	woestijnvos	woestijnvos	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	SpaceAfter=No
5	"	"	PUNCT	LET	_	4	punct	4:punct	_
6	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	4	cop	4:cop	SpaceAfter=No
7	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


