---
layout: base
title:  'Statistics of dislocated in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `dislocated`

This relation is universal.

11 nodes (0%) are attached to their parents as `dislocated`.

8 instances of `dislocated` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.09090909090909.

The following 4 pairs of parts of speech are connected with `dislocated`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (6; 55% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (3; 27% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt> (1; 9% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 dislocated	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	13	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	PRON	pro	Clusivity=In|Number=Plur|Person=1|PronType=Prs	13	dislocated	_	_
5	_	_	SCONJ	rel	_	4	mark	_	_
6	_	_	PUNCT	punct	_	7	punct	_	_
7	_	_	VERB	inact	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	10	parataxis:rep	_	_
8	_	_	PART	illocprt	_	7	dep:mod	_	_
9	_	_	PUNCT	punct	_	7	punct	_	_
10	he'i	he'i	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	13	advcl	_	say
11	_	_	SCONJ	subordconn	_	10	mark	_	_
12	_	_	PRON	pro	Person=3|PronType=Prs	13	nsubj	_	_
13	_	_	VERB	inact	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
14	_	_	PART	intprt	_	13	dep:mod	_	_
15	_	_	PART	focprt	_	13	dep:mod	_	_
16	_	_	PUNCT	punct	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 dislocated	color:blue
1	_	_	NOUN	n	_	6	dislocated	_	_
2	_	_	VERB	inact	Mood=Ind|Subcat=Intr|VerbForm=Inf	1	acl	_	_
3	_	_	SCONJ	rel	_	2	mark	_	_
4	_	_	PART	discprt	_	1	dep:mod	_	_
5	_	_	PART	illocprt	_	1	dep:mod	_	_
6	_	_	VERB	n:pred	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Vnoun	0	root	_	_
7	_	_	PROPN	nprop	_	6	nsubj	_	_
8	_	_	PUNCT	punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dislocated	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	3	nmod	_	_
2	_	_	SCONJ	rel	_	1	mark	_	_
3	nunga	nunga	NOUN	n	_	5	obj	_	kind.of.thing
4	_	_	PART	illocprt	_	3	dep:mod	_	_
5	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
6	_	_	NUM	num	NumType=Card	5	dislocated	_	_
7	_	_	VERB	vs	Mood=Ind|VerbForm=Ser	5	compound:svc	_	_
8	_	_	PUNCT	punct	_	5	punct	_	_

~~~


