---
layout: base
title:  'Statistics of obl in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="pt_gsd-dep-obl-agent.html">obl:agent</a></tt>.

46 nodes (0%) are attached to their parents as `obl`.

34 instances of `obl` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.76086956521739.

The following 11 pairs of parts of speech are connected with `obl`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (23; 50% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (9; 20% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt> (4; 9% instances), <tt><a href="pt_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="pt_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (1; 2% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl	color:blue
1	Em	em	ADP	ADP	_	2	case	_	_
2	1975	_	NUM	NUM	NumType=Card	4	obl	_	_
3	foi	_	AUX	AUX	_	4	aux:pass	_	_
4	eleito	eleger	VERB	_	_	0	root	_	_
5	Deputado	_	PROPN	PNOUN	_	4	obj	_	_
6	Estadual	_	PROPN	PNOUN	_	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	.	_	8	punct	_	_
8	mandato	mandato	NOUN	NOUN	_	5	nmod	_	_
9	que	_	PRON	PRON	_	10	obj	_	_
10	repetiu	repetir	VERB	VERB	_	8	acl:relcl	_	_
11	por	por	ADP	ADP	_	14	case	_	_
12	mais	mais	ADV	ADV	_	13	advmod	_	_
13	duas	_	NUM	NUM	NumType=Card	14	nummod	_	_
14	vezes	vez	NOUN	NOUN	_	10	nmod	_	_
15	até	_	ADP	ADP	_	16	case	_	_
16	1986	_	NUM	NUM	NumType=Card	10	nmod	_	SpaceAfter=No
17	.	.	PUNCT	.	_	5	punct	_	_

~~~


