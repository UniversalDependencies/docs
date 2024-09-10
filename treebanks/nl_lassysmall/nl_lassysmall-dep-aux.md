---
layout: base
title:  'Statistics of aux in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="nl_lassysmall-dep-aux-pass.html">aux:pass</a></tt>.

3235 nodes (1%) are attached to their parents as `aux`.

2813 instances of `aux` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.51251931993818.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (3086; 95% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (62; 2% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (58; 2% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="nl_lassysmall-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Multiculturaliteit	multiculturaliteit	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	nsubj	5:nsubj	_
2	heeft	hebben	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
3	bij	bij	ADP	VZ|init	_	4	case	4:case	_
4	ons	ons	PRON	VNW|pr|pron|obl|vol|1|mv	Case=Acc|Person=1|PronType=Prs	5	obl	5:obl:bij	_
5	geleid	leiden	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
6	tot	tot	ADP	VZ|init	_	7	case	7:case	_
7	multicriminaliteit	multi_criminaliteit	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	obl:arg	5:obl:arg:tot	SpaceAfter=No
8	.	.	PUNCT	LET	_	5	punct	5:punct	_
9	"	"	PUNCT	LET	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	En	en	CCONJ	VG|neven	_	2	mark	2:mark	_
2	bijgevolg	bijgevolg	ADV	BW	_	0	root	0:root	_
3	dat	dat	SCONJ	VG|onder	_	7	mark	7:mark	_
4	3frac(1)(8)	3frac(1)(8)	SYM	SPEC|symb	_	7	nsubj	7:nsubj	_
5	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	7:det	_
6	juiste	juist	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	7	amod	7:amod	_
7	waarde	waarde	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	parataxis	2:parataxis	_
8	moet	moeten	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
9	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	7	cop	7:cop	SpaceAfter=No
10	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	4	expl	4:expl	_
2	moge	mogen	AUX	WW|pv|conj|ev	Number=Sing|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
3	dus	dus	ADV	BW	_	4	advmod	4:advmod	_
4	duidelijk	duidelijk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
5	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	4	cop	4:cop	_
6	dat	dat	SCONJ	VG|onder	_	10	mark	10:mark	_
7	dit	dit	PRON	VNW|aanw|pron|stan|vol|3o|ev	Person=3|PronType=Dem	10	nsubj	10:nsubj	_
8	een	een	DET	LID|onbep|stan|agr	Definite=Ind	10	det	10:det	_
9	tijdelijk	tijdelijk	ADJ	ADJ|prenom|basis|zonder	Degree=Pos	10	amod	10:amod	_
10	bouwsel	bouwsel	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	csubj	4:csubj	_
11	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	10	cop	10:cop	SpaceAfter=No
12	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


