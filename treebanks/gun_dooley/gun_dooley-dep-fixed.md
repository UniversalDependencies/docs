---
layout: base
title:  'Statistics of fixed in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `fixed`

This relation is universal.

3 nodes (0%) are attached to their parents as `fixed`.

3 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `fixed`: <tt><a href="gun_dooley-pos-PART.html">PART</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (1; 33% instances), <tt><a href="gun_dooley-pos-PART.html">PART</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (1; 33% instances), <tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 fixed	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	7	obl:sentcon	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	NUM	num	NumType=Card	4	nummod	_	_
4	_	_	NOUN	n	_	7	obl	_	_
5	_	_	PRON	pro	Person=3|PronType=Prs	7	nsubj	_	_
6	_	_	ADJ	mod	_	5	amod	_	_
7	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	0	root	_	_
8	_	_	PART	illocprt	_	7	dep:mod	_	_
9	_	_	PRON	pro	Number=Sing|Person=1|PronType=Prs	10	obl	_	_
10	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	7	advcl	_	_
11	_	_	PART	negprt	_	10	dep:mod	_	_
12	re	e	ADP	post	_	11	fixed	_	R-ABL
13	_	_	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	_	_	NOUN	n	_	3	obl	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	6	advcl	_	_
4	_	_	PART	negprt	_	3	dep:mod	_	_
5	_	_	SCONJ	subordconn	_	4	fixed	_	_
6	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	12	advcl	_	_
7	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	6	compound:svc	_	_
8	_	_	SCONJ	subordconn	_	6	mark	_	_
9	_	_	PART	illocprt	_	6	dep:mod	_	_
10	oakã	akã	NOUN	n	_	12	obl	_	3-head
11	_	_	ADP	post	_	10	case	_	_
12	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	0	root	_	_
13	_	_	PUNCT	punct	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 fixed	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	PROPN	nprop	_	5	nsubj	_	_
5	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
6	_	_	PUNCT	punct	_	5	punct	_	_
7	_	_	PUNCT	punct	_	16	punct	_	_
8	_	_	NOUN	n	_	16	nsubj	_	_
9	_	_	PART	quantprt	_	8	dep:mod	_	_
10	_	_	PART	intprt	_	8	dep:mod	_	_
11	_	_	PART	aspprt	_	8	dep:mod	_	_
12	_	_	PRON	dem	PronType=Dem	16	obl	_	_
13	_	_	ADP	post	_	12	case	_	_
14	_	_	SCONJ	subordconn	_	12	mark	_	_
15	_	_	ADP	post	_	14	fixed	_	_
16	_	_	VERB	vt	Mood=Ind|Person[obj]=1|Subcat=Tran|VerbForm=Fin	5	parataxis:rep	_	_
17	_	_	PUNCT	punct	_	16	punct	_	_
18	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	16	parataxis	_	_
19	_	_	PUNCT	punct	_	5	punct	_	_

~~~


