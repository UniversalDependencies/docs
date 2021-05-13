---
layout: base
title:  'Statistics of nmod:poss in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-nmod.html">nmod</a></tt>.

760 nodes (1%) are attached to their parents as `nmod:poss`.

760 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34868421052632.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (679; 89% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (50; 7% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (11; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Onze	ons	PRON	VNW|bez|det|stan|vol|1|mv|prenom|met-e|rest	Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	_
2	partij	partij	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	13	nsubj	13:nsubj	SpaceAfter=No
3	,	,	PUNCT	LET	_	6	punct	6:punct	_
4	het	het	DET	LID|bep|stan|evon	Definite=Def	6	det	6:det	_
5	«	«	PUNCT	LET	_	6	punct	6:punct	_
6	Vlaams	Vlaams	PROPN	SPEC|deeleigen	_	2	appos	2:appos	_
7	Belang	Belang	PROPN	SPEC|deeleigen	_	6	flat	6:flat	_
8	»	»	PUNCT	LET	_	6	punct	6:punct	SpaceAfter=No
9	,	,	PUNCT	LET	_	2	punct	2:punct	_
10	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	13	cop	13:cop	_
11	hier	hier	ADV	VNW|aanw|adv-pron|obl|vol|3o|getal	_	13	nmod	13:nmod:van	_
12	de	de	DET	LID|bep|stan|rest	Definite=Def	13	det	13:det	_
13	opvolger	opvolger	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	_
14	van	van	ADP	VZ|fin	_	11	case	11:case	SpaceAfter=No
15	.	.	PUNCT	LET	_	13	punct	13:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	Ensors	Ensor	PROPN	N|eigen|ev|basis|gen	Number=Sing	3	nmod:poss	3:nmod:poss	_
2	spectaculaire	spectaculair	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	3	amod	3:amod	_
3	meesterstuk	meester_stuk	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	0	root	0:root	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:poss	color:blue
1	Toch	toch	ADV	BW	_	10	advmod	10:advmod	_
2	wordt	worden	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	10	aux:pass	10:aux:pass	_
3	de	de	DET	LID|bep|stan|rest	Definite=Def	4	det	4:det	_
4	naam	naam	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	10	nsubj:pass	10:nsubj:pass	_
5	van	van	ADP	VZ|init	_	6	case	6:case	_
6	Ensor	Ensor	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	nmod	4:nmod:van	_
7	op	op	ADP	VZ|init	_	9	case	9:case	_
8	zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	_
9	Frans	Frans	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	10	xcomp	10:xcomp	_
10	uitsproken	uit_spreken	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	LET	_	10	punct	10:punct	_

~~~


