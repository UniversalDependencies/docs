---
layout: base
title:  'Statistics of conj in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `conj`

This relation is universal.

64 nodes (1%) are attached to their parents as `conj`.

64 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.484375.

The following 6 pairs of parts of speech are connected with `conj`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (37; 58% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (18; 28% instances), <tt><a href="gun_dooley-pos-INTJ.html">INTJ</a></tt>-<tt><a href="gun_dooley-pos-INTJ.html">INTJ</a></tt> (5; 8% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt>-<tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 conj	color:blue
1	_	_	VERB	vi:d	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	4	advcl	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
5	_	_	PART	focprt	_	4	dep:mod	_	_
6	_	_	NOUN	n	_	4	obj	_	_
7	_	_	PUNCT	punct	_	9	punct	_	_
8	_	_	CCONJ	coordconn	_	9	cc	_	_
9	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	4	conj	_	_
10	_	_	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
2	_	_	PART	illocprt	_	1	dep:mod	_	_
3	_	_	NOUN	n	_	1	obj	_	_
4	_	_	PUNCT	punct	_	5	punct	_	_
5	_	_	NOUN	n	_	3	conj	_	_
6	_	_	PUNCT	punct	_	8	punct	_	_
7	_	_	CCONJ	coordconn	_	8	cc	_	_
8	_	_	NOUN	n	_	3	conj	_	_
9	_	_	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 conj	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	13	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	PUNCT	punct	_	5	punct	_	_
5	_	_	INTJ	onom	_	13	parataxis:rep	_	_
6	_	_	PUNCT	punct	_	7	punct	_	_
7	_	_	INTJ	onom	_	5	conj	_	_
8	_	_	PUNCT	punct	_	9	punct	_	_
9	_	_	INTJ	onom	_	7	conj	_	_
10	_	_	PUNCT	punct	_	11	punct	_	_
11	_	_	INTJ	onom	_	9	conj	_	_
12	_	_	PUNCT	punct	_	5	punct	_	_
13	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
14	_	_	PART	aspprt	_	13	dep:mod	_	_
15	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	13	compound:svc	_	_
16	_	_	PUNCT	punct	_	13	punct	_	_

~~~


