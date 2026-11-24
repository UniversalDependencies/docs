---
layout: base
title:  'Statistics of acl in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pt_portjur-dep-acl-relcl.html">acl:relcl</a></tt>.

1969 nodes (2%) are attached to their parents as `acl`.

1957 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.32859319451498.

The following 19 pairs of parts of speech are connected with `acl`: <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (1645; 84% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (136; 7% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (60; 3% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (32; 2% instances), <tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (29; 1% instances), <tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (21; 1% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (21; 1% instances), <tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="pt_portjur-pos-X.html">X</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Agravo	agravo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	interno	interno	ADJ	_	Gender=Masc|Number=Sing	1	amod	_	_
3	provido	prover	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	1	acl	_	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	Incidência	incidência	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	de	de	ADP	_	_	3	case	_	_
3	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	1	nmod	_	_
4	disposto	dispor	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	3	acl	_	_
5	em	em	ADP	_	_	7	case	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	artigo	artigo	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	_
8	411	411	NUM	_	NumType=Card	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	_
10	de	de	ADP	_	_	12	case	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Código	Código	PROPN	_	_	7	nmod	_	_
13	Civil	Civil	PROPN	_	_	12	flat:name	_	SpaceAfter=No
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	writ	writ	X	_	Foreign=Yes	4	nsubj	_	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	impassível	impassível	ADJ	_	Number=Sing	0	root	_	_
5	de	de	ADP	_	_	7	mark	_	_
6	ser	ser	AUX	_	VerbForm=Inf	7	aux:pass	_	_
7	manejado	manejar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	4	acl	_	_
8	como	como	ADP	_	_	9	case	_	_
9	sucedâneo	sucedâneo	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	_
10	de	de	ADP	_	_	11	case	_	_
11	recurso	recurso	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
12	ou	ou	CCONJ	_	_	13	cc	_	_
13	revisão	revisão	NOUN	_	Gender=Fem|Number=Sing	11	conj	_	_
14	criminal	criminal	ADJ	_	Number=Sing	11	amod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


