---
layout: base
title:  'Statistics of aux:pass in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-aux.html">aux</a></tt>.

3687 nodes (1%) are attached to their parents as `aux:pass`.

3097 instances of `aux:pass` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.45701112015188.

The following 5 pairs of parts of speech are connected with `aux:pass`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (3682; 100% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-X.html">X</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux:pass	color:blue
1	Zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
2	meeste	veel	ADV	VNW|onbep|grad|stan|prenom|met-e|agr|sup	_	3	advmod	3:advmod	_
3	schilderijen	schilderij	NOUN	N|soort|mv|basis	Number=Plur	8	nsubj:pass	8:nsubj:pass	_
4	werden	worden	AUX	WW|pv|verl|mv	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	8	aux:pass	8:aux:pass	_
5	echter	echter	ADV	BW	_	8	advmod	8:advmod	_
6	met	met	ADP	VZ|init	_	7	case	7:case	_
7	misnoegdheid	misnoegdheid	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	obl	8:obl:met	_
8	bekeken	bekijken	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	LET	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:pass	color:blue
1	Zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	_
2	plan	plan	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	0	root	0:root	_
3	was	zijn	AUX	WW|pv|verl|ev	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	aux:pass	2:aux:pass	_
4	geweest	zijn	AUX	WW|vd|vrij|zonder	VerbForm=Part	2	cop	2:cop	_
5	om	om	ADP	VZ|init	_	14	mark	14:mark	_
6	de	de	DET	LID|bep|stan|rest	Definite=Def|PronType=Art	8	det	8:det	_
7	hogergelegen	hoog_gelegen	ADJ	ADJ|prenom|basis|zonder	Degree=Pos	8	amod	8:amod	_
8	grond	grond	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	15	obj	15:obj	_
9	rond	rond	ADP	VZ|init	_	11	case	11:case	_
10	de	de	DET	LID|bep|stan|rest	Definite=Def|PronType=Art	11	det	11:det	_
11	Emmitsburg	Emmitsburg	PROPN	SPEC|deeleigen	_	8	nmod	8:nmod:rond	_
12	Road	Road	PROPN	SPEC|deeleigen	_	11	flat	11:flat	_
13	te	te	ADP	VZ|init	_	14	mark	14:mark	_
14	gaan	gaan	VERB	WW|inf|vrij|zonder	VerbForm=Inf	2	csubj	2:csubj	_
15	bezetten	bezetten	VERB	WW|inf|vrij|zonder	VerbForm=Inf	14	ccomp	14:ccomp	_
16	ten	te	ADP	VZ|versm	ExtPos=ADP	19	case	19:case	_
17	behoeve	behoeve	NOUN	N|soort|ev|basis|dat	Number=Sing	16	fixed	16:fixed	_
18	van	van	ADP	VZ|init	_	16	fixed	16:fixed	_
19	artillerieposities	artillerie_positie	NOUN	N|soort|mv|basis	Number=Plur	15	obl	15:obl:te_behoeve_van	SpaceAfter=No
20	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 aux:pass	color:blue
1	Na	na	ADP	VZ|init	_	5	mark	5:mark	_
2	bijna	bijna	ADV	BW	_	4	advmod	4:advmod	_
3	6	6	NUM	TW|hoofd|prenom|stan	_	4	nummod	4:nummod	_
4	jaar	jaar	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	5	obl	5:obl	_
5	werkloos	werkloos	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	13	advcl	13:advcl:na	_
6	te	te	ADP	VZ|init	_	5	mark	5:mark	_
7	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	5	aux:pass	5:aux:pass	_
8	geweest	zijn	AUX	WW|vd|vrij|zonder	VerbForm=Part	5	cop	5:cop	_
9	was	zijn	AUX	WW|pv|verl|ev	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	13	aux	13:aux	_
10	eigenlijk	eigenlijk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	13	advmod	13:advmod	_
11	iedereen	iedereen	PRON	VNW|onbep|pron|stan|vol|3p|ev	Person=3|PronType=Ind	13	nsubj	13:nsubj	_
12	Adriaan	Adriaan	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	13	obj	13:obj	_
13	vergeten	vergeten	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
14	.	.	PUNCT	LET	_	13	punct	13:punct	_

~~~


