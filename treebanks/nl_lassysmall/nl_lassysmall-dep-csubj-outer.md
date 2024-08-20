---
layout: base
title:  'Statistics of csubj:outer in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-csubj.html">csubj</a></tt>.

4 nodes (0%) are attached to their parents as `csubj:outer`.

4 instances of `csubj:outer` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.5.

The following 2 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 18 csubj:outer	color:blue
1	Wat	wat	PRON	VNW|vb|pron|stan|vol|3o|ev	Person=3|PronType=Int	6	obj	6:obj	_
2	iedereen	iedereen	PRON	VNW|onbep|pron|stan|vol|3p|ev	Person=3|PronType=Ind	6	nsubj	6:nsubj	_
3	eigenlijk	eigenlijk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	6	advmod	6:advmod	_
4	wel	wel	ADV	BW	_	6	advmod	6:advmod	_
5	kon	kunnen	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	6	aux	6:aux	_
6	zien	zien	VERB	WW|inf|vrij|zonder	VerbForm=Inf	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	LET	_	8	punct	8:punct	_
8	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	6	cop	6:cop	_
9	dat	dat	SCONJ	VG|onder	_	18	mark	18:mark	_
10	de	de	DET	LID|bep|stan|rest	Definite=Def	11	det	11:det	_
11	film	film	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	18	nsubj	18:nsubj	_
12	nog	nog	ADV	BW	_	18	advmod	18:advmod	_
13	veel	veel	ADV	VNW|onbep|grad|stan|vrij|zonder|basis	_	14	advmod	14:advmod	_
14	meer	veel	ADV	VNW|onbep|grad|stan|vrij|zonder|comp	_	18	advmod	18:advmod	_
15	over	over	ADP	VZ|init	_	16	case	16:case	_
16	Ditvoorst	Ditvoorst	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	18	obl:arg	18:obl:arg:over	_
17	zelf	zelf	ADV	BW	_	16	amod	16:amod	_
18	ging	gaan	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	6	csubj:outer	6:csubj:outer	SpaceAfter=No
19	.	.	PUNCT	LET	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 22 csubj:outer	color:blue
1	Wat	wat	PRON	VNW|vb|pron|stan|vol|3o|ev	Person=3|PronType=Int	9	obj	9:obj	_
2	de	de	DET	LID|bep|stan|rest	Definite=Def	3	det	3:det	_
3	Britten	Brit	PROPN	N|eigen|mv|basis	Number=Plur	9	nsubj	9:nsubj	_
4	op	op	ADP	VZ|init	_	6	case	6:case	_
5	dat	dat	DET	VNW|aanw|det|stan|prenom|zonder|evon	_	6	det	6:det	_
6	moment	moment	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	9	obl	9:obl:op	_
7	nog	nog	ADV	BW	_	8	advmod	8:advmod	_
8	niet	niet	ADV	BW	_	9	advmod	9:advmod	_
9	wisten	weten	VERB	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	0	root	0:root	_
10	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	9	cop	9:cop	_
11	dat	dat	SCONJ	VG|onder	_	22	mark	22:mark	_
12	de	de	DET	LID|bep|stan|rest	Definite=Def	13	det	13:det	_
13	Tirpitz	Tirpitz	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	22	nsubj	22:nsubj	_
14	en	en	CCONJ	VG|neven	_	16	cc	16:cc	_
15	de	de	DET	LID|bep|stan|rest	Definite=Def	16	det	16:det	_
16	Scharnhorst	Scharnhorst	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	13	conj	13:conj:en|22:nsubj	_
17	voor	voor	ADP	VZ|init	_	19	case	19:case	_
18	het	het	DET	LID|bep|stan|evon	Definite=Def	19	det	19:det	_
19	bombardement	bombardement	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	22	obl	22:obl:voor	_
20	van	van	ADP	VZ|init	_	21	case	21:case	_
21	Spitzbergen	Spitzbergen	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	19	nmod	19:nmod:van	_
22	onderweg	onderweg	ADV	BW	_	9	csubj:outer	9:csubj:outer	_
23	waren	zijn	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	22	cop	22:cop	SpaceAfter=No
24	.	.	PUNCT	LET	_	9	punct	9:punct	_

~~~


