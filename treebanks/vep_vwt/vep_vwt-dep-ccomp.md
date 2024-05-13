---
layout: base
title:  'Statistics of ccomp in UD_Veps-VWT'
udver: '2'
---

## Treebank Statistics: UD_Veps-VWT: Relations: `ccomp`

This relation is universal.

16 nodes (1%) are attached to their parents as `ccomp`.

16 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5625.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt>-<tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt> (13; 81% instances), <tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt>-<tt><a href="vep_vwt-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt>-<tt><a href="vep_vwt-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Minä	minä	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	meletin	meletada	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	pit'kha	pit'kha	ADV	_	_	2	advmod	_	_
4	,	,	PUNCT	_	_	7	punct	_	_
5	pidab-ik	pidada	AUX	_	Clitic=Ik|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
6	minei	minä	PRON	_	Case=All|Number=Sing|Person=1|PronType=Prs	7	obl	_	_
7	tehta	tehta	VERB	_	VerbForm=Inf	2	ccomp	_	_
8	necidä	nece	PRON	_	Case=Par|Number=Sing|PronType=Dem	7	obj	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	Muštan	muštta	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	,	PUNCT	_	_	7	punct	_	_
3	miše	miše	SCONJ	_	_	7	mark	_	_
4	ezmäi	ezmäi	ADV	_	_	7	advmod	_	_
5	oli	olda	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
6	lujas	lujas	ADV	_	_	7	advmod	_	_
7	jüged	jüged	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	1	ccomp	_	_
8	opetas	opetas	VERB	_	VerbForm=Inf	7	csubj	_	_
9	,	,	PUNCT	_	_	10	punct	_	_
10	el'geta	el'geta	VERB	_	VerbForm=Inf	8	conj	_	_
11	da	da	CCONJ	_	_	12	cc	_	_
12	panda	panda	VERB	_	VerbForm=Inf	8	conj	_	_
13	muštho	mušt	NOUN	_	Case=Ill|Number=Sing	12	obl	_	_
14	kaik	kaik	PRON	_	Case=Nom|Number=Sing|PronType=Tot	15	nmod	_	_
15	tedoid	tedo	NOUN	_	Case=Par|Number=Plur	12	obj	_	_
16	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Minä	minä	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	meletan	meletada	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	_	_	8	punct	_	_
4	miše	miše	SCONJ	_	_	8	mark	_	_
5	nece	nece	PRON	_	Case=Nom|Number=Sing|PronType=Dem	8	nsubj:cop	_	_
6	om	olda	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
7	lujas	lujas	ADV	_	_	8	advmod	_	_
8	hüvin	hüvin	ADV	_	_	2	ccomp	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


