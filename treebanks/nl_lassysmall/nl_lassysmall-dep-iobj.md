---
layout: base
title:  'Statistics of iobj in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `iobj`

This relation is universal.

324 nodes (0%) are attached to their parents as `iobj`.

198 instances of `iobj` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.58641975308642.

The following 12 pairs of parts of speech are connected with `iobj`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (104; 32% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (104; 32% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (98; 30% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (7; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Jaak	Jaak	PROPN	SPEC|deeleigen	_	4	nsubj	4:nsubj	_
2	Van	Van	PROPN	SPEC|deeleigen	_	1	flat	1:flat	_
3	Assche	Assche	PROPN	SPEC|deeleigen	_	1	flat	1:flat	_
4	geeft	geven	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	dit	dit	DET	VNW|aanw|det|stan|prenom|zonder|evon	_	6	det	6:det	_
6	personage	personage	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	iobj	4:iobj	_
7	gestalte	gestalte	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	compound:prt	4:compound:prt	SpaceAfter=No
8	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Damned	Damned	X	SPEC|vreemd	Foreign=Yes	3	parataxis	3:parataxis	SpaceAfter=No
2	,	,	PUNCT	LET	_	1	punct	1:punct	_
3	doe	doen	VERB	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	me	me	PRON	VNW|pr|pron|obl|red|1|ev	Case=Acc|Person=1|PronType=Prs	3	iobj	3:iobj	_
5	dan	dan	ADV	BW	_	3	advmod	3:advmod	_
6	maar	maar	ADV	BW	_	3	advmod	3:advmod	_
7	weer	weer	ADV	BW	_	3	advmod	3:advmod	_
8	een	een	DET	LID|onbep|stan|agr	Definite=Ind	9	det	9:det	_
9	Humo	Humo	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	obj	3:obj	_
10	»	»	PUNCT	LET	_	3	punct	3:punct	SpaceAfter=No
11	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Hagrid	Hagrid	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
2	vertelt	vertellen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	Ron	Ron	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	iobj	2:iobj	_
4	dat	dat	SCONJ	VG|onder	_	12	mark	12:mark	_
5	hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	12	nsubj	12:nsubj	_
6	zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	7	nmod:poss	7:nmod:poss	_
7	rat	rat	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	12	obj	12:obj	SpaceAfter=No
8	,	,	PUNCT	LET	_	9	punct	9:punct	_
9	Schurfie	Schurfie	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	7	appos	7:appos	SpaceAfter=No
10	,	,	PUNCT	LET	_	7	punct	7:punct	_
11	heeft	hebben	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	12	aux	12:aux	_
12	gevonden	vinden	VERB	WW|vd|vrij|zonder	VerbForm=Part	2	ccomp	2:ccomp	SpaceAfter=No
13	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


