---
layout: base
title:  'Statistics of ccomp in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `ccomp`

This relation is universal.

17 nodes (0%) are attached to their parents as `ccomp`.

16 instances of `ccomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.70588235294118.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (15; 88% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (2; 12% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 ccomp	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	6	obl:sentcon	_	_
2	_	_	PART	illocprt	_	1	amod	_	_
3	_	_	VERB	vi	Person[subj]=3|Subcat=Int	6	ccomp	_	_
4	_	_	SCONJ	subordconn	_	3	mark	_	_
5	re	e	ADP	post	_	3	case	_	R-ABL
6	_	_	VERB	vd:i	Polarity=Neg	0	root	_	_
7	_	_	PUNCT	punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 ccomp	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	6	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	case	_	_
3	_	_	PART	illocprt	_	1	advmod	_	_
4	_	_	NOUN	n	_	6	nsubj	_	_
5	_	_	ADJ	vi:i	_	4	amod	_	_
6	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
7	_	_	VERB	vpos	VerbForm=Post	6	compound:svc	_	_
8	_	_	PART	aspprt	_	6	advmod	_	_
9	_	_	PRON	pro	Person=3|PronType=Prs	11	det	_	_
10	_	_	SCONJ	rel	_	9	mark	_	_
11	_	_	ADV	adv	_	12	advmod	_	_
12	_	_	NOUN	n	_	6	ccomp	_	_
13	_	_	SCONJ	rel	_	12	mark	_	_
14	_	_	SCONJ	subordconn	_	12	mark	_	_
15	_	_	PUNCT	punct	_	6	punct	_	_

~~~


