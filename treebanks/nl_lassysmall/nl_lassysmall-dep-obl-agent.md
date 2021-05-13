---
layout: base
title:  'Statistics of obl:agent in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-obl.html">obl</a></tt>.

186 nodes (0%) are attached to their parents as `obl:agent`.

120 instances of `obl:agent` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.61290322580645.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (104; 56% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (68; 37% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obl:agent	color:blue
1	Op	op	ADP	VZ|init	_	3	case	3:case	_
2	sommige	sommig	DET	VNW|onbep|det|stan|prenom|met-e|rest	_	3	det	3:det	_
3	plaatsen	plaats	NOUN	N|soort|mv|basis	Number=Plur	7	obl	7:obl:op	_
4	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	7	aux:pass	7:aux:pass	_
5	de	de	DET	LID|bep|stan|rest	Definite=Def	6	det	6:det	_
6	bodem	bodem	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	7	nsubj:pass	7:nsubj:pass	_
7	verontreinigd	verontreinigen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
8	door	door	ADP	VZ|init	_	10	case	10:case	_
9	de	de	DET	LID|bep|stan|rest	Definite=Def	10	det	10:det	_
10	industrie	industrie	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	7	obl:agent	7:obl:agent	SpaceAfter=No
11	.	.	PUNCT	LET	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 obl:agent	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	verhalen	verhaal	NOUN	N|soort|mv|basis	Number=Plur	9	nsubj:pass	9:nsubj:pass	_
3	werden	worden	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	9	aux:pass	9:aux:pass	_
4	door	door	ADP	VZ|init	_	5	case	5:case	_
5	Casterman	Casterman	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	9	obl:agent	9:obl:agent	_
6	in	in	ADP	VZ|init	_	8	case	8:case	_
7	het	het	DET	LID|bep|stan|evon	Definite=Def	8	det	8:det	_
8	Frans	Frans	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	9	obl	9:obl:in	_
9	vertaald	vertalen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	LET	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 7 obl:agent	color:blue
1	Het	het	DET	LID|bep|stan|evon	Definite=Def	3	det	3:det	_
2	Franse	Frans	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	3	amod	3:amod	_
3	leger	leger	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	20	nsubj:pass	20:nsubj:pass	_
4	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	20	aux:pass	20:aux:pass	_
5	door	door	ADP	VZ|init	_	7	case	7:case	_
6	het	het	DET	LID|bep|stan|evon	Definite=Def	7	det	7:det	_
7	Nederlandse	Nederlands	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	20	obl:agent	20:obl:agent	_
8	(	(	PUNCT	LET	_	9	punct	9:punct	SpaceAfter=No
9	Hollanders	Hollander	PROPN	N|eigen|mv|basis	Number=Plur	7	nmod	7:nmod	_
10	en	en	CCONJ	VG|neven	_	11	cc	11:cc	_
11	Belgen	Belg	PROPN	N|eigen|mv|basis	Number=Plur	9	conj	7:nmod|9:conj:en	SpaceAfter=No
12	)	)	PUNCT	LET	_	9	punct	9:punct	SpaceAfter=No
13	,	,	PUNCT	LET	_	15	punct	15:punct	_
14	het	het	DET	LID|bep|stan|evon	Definite=Def	15	det	15:det	_
15	Britse	Brits	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	7	conj	7:conj:en|20:obl:agent	_
16	en	en	CCONJ	VG|neven	_	19	cc	19:cc	_
17	het	het	DET	LID|bep|stan|evon	Definite=Def	19	det	19:det	_
18	Pruisische	Pruisisch	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	19	amod	19:amod	_
19	leger	leger	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	conj	7:conj:en|20:obl:agent	_
20	verslagen	verslaan	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
21	.	.	PUNCT	LET	_	20	punct	20:punct	_

~~~


