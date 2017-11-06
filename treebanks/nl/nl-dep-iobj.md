---
layout: base
title:  'Statistics of iobj in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `iobj`

This relation is universal.

549 nodes (0%) are attached to their parents as `iobj`.

377 instances of `iobj` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.59380692167577.

The following 16 pairs of parts of speech are connected with `iobj`: <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (244; 44% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (158; 29% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (56; 10% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-PROPN.html">PROPN</a></tt> (48; 9% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (9; 2% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="nl-pos-ADV.html">ADV</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="nl-pos-DET.html">DET</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Dat	dat	PRON	VNW|aanw|pron|stan|vol|3o|ev	Person=3|PronType=Dem	2	nsubj	_	_
2	gaf	geven	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
3	me	me	PRON	VNW|pr|pron|obl|red|1|ev	Case=Acc|Person=1|PronType=Prs	2	iobj	_	_
4	de	de	DET	LID|bep|stan|rest	Definite=Def	2	compound:prt	_	_
5	tijd	tijd	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	fixed	_	_
6	om	om	ADP	VZ|init	_	10	mark	_	_
7	eens	eens	ADV	BW	_	10	advmod	_	_
8	na	na	ADP	VZ|fin	_	10	compound:prt	_	_
9	te	te	ADP	VZ|init	_	10	mark	_	_
10	denken	denken	VERB	WW|inf|vrij|zonder	VerbForm=Inf	2	ccomp	_	_
11	over	over	ADP	VZ|init	_	13	case	_	_
12	mijn	mijn	PRON	VNW|bez|det|stan|vol|1|ev|prenom|zonder|agr	Person=1|PronType=Prs	13	nmod:poss	_	_
13	instelling	instelling	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	10	obl	_	SpaceAfter=No
14	.	.	PUNCT	LET	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 iobj	color:blue
1	Okker	okker	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	nsubj	_	_
2	zwaaide	zwaaien	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
3	zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|PronType=Prs	4	nmod:poss	_	_
4	tegenstander	tegenstander	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	iobj	_	_
5	lof	lof	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	obj	_	_
6	toe	toe	ADP	VZ|fin	_	2	compound:prt	_	SpaceAfter=No
7	:	:	PUNCT	LET	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 iobj	color:blue
1	Weer	weer	ADV	BW	_	11	advmod	_	_
2	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	11	cop	_	_
3	een	een	DET	LID|onbep|stan|agr	Definite=Ind	4	det	_	_
4	driesprong	driesprong	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	11	nsubj	_	_
5	hem	hem	PRON	VNW|pers|pron|obl|vol|3|ev|masc	Case=Acc|Person=3|PronType=Prs	11	iobj	_	_
6	en	en	CCONJ	VG|neven	_	8	cc	_	_
7	zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|PronType=Prs	8	nmod:poss	_	_
8	hengst	hengst	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	conj	_	_
9	Corland	Corland	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	appos	_	_
10	te	te	ADV	BW	_	11	advmod	_	_
11	machtig	machtig	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	_	SpaceAfter=No
12	.	.	PUNCT	LET	_	11	punct	_	_

~~~


