---
layout: base
title:  'Statistics of nsubj:pass in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="nl_alpino-dep-nsubj.html">nsubj</a></tt>.

2028 nodes (1%) are attached to their parents as `nsubj:pass`.

2021 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.59171597633136.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1286; 63% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (506; 25% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (163; 8% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (26; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (16; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (14; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt> (11; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 nsubj:pass	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	7	nsubj:pass	7:nsubj:pass	_
2	zou	zullen	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	7	aux	7:aux	_
3	'	'	PUNCT	LET	_	5	punct	5:punct	SpaceAfter=No
4	per	per	ADP	VZ|init	_	5	case	5:case	_
5	ongeluk	ongeluk	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	obl	7:obl:per	SpaceAfter=No
6	'	'	PUNCT	LET	_	5	punct	5:punct	_
7	ontvoerd	ontvoeren	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	_
8	zijn	zijn	AUX	WW|inf|vrij|zonder	VerbForm=Inf	7	aux:pass	7:aux:pass	_
9	door	door	ADP	VZ|init	_	11	case	11:case	_
10	de	de	DET	LID|bep|stan|rest	Definite=Def	11	det	11:det	_
11	FARC-rebellen	FARC_rebel	NOUN	N|soort|mv|basis	Number=Plur	7	obl:agent	7:obl:agent	SpaceAfter=No
12	.	.	PUNCT	LET	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:pass	color:blue
1	Zonder	zonder	ADP	VZ|init	_	2	case	2:case	_
2	pardon	pardon	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	8	obl	8:obl:zonder	_
3	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	8	aux:pass	8:aux:pass	_
4	DHS	DHS	PROPN	N|eigen|ev|basis|genus|stan	Gender=Com,Neut|Number=Sing	8	nsubj:pass	8:nsubj:pass	_
5	uit	uit	ADP	VZ|init	_	7	case	7:case	_
6	de	de	DET	LID|bep|stan|rest	Definite=Def	7	det	7:det	_
7	bekerstrijd	beker_strijd	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	8	obl	8:obl:uit	_
8	geworpen	werpen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	LET	_	8	punct	8:punct	_

~~~


