---
layout: base
title:  'Statistics of nsubj:outer in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_lines-dep-nsubj-pass.html">nsubj:pass</a></tt>.

24 nodes (0%) are attached to their parents as `nsubj:outer`.

24 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.25.

The following 6 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (14; 58% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (6; 25% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 nsubj:outer	color:blue
1	For	for	CCONJ	_	_	8	cc	_	_
2	the	the	DET	DEF	Definite=Def|PronType=Art	3	det	_	_
3	proof	proof	NOUN	SG-NOM	Number=Sing	8	nsubj:outer	_	_
4	is	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
5	that	that	SCONJ	_	_	8	mark	_	_
6	we	we	PRON	PERS-P1PL-NOM	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	_
7	still	still	ADV	_	_	8	advmod	_	_
8	read	read	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
9	the	the	DET	DEF	Definite=Def|PronType=Art	10	det	_	_
10	book	book	NOUN	SG-NOM	Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	Period	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 14 nsubj:outer	color:blue
1	If	if	SCONJ	_	_	3	mark	_	_
2	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	have	have	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	20	advcl	_	_
4	a	a	DET	IND-SG	Definite=Ind|PronType=Art	5	det	_	_
5	criticism	criticism	NOUN	SG-NOM	Number=Sing	3	obj	_	_
6	of	of	ADP	_	_	12	case	_	_
7	the	the	DET	DEF	Definite=Def|PronType=Art	12	det	_	_
8	Legal	legal	ADJ	POS	Degree=Pos	9	amod	_	_
9	Affairs	affair	NOUN	PL-NOM	Number=Plur	10	compound	_	_
10	Committee	committee	NOUN	SG	Number=Sing	12	nmod:poss	_	_
11	's	's	PART	GEN	_	10	case	_	_
12	opinion	opinion	NOUN	SG-NOM	Number=Sing	5	nmod	_	SpaceAfter=No
13	,	,	PUNCT	Comma	_	3	punct	_	_
14	it	it	PRON	PERS-SG	_	20	nsubj:outer	_	_
15	is	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
16	that	that	SCONJ	_	_	20	mark	_	_
17	it	it	PRON	PERS-SG	_	20	nsubj	_	_
18	is	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
19	too	too	ADV	_	_	20	advmod	_	_
20	one-sided	one-sided	ADJ	POS	Degree=Pos	0	root	_	SpaceAfter=No
21	.	.	PUNCT	Period	_	20	punct	_	_

~~~


