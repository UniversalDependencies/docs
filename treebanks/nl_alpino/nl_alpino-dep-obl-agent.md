---
layout: base
title:  'Statistics of obl:agent in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="nl_alpino-dep-obl.html">obl</a></tt>.

322 nodes (0%) are attached to their parents as `obl:agent`.

179 instances of `obl:agent` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.91614906832298.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (212; 66% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (80; 25% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt> (6; 2% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt> (3; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (1; 0% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 6 obl:agent	color:blue
1	Dit	dit	PRON	VNW|aanw|pron|stan|vol|3o|ev	Person=3|PronType=Dem	15	nsubj:pass	15:nsubj:pass	_
2	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	15	aux:pass	15:aux:pass	_
3	gisteravond	gisteravond	ADV	BW	_	15	advmod	15:advmod	_
4	door	door	ADP	VZ|init	_	6	case	6:case	_
5	het	het	DET	LID|bep|stan|evon	Definite=Def	6	det	6:det	_
6	actiecomite	actie_comité	ADJ	ADJ|nom|sup|met-e|zonder-n|stan	Degree=Sup	15	obl:agent	14:nsubj:relsubj|15:obl:agent	SpaceAfter=No
7	,	,	PUNCT	LET	_	14	punct	14:punct	_
8	dat	dat	PRON	VNW|betr|pron|stan|vol|3|ev	Person=3|PronType=Rel	14	nsubj	6:ref	_
9	in	in	ADP	VZ|init	_	11	case	11:case	_
10	het	het	DET	LID|bep|stan|evon	Definite=Def	11	det	11:det	_
11	CJMV-gebouw	CJMV_gebouw	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	14	obl	14:obl:in	_
12	in	in	ADP	VZ|init	_	13	case	13:case	_
13	Groningen	Groningen	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	11	nmod	11:nmod:in	_
14	vergaderde	vergaderen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	6	acl:relcl	6:acl:relcl	_
15	besloten	besluiten	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
16	.	.	PUNCT	LET	_	15	punct	15:punct	_

~~~


