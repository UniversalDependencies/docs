---
layout: base
title:  'Statistics of nsubj:pass in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_dantestocks-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_dantestocks-dep-nsubj-outer.html">nsubj:outer</a></tt>.

106 nodes (0%) are attached to their parents as `nsubj:pass`.

95 instances of `nsubj:pass` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.50943396226415.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (67; 63% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt> (28; 26% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (9; 8% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Trade	trade	NOUN	_	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
2	com	com	ADP	_	_	3	case	_	_
3	#JBSS3	#JBSS3	PROPN	_	_	1	nmod	_	_
4	concluído	concluir	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	com	com	ADP	_	_	6	case	_	_
6	sucesso	sucesso	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	_
7	:D	:D	SYM	_	_	4	discourse	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	@GustavoNegreiro	@GustavoNegreiro	PROPN	_	_	3	vocative	_	_
2	PETR4	PETR4	PROPN	_	_	3	nsubj:pass	_	_
3	valorizada	valorizar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	em	em	ADP	_	_	7	case	_	_
5	+	+	SYM	_	_	6	advmod	_	SpaceAfter=No
6	4,19	4,19	NUM	_	NumType=Card	7	nummod	_	SpaceAfter=No
7	%	%	SYM	_	_	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Por	por	ADP	_	_	2	case	_	_
2	tudo	tudo	PRON	_	PronType=Ind	0	root	_	_
3	que	que	PRON	_	PronType=Rel	5	nsubj:pass	_	_
4	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	abusado	abusar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	2	acl:relcl	_	_
6	de	de	ADP	_	_	10	case	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
8	outrora	outrora	ADV	_	_	9	advmod	_	_
9	promissora	promissor	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	_
10	PETR4	PETR4	PROPN	_	_	5	obl	_	_
11	#EuApoioCPIdaPetrobras	#EuApoioCPIdaPetrobras	X	_	_	2	parataxis	_	SpaceAfter=No

~~~


