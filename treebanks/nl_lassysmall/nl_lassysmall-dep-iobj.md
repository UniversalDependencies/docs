---
layout: base
title:  'Statistics of iobj in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `iobj`

This relation is universal.

73 nodes (0%) are attached to their parents as `iobj`.

38 instances of `iobj` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.64383561643836.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (27; 37% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (25; 34% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (18; 25% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Jaak	Jaak	PROPN	SPEC|deeleigen	_	4	nsubj	_	_
2	Van	Van	PROPN	SPEC|deeleigen	_	1	flat:name	_	_
3	Assche	Assche	PROPN	SPEC|deeleigen	_	1	flat:name	_	_
4	geeft	geven	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
5	dit	dit	DET	VNW|aanw|det|stan|prenom|zonder|evon	_	6	det	_	_
6	personage	personage	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	iobj	_	_
7	gestalte	gestalte	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	compound:prt	_	SpaceAfter=No
8	.	.	PUNCT	LET	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 iobj	color:blue
1	Postuum	postuum	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	10	advmod	_	_
2	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	10	aux:pass	_	_
3	hem	hem	PRON	VNW|pers|pron|obl|vol|3|ev|masc	Case=Acc|Person=3|PronType=Prs	10	iobj	_	_
4	ook	ook	ADV	BW	_	10	advmod	_	_
5	de	de	DET	LID|bep|stan|rest	Definite=Def	6	det	_	_
6	Staatsprijs	staatsprijs	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	10	nsubj:pass	_	_
7	voor	voor	ADP	VZ|init	_	9	case	_	_
8	de	de	DET	LID|bep|stan|rest	Definite=Def	9	det	_	_
9	literatuur	literatuur	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	6	nmod	_	_
10	toegekend	toekennen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	_	SpaceAfter=No
11	.	.	PUNCT	LET	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Ook	ook	ADV	BW	_	3	amod	_	_
2	op	op	ADP	VZ|init	_	3	case	_	_
3	privévlak	privévlak	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	obl	_	_
4	gaat	gaan	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
5	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	4	nsubj	_	_
6	Kim	Kim	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	iobj	_	_
7	niet	niet	ADV	BW	_	4	advmod	_	_
8	voor	voor	ADP	VZ|init	_	4	compound:prt	_	_
9	de	de	DET	LID|bep|stan|rest	Definite=Def	8	fixed	_	_
10	wind	wind	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	fixed	_	SpaceAfter=No
11	.	.	PUNCT	LET	_	4	punct	_	_

~~~


