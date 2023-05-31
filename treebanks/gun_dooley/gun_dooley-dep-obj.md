---
layout: base
title:  'Statistics of obj in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `obj`

This relation is universal.

292 nodes (2%) are attached to their parents as `obj`.

149 instances of `obj` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.96917808219178.

The following 5 pairs of parts of speech are connected with `obj`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (243; 83% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (23; 8% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (21; 7% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	_	_	PUNCT	punct	_	2	punct	_	_
2	_	_	VERB	vt	Mood=Imp|Person[subj]=2|Subcat=Tran|VerbForm=Fin	11	parataxis:rep	_	_
3	_	_	NOUN	n	_	2	obj	_	_
4	_	_	PUNCT	punct	_	2	punct	_	_
5	_	_	PART	temprt	_	6	dep:mod	_	_
6	_	_	VERB	vi:a	Mood=Ind|Person[subj]=1|Subcat=Intr|VerbForm=Fin	8	advcl	_	_
7	_	_	SCONJ	subordconn	_	6	mark	_	_
8	_	_	VERB	vi:a	Mood=Ind|Person[subj]=1|Subcat=Intr|VerbForm=Fin	2	advcl	_	_
9	_	_	SCONJ	subordconn	_	8	mark	_	_
10	_	_	PUNCT	punct	_	2	punct	_	_
11	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
12	_	_	PUNCT	punct	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obj	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	8	obl:sentcon	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	PART	discprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	PRON	pro	Clusivity=In|Number=Plur|Person=1|PronType=Prs	8	obj	_	_
6	_	_	SCONJ	rel	_	5	mark	_	_
7	_	_	ADP	post	_	5	case	_	_
8	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
9	ma	ma	PART	discprt	_	8	dep:mod	_	BDY
10	_	_	PUNCT	punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	4	obl:sentcon	_	_
2	py	py	ADP	post	_	1	case	_	LOC
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
5	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	4	obj	_	_
6	_	_	SCONJ	rel	_	5	mark	_	_
7	_	_	PUNCT	punct	_	4	punct	_	_

~~~


