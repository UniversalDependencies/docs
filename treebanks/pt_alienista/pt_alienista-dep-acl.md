---
layout: base
title:  'Statistics of acl in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pt_alienista-dep-acl-relcl.html">acl:relcl</a></tt>.

124 nodes (1%) are attached to their parents as `acl`.

124 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.7741935483871.

The following 9 pairs of parts of speech are connected with `acl`: <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (91; 73% instances), <tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (10; 8% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (9; 7% instances), <tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (8; 6% instances), <tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Sempre	sempre	ADV	_	_	3	advmod	_	_
3	haverá	haver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	12	ccomp:speech	_	_
4	tempo	tempo	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
5	de	de	ADP	_	_	7	mark	_	_
6	a	o	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	dar	dar	VERB	_	VerbForm=Inf	4	acl	_	_
8	a	a	ADP	_	_	10	case	_	_
9	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	matraca	matraca	NOUN	_	Gender=Fem|Number=Sing	7	obl	_	_
11	-	-	PUNCT	_	_	3	punct	_	_
12	concluiu	concluir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
13	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 acl	color:blue
1	E	e	CCONJ	_	_	14	cc	_	_
2	se	se	SCONJ	_	_	7	mark	_	_
3	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	governo	governo	NOUN	_	Gender=Masc|Number=Sing	7	nsubj	_	_
5	não	não	ADV	_	_	7	advmod	_	_
6	a	o	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	pode	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	advcl	_	_
8	eliminar	eliminar	VERB	_	VerbForm=Inf	7	xcomp	_	SpaceAfter=No
9	,	,	PUNCT	_	_	7	punct	_	_
10	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
11	a	a	ADP	_	ExtPos=ADV	14	advmod	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	fixed	_	_
13	menos	menos	NOUN	_	Gender=Masc|Number=Sing	11	fixed	_	_
14	apto	apto	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
15	para	para	ADP	_	_	16	mark	_	_
16	discriminar	discriminar	VERB	_	VerbForm=Inf	14	acl	_	_
17	la	lo	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	16	obj	_	_
18	,	,	PUNCT	_	_	19	punct	_	_
19	reconhecer	reconhecer	VERB	_	VerbForm=Inf	16	conj	_	_
20	la	lo	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	19	obj	_	_
21	?	?	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	10	nsubj	_	_
2	de	de	ADP	_	_	3	mark	_	_
3	estudar	estudar	VERB	_	VerbForm=Inf	1	acl	_	_
4	sempre	sempre	ADV	_	_	3	advmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	sempre	sempre	ADV	_	_	3	advmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	3	punct	_	_
8	não	não	ADV	_	_	10	advmod	_	_
9	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	bom	bom	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	vira	virar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	conj	_	_
13	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	juízo	juízo	NOUN	_	Gender=Masc|Number=Sing	12	obj	_	SpaceAfter=No
15	.	.	PUNCT	_	_	10	punct	_	_

~~~


