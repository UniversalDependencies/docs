---
layout: base
title:  'Statistics of nsubj:pass in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-nsubj.html">nsubj</a></tt>.

760 nodes (1%) are attached to their parents as `nsubj:pass`.

760 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.84210526315789.

The following 16 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (483; 64% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (121; 16% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (100; 13% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (15; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	_	_
2	poppen	pop	NOUN	N|soort|mv|basis	Number=Plur	4	nsubj:pass	_	_
3	waren	zijn	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	vervaardigd	vervaardigen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	_	_
5	door	door	ADP	VZ|init	_	7	case	_	_
6	het	het	DET	LID|bep|stan|evon	Definite=Def	7	det	_	_
7	atelier	atelier	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	obl	_	_
8	Creatuur	Creatuur	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	appos	_	SpaceAfter=No
9	.	.	PUNCT	LET	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Julien	Julien	PROPN	SPEC|deeleigen	_	7	nsubj:pass	_	_
2	Lahaut	Lahaut	PROPN	SPEC|deeleigen	_	1	flat:name	_	_
3	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
4	een	een	DET	LID|onbep|stan|agr	Definite=Ind	5	det	_	_
5	week	week	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	6	obl	_	_
6	later	laat	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	7	advmod	_	_
7	vermoord	vermoorden	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	LET	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	Traditioneel	traditioneel	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	4	advmod	_	_
2	wordt	worden	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
3	deze	deze	PRON	VNW|aanw|det|stan|nom|met-e|zonder-n	PronType=Dem	4	nsubj:pass	_	_
4	geopend	openen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	_	_
5	met	met	ADP	VZ|init	_	7	case	_	_
6	een	een	DET	LID|onbep|stan|agr	Definite=Ind	7	det	_	_
7	vuurwerk	vuurwerk	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	LET	_	4	punct	_	_

~~~


