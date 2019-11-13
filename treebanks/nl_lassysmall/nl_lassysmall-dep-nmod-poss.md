---
layout: base
title:  'Statistics of nmod:poss in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-nmod.html">nmod</a></tt>.

761 nodes (1%) are attached to their parents as `nmod:poss`.

761 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34822601839685.

The following 10 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (676; 89% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (49; 6% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (12; 2% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (11; 1% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-X.html">X</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 0% instances).


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
3	meesterstuk	meesterstuk	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	0	root	0:root	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nmod:poss	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	3	det	3:det	_
2	Belgische	Belgisch	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	3	amod	3:amod	_
3	keuken	keuken	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	nsubj	4:nsubj	_
4	staat	staan	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	bekend	bekend	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	4	compound:prt	4:compound:prt	_
6	om	om	ADP	VZ|init	_	9	case	9:case	_
7	zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	_
8	lekkere	lekker	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	9	amod	9:amod	_
9	eten	eten	VERB	WW|inf|nom|zonder|zonder-n	VerbForm=Inf	4	obl	4:obl:om	SpaceAfter=No
10	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


