---
layout: base
title:  'Statistics of obl:agent in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-obl.html">obl</a></tt>.

726 nodes (0%) are attached to their parents as `obl:agent`.

722 instances of `obl:agent` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.31129476584022.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (458; 63% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (245; 34% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:agent	color:blue
1	Fui	ser	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	2	aux:pass	_	_
2	procurado	procurar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	por	por	ADP	_	_	5	case	_	_
4	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	ladrões	ladrão	NOUN	_	Gender=Masc|Number=Plur	2	obl:agent	_	_
6	para	para	SCONJ	_	_	7	mark	_	_
7	comprar	comprar	VERB	_	VerbForm=Inf	2	advcl	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	carga	carga	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	Menores	menor	NOUN	_	Number=Plur	0	root	_	_
2	em	em	ADP	_	_	3	case	_	_
3	bordel	bordel	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	_
4	encerrado	encerrar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	3	acl	_	_
5	por	por	ADP	_	_	7	case	_	_
6	a	o	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	PJ	PJ	PROPN	_	Gender=Fem|Number=Sing	4	obl:agent	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	Mas	mas	CCONJ	_	_	5	cc	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Presidente	presidente	NOUN	_	Gender=Masc|Number=Sing	5	nsubj:pass	_	_
4	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	cercado	cercado	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
6	por	por	ADP	_	_	7	case	_	_
7	pedidos	pedido	NOUN	_	Gender=Masc|Number=Plur	5	obl:agent	_	_
8	de	de	ADP	_	_	9	case	_	_
9	renúncia	renúncia	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


