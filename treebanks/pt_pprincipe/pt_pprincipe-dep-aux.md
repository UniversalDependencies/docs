---
layout: base
title:  'Statistics of aux in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="pt_pprincipe-dep-aux-pass.html">aux:pass</a></tt>.

83 nodes (0%) are attached to their parents as `aux`.

83 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32530120481928.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-AUX.html">AUX</a></tt> (81; 98% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux	color:blue
1	Vou	ir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	arriscando	arriscar	VERB	_	VerbForm=Ger	0	root	_	_
3	então	então	ADV	_	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	aqui	aqui	ADV	_	_	2	advmod	_	_
6	e	e	CCONJ	_	_	7	cc	_	_
7	ali	ali	ADV	_	_	5	conj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	-	-	PUNCT	_	_	4	punct	_	_
2	Teria	ter	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	4	aux	_	_
3	sido	ser	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	4	cop	_	_
4	melhor	melhor	ADJ	_	Number=Sing	11	ccomp:speech	_	_
5	voltares	voltar	VERB	_	Mood=Sub|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	4	csubj	_	_
6	a	a	ADP	_	_	9	case	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
8	mesma	mesmo	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	hora	hora	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	4	punct	_	_
11	disse	dizer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	raposa	raposo	NOUN	_	Gender=Fem|Number=Sing	11	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 aux	color:blue
1	E	e	CCONJ	_	_	3	cc	_	_
2	eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	acrescentei	acrescentar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	hesitando	hesitar	VERB	_	VerbForm=Ger	3	advcl	_	SpaceAfter=No
6	:	:	PUNCT	_	_	11	punct	_	_
7	-	-	PUNCT	_	_	11	punct	_	_
8	Terá	ter	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	11	aux	_	_
9	sido	ser	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	11	cop	_	_
10	por	por	ADP	_	_	11	case	_	_
11	causa	causa	NOUN	_	Gender=Fem|Number=Sing	3	ccomp:speech	_	_
12	de	de	ADP	_	_	14	case	_	_
13	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	aniversário	aniversário	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
15	?	?	PUNCT	_	_	11	punct	_	SpaceAfter=No
16	...	...	PUNCT	_	_	3	punct	_	_

~~~


