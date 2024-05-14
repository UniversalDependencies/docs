---
layout: base
title:  'Statistics of clf in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `clf`

This relation is universal.

60 nodes (1%) are attached to their parents as `clf`.

60 instances of `clf` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01666666666667.

The following 2 pairs of parts of speech are connected with `clf`: <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (46; 77% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (14; 23% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 clf	color:blue
1	_	_	NOUN	n	_	5	nsubj	_	_
2	_	_	PART	quantprt	_	1	clf	_	_
3	_	_	PART	discprt	_	1	amod	_	_
4	_	_	PART	illocprt	_	1	amod	_	_
5	_	_	VERB	vt	Person[subj]=3|Polarity=Neg|Subcat=Tran	0	root	_	_
6	_	_	ADV	adv	_	5	advmod	_	_
7	_	_	PART	intprt	_	6	advmod	_	_
8	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 clf	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	nsubj	_	_
2	_	_	PART	quantprt	_	1	clf	_	_
3	_	_	PART	discprt	_	1	amod	_	_
4	_	_	PART	illocprt	_	1	amod	_	_
5	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
6	_	_	VERB	vs	Person=3|VerbForm=Ser	5	compound:svc	_	_
7	_	_	NUM	num	_	8	nummod	_	_
8	_	_	NOUN	n	_	5	obl	_	_
9	_	_	ADP	post	_	8	case	_	_
10	_	_	PUNCT	punct	_	5	punct	_	_

~~~


