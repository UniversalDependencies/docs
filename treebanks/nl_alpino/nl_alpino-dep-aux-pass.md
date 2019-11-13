---
layout: base
title:  'Statistics of aux:pass in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="nl_alpino-dep-aux.html">aux</a></tt>.

2355 nodes (1%) are attached to their parents as `aux:pass`.

2009 instances of `aux:pass` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.05477707006369.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (2352; 100% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:pass	color:blue
1	Waarmee	waarmee	ADV	BW	_	10	advmod	10:advmod	_
2	het	het	DET	LID|bep|stan|evon	Definite=Def	3	det	3:det	_
3	pad	pad	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	10	nsubj:pass	10:nsubj:pass	_
4	voor	voor	ADP	VZ|init	_	7	case	7:case	_
5	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	7:det	_
6	rappe	rap	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	7	amod	7:amod	_
7	Van	Van	PROPN	SPEC|deeleigen	_	10	obl	10:obl:voor	_
8	Alebeek	Alebeek	PROPN	SPEC|deeleigen	_	7	flat	7:flat	_
9	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	10	aux:pass	10:aux:pass	_
10	geëffend	effenen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	LET	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:pass	color:blue
1	Herdacht	herdenken	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	_
2	werden	worden	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	1	aux:pass	1:aux:pass	SpaceAfter=No
3	:	:	PUNCT	LET	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 13 aux:pass	color:blue
1	In	in	ADP	VZ|init	_	11	case	11:case	_
2	het	het	DET	LID|bep|stan|evon	Definite=Def	11	det	11:det	_
3	gedurende	gedurende	ADP	VZ|init	_	7	case	7:case	_
4	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	7:det	_
5	eerste	één	ADJ	TW|rang|prenom|stan	_	7	amod	7:amod	_
6	vier	vier	NUM	TW|hoofd|prenom|stan	_	7	nummod	7:nummod	_
7	maanden	maanden	NOUN	N|soort|mv|basis	Number=Plur	10	obl	10:obl:gedurende	_
8	van	van	ADP	VZ|init	_	9	case	9:case	_
9	1970	1970	NUM	TW|hoofd|vrij	_	7	nmod	7:nmod:van	_
10	begonnen	beginnen	VERB	WW|vd|prenom|zonder	VerbForm=Part	11	acl	11:acl	_
11	aantal	aantal	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	14	obl	14:obl:in	_
12	woningen	woning	NOUN	N|soort|mv|basis	Number=Plur	11	nmod	11:nmod	_
13	zijn	zijn	AUX	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	31	aux:pass	25.1:aux:pass	_
14	begrepen	begrijpen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
15	4.139	4.139	NUM	TW|hoofd|vrij	_	20	nummod	20:nummod	_
16	(	(	PUNCT	LET	_	17	punct	17:punct	SpaceAfter=No
17	5.001	5.001	DET	SPEC|symb	_	15	amod	15:amod	SpaceAfter=No
18	)	)	PUNCT	LET	_	17	punct	17:punct	_
19	bijzondere	bijzonder	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	20	amod	20:amod	_
20	wooneenheden	wooneenheid	NOUN	N|soort|mv|basis	Number=Plur	14	nsubj:pass	14:nsubj:pass	_
21	(	(	PUNCT	LET	_	23	punct	23:punct	SpaceAfter=No
22	voornamelijk	voornamelijk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	23	amod	23:amod	_
23	bejaardenwoningen	bejaardenwoning	NOUN	N|soort|mv|basis	Number=Plur	20	nmod	20:nmod	SpaceAfter=No
24	)	)	PUNCT	LET	_	23	punct	23:punct	_
25	en	en	CCONJ	VG|neven	_	14	cc	14:cc	_
26	in	in	ADP	VZ|init	_	28	case	28:case	_
27	het	het	DET	LID|bep|stan|evon	Definite=Def	28	det	28:det	_
28	aantal	aantal	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	31	orphan	25.1:obl:in	_
29	voltooide	voltooien	VERB	WW|vd|prenom|met-e	VerbForm=Part	30	amod	30:amod	_
30	woningen	woning	NOUN	N|soort|mv|basis	Number=Plur	28	nmod	28:nmod	_
31	2.937	2.937	NUM	TW|hoofd|vrij	_	14	conj	30.1:nummod	_
32	(	(	PUNCT	LET	_	33	punct	33:punct	SpaceAfter=No
33	2.392	2.392	DET	SPEC|symb	_	31	amod	31:amod	SpaceAfter=No
34	)	)	PUNCT	LET	_	33	punct	33:punct	SpaceAfter=No
35	.	.	PUNCT	LET	_	14	punct	14:punct	_

~~~


