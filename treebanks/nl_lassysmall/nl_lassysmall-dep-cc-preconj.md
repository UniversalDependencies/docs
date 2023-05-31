---
layout: base
title:  'Statistics of cc:preconj in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-cc.html">cc</a></tt>.

36 nodes (0%) are attached to their parents as `cc:preconj`.

36 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.02777777777778.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (13; 36% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (11; 31% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (7; 19% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (2; 6% instances), <tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (2; 6% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Vandersteen	Vandersteen	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
2	leende	lenen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	zowel	zowel	CCONJ	BW	_	4	cc:preconj	4:cc:preconj	_
4	tekeningen	tekening	NOUN	N|soort|mv|basis	Number=Plur	2	obj	2:obj	_
5	als	als	SCONJ	VG|onder	_	6	cc	6:cc	_
6	plotlijnen	plot_lijn	NOUN	N|soort|mv|basis	Number=Plur	4	conj	2:obj|4:conj:als	_
7	van	van	ADP	VZ|init	_	10	case	10:case	_
8	andere	ander	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	10	amod	10:amod	_
9	grote	groot	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	10	amod	10:amod	_
10	auteurs	auteur	NOUN	N|soort|mv|basis	Number=Plur	2	obl	2:obl:van	SpaceAfter=No
11	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 cc:preconj	color:blue
1	Deze	deze	DET	VNW|aanw|det|stan|prenom|met-e|rest	_	2	det	2:det	_
2	stad	stad	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	nsubj	5:nsubj	_
3	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
4	zowel	zowel	CCONJ	BW	_	7	cc:preconj	7:cc:preconj	_
5	hoofdstad	hoofdstad	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	_
6	van	van	ADP	VZ|init	_	7	case	7:case	_
7	België	België	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	5	nmod	5:nmod:van	_
8	als	als	SCONJ	VG|onder	_	10	cc	10:cc	_
9	van	van	ADP	VZ|init	_	10	case	10:case	_
10	Vlaanderen	Vlaanderen	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	conj	5:nmod:van|7:conj:als	SpaceAfter=No
11	.	.	PUNCT	LET	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	partij	partij	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	9	nsubj	9:nsubj	_
3	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
4	zowel	zowel	CCONJ	BW	_	5	cc:preconj	5:cc:preconj	_
5	organiek	organiek	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	9	obl	9:obl	_
6	als	als	SCONJ	VG|onder	_	7	cc	7:cc	_
7	inhoudelijk	inhoudelijk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	5	conj	5:conj:als|9:obl	_
8	niet	niet	ADV	BW	_	9	advmod	9:advmod	_
9	verbonden	verbinden	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
10	met	met	ADP	VZ|init	_	12	case	12:case	_
11	de	de	DET	LID|bep|stan|rest	Definite=Def	12	det	12:det	_
12	beweging	beweging	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	9	obl	9:obl:met	_

~~~


