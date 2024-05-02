---
layout: base
title:  'Statistics of obl:agent in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-obl.html">obl</a></tt>.

496 nodes (0%) are attached to their parents as `obl:agent`.

496 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.05645161290323.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (344; 69% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (139; 28% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (11; 2% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:agent	color:blue
1	Damião	Damião	PROPN	_	_	3	nsubj:pass	_	_
2	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	enterrado	enterrar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	por	por	ADP	_	_	6	case	_	_
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	coveiro	coveiro	NOUN	_	Gender=Masc|Number=Sing	3	obl:agent	_	_
7	Miguel	Miguel	PROPN	_	_	6	nmod	_	_
8	Fernandes	Fernandes	PROPN	_	_	7	flat:name	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	51	51	NUM	_	NumType=Card	7	parataxis	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl:agent	color:blue
1	Ou	ou	CCONJ	_	_	4	cc	_	_
2	de	de	ADP	_	_	4	case	_	_
3	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	gol	gol	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	feito	fazer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	4	acl	_	_
6	por	por	ADP	_	_	9	case	_	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	mesmo	mesmo	DET	_	Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	Jô	Jô	PROPN	_	_	5	obl:agent	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	com	com	ADP	_	_	13	case	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	braço	braço	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
14	,	,	PUNCT	_	_	17	punct	_	_
15	contra	contra	ADP	_	_	17	case	_	_
16	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	Vasco	Vasco	PROPN	_	_	5	obl	_	SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 obl:agent	color:blue
1	Sergio	Sergio	PROPN	_	_	3	nsubj	_	_
2	Moro	Moro	PROPN	_	_	1	flat:name	_	_
3	perguntou	perguntar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	a	a	ADP	_	_	5	case	_	_
5	Palocci	Palocci	PROPN	_	_	3	obl	_	_
6	se	se	SCONJ	_	_	8	mark	_	_
7	Kontic	Kontic	PROPN	_	_	8	nsubj	_	_
8	sabia	saber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	ccomp	_	_
9	de	de	ADP	_	_	11	case	_	_
10	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	ilegalidades	ilegalidade	NOUN	_	Gender=Fem|Number=Plur	8	obl	_	_
12	cometidas	cometer	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	11	acl	_	_
13	por	por	ADP	_	_	14	case	_	_
14	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obl:agent	_	SpaceAfter=No
15	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


