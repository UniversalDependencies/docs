---
layout: base
title:  'Statistics of acl in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pt_dantestocks-dep-acl-relcl.html">acl:relcl</a></tt>.

458 nodes (1%) are attached to their parents as `acl`.

452 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.44978165938865.

The following 20 pairs of parts of speech are connected with `acl`: <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (294; 64% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (37; 8% instances), <tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (32; 7% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (22; 5% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (17; 4% instances), <tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (16; 3% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (13; 3% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-X.html">X</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	bvmf3	bvmf3	PROPN	_	_	2	nmod	_	_
2	gatilho	gatilho	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
3	cancelado	cancelar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	2	acl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	mais	mais	ADV	_	_	6	advmod	_	_
6	um	um	PRON	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	parataxis	_	_
7	hehe	hehe	X	_	_	2	discourse	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	já	já	ADV	_	_	2	advmod	_	_
2	imaginou	imaginar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	ver	ver	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	#PETR4	#PETR4	PROPN	_	_	3	obj	_	_
6	voltando	voltar	VERB	_	VerbForm=Ger	5	acl	_	_
7	para	para	ADP	_	_	8	case	_	_
8	baixo	baixo	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_
9	de	de	ADP	_	_	11	case	_	_
10	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	R$	R$	SYM	_	_	8	nmod	_	SpaceAfter=No
12	13	13	NUM	_	NumType=Card	11	nummod	_	_
13	?	?	PUNCT	_	_	2	punct	_	_
14	=)	=)	SYM	_	_	2	discourse	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	olha	olhar	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
2	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	R$	R$	SYM	_	_	1	obj	_	SpaceAfter=No
4	13,50	13,50	NUM	_	NumType=Card	3	nummod	_	_
5	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	6	expl	_	_
6	aproximando	aproximar	VERB	_	VerbForm=Ger	3	acl	_	_
7	em	em	ADP	_	_	9	case	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	#PETR4	#PETR4	PROPN	_	_	6	obl	_	_
10	!	!	PUNCT	_	_	1	punct	_	_
11	Uia	uia	INTJ	_	_	1	discourse	_	_
12	!	!	PUNCT	_	_	11	punct	_	_
13	Não	não	ADV	_	_	14	advmod	_	_
14	esperava	esperar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	1	parataxis	_	_
15	ver	ver	VERB	_	VerbForm=Inf	14	xcomp	_	_
16	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	15	obj	_	_
17	acontecendo	acontecer	VERB	_	VerbForm=Ger	16	acl	_	_
18	hoje	hoje	ADV	_	_	17	advmod	_	_
19	não	não	ADV	_	_	14	advmod	_	_
20	...	...	PUNCT	_	_	14	punct	_	_
21	o.O	o.O	SYM	_	_	1	discourse	_	SpaceAfter=No

~~~


