---
layout: base
title:  'Statistics of ccomp in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `ccomp`

This relation is universal.
There are 2 language-specific subtypes of `ccomp`: <tt><a href="it_old-dep-ccomp-relcl.html">ccomp:relcl</a></tt>, <tt><a href="it_old-dep-ccomp-reported.html">ccomp:reported</a></tt>.

529 nodes (1%) are attached to their parents as `ccomp`.

504 instances of `ccomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.32703213610586.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (406; 77% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (42; 8% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (24; 5% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (23; 4% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (8; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Or	ora	ADV	b	_	2	nsubj	_	Canto=7|Verso=72
2	vo'	volere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=7|Verso=72
3	che	che	SCONJ	csso	_	8	mark	_	Canto=7|Verso=72
4	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	8	nsubj	_	Canto=7|Verso=72
5	mia	mio	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	Canto=7|Verso=72
6	sentenza	sentenza	NOUN	sf1fs	Gender=Fem|Number=Sing	8	obj	_	Canto=7|Verso=72
7	ne	ne	PRON	pp3ypt	Clitic=Yes|Person=3|PronType=Prs	8	obl:arg	_	Canto=7|Verso=72
8	'mbocche	imboccare	VERB	vta1cps2	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	Canto=7|SpaceAfter=No|Verso=72
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	Rispuose	rispondere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=8|SpaceAfter=No|Verso=36
2	:	:	PUNCT	_	_	4	punct	_	_
3	«	«	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	Vedi	vedere	VERB	vta2ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp:reported	_	Canto=8|Verso=36
5	che	che	SCONJ	pr	PronType=Rel	7	mark	_	Canto=8|Verso=36
6	son	essere	AUX	vi4ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	cop	_	Canto=8|Verso=36
7	un	uno	PRON	pi1ms	Gender=Masc|Number=Sing|PronType=Ind	4	ccomp	_	Canto=8|Verso=36
8	che	che	PRON	pr	PronType=Rel	9	nsubj	_	Canto=8|Verso=36
9	piango	piangere	VERB	vi2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	Canto=8|SpaceAfter=No|Verso=36
10	»	»	PUNCT	_	_	4	punct	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 18 ccomp	color:blue
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


