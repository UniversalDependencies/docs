---
layout: base
title:  'Statistics of root in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `root`

This relation is universal.

1046 nodes (9%) are attached to their parents as `root`.

1046 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.68068833652008.

The following 3 pairs of parts of speech are connected with `root`: -<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (1030; 98% instances), -<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (14; 1% instances), -<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	_	_	ADV	adv	_	3	advmod	_	_
2	_	_	PART	illocprt	_	1	advmod	_	_
3	_	_	VERB	vi	Person[subj]=3|Subcat=Int	0	root	_	_
4	_	_	NUM	num	_	5	nummod	_	_
5	_	_	NOUN	n	Number=Plur	3	nsubj	_	_
6	_	_	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	nsubj	_	_
2	_	_	SCONJ	rel	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	advmod	_	_
4	_	_	PART	illocprt	_	1	advmod	_	_
5	_	_	NOUN	n	_	0	root	_	_
6	_	_	NOUN	n	_	5	compound	_	_
7	_	_	PART	intprt	_	5	amod	_	_
8	_	_	PART	aspprt	_	5	amod	_	_
9	_	_	PART	illocprt	_	5	amod	_	_
10	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	obl:sentcon	_	_
2	_	_	PART	modprt	_	1	amod	_	_
3	_	_	SCONJ	subordconn	_	1	mark	_	_
4	_	_	PART	discprt	_	1	advmod	_	_
5	_	_	PRON	pro	Person=3|PronType=Prs	0	root	_	_
6	_	_	PUNCT	punct	_	7	punct	_	_
7	_	_	VERB	vi	Person[subj]=2|Subcat=Int	5	parataxis:rep	_	_
8	ke	ke	PART	illocprt	_	7	advmod	_	IMP
9	_	_	PRON	dem	PronType=Dem	7	obl	_	_
10	_	_	ADP	post	_	9	case	_	_
11	_	_	PUNCT	punct	_	7	punct	_	_
12	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	7	parataxis	_	_
13	_	_	PRON	pro	Number=Sing|Person=1|PronType=Prs	12	obl	_	_
14	_	_	PUNCT	punct	_	5	punct	_	_

~~~


