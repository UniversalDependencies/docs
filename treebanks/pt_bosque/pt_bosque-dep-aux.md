---
layout: base
title:  'Statistics of aux in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="pt_bosque-dep-aux-pass.html">aux:pass</a></tt>.

1082 nodes (0%) are attached to their parents as `aux`.

1076 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53419593345656.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (1016; 94% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (35; 3% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (24; 2% instances), <tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	bombeiro	bombeiro	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	suspeita	suspeitar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	_	_	8	mark	_	_
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	golfinho	golfinho	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
7	tenha	ter	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	morrido	morrer	VERB	_	VerbForm=Part	3	ccomp	_	_
9	afogado	afogar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	8	advcl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	década	década	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	_
3	de	de	ADP	_	_	4	case	_	_
4	90	90	NUM	_	NumType=Card	2	nmod	_	_
5	não	não	ADV	_	Polarity=Neg	8	advmod	_	_
6	tem	ter	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
7	sido	ser	AUX	_	VerbForm=Part	8	cop	_	_
8	boa	bom	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
9	para	para	ADP	_	_	11	case	_	_
10	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	China	China	PROPN	_	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	«	«	PUNCT	_	_	6	punct	_	SpaceAfter=No
2	Senão	senão	ADV	_	_	6	advmod	_	_
3	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
4	vai	ir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	ser	ser	AUX	_	VerbForm=Inf	6	cop	_	_
6	alvo	alvo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
7	fácil	fácil	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	críticas	crítica	NOUN	_	Gender=Fem|Number=Plur	6	nmod	_	_
11	se	se	SCONJ	_	_	14	mark	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	time	time	NOUN	_	Gender=Masc|Number=Sing	14	nsubj	_	_
14	perder	perder	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	advcl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No
16	»	»	PUNCT	_	_	6	punct	_	_

~~~


