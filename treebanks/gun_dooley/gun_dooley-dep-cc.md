---
layout: base
title:  'Statistics of cc in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `cc`

This relation is universal.

33 nodes (0%) are attached to their parents as `cc`.

29 instances of `cc` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.57575757575758.

The following 4 pairs of parts of speech are connected with `cc`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-CCONJ.html">CCONJ</a></tt> (18; 55% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-CCONJ.html">CCONJ</a></tt> (13; 39% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gun_dooley-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	_	_	VERB	vi:d	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	4	advcl	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
5	_	_	PART	focprt	_	4	dep:mod	_	_
6	_	_	NOUN	n	_	4	obj	_	_
7	_	_	PUNCT	punct	_	9	punct	_	_
8	_	_	CCONJ	coordconn	_	9	cc	_	_
9	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	4	conj	_	_
10	_	_	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	9	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	PROPN	nprop	_	9	nsubj	_	_
5	_	_	PART	illocprt	_	4	dep:mod	_	_
6	_	_	PRON	pro	Person=3|PronType=Prs	4	appos	_	_
7	_	_	CCONJ	coordconn	_	6	cc	_	_
8	_	_	PART	illocprt	_	6	dep:mod	_	_
9	_	_	VERB	vd:a	Mood=Ind|Person[subj]=3|Subcat=IntInd|VerbForm=Fin	0	root	_	_
10	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	9	compound:svc	_	_
11	_	_	NOUN	n	_	9	obl	_	_
12	_	_	ADP	post	_	11	case	_	_
13	_	_	ADP	post	_	11	case	_	_
14	_	_	PUNCT	punct	_	9	punct	_	_

~~~


