---
layout: base
title:  'Statistics of advmod:neg in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="it_old-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="it_old-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="it_old-dep-advmod-tmod.html">advmod:tmod</a></tt>.

496 nodes (1%) are attached to their parents as `advmod:neg`.

480 instances of `advmod:neg` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86290322580645.

The following 9 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (405; 82% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (36; 7% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (28; 6% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (9; 2% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:neg	color:blue
1	Certo	certo	ADV	b	_	3	nsubj	_	Canto=19|Verso=93
2	non	non	ADV	b	PronType=Neg	3	advmod:neg	_	Canto=19|Verso=93
3	chiese	chiedere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=19|Verso=93
4	se	se	SCONJ	_	_	5	mark	_	Canto=19|Verso=93
5	non	non	ADV	b	PronType=Neg	3	advmod:neg	_	Canto=19|Verso=93
6	“	“	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	vieni	venire	VERB	vi3mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	ccomp:reported	_	Canto=19|Verso=93
8	mi	mi	PRON	pp1sxda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	7	iobj	_	Canto=19|Verso=93
9	retro	retro	ADV	eiskml	_	7	advmod:lmod	_	Canto=19|SpaceAfter=No|Verso=93
10	”	”	PUNCT	_	_	7	punct	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 advmod:neg	color:blue
1	E	e	CCONJ	cscc	_	9	cc	_	Canto=26|Verso=10
2	se	se	SCONJ	cssv	_	4	mark	_	Canto=26|Verso=10
3	già	già	ADV	b	_	4	advmod:tmod	_	Canto=26|Verso=10
4	fosse	essere	AUX	vi4cis3	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	advcl	_	Canto=26|SpaceAfter=No|Verso=10
5	,	,	PUNCT	_	_	4	punct	_	_
6	non	non	ADV	b	PronType=Neg	9	advmod:neg	_	Canto=26|Verso=10
7	saria	essere	AUX	vi4dps3	Mood=Cnd|Number=Sing|Person=3|Tense=Pres	9	cop	_	Canto=26|Verso=10
8	per	per	ADP	_	_	9	case	_	Canto=26|Verso=10
9	tempo	tempo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Canto=26|SpaceAfter=No|Verso=10
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 advmod:neg	color:blue
1	Per	per	ADP	epskr	_	2	case	_	Canto=2|Verso=34
2	che	che	PRON	pr	PronType=Rel	12	obl	_	Canto=2|SpaceAfter=No|Verso=34
3	,	,	PUNCT	_	_	2	punct	_	_
4	se	se	SCONJ	cssv	_	10	mark	_	Canto=2|Verso=34
5	di	di	ADP	_	_	7	case	_	Canto=2|Comment=de-l|Verso=34
6	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Canto=2|Comment=de-l|Verso=34
7	venire	venire	VERB	vi3fpsm3ms	Tense=Pres|VerbForm=Inf	10	obl	_	Canto=2|Verso=34
8	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	Canto=2|Verso=34
9	m'	mi	PRON	pf1sypr	Clitic=Yes|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	10	obj	_	Canto=2|SpaceAfter=No|Verso=34
10	abbandono	abbandonare	VERB	vta+1ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	Canto=2|SpaceAfter=No|Verso=34
11	,	,	PUNCT	_	_	10	punct	_	_
12	temo	temere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=2|Verso=35
13	che	che	SCONJ	csso	_	18	mark	_	Canto=2|Verso=35
14	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	Canto=2|Verso=35
15	venuta	venuta	NOUN	sf1fs	Gender=Fem|Number=Sing	18	nsubj	_	Canto=2|Verso=35
16	non	non	ADV	b	PronType=Neg	18	advmod:neg	_	Canto=2|Verso=35
17	sia	essere	AUX	vi4cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	Canto=2|Verso=35
18	folle	folle	ADJ	a2fs	Number=Sing	12	ccomp	_	Canto=2|SpaceAfter=No|Verso=35
19	.	.	PUNCT	_	_	12	punct	_	_

~~~


