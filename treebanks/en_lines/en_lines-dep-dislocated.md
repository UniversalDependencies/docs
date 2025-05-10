---
layout: base
title:  'Statistics of dislocated in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `dislocated`

This relation is universal.

129 nodes (0%) are attached to their parents as `dislocated`.

88 instances of `dislocated` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.91472868217054.

The following 17 pairs of parts of speech are connected with `dislocated`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (54; 42% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (30; 23% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (9; 7% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (9; 7% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 dislocated	color:blue
1	But	but	CCONJ	_	_	6	cc	_	_
2	that	that	PRON	DEM-SG	Number=Sing|PronType=Dem	6	nsubj:outer	_	_
3	's	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	what	what	PRON	WH	PronType=Int	6	dislocated	_	_
5	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	happen	happen	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
7	to	to	PART	_	_	4	mark	_	_
8	be	be	AUX	INF	VerbForm=Inf	4	cop	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 dislocated	color:blue
1	Stones	stone	NOUN	PL-NOM	_	8	dislocated	_	SpaceAfter=No
2	,	,	PUNCT	Comma	_	3	punct	_	_
3	leaves	leaf	NOUN	PL-NOM	_	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	3	punct	_	_
5	and	and	CCONJ	_	_	6	cc	_	_
6	twigs	twig	NOUN	PL-NOM	Number=Plur	1	conj	_	_
7	all	all	PRON	TOT-PL	Case=Nom	8	nsubj	_	_
8	found	find	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
9	their	their	PRON	P3PL-GEN	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
10	way	way	NOUN	SG-NOM	Number=Sing	8	obj	_	_
11	into	into	ADP	_	_	13	case	_	_
12	his	his	PRON	P3SG-GEN	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	13	nmod:poss	_	_
13	bag	bag	NOUN	SG-NOM	Number=Sing	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	Period	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dislocated	color:blue
1	It	it	PRON	EX-P3SG	_	2	expl	_	_
2	was	be	VERB	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	then	then	ADV	_	PronType=Dem	2	dislocated	_	_
4	that	that	SCONJ	REL	_	7	mark	_	_
5	he	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	had	have	AUX	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	7	aux	_	_
7	taken	take	VERB	PERF	Tense=Past|VerbForm=Part	3	acl	_	_
8	on	on	ADP	_	_	7	compound:prt	_	_
9	the	the	DET	DEF	Definite=Def|PronType=Art	10	det	_	_
10	name	name	NOUN	SG-NOM	Number=Sing	7	obj	_	_
11	of	of	ADP	_	_	12	case	_	_
12	William	William	PROPN	SG-NOM	Number=Sing	10	nmod	_	_
13	Wilson	Wilson	PROPN	SG-NOM	Number=Sing	12	flat	_	SpaceAfter=No
14	.	.	PUNCT	Period	_	2	punct	_	_

~~~


