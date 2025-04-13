---
layout: base
title:  'Statistics of vocative in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `vocative`

This relation is universal.

26 nodes (0%) are attached to their parents as `vocative`.

13 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.84615384615385.

The following 9 pairs of parts of speech are connected with `vocative`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (8; 31% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (6; 23% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (3; 12% instances), <tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (3; 12% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="pt_porttinari-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Moço	moço	NOUN	_	Gender=Masc|Number=Sing	4	vocative	4:vocative	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	tá	estar	AUX	_	Abbr=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	saindo	sair	VERB	_	VerbForm=Ger	0	root	0:root	_
5	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	enterrinho	enterrinho	NOUN	_	Gender=Masc|Number=Sing	4	obj	4:obj	_
7	ali	ali	ADV	_	_	4	advmod	4:advmod	_
8	agora	agora	ADV	_	_	4	advmod	4:advmod	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 vocative	color:blue
1	Dom	Dom	PROPN	_	_	4	nsubj	4:nsubj|8:nsubj	_
2	Pedro	Pedro	PROPN	_	_	1	flat:name	1:flat:name	_
3	1º	1º	ADJ	_	Gender=Masc|NumType=Ord	1	amod	1:amod	_
4	levantou	levantar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	6:det	_
6	espada	espada	NOUN	_	Gender=Fem|Number=Sing	4	obj	4:obj	_
7	e	e	CCONJ	_	_	8	cc	8:cc	_
8	gritou	gritar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	conj	4:conj:e	_
9	"	"	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
10	Fora	fora	ADV	_	_	8	ccomp:speech	8:ccomp:speech	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	12:punct	_
12	Temer	Temer	PROPN	_	_	10	vocative	10:vocative	SpaceAfter=No
13	!	!	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
14	"	"	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Pessoal	pessoal	NOUN	_	Number=Sing	4	vocative	4:vocative	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	4:det	_
4	passinho	passinho	NOUN	_	Gender=Masc|Number=Sing	0	root	0:root	_
5	em	em	ADP	_	_	7	case	7:case	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	_
7	corredor	corredor	NOUN	_	Gender=Masc|Number=Sing	4	nmod	4:nmod:em	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No

~~~


