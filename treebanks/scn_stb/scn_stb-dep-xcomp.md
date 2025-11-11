---
layout: base
title:  'Statistics of xcomp in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `xcomp`

This relation is universal.

208 nodes (2%) are attached to their parents as `xcomp`.

206 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.07692307692308.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-VERB.html">VERB</a></tt> (151; 73% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt> (34; 16% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (10; 5% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-PROPN.html">PROPN</a></tt> (8; 4% instances), <tt><a href="scn_stb-pos-AUX.html">AUX</a></tt>-<tt><a href="scn_stb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="scn_stb-pos-AUX.html">AUX</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	«	«	PUNCT	FB	_	3	punct	_	SpaceAfter=No|TokenRange=0:1
2	T'	ti	PRON	PC	Number=Sing|Person=2|PronType=Prs	3	expl	_	Clitic=Yes|SpaceAfter=No|TokenRange=1:3
3	avissi	aviri	VERB	V	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=4:10
4	a	a	PART	E	_	5	mark	_	TokenRange=11:12
5	'scutari	ascutari	VERB	V	VerbForm=Inf	3	xcomp	_	TokenRange=13:22
6	cchiù	chiù	ADV	B	_	7	advmod	_	TokenRange=23:26
7	assai	assai	ADV	B	_	5	advmod	_	SpaceAfter=No|TokenRange=27:32
8	…	…	PUNCT	FF	_	3	punct	_	SpaceAfter=No|TokenRange=33:34
9	»	»	PUNCT	FB	_	3	punct	_	SpaceAfter=No|TokenRange=34:35

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	Patèticu	pateticu	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No|TokenRange=3170:3178
2	,	,	PUNCT	FF	_	5	punct	_	TokenRange=3178:3179
3	ma	ma	CCONJ	CC	_	5	cc	_	TokenRange=3180:3182
4	si	si	PRON	PC	Person=3|PronType=Prs	5	expl	_	Clitic=Yes|TokenRange=3183:3185
5	sintiva	sintiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	1	conj	_	TokenRange=3186:3193
6	già	già	ADV	B	_	8	advmod	_	TokenRange=3194:3197
7	cchiù	chiù	ADV	B	_	8	advmod	_	TokenRange=3198:3201
8	lìbbiru	lìbbiru	ADJ	A	Gender=Masc|Number=Sing	5	xcomp	_	SpaceAfter=No|TokenRange=3202:3208
9	.	.	PUNCT	FS	_	1	punct	_	TokenRange=3208:3209

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 xcomp	color:blue
1	Cola	Cola	PROPN	SP	_	3	nsubj	_	TokenRange=2477:2481
2	si	si	PRON	PC	Person=3|PronType=Prs	3	expl	_	Clitic=Yes|TokenRange=2482:2484
3	pirsuasi	pirsuadiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=2485:2493
4	e	e	CCONJ	CC	_	5	cc	_	TokenRange=2494:2495
5	sammuzzò	sammuzzari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	TokenRange=2496:2501
6	'na	unu	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	TokenRange=2502:2505
7	terza	terzu	ADJ	NO	Gender=Fem|Number=Sing|NumType=Ord	8	amod	_	TokenRange=2506:2511
8	vota	vota	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No|TokenRange=2512:2517
9	,	,	PUNCT	FF	_	12	punct	_	TokenRange=2517:2518
10	e	e	CCONJ	CC	_	12	cc	_	TokenRange=2519:2520
11	nni	ni	PRON	PC	PronType=Prs	12	iobj	_	Clitic=Yes|TokenRange=2521:2523
12	rinisciu	rinèsciri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	TokenRange=2524:2528
13	vincituri	vincituri	NOUN	S	Gender=Masc	12	xcomp	_	SpaceAfter=No|TokenRange=2529:2538
14	.	.	PUNCT	FS	_	3	punct	_	TokenRange=2538:2539

~~~


