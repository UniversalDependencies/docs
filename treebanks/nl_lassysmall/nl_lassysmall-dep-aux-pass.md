---
layout: base
title:  'Statistics of aux:pass in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-aux.html">aux</a></tt>.

3683 nodes (1%) are attached to their parents as `aux:pass`.

3095 instances of `aux:pass` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.4580505023079.

The following 5 pairs of parts of speech are connected with `aux:pass`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (3679; 100% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-X.html">X</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux:pass	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 aux:pass	color:blue
1	Na	na	ADP	VZ|init	_	5	mark	5:mark	_
2	bijna	bijna	ADV	BW	_	4	amod	4:amod	_
3	6	6	NUM	TW|hoofd|prenom|stan	_	4	nummod	4:nummod	_
4	jaar	jaar	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	5	obl	5:obl	_
5	werkloos	werkloos	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	13	advcl	13:advcl:na	_
6	te	te	ADP	VZ|init	_	5	mark	5:mark	_
7	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	5	aux:pass	5:aux:pass	_
8	geweest	zijn	AUX	WW|vd|vrij|zonder	VerbForm=Part	5	cop	5:cop	_
9	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	13	aux	13:aux	_
10	eigenlijk	eigenlijk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	13	advmod	13:advmod	_
11	iedereen	iedereen	PRON	VNW|onbep|pron|stan|vol|3p|ev	Person=3|PronType=Ind	13	nsubj	13:nsubj	_
12	Adriaan	Adriaan	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	13	obj	13:obj	_
13	vergeten	vergeten	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
14	.	.	PUNCT	LET	_	13	punct	13:punct	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 38 aux:pass	color:blue
1	In	in	ADP	VZ|init	_	5	case	5:case	_
2	een	een	DET	LID|onbep|stan|agr	Definite=Ind	5	det	5:det	_
3	zeer	zeer	ADV	BW	_	4	advmod	4:advmod	_
4	ontspannen	ontspannen	VERB	WW|vd|prenom|zonder	VerbForm=Part	5	acl	5:acl	_
5	sfeer	sfeer	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	16	obl	16:obl:in	_
6	in	in	ADP	VZ|init	_	8	case	8:case	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	8	det	8:det	_
8	zomer	zomer	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	nmod	5:nmod:in	_
9	van	van	ADP	VZ|init	_	10	case	10:case	_
10	1967	1967	NUM	TW|hoofd|vrij	_	8	nmod	8:nmod:van	_
11	werden	worden	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	16	aux:pass	16:aux:pass	_
12	een	een	DET	LID|onbep|stan|agr	Definite=Ind	14	det	14:det	_
13	groot	groot	ADJ	ADJ|prenom|basis|zonder	Degree=Pos	14	amod	14:amod	_
14	aantal	aantal	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	15	nmod	15:nmod	_
15	liedjes	lied	NOUN	N|soort|mv|dim	Number=Plur	16	nsubj:pass	16:nsubj:pass|19:nsubj:pass	_
16	opgenomen	op_nemen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
17	,	,	PUNCT	LET	_	19	punct	19:punct	_
18	die	die	PRON	VNW|betr|pron|stan|vol|persoon|getal	PronType=Rel	19	nsubj:pass	15:ref	_
19	eerst	eerst	ADV	BW	_	15	acl:relcl	18.1:advmod	_
20	op	op	ADP	VZ|init	_	22	case	22:case	_
21	witte	wit	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	22	amod	22:amod	_
22	platen	plaat	NOUN	N|soort|mv|basis	Number=Plur	19	orphan	18.1:obl:op	_
23	en	en	CCONJ	VG|neven	_	37	cc	37:cc	_
24	pas	pas	ADV	BW	_	26	advmod	26:advmod	_
25	veel	veel	ADV	VNW|onbep|grad|stan|vrij|zonder|basis	_	26	advmod	26:advmod	_
26	later	laat	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	37	advmod	37:advmod	SpaceAfter=No
27	,	,	PUNCT	LET	_	26	punct	26:punct	_
28	in	in	ADP	VZ|init	_	29	case	29:case	_
29	1975	1975	NUM	TW|hoofd|vrij	_	37	obl	37:obl:in	_
30	door	door	ADP	VZ|init	_	31	case	31:case	_
31	Columbia	Columbia	PROPN	N|eigen|ev|basis|genus|stan	Gender=Com,Neut|Number=Sing	37	obl	37:obl:door	SpaceAfter=No
32	,	,	PUNCT	LET	_	31	punct	31:punct	_
33	als	als	SCONJ	VG|onder	_	34	mark	34:mark	_
34	The	The	X	SPEC|vreemd	Foreign=Yes	37	advcl	37:advcl:als	_
35	Basement	Basement	X	SPEC|vreemd	Foreign=Yes	34	fixed	34:fixed	_
36	Tapes	Tapes	X	SPEC|vreemd	Foreign=Yes	34	fixed	34:fixed	_
37	uitgebracht	uit_brengen	VERB	WW|vd|vrij|zonder	VerbForm=Part	19	conj	18.1:conj:en	_
38	werden	worden	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	19	aux:pass	18.1:aux:pass	SpaceAfter=No
39	.	.	PUNCT	LET	_	16	punct	16:punct	_

~~~


