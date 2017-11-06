---
layout: base
title:  'Statistics of aux:pass in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-aux.html">aux</a></tt>.

981 nodes (1%) are attached to their parents as `aux:pass`.

846 instances of `aux:pass` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.62385321100917.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (956; 97% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (20; 2% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 aux:pass	color:blue
1	Hier	hier	ADV	VNW|aanw|adv-pron|obl|vol|3o|getal	_	7	advmod	_	_
2	wordt	worden	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
3	zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|PronType=Prs	5	nmod:poss	_	_
4	eerste	één	ADJ	TW|rang|prenom|stan	_	5	amod	_	_
5	zoon	zoon	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	7	nsubj:pass	_	_
6	John	John	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	appos	_	_
7	geboren	geboren	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	_	SpaceAfter=No
8	.	.	PUNCT	LET	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux:pass	color:blue
1	In	in	ADP	VZ|init	_	2	case	_	_
2	1815	1815	NUM	TW|hoofd|vrij	_	6	obl	_	_
3	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
4	Napoleon	Napoleon	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	6	nsubj:pass	_	_
5	definitief	definitief	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	6	advmod	_	_
6	verslagen	verslag	NOUN	N|soort|mv|basis	Number=Plur	0	root	_	_
7	in	in	ADP	VZ|init	_	10	case	_	_
8	het	het	DET	LID|bep|stan|evon	Definite=Def	10	det	_	_
9	huidige	huidig	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	10	amod	_	_
10	België	België	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	6	obl	_	_
11	nabij	nabij	ADP	VZ|init	_	13	case	_	_
12	het	het	DET	LID|bep|stan|evon	Definite=Def	13	det	_	_
13	plaatsje	plaats	NOUN	N|soort|ev|dim|onz|stan	Gender=Neut|Number=Sing	10	nmod	_	_
14	Waterloo	Waterloo	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	13	appos	_	_
15	in	in	ADP	VZ|init	_	16	case	_	_
16	Waals-Brabant	Waals-Brabant	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	6	obl	_	SpaceAfter=No
17	.	.	PUNCT	LET	_	6	punct	_	_

~~~


