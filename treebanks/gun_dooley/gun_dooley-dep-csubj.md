---
layout: base
title:  'Statistics of csubj in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `csubj`

This relation is universal.

3 nodes (0%) are attached to their parents as `csubj`.

3 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 1 pairs of parts of speech are connected with `csubj`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 19 csubj	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	10	obl:sentcon	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	PART	illocprt	_	1	advmod	_	_
4	_	_	VERB	vi	Person[subj]=3|Subcat=Int	10	advcl	_	_
5	_	_	ADV	adv	_	4	advmod	_	_
6	_	_	PART	aspprt	_	4	advmod	_	_
7	_	_	SCONJ	subordconn	_	4	mark	_	_
8	_	_	PART	discprt	_	4	advmod	_	_
9	_	_	PART	illocprt	_	4	advmod	_	_
10	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
11	_	_	PROPN	nprop	_	10	obl	_	_
12	pe	pe	ADP	post	_	11	case	_	DAT
13	_	_	PUNCT	punct	_	10	punct	_	_
14	_	_	PUNCT	punct	_	15	punct	_	_
15	_	_	VERB	vi	Person[subj]=3|Subcat=Int	10	parataxis:rep	_	_
16	_	_	PART	intprt	_	15	advmod	_	_
17	_	_	PART	illocprt	_	15	advmod	_	_
18	_	_	PRON	pro	Number=Sing|Person=1|PronType=Prs	19	obl	_	_
19	_	_	VERB	vt	Person[subj]=2|Subcat=Tran	15	csubj	_	_
20	_	_	VERB	vt	Person[subj]=1|Subcat=Tran	19	obj	_	_
21	_	_	SCONJ	rel	_	20	mark	_	_
22	_	_	PUNCT	punct	_	15	punct	_	_
23	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	15	parataxis	_	_
24	_	_	PUNCT	punct	_	10	punct	_	_

~~~


