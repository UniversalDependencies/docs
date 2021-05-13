---
layout: base
title:  'Statistics of xcomp in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `xcomp`

This relation is universal.

754 nodes (1%) are attached to their parents as `xcomp`.

538 instances of `xcomp` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.87002652519894.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (286; 38% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (237; 31% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (149; 20% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (42; 6% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADP.html">ADP</a></tt> (15; 2% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-SYM.html">SYM</a></tt> (4; 1% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-NUM.html">NUM</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Vanaf	vanaf	ADP	VZ|init	_	2	case	2:case	_
2	1882	1882	NUM	TW|hoofd|vrij	_	5	obl	5:obl:vanaf	_
3	gaat	gaan	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	Ensor	Ensor	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	nsubj	3:nsubj|5:nsubj:xsubj	_
5	behoren	behoren	VERB	WW|inf|vrij|zonder	VerbForm=Inf	3	xcomp	3:xcomp	_
6	tot	tot	ADP	VZ|init	_	8	case	8:case	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	8	det	8:det	_
8	kunstkring	kunst_kring	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	obl	5:obl:tot	_
9	«	«	PUNCT	LET	_	10	punct	10:punct	_
10	L'Essor	L'Essor	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	appos	8:appos	_
11	»	»	PUNCT	LET	_	10	punct	10:punct	SpaceAfter=No
12	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	Intussen	intussen	ADV	BW	_	6	advmod	6:advmod	_
2	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	6	aux	6:aux	_
3	hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	6	nsubj	6:nsubj	_
4	70	70	NUM	TW|hoofd|prenom|stan	_	5	nummod	5:nummod	_
5	jaar	jaar	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	6	xcomp	6:xcomp	_
6	geworden	worden	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	LET	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 xcomp	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	verhalen	verhaal	NOUN	N|soort|mv|basis	Number=Plur	3	nsubj	3:nsubj	_
3	bleken	blijken	VERB	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	echter	echter	ADV	BW	_	3	advmod	3:advmod	_
5	veel	veel	PRON	VNW|onbep|grad|stan|vrij|zonder|basis	PronType=Ind	6	nmod	6:nmod	_
6	te	te	ADV	BW	_	7	advmod	7:advmod	_
7	Vlaams/Nederlands	Vlaams_Nederlands	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	3	xcomp	3:xcomp	SpaceAfter=No
8	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


