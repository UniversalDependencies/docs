---
layout: base
title:  'Statistics of aux:pass in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="nl_alpino-dep-aux.html">aux</a></tt>.

2357 nodes (1%) are attached to their parents as `aux:pass`.

2010 instances of `aux:pass` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.05218498090793.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (2352; 100% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt>-<tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:pass	color:blue
1	Waarmee	waarmee	ADV	BW	_	10	advmod	10:advmod	_
2	het	het	DET	LID|bep|stan|evon	Definite=Def	3	det	3:det	_
3	pad	pad	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	10	nsubj:pass	10:nsubj:pass	_
4	voor	voor	ADP	VZ|init	_	7	case	7:case	_
5	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	7:det	_
6	rappe	rap	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	7	amod	7:amod	_
7	Van	Van	PROPN	SPEC|deeleigen	_	10	obl	10:obl:voor	_
8	Alebeek	Alebeek	PROPN	SPEC|deeleigen	_	7	flat	7:flat	_
9	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	10	aux:pass	10:aux:pass	_
10	geëffend	effenen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	LET	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux:pass	color:blue
1	Ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	vertrok	vertrekken	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	nadat	nadat	SCONJ	VG|onder	_	5	mark	5:mark	_
4	mij	mij	PRON	VNW|pr|pron|obl|vol|1|ev	Case=Acc|Person=1|PronType=Prs	5	iobj	5:iobj	_
5	duidelijk	duidelijk	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	2	advcl	2:advcl:nadat	_
6	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	5	aux:pass	5:aux:pass	_
7	geworden	worden	AUX	WW|vd|vrij|zonder	VerbForm=Part	5	cop	5:cop	_
8	dat	dat	SCONJ	VG|onder	_	10	mark	10:mark	_
9	ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	10	nsubj	10:nsubj	_
10	sliep	slapen	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	5	csubj	5:csubj	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:pass	color:blue
1	Herdacht	herdenken	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	_
2	werden	worden	AUX	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	1	aux:pass	1:aux:pass	SpaceAfter=No
3	:	:	PUNCT	LET	_	1	punct	1:punct	_

~~~


