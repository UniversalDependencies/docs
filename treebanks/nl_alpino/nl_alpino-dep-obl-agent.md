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

The following 11 pairs of parts of speech are connected with `obl:agent`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (214; 66% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (75; 23% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (10; 3% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt> (6; 2% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt> (1; 0% instances).


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
11	FARC-rebellen	FARC-rebel	NOUN	N|soort|mv|basis	Number=Plur	7	obl:agent	7:obl:agent	SpaceAfter=No
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 7 obl:agent	color:blue
1	Noem	noemen	VERB	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
2	een	een	DET	LID|onbep|stan|agr	Definite=Ind	3	det	3:det	_
3	journalist	journalist	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	1	obj	1:obj|14:nsubj:pass:relsubj	_
4	die	die	PRON	VNW|betr|pron|stan|vol|persoon|getal	PronType=Rel	14	nsubj:pass	3:ref	_
5	door	door	ADP	VZ|init	_	7	case	7:case	_
6	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	7:det	_
7	Gewapende	gewapend	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	14	obl:agent	14:obl:agent	_
8	Islamitische	islamitisch	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	7	fixed	7:fixed	_
9	Groep	groep	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	7	fixed	7:fixed	_
10	(	(	PUNCT	LET	_	11	punct	11:punct	SpaceAfter=No
11	GIA	GIA	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
12	)	)	PUNCT	LET	_	11	punct	11:punct	_
13	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	14	aux:pass	14:aux:pass	_
14	vermoord	vermoorden	VERB	WW|vd|vrij|zonder	VerbForm=Part	3	acl:relcl	3:acl:relcl	SpaceAfter=No
15	.	.	PUNCT	LET	_	1	punct	1:punct	_

~~~


