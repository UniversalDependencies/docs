---
layout: base
title:  'Statistics of xcomp in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `xcomp`

This relation is universal.

307 nodes (1%) are attached to their parents as `xcomp`.

306 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.81758957654723.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (234; 76% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (52; 17% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (13; 4% instances), <tt><a href="pt_alienista-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_alienista-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Desde	desde	ADP	_	_	2	case	_	_
2	então	então	ADV	_	_	3	advmod	_	_
3	comecei	começar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
4	a	a	ADP	_	_	5	mark	_	_
5	observar	observar	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	la	lo	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	-	-	PUNCT	_	_	2	punct	_	_
2	Conto	contar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	11	ccomp:speech	_	_
3	pôr	pôr	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	la	lo	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
5	boa	bom	ADJ	_	Gender=Fem|Number=Sing	3	xcomp	_	_
6	dentro	dentro	ADV	_	ExtPos=ADP	9	case	_	_
7	de	de	ADP	_	_	6	fixed	_	_
8	seis	seis	NUM	_	NumType=Card	9	nummod	_	_
9	semanas	semana	NOUN	_	Gender=Fem|Number=Plur	3	obl	_	_
10	-	-	PUNCT	_	_	2	punct	_	_
11	concluiu	concluir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Ninguém	ninguém	PRON	_	Number=Sing|PronType=Ind	2	nsubj	_	_
2	acreditou	acreditar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	;	;	PUNCT	_	_	4	punct	_	_
4	devia	dever	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	parataxis	_	_
5	ser	ser	AUX	_	VerbForm=Inf	6	cop	_	_
6	invenção	invenção	NOUN	_	Gender=Fem|Number=Sing	4	xcomp	_	_
7	de	de	ADP	_	_	9	case	_	_
8	algum	algum	DET	_	Gender=Masc|Number=Sing|PronType=Ind	9	det	_	_
9	gaiato	gaiato	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


