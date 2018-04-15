---
layout: base
title:  'Statistics of ccomp in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `ccomp`

This relation is universal.

1565 nodes (1%) are attached to their parents as `ccomp`.

1219 instances of `ccomp` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.77507987220447.

The following 18 pairs of parts of speech are connected with `ccomp`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (1192; 76% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (142; 9% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (142; 9% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (22; 1% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (16; 1% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="pt_bosque-pos-DET.html">DET</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 ccomp	color:blue
1	Se	se	SCONJ	_	_	2	mark	_	_
2	reagir	reagir	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	advcl	_	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	interessante	interessante	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	porque	porque	SCONJ	_	_	6	mark	_	_
6	mostrará	mostrar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	advcl	_	_
7	que	que	SCONJ	_	_	9	mark	_	_
8	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	vivo	vivo	ADJ	_	Gender=Masc|Number=Sing	6	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No
11	»	»	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 ccomp	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	situação	situação	NOUN	_	Gender=Fem|Number=Sing	7	ccomp	_	_
4	absurda	absurdo	ADJ	_	Gender=Fem|Number=Sing	3	amod	_	SpaceAfter=No
5	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
6	,	,	PUNCT	_	_	3	punct	_	_
7	disse	dizer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	Taylor	Taylor	PROPN	_	Gender=Masc|Number=Sing	7	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	49	49	NUM	_	NumType=Card	8	appos	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


