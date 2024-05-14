---
layout: base
title:  'Statistics of advmod in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `advmod`

This relation is universal.

240 nodes (2%) are attached to their parents as `advmod`.

145 instances of `advmod` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25833333333333.

The following 4 pairs of parts of speech are connected with `advmod`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt> (236; 98% instances), <tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt>-<tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	_	_	ADV	inact	_	3	advmod	_	_
2	_	_	PART	illocprt	_	1	dep:mod	_	_
3	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
4	_	_	NUM	num	NumType=Card	5	nummod	_	_
5	_	_	NOUN	n	Number=Plur	3	nsubj	_	_
6	_	_	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	_	_	ADV	quant	_	2	advmod	_	_
2	_	_	ADV	mod	_	3	advmod	_	_
3	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	8	advcl	_	_
4	_	_	SCONJ	subordconn	_	3	mark	_	_
5	je	je	PART	illocprt	_	3	dep:mod	_	HSY
6	_	_	PRON	pro	Person=3|PronType=Prs	8	nsubj	_	_
7	_	_	PART	intprt	_	6	dep:mod	_	_
8	_	_	VERB	vi:d	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	14	advcl	_	_
9	_	_	SCONJ	subordconn	_	8	mark	_	_
10	_	_	PART	illocprt	_	8	dep:mod	_	_
11	_	_	PRON	pro	Person=3|PronType=Prs	14	obl	_	_
12	_	_	ADP	post	_	11	case	_	_
13	_	_	NOUN	n	_	14	nsubj	_	_
14	_	_	VERB	vi:a	Mood=Ind|Subcat=Intr|VerbForm=Inf	0	root	_	_
15	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	14	compound:svc	_	_
16	_	_	PUNCT	punct	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 advmod	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	6	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	NOUN	n	_	6	nsubj	_	_
5	_	_	SCONJ	rel	_	4	mark	_	_
6	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
7	_	_	NOUN	n	_	6	obl	_	_
8	_	_	ADP	post	_	7	case	_	_
9	_	_	PUNCT	punct	_	6	punct	_	_
10	_	_	PUNCT	punct	_	13	punct	_	_
11	_	_	ADV	dem	_	13	advmod	_	_
12	_	_	PART	discprt	_	11	dep:mod	_	_
13	_	_	NOUN	n	_	6	parataxis:rep	_	_
14	_	_	PUNCT	punct	_	13	punct	_	_
15	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	13	parataxis	_	_
16	_	_	PUNCT	punct	_	6	punct	_	_

~~~


