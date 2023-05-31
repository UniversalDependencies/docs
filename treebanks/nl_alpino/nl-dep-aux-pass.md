---
layout: base
title:  'Statistics of aux:pass in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="nl-dep-aux.html">aux</a></tt>.

2299 nodes (1%) are attached to their parents as `aux:pass`.

1966 instances of `aux:pass` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.03827751196172.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (2247; 98% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (40; 2% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (12; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:pass	color:blue
1	Waarmee	waarmee	ADV	BW	_	10	advmod	_	_
2	het	het	DET	LID|bep|stan|evon	Definite=Def	3	det	_	_
3	pad	pad	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	10	nsubj:pass	_	_
4	voor	voor	ADP	VZ|init	_	7	case	_	_
5	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	_	_
6	rappe	rap	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	7	amod	_	_
7	Van	Van	PROPN	SPEC|deeleigen	_	10	obl	_	_
8	Alebeek	Alebeek	PROPN	SPEC|deeleigen	_	7	flat:name	_	_
9	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	10	aux:pass	_	_
10	geëffend	effenen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	_	SpaceAfter=No
11	.	.	PUNCT	LET	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux:pass	color:blue
1	dat	dat	SCONJ	VG|onder	_	3	mark	_	_
2	hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	3	nsubj	_	_
3	komt	komen	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	6	ccomp	_	_
4	wordt	worden	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
5	niet	niet	ADV	BW	_	6	advmod	_	_
6	leuk	leuk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	_	_
7	gevonden	vinden	AUX	WW|vd|vrij|zonder	VerbForm=Part	6	cop	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 aux:pass	color:blue
1	Er	er	ADV	VNW|aanw|adv-pron|stan|red|3|getal	_	9	advmod	_	_
2	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
3	zes	zes	NUM	TW|hoofd|prenom|stan	_	4	nummod	_	_
4	maanden	maanden	NOUN	N|soort|mv|basis	Number=Plur	9	nsubj:pass	_	_
5	met	met	ADP	VZ|init	_	6	case	_	_
6	aftrek	aftrek	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	nmod	_	_
7	tegen	tegen	ADP	VZ|init	_	8	case	_	_
8	K.	K.	PROPN	SPEC|deeleigen	_	9	obl	_	_
9	geeist	eisen	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	LET	_	9	punct	_	_

~~~


