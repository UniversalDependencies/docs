---
layout: base
title:  'Statistics of compound:prt in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `compound:prt`

This relation is a language-specific subtype of .

1559 nodes (1%) are attached to their parents as `compound:prt`.

862 instances of `compound:prt` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.61321359846055.

The following 10 pairs of parts of speech are connected with `compound:prt`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt> (1037; 67% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt> (160; 10% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (137; 9% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (121; 8% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (76; 5% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (20; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound:prt	color:blue
1	Moeder	moeder	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	nsubj	3:nsubj	_
2	Mien	Mien	PROPN	N|eigen|ev|basis|zijd|stan	Gender=Com|Number=Sing	1	appos	1:appos	_
3	spoorde	aan_sporen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	haar	haar	PRON	VNW|pers|pron|obl|vol|3|getal|fem	Case=Acc|Person=3|PronType=Prs	3	obj	3:obj|9:nsubj:xsubj	_
5	aan	aan	ADP	VZ|fin	_	3	compound:prt	3:compound:prt	_
6	toch	toch	ADV	BW	_	9	advmod	9:advmod	_
7	op	op	ADP	VZ|fin	_	9	compound:prt	9:compound:prt	_
8	te	te	ADP	VZ|init	_	9	mark	9:mark	_
9	stappen	op_stappen	VERB	WW|inf|vrij|zonder	VerbForm=Inf	3	xcomp	3:xcomp	SpaceAfter=No
10	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 compound:prt	color:blue
1	Daar	daar	ADV	VNW|aanw|adv-pron|obl|vol|3o|getal	_	2	advmod	2:advmod	_
2	besloot	besluiten	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	2	nsubj	2:nsubj|8:nsubj:xsubj	_
4	wat	wat	DET	VNW|onbep|pron|stan|vol|3o|ev	_	5	det	5:det	_
5	misverstanden	misverstand	NOUN	N|soort|mv|basis	Number=Plur	8	obj	8:obj	_
6	weg	weg	ADV	BW	_	8	compound:prt	8:compound:prt	_
7	te	te	ADP	VZ|init	_	8	mark	8:mark	_
8	werken	weg_werken	VERB	WW|inf|vrij|zonder	VerbForm=Inf	2	xcomp	2:xcomp	SpaceAfter=No
9	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 compound:prt	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	2	det	2:det	_
2	deuren	deur	NOUN	N|soort|mv|basis	Number=Plur	3	nsubj	3:nsubj	_
3	gingen	dicht_gaan	VERB	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	net	net	ADV	BW	_	6	amod	6:amod	_
5	op	op	ADP	VZ|init	_	6	case	6:case	_
6	tijd	tijd	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	3	obl	3:obl:op	_
7	dicht	dicht	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	3	compound:prt	3:compound:prt	SpaceAfter=No
8	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


