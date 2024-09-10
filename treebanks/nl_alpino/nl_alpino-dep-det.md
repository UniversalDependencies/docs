---
layout: base
title:  'Statistics of det in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `det`

This relation is universal.

24661 nodes (12%) are attached to their parents as `det`.

24656 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37926280361705.

The following 18 pairs of parts of speech are connected with `det`: <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (21518; 87% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (2077; 8% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (394; 2% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (339; 1% instances), <tt><a href="nl_alpino-pos-X.html">X</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (127; 1% instances), <tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (76; 0% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (30; 0% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (29; 0% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (24; 0% instances), <tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (17; 0% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="nl_alpino-pos-X.html">X</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt> (5; 0% instances), <tt><a href="nl_alpino-pos-X.html">X</a></tt>-<tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="nl_alpino-pos-INTJ.html">INTJ</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	,,	,,	PUNCT	LET	_	4	punct	4:punct	_
2	Mijn	mijn	PRON	VNW|bez|det|stan|vol|1|ev|prenom|zonder|agr	Person=1|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
3	gedachten	gedachte	NOUN	N|soort|mv|basis	Number=Plur	4	nsubj	4:nsubj	_
4	sprongen	op_springen	VERB	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	0	root	0:root	_
5	alle	al	DET	VNW|onbep|det|stan|prenom|met-e|agr	_	6	det	6:det	_
6	kanten	kant	NOUN	N|soort|mv|basis	Number=Plur	4	obl	4:obl	_
7	op	op	ADP	VZ|fin	_	4	compound:prt	4:compound:prt	SpaceAfter=No
8	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 det	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	2	nsubj	2:nsubj	_
2	had	hebben	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	tijdens	tijdens	ADP	VZ|init	_	5	case	5:case	_
4	het	het	DET	LID|bep|stan|evon	Definite=Def	5	det	5:det	_
5	sprinten	sprinten	VERB	WW|inf|nom|zonder|zonder-n	VerbForm=Inf	2	obl	2:obl:tijdens	_
6	zelfs	zelfs	ADV	BW	_	2	advmod	2:advmod	_
7	nog	nog	ADV	BW	_	8	advmod	8:advmod	_
8	even	even	ADV	BW	_	2	advmod	2:advmod	_
9	tijd	tijd	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	2	obj	2:obj	_
10	om	om	ADP	VZ|init	_	13	mark	13:mark	_
11	om	om	ADP	VZ|fin	_	13	compound:prt	13:compound:prt	_
12	te	te	ADP	VZ|init	_	13	mark	13:mark	_
13	kijken	om_kijken	VERB	WW|inf|vrij|zonder	VerbForm=Inf	9	acl	9:acl:om	SpaceAfter=No
14	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


