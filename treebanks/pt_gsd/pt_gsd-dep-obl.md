---
layout: base
title:  'Statistics of obl in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="pt_gsd-dep-obl-agent.html">obl:agent</a></tt>.

38 nodes (0%) are attached to their parents as `obl`.

30 instances of `obl` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.73684210526316.

The following 9 pairs of parts of speech are connected with `obl`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (19; 50% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (9; 24% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt> (3; 8% instances), <tt><a href="pt_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="pt_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-SYM.html">SYM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl	color:blue
1	De	_	ADP	ADP	_	2	case	_	_
2	fã	fã	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
3	,	,	PUNCT	.	_	2	punct	_	_
4	virou	virar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	amigo	amigo	NOUN	_	Gender=Masc|Number=Sing	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	Os	o	DET	DET	_	2	det	_	_
2	habitantes	habitante	NOUN	NOUN	_	4	nsubj:pass	_	_
3	são	ser	AUX	AUX	_	4	aux:pass	_	_
4	chamados	chamar	VERB	AUX	_	0	root	_	_
5	"	"	PUNCT	.	_	6	punct	_	SpaceAfter=No
6	Meuzacois	_	PROPN	PNOUN	_	4	obl	_	SpaceAfter=No
7	"	"	PUNCT	.	_	6	punct	_	_
8	e	e	CCONJ	CONJ	_	10	cc	_	_
9	"	"	PUNCT	.	_	10	punct	_	SpaceAfter=No
10	Meuzacoises	_	PROPN	PNOUN	_	6	conj	_	SpaceAfter=No
11	"	"	PUNCT	.	_	10	punct	_	SpaceAfter=No
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 obl	color:blue
1	Foi	ser	AUX	AUX	_	2	aux:pass	_	_
2	eleito	eleger	VERB	AUX	_	0	root	_	_
3	prefeito	prefeito	NOUN	NOUN	_	2	obj	_	_
4	de	de	ADP	ADP	_	5	case	_	_
5	São	_	PROPN	PNOUN	_	3	nmod	_	_
6	Bernardo	_	PROPN	PNOUN	_	5	flat:name	_	_
7	em	em	ADP	ADP	_	8	case	_	_
8	1951	_	NUM	NUM	NumType=Card	2	obl	_	SpaceAfter=No
9	,	,	PUNCT	.	_	13	punct	_	_
10	onde	onde	ADV	ADV	_	13	advmod	_	_
11	sempre	sempre	ADV	ADV	_	13	advmod	_	_
12	era	ser	AUX	AUX	_	13	aux:pass	_	_
13	visto	_	VERB	VERB	_	5	acl:relcl	_	_
14	por	por	ADP	ADP	_	16	case	_	_
15	as	o	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	16	det	_	_
16	ruas	rua	NOUN	NOUN	_	13	nmod	_	_
17	verificando	verificar	VERB	VERB	_	13	acl	_	_
18	como	como	ADV	ADV	_	19	advmod	_	_
19	andavam	andar	VERB	VERB	_	17	ccomp	_	_
20	as	o	DET	DET	_	21	det	_	_
21	coisas	coisa	NOUN	NOUN	_	19	nsubj	_	_
22	por	por	ADP	ADP	_	24	case	_	_
23	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	cidade	cidade	NOUN	NOUN	_	19	nmod	_	SpaceAfter=No
25	.	.	PUNCT	.	_	2	punct	_	_

~~~


