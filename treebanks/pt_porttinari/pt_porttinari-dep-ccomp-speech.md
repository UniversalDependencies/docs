---
layout: base
title:  'Statistics of ccomp:speech in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `ccomp:speech`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-ccomp.html">ccomp</a></tt>.

660 nodes (0%) are attached to their parents as `ccomp:speech`.

598 instances of `ccomp:speech` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.5742424242424.

The following 11 pairs of parts of speech are connected with `ccomp:speech`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (469; 71% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (97; 15% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (60; 9% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (12; 2% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt> (11; 2% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 ccomp:speech	color:blue
1	A	a	ADP	_	_	3	case	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	lado	lado	NOUN	_	Gender=Masc|Number=Sing	10	obl	_	_
4	de	de	ADP	_	_	6	case	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	mulher	mulher	NOUN	_	Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	Inge	Inge	PROPN	_	_	6	appos	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	brincou	brincar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
11	:	:	PUNCT	_	_	13	punct	_	_
12	"	"	PUNCT	_	_	13	punct	_	SpaceAfter=No
13	Votei	votar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	10	ccomp:speech	_	_
14	duas	dois	NUM	_	Gender=Fem|NumType=Card	15	nummod	_	_
15	vezes	vez	NOUN	_	Gender=Fem|Number=Plur	13	obl	_	SpaceAfter=No
16	"	"	PUNCT	_	_	13	punct	_	SpaceAfter=No
17	.	.	PUNCT	_	_	10	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 ccomp:speech	color:blue
1	Vocês	você	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
2	são	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	jornalistas	jornalista	NOUN	_	Number=Plur	12	ccomp:speech	_	_
4	-	-	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	façam	fazer	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	trabalho	trabalho	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
8	de	de	ADP	_	_	9	case	_	_
9	vocês	você	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	7	nmod	_	SpaceAfter=No
10	!	!	PUNCT	_	_	5	punct	_	SpaceAfter=No
11	,	,	PUNCT	_	_	5	punct	_	_
12	declarou	declarar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 ccomp:speech	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	aterrorizante	aterrorizante	ADJ	_	Number=Sing	4	ccomp:speech	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	desabafa	desabafar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	sobrinha	sobrinho	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


