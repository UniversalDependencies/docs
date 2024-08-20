---
layout: base
title:  'Statistics of cc:preconj in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-cc.html">cc</a></tt>.

100 nodes (0%) are attached to their parents as `cc:preconj`.

100 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18.

The following 7 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (37; 37% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (26; 26% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (20; 20% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (7; 7% instances), <tt><a href="nl_lassysmall-pos-X.html">X</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (6; 6% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (3; 3% instances), <tt><a href="nl_lassysmall-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_lassysmall-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc:preconj	color:blue
1	Alleen	alleen	ADV	BW	_	2	amod	2:amod	_
2	vrouwtjes	vrouw	NOUN	N|soort|mv|dim	Number=Plur	4	nsubj	4:nsubj	_
3	kunnen	kunnen	AUX	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	steken	steken	VERB	WW|inf|vrij|zonder	VerbForm=Inf	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	LET	_	7	punct	7:punct	_
6	zowel	zowel	CCONJ	BW	_	7	cc:preconj	7:cc:preconj	_
7	werksters	werkster	NOUN	N|soort|mv|basis	Number=Plur	4	parataxis	4:parataxis	_
8	als	als	SCONJ	VG|onder	_	9	cc	9:cc	_
9	koninginnen	koningin	NOUN	N|soort|mv|basis	Number=Plur	7	conj	7:conj:als	SpaceAfter=No
10	.	.	PUNCT	LET	_	4	punct	4:punct	_

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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Het	het	DET	LID|bep|stan|evon	Definite=Def	2	det	2:det	_
2	fascisme	fascisme	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	6	nsubj	6:nsubj	_
3	"	"	PUNCT	LET	_	6	punct	6:punct	SpaceAfter=No
4	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
5	niet	niet	CCONJ	BW	_	6	cc:preconj	6:cc:preconj	_
6	reactionair	reactionair	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
7	maar	maar	CCONJ	VG|neven	_	8	cc	8:cc	_
8	revolutionair	revolutionair	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	6	conj	6:conj:maar	SpaceAfter=No
9	"	"	PUNCT	LET	_	6	punct	6:punct	SpaceAfter=No
10	,	,	PUNCT	LET	_	12	punct	12:punct	_
11	zo	zo	ADV	BW	_	12	ccomp	12:ccomp	_
12	verklaren	verklaren	VERB	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	6	parataxis	6:parataxis	_
13	ze	ze	PRON	VNW|pers|pron|stan|red|3|mv	Person=3|PronType=Prs	12	nsubj	12:nsubj	_
14	verder	ver	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	12	advmod	12:advmod	SpaceAfter=No
15	.	.	PUNCT	LET	_	6	punct	6:punct	_

~~~


