---
layout: base
title:  'Statistics of amod in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `amod`

This relation is universal.

40 nodes (0%) are attached to their parents as `amod`.

40 instances of `amod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `amod`: <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-ADJ.html">ADJ</a></tt> (30; 75% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-ADJ.html">ADJ</a></tt> (8; 20% instances), <tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gun_dooley-pos-ADJ.html">ADJ</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	6	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	NOUN	n	_	6	nsubj	_	_
5	_	_	ADJ	inact	_	4	amod	_	_
6	_	_	VERB	inact	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
7	_	_	PRON	pro	Clusivity=In|Number=Plur|Person=1|PronType=Prs	6	obl	_	_
8	_	_	SCONJ	rel	_	7	mark	_	_
9	_	_	ADP	post	_	7	case	_	_
10	_	_	PUNCT	punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	_	_	PUNCT	punct	_	2	punct	_	_
2	_	_	PRON	interpron	PronType=Int	5	parataxis:rep	_	_
3	_	_	ADJ	inact	_	2	amod	_	_
4	_	_	PUNCT	punct	_	2	punct	_	_
5	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	8	advcl	_	_
6	_	_	SCONJ	subordconn	_	5	mark	_	_
7	_	_	PART	illocprt	_	5	dep:mod	_	_
8	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Polarity=Neg|Subcat=Tran|VerbForm=Fin	0	root	_	_
9	_	_	VERB	vpos	Polarity=Neg|VerbForm=Post	8	compound:svc	_	_
10	_	_	PART	illocprt	_	8	dep:mod	_	_
11	_	_	PUNCT	punct	_	12	punct	_	_
12	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	8	conj	_	_
13	_	_	PART	focprt	_	12	dep:mod	_	_
14	_	_	PUNCT	punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	6	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	PROPN	nprop	_	6	nsubj	_	_
5	_	_	ADJ	inact	_	4	amod	_	_
6	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
7	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	6	compound:svc	_	_
8	_	_	PUNCT	punct	_	6	punct	_	_

~~~


