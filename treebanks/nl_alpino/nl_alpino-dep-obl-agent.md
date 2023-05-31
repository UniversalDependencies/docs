---
layout: base
title:  'Statistics of obl:agent in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="nl_alpino-dep-obl.html">obl</a></tt>.

339 nodes (0%) are attached to their parents as `obl:agent`.

189 instances of `obl:agent` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.92330383480826.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (218; 64% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (93; 27% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt> (6; 2% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 obl:agent	color:blue
1	Hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	7	nsubj:pass	7:nsubj:pass	_
2	zou	zullen	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	7	aux	7:aux	_
3	'	'	PUNCT	LET	_	5	punct	5:punct	SpaceAfter=No
4	per	per	ADP	VZ|init	_	5	case	5:case	_
5	ongeluk	ongeluk	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	obl	7:obl:per	SpaceAfter=No
6	'	'	PUNCT	LET	_	5	punct	5:punct	_
7	ontvoerd	ontvoeren	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
8	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	7	aux:pass	7:aux:pass	_
9	door	door	ADP	VZ|init	_	11	case	11:case	_
10	de	de	DET	LID|bep|stan|rest	Definite=Def	11	det	11:det	_
11	FARC-rebellen	FARC_rebel	NOUN	N|soort|mv|basis	Number=Plur	7	obl:agent	7:obl:agent	SpaceAfter=No
12	.	.	PUNCT	LET	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl:agent	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	defensie	defensie	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	nsubj:pass	5:nsubj:pass	_
3	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	5	aux:pass	5:aux:pass	_
4	danig	danig	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	5	advmod	5:advmod	_
5	beproefd	beproeven	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
6	door	door	ADP	VZ|init	_	9	case	9:case	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	9	det	9:det	_
8	dartele	dartel	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	9	amod	9:amod	_
9	Egyptenaren	Egyptenaar	PROPN	N|eigen|mv|basis	Number=Plur	5	obl:agent	5:obl:agent	SpaceAfter=No
10	.	.	PUNCT	LET	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 21 obl:agent	color:blue
1	,,	,,	PUNCT	LET	_	3	punct	3:punct	SpaceAfter=No
2	Jullie	jullie	PRON	VNW|pers|pron|stan|nadr|2v|mv	Person=2|PronType=Prs	3	nsubj	3:nsubj	_
3	hebben	hebben	VERB	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	geluk	geluk	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	3	obj	3:obj	_
5	dat	dat	SCONJ	VG|onder	_	8	mark	8:mark	_
6	ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	8	nsubj	8:nsubj	_
7	snel	snel	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	8	advmod	8:advmod	_
8	werk	werken	VERB	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	4	acl	4:acl:dat	SpaceAfter=No
9	''	''	PUNCT	LET	_	3	punct	3:punct	SpaceAfter=No
10	,	,	PUNCT	LET	_	11	punct	11:punct	_
11	zei	zeggen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	3	parataxis	3:parataxis	_
12	De	De	PROPN	SPEC|deeleigen	_	11	nsubj	11:nsubj|17:det	_
13	Vries	Vries	PROPN	SPEC|deeleigen	_	12	flat	12:flat	SpaceAfter=No
14	,	,	PUNCT	LET	_	23	punct	23:punct	_
15	wiens	wie	DET	VNW|vb|pron|gen|vol|3m|ev	_	17	det	17:det	_
16	abstracte	abstract	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	17	amod	17:amod	_
17	werk	werk	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	23	nsubj:pass	12:ref	_
18	niet	niet	ADV	BW	_	23	advmod	23:advmod	_
19	door	door	ADP	VZ|init	_	21	case	21:case	_
20	alle	al	DET	VNW|onbep|det|stan|prenom|met-e|agr	_	21	det	21:det	_
21	aanwezigen	aanwezig	ADJ	ADJ|nom|basis|met-e|mv-n	Degree=Pos	23	obl:agent	23:obl:agent	_
22	wordt	worden	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	23	aux:pass	23:aux:pass	_
23	gewaardeerd	waarderen	VERB	WW|vd|vrij|zonder	VerbForm=Part	12	acl:relcl	12:acl:relcl	SpaceAfter=No
24	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


