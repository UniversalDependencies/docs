---
layout: base
title:  'Statistics of nmod in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `nmod`

This relation is universal.

166 nodes (1%) are attached to their parents as `nmod`.

156 instances of `nmod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1566265060241.

The following 7 pairs of parts of speech are connected with `nmod`: <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (134; 81% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (26; 16% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	obl:sentcon	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	PART	discprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
6	_	_	NUM	num	NumType=Card	9	nummod	_	_
7	_	_	NOUN	n	_	8	compound	_	_
8	_	_	NOUN	n	_	9	nmod	_	_
9	_	_	NOUN	n	_	5	obj	_	_
10	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	8	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	PRON	pro	Clusivity=In|Number=Plur|Person=1|PronType=Prs	6	nmod	_	_
5	_	_	SCONJ	rel	_	4	mark	_	_
6	_	_	NOUN	n	_	8	obj	_	_
7	_	_	ADP	post	_	6	case	_	_
8	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
9	_	_	PUNCT	punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	6	obl:sentcon	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	ADV	inact	_	6	discourse	_	_
5	_	_	NOUN	n	_	6	nsubj	_	_
6	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
7	Pyxaĩ	Pyxaĩ	PROPN	nprop	_	8	nmod	_	Joãozinho
8	_	_	NOUN	n	_	6	obj	_	_
9	_	_	PUNCT	punct	_	6	punct	_	_

~~~


