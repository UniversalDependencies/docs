---
layout: base
title:  'Statistics of nsubj:pass in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="nl-dep-nsubj.html">nsubj</a></tt>.

1413 nodes (1%) are attached to their parents as `nsubj:pass`.

1412 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.69568294409059.

The following 16 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (998; 71% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (189; 13% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-PROPN.html">PROPN</a></tt> (130; 9% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (21; 1% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-PROPN.html">PROPN</a></tt> (18; 1% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (15; 1% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-X.html">X</a></tt> (7; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 nsubj:pass	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	7	nsubj:pass	_	_
2	zou	zullen	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	7	aux	_	_
3	'	'	PUNCT	LET	_	5	punct	_	SpaceAfter=No
4	per	per	ADP	VZ|init	_	5	case	_	_
5	ongeluk	ongeluk	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
6	'	'	PUNCT	LET	_	5	punct	_	_
7	ontvoerd	ontvoeren	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	_	_
8	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	7	aux:pass	_	_
9	door	door	ADP	VZ|init	_	11	case	_	_
10	de	de	DET	LID|bep|stan|rest	Definite=Def	11	det	_	_
11	FARC-rebellen	FARC-rebel	NOUN	N|soort|mv|basis	Number=Plur	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	LET	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:pass	color:blue
1	Zonder	zonder	ADP	VZ|init	_	2	case	_	_
2	pardon	pardon	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	8	obl	_	_
3	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	8	aux:pass	_	_
4	DHS	DHS	PROPN	SPEC|deeleigen	_	8	nsubj:pass	_	_
5	uit	uit	ADP	VZ|init	_	7	case	_	_
6	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	_	_
7	bekerstrijd	bekerstrijd	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	obl	_	_
8	geworpen	werpen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	_	SpaceAfter=No
9	.	.	PUNCT	LET	_	8	punct	_	_

~~~


