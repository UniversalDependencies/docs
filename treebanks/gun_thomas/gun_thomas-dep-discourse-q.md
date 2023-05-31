---
layout: base
title:  'Statistics of discourse:q in UD_Mbya_Guarani-Thomas'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Thomas: Relations: `discourse:q`

This relation is a language-specific subtype of <tt><a href="gun_thomas-dep-discourse.html">discourse</a></tt>.

20 nodes (2%) are attached to their parents as `discourse:q`.

20 instances of `discourse:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3.

The following 5 pairs of parts of speech are connected with `discourse:q`: <tt><a href="gun_thomas-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_thomas-pos-PART.html">PART</a></tt> (8; 40% instances), <tt><a href="gun_thomas-pos-ADV.html">ADV</a></tt>-<tt><a href="gun_thomas-pos-PART.html">PART</a></tt> (7; 35% instances), <tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_thomas-pos-PART.html">PART</a></tt> (3; 15% instances), <tt><a href="gun_thomas-pos-DET.html">DET</a></tt>-<tt><a href="gun_thomas-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-PART.html">PART</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 discourse:q	color:blue
1	Kyri'ĩ	kyrĩ	VERB	vi:i	_	3	advcl	_	small-=DIM
2	reve	eve	SCONJ	subordconn	_	1	mark	_	R-since
3	aroayvu	roayvu	VERB	vt	Person[subj]=1|Subcat=Tran	0	root	_	A1.SG-COM-speak
4	mba'eicha	mba'eicha	ADV	interadv	PronType=Int	6	advmod	_	how
5	pa	pa	PART	qprt	_	4	discourse:q	_	Q
6	oiko	iko	VERB	vi:a	_	3	ccomp	_	A3-live,be
7	arã	a	SCONJ	nmlzer	_	6	mark	_	NMLZ-FUT
8	,	,	PUNCT	punct	_	11	punct	_	_
9	mba'e	mba'e	PRON	interpron	PronType=Int	11	obj	_	what
10	pa	pa	PART	qprt	_	9	discourse:q	_	Q
11	ojapo	apo	VERB	vt	Person[subj]=3|Subcat=Tran	6	conj	_	A3-B3-do
12	arã	a	SCONJ	nmlzer	_	11	mark	_	NMLZ-FUT
13	.	.	PUNCT	punct	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 discourse:q	color:blue
1	Kyri'ĩ	kyrĩ	VERB	vi:i	_	3	advcl	_	small-=DIM
2	reve	eve	SCONJ	subordconn	_	1	mark	_	R-since
3	aroayvu	roayvu	VERB	vt	Person[subj]=1|Subcat=Tran	0	root	_	A1.SG-COM-speak
4	mba'eicha	mba'eicha	ADV	interadv	PronType=Int	6	advmod	_	how
5	pa	pa	PART	qprt	_	4	discourse:q	_	Q
6	oiko	iko	VERB	vi:a	_	3	ccomp	_	A3-live,be
7	arã	a	SCONJ	nmlzer	_	6	mark	_	NMLZ-FUT
8	,	,	PUNCT	punct	_	11	punct	_	_
9	mba'e	mba'e	PRON	interpron	PronType=Int	11	obj	_	what
10	pa	pa	PART	qprt	_	9	discourse:q	_	Q
11	ojapo	apo	VERB	vt	Person[subj]=3|Subcat=Tran	6	conj	_	A3-B3-do
12	arã	a	SCONJ	nmlzer	_	11	mark	_	NMLZ-FUT
13	.	.	PUNCT	punct	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 discourse:q	color:blue
1	Kuña	kuña	NOUN	n	_	0	root	_	woman
2	va'e	va'e	SCONJ	rel	_	1	mark	_	REL
3	,	,	PUNCT	punct	_	1	punct	_	_
4	kuña'i	kuña	NOUN	n	_	1	conj	_	woman-=DIM
5	va'e	va'e	SCONJ	rel	_	4	mark	_	REL
6	,	,	PUNCT	punct	_	8	punct	_	_
7	ha'e	ha'e	CCONJ	coordconn	_	8	cc	_	and
8	ava'i	ava	NOUN	n	_	1	conj	_	man-=DIM
9	va'e	va'e	SCONJ	rel	_	8	mark	_	REL
10	ave	ave	PART	focprt	_	8	amod	_	also
11	nda'u	nda'u	PART	qprt	_	8	discourse:q	_	Q
12	?	?	PUNCT	punct	_	8	punct	_	_

~~~


