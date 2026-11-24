---
layout: base
title:  'Statistics of obl:agent in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pt_portjur-dep-obl.html">obl</a></tt>.

362 nodes (0%) are attached to their parents as `obl:agent`.

355 instances of `obl:agent` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.27900552486188.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (238; 66% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt> (104; 29% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (17; 5% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	atendimento	atendimento	NOUN	_	Gender=Masc|Number=Sing	5	nsubj:pass	_	_
3	pré-natal	pré-natal	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
4	será	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	aux:pass	_	_
5	realizado	realizar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
6	por	por	ADP	_	_	7	case	_	_
7	profissionais	profissional	NOUN	_	Number=Plur	5	obl:agent	_	_
8	de	de	ADP	_	_	10	case	_	_
9	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	atenção	atenção	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
11	primária	primário	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:agent	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	cédula	cédula	NOUN	_	Gender=Fem|Number=Sing	13	nsubj	_	_
3	de	de	ADP	_	_	4	case	_	_
4	crédito	crédito	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
5	bancário	bancário	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
6	regida	reger	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	2	acl	_	_
7	por	por	ADP	_	_	9	case	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Lei	Lei	PROPN	_	_	6	obl:agent	_	_
10	nº	número	NOUN	_	Abbr=Yes|Gender=Masc|Number=Sing	9	nmod	_	_
11	10.931/04	10.931/04	NUM	_	NumType=Card	10	nmod	_	_
12	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	título	título	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
14	executivo	executivo	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	_
15	extrajudicial	extrajudicial	ADJ	_	Number=Sing	13	amod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 obl:agent	color:blue
1	As	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	obrigações	obrigação	NOUN	_	Gender=Fem|Number=Plur	8	nsubj	_	_
3	previstas	prever	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	2	acl	_	_
4	em	em	ADP	_	_	6	case	_	_
5	esta	este	DET	_	Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
6	Lei	Lei	PROPN	_	_	3	obl	_	_
7	não	não	ADV	_	_	8	advmod	_	_
8	excluem	excluir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	outras	outro	PRON	_	Gender=Fem|Number=Plur|PronType=Ind	8	obj	_	_
10	decorrentes	decorrente	ADJ	_	Number=Plur	9	amod	_	_
11	de	de	ADP	_	_	13	case	_	_
12	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
13	princípios	princípio	NOUN	_	Gender=Masc|Number=Plur	10	obl	_	_
14	por	por	ADP	_	_	15	case	_	_
15	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	16	obl:agent	_	_
16	adotados	adotar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	13	acl	_	SpaceAfter=No
17	.	.	PUNCT	_	_	8	punct	_	_

~~~


