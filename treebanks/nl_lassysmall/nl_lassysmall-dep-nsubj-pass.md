---
layout: base
title:  'Statistics of nsubj:pass in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-nsubj.html">nsubj</a></tt>.

874 nodes (1%) are attached to their parents as `nsubj:pass`.

874 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.75858123569794.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (529; 61% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (180; 21% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (136; 16% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (5; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 nsubj:pass	color:blue
1	Zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
2	meeste	veel	ADV	VNW|onbep|grad|stan|prenom|met-e|agr|sup	_	3	amod	3:amod	_
3	schilderijen	schilderij	NOUN	N|soort|mv|basis	Number=Plur	8	nsubj:pass	8:nsubj:pass	_
4	werden	worden	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	8	aux:pass	8:aux:pass	_
5	echter	echter	ADV	BW	_	8	advmod	8:advmod	_
6	met	met	ADP	VZ|init	_	7	case	7:case	_
7	misnoegdheid	misnoegdheid	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	obl	8:obl:met	_
8	bekeken	bekijken	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	LET	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	Met	met	ADP	VZ|init	_	3	case	3:case	_
2	het	het	DET	LID|bep|stan|evon	Definite=Def	3	det	3:det	_
3	milieu	milieu	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	9	obl	9:obl:met	_
4	van	van	ADP	VZ|init	_	5	case	5:case	_
5	België	België	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	3	nmod	3:nmod:van	_
6	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	9	aux:pass	9:aux:pass	_
7	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	9	nsubj:pass	9:nsubj:pass	_
8	slecht	slecht	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	9	xcomp	9:xcomp	_
9	gesteld	stellen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	LET	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:pass	color:blue
1	Het	het	DET	LID|bep|stan|evon	Definite=Def	2	det	2:det	_
2	Vlaams	Vlaams	PROPN	SPEC|deeleigen	_	8	nsubj:pass	8:nsubj:pass	_
3	Gewest	Gewest	PROPN	SPEC|deeleigen	_	2	flat	2:flat	_
4	(	(	PUNCT	LET	_	5	punct	5:punct	SpaceAfter=No
5	Vlaanderen	Vlaanderen	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	2	nmod	2:nmod	SpaceAfter=No
6	)	)	PUNCT	LET	_	5	punct	5:punct	_
7	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	8	aux:pass	8:aux:pass	_
8	ingedeeld	in_delen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
9	in	in	ADP	VZ|init	_	11	case	11:case	_
10	5	5	NUM	TW|hoofd|prenom|stan	_	11	nummod	11:nummod	_
11	provincies	provincie	NOUN	N|soort|mv|basis	Number=Plur	8	obl	8:obl:in	SpaceAfter=No
12	:	:	PUNCT	LET	_	8	punct	8:punct	_

~~~


