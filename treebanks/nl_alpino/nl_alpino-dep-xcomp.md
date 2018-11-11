---
layout: base
title:  'Statistics of xcomp in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `xcomp`

This relation is universal.

2232 nodes (1%) are attached to their parents as `xcomp`.

1606 instances of `xcomp` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.76881720430108.

The following 20 pairs of parts of speech are connected with `xcomp`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (1233; 55% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (442; 20% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (281; 13% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt> (190; 9% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt> (37; 2% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (15; 1% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 xcomp	color:blue
1	Moeder	moeder	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	nsubj	3:nsubj	_
2	Mien	Mien	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	1	appos	1:appos	_
3	spoorde	sporen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	haar	haar	PRON	VNW|pers|pron|obl|vol|3|getal|fem	Case=Acc|Person=3|PronType=Prs	3	obj	3:obj|9:nsubj:xsubj	_
5	aan	aan	ADP	VZ|fin	_	3	compound:prt	3:compound:prt	_
6	toch	toch	ADV	BW	_	9	advmod	9:advmod	_
7	op	op	ADP	VZ|fin	_	9	compound:prt	9:compound:prt	_
8	te	te	ADP	VZ|init	_	9	mark	9:mark	_
9	stappen	stappen	VERB	WW|inf|vrij|zonder	VerbForm=Inf	3	xcomp	3:xcomp	SpaceAfter=No
10	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Mooier	mooi	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	2	xcomp	2:xcomp	_
2	kon	kunnen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	niet	niet	ADV	BW	_	2	advmod	2:advmod	SpaceAfter=No
4	,	,	PUNCT	LET	_	5	punct	5:punct	_
5	vond	vinden	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	2	parataxis	2:parataxis	_
6	Van	Van	PROPN	SPEC|deeleigen	_	5	nsubj	5:nsubj	_
7	Moorsel	Moorsel	PROPN	SPEC|deeleigen	_	6	flat	6:flat	SpaceAfter=No
8	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp	color:blue
1	Plots	plots	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	2	advmod	2:advmod	_
2	stond	staan	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	het	het	DET	LID|bep|stan|evon	Definite=Def	4	det	4:det	_
4	peloton	peloton	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	2	nsubj	2:nsubj	_
5	in	in	ADP	VZ|init	_	6	case	6:case	_
6	vuur	vuur	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	2	xcomp	2:xcomp	_
7	en	en	CCONJ	VG|neven	_	8	cc	8:cc	_
8	vlam	vlam	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	6	conj	6:conj:en	SpaceAfter=No
9	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


