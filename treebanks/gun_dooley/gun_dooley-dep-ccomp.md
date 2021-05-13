---
layout: base
title:  'Statistics of ccomp in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `ccomp`

This relation is universal.

16 nodes (0%) are attached to their parents as `ccomp`.

15 instances of `ccomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.9375.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (15; 94% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 ccomp	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	6	obl:sentcon	_	_
2	_	_	PART	illocprt	_	1	dep:mod	_	_
3	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	6	ccomp	_	_
4	_	_	SCONJ	subordconn	_	3	mark	_	_
5	re	e	ADP	post	_	3	case	_	R-ABL
6	_	_	VERB	vd:i	Mood=Ind|Person[subj]=3|Polarity=Neg|Subcat=Indir|VerbForm=Fin	0	root	_	_
7	_	_	PUNCT	punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	3	nsubj	_	_
2	_	_	PART	quantprt	_	1	dep:mod	_	_
3	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Polarity=Neg|Subcat=Tran|VerbForm=Fin	0	root	_	_
4	_	_	PRON	interpron	PronType=Int	5	nmod	_	_
5	_	_	NOUN	n	_	3	ccomp	_	_
6	_	_	PART	illocprt	_	5	dep:mod	_	_
7	_	_	NOUN	n	_	5	nsubj	_	_
8	_	_	PUNCT	punct	_	3	punct	_	_
9	_	_	PART	focprt	_	10	dep:mod	_	_
10	_	_	NOUN	n	_	13	obj	_	_
11	_	_	PART	discprt	_	10	dep:mod	_	_
12	_	_	PART	intprt	_	11	dep:mod	_	_
13	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Polarity=Neg|Subcat=Tran|VerbForm=Fin	3	conj	_	_
14	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	13	compound:svc	_	_
15	_	_	PUNCT	punct	_	13	punct	_	_

~~~


