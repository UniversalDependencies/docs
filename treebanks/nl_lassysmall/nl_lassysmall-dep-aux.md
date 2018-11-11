---
layout: base
title:  'Statistics of aux in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="nl_lassysmall-dep-aux-pass.html">aux:pass</a></tt>.

601 nodes (1%) are attached to their parents as `aux`.

519 instances of `aux` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.7171381031614.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (547; 91% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (27; 4% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (18; 3% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Intussen	intussen	ADV	BW	_	5	advmod	5:advmod	_
2	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	5	aux	5:aux	_
3	hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	5	nsubj	5:nsubj	_
4	70	70	NUM	TW|hoofd|prenom|stan	_	5	nummod	5:nummod	_
5	jaar	jaar	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	0	root	0:root	_
6	geworden	worden	AUX	WW|vd|vrij|zonder	VerbForm=Part	5	cop	5:cop	SpaceAfter=No
7	.	.	PUNCT	LET	_	5	punct	5:punct	_

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
4	zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|PronType=Prs	5	nmod:poss	5:nmod:poss	_
5	opleiding	opleiding	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	nmod	2:nmod:van	_
6	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	9	aux	9:aux	_
7	niet	niet	ADV	BW	_	9	advmod	9:advmod	_
8	zo	zo	ADV	BW	_	9	advmod	9:advmod	_
9	schitterend	schitterend	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
10	geweest	zijn	AUX	WW|vd|vrij|zonder	VerbForm=Part	9	cop	9:cop	SpaceAfter=No
11	.	.	PUNCT	LET	_	9	punct	9:punct	_

~~~


