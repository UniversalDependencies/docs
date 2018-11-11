---
layout: base
title:  'Statistics of aux:pass in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-aux.html">aux</a></tt>.

958 nodes (1%) are attached to their parents as `aux:pass`.

830 instances of `aux:pass` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.66492693110647.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (955; 100% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux:pass	color:blue
1	Zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|PronType=Prs	3	nmod:poss	3:nmod:poss	_
2	meeste	veel	PRON	VNW|onbep|grad|stan|prenom|met-e|agr|sup	PronType=Ind	3	nmod	3:nmod	_
3	schilderijen	schilderij	NOUN	N|soort|mv|basis	Number=Plur	8	nsubj:pass	8:nsubj:pass	_
4	werden	worden	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	8	aux:pass	8:aux:pass	_
5	echter	echter	ADV	BW	_	8	advmod	8:advmod	_
6	met	met	ADP	VZ|init	_	7	case	7:case	_
7	misnoegdheid	misnoegdheid	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	obl	8:obl:met	_
8	bekeken	bekijken	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	LET	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 4 aux:pass	color:blue
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
20	verslagen	verslag	NOUN	N|soort|mv|basis	Number=Plur	0	root	0:root	SpaceAfter=No
21	.	.	PUNCT	LET	_	20	punct	20:punct	_

~~~


