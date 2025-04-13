---
layout: base
title:  'Statistics of obl:agent in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pt_petrogold-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="pt_petrogold-dep-obl-arg.html">obl:arg</a></tt>.

1148 nodes (0%) are attached to their parents as `obl:agent`.

1147 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.8684668989547.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (960; 84% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt> (173; 15% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (10; 1% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:agent	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	balanço	balanço	NOUN	_	Gender=Masc|Number=Sing	6	nsubj:pass	_	_
3	de	de	ADP	_	_	4	case	_	_
4	massa	massa	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
6	obtido	obter	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	por	por	ADP	_	_	9	case	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Equação	equação	NOUN	_	Gender=Fem|Number=Sing	6	obl:agent	_	_
10	9	9	NUM	_	NumType=Card	9	nummod	_	SpaceAfter=No
11	:	:	PUNCT	_	_	13	punct	_	_
12	(	(	PUNCT	_	_	13	punct	_	SpaceAfter=No
13	9	9	NUM	_	NumType=Card	9	appos	_	SpaceAfter=No
14	)	)	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	N,N,	N,N,	PROPN	_	Gender=Fem|Number=Sing	5	nsubj:pass	_	SpaceAfter=No
3	N-trimetilquitosana	N-trimetilquitosana	PROPN	_	Number=Sing	2	flat:name	_	_
4	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	obtido	obter	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
6	por	por	ADP	_	_	7	case	_	_
7	Correia	Correia	PROPN	_	Gender=Masc|Number=Sing	5	obl:agent	_	SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obl:agent	color:blue
1	Esta	este	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	zona	zona	NOUN	_	Gender=Fem|Number=Sing	8	nsubj:pass	_	_
3	de	de	ADP	_	_	4	case	_	_
4	falha	falha	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	_	_
6	por	por	ADP	_	_	7	case	_	_
7	ele	ele	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obl:agent	_	_
8	denominada	denominar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
9	“	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	Zona	Zona	PROPN	_	Gender=Fem|Number=Sing	8	xcomp	_	_
11	de	de	ADP	_	_	10	flat:name	_	_
12	Transferência	Transferência	PROPN	_	Number=Sing	10	flat:name	_	_
13	de	de	ADP	_	_	10	flat:name	_	_
14	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	flat:name	_	_
15	Funil	Funil	PROPN	_	Number=Sing	10	flat:name	_	SpaceAfter=No
16	”	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
17	.	.	PUNCT	_	_	8	punct	_	_

~~~


