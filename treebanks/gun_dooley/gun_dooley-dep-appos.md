---
layout: base
title:  'Statistics of appos in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `appos`

This relation is universal.

19 nodes (0%) are attached to their parents as `appos`.

19 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15789473684211.

The following 3 pairs of parts of speech are connected with `appos`: <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (9; 47% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt> (8; 42% instances), <tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (2; 11% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	obl:sentcon	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	PART	discprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
6	_	_	NOUN	n	_	7	nmod	_	_
7	_	_	NOUN	n	_	9	nmod	_	_
8	_	_	NOUN	n	_	7	appos	_	_
9	_	_	NOUN	n	_	5	obl	_	_
10	_	_	ADP	post	_	9	case	_	_
11	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 appos	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	7	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	NOUN	n	_	5	nsubj	_	_
4	_	_	NOUN	n	_	3	appos	_	_
5	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	7	advcl	_	_
6	_	_	SCONJ	subordconn	_	5	mark	_	_
7	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
8	_	_	PART	focprt	_	7	dep:mod	_	_
9	_	_	NOUN	n	_	10	nmod	_	_
10	_	_	NOUN	n	_	7	obj	_	_
11	_	_	PROPN	nprop	_	10	appos	_	_
12	_	_	NOUN	n	_	7	obl	_	_
13	py	py	ADP	post	_	12	case	_	LOC
14	_	_	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	9	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	PROPN	nprop	_	9	nsubj	_	_
5	_	_	PART	illocprt	_	4	dep:mod	_	_
6	_	_	PRON	pro	Person=3|PronType=Prs	4	appos	_	_
7	_	_	CCONJ	coordconn	_	6	cc	_	_
8	_	_	PART	illocprt	_	6	dep:mod	_	_
9	_	_	VERB	vd:a	Mood=Ind|Person[subj]=3|Subcat=Indir|VerbForm=Fin	0	root	_	_
10	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	9	compound:svc	_	_
11	_	_	NOUN	n	_	9	obl	_	_
12	_	_	ADP	post	_	11	case	_	_
13	_	_	ADP	post	_	11	case	_	_
14	_	_	PUNCT	punct	_	9	punct	_	_

~~~


