---
layout: base
title:  'Statistics of cop in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `cop`

This relation is universal.

3975 nodes (2%) are attached to their parents as `cop`.

2142 instances of `cop` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.41408805031447.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (1468; 37% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (1263; 32% instances), <tt><a href="nl-pos-PRON.html">PRON</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (415; 10% instances), <tt><a href="nl-pos-ADV.html">ADV</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (351; 9% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (263; 7% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (81; 2% instances), <tt><a href="nl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (59; 1% instances), <tt><a href="nl-pos-NUM.html">NUM</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (37; 1% instances), <tt><a href="nl-pos-DET.html">DET</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (18; 0% instances), <tt><a href="nl-pos-X.html">X</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="nl-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="nl-pos-SYM.html">SYM</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Mooier	mooi	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	0	root	_	_
2	kon	kunnen	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	1	cop	_	_
3	niet	niet	ADV	BW	_	1	advmod	_	SpaceAfter=No
4	,	,	PUNCT	LET	_	5	punct	_	_
5	vond	vinden	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	1	parataxis	_	_
6	Van	Van	PROPN	SPEC|deeleigen	_	5	nsubj	_	_
7	Moorsel	Moorsel	PROPN	SPEC|deeleigen	_	6	flat:name	_	SpaceAfter=No
8	.	.	PUNCT	LET	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	5	nsubj	_	_
2	ben	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	nogal	nogal	ADV	BW	_	5	advmod	_	_
4	een	een	DET	LID|onbep|stan|agr	Definite=Ind	5	det	_	_
5	twijfelaar	twijfelaar	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	LET	_	5	punct	_	SpaceAfter=No
7	''	''	PUNCT	LET	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	"	"	PUNCT	LET	_	2	punct	_	SpaceAfter=No
2	Natuurlijk	natuurlijk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	_	_
3	meneer	meneer	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	LET	_	5	punct	_	_
5	wie	wie	PRON	VNW|vb|pron|stan|vol|3p|getal	Person=3|PronType=Int	2	parataxis	_	_
6	bent	zijn	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	_	_
7	u	u	PRON	VNW|pers|pron|nomin|vol|2b|getal	Case=Nom|Person=2|PronType=Prs	5	nsubj	_	_
8	wel	wel	ADV	BW	_	5	advmod	_	SpaceAfter=No
9	?	?	PUNCT	LET	_	2	punct	_	SpaceAfter=No
10	"	"	PUNCT	LET	_	2	punct	_	_

~~~


