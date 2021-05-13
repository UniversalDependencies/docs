---
layout: base
title:  'Statistics of acl:relcl in UD_Manx-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Manx-Cadhan: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="gv_cadhan-dep-acl.html">acl</a></tt>.

120 nodes (1%) are attached to their parents as `acl:relcl`.

120 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.86666666666667.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt> (71; 59% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt> (43; 36% instances), <tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt> (6; 5% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 acl:relcl	color:blue
1	Un	un	NUM	_	_	2	nummod	_	_
2	chaa	caa	NOUN	_	Form=Len	0	root	_	_
3	keyl	keyl	ADJ	_	_	2	amod	_	_
4	–	–	PUNCT	_	_	5	punct	_	_
5	tayrtyn	tayrtyn	NOUN	_	_	2	parataxis	_	_
6	eh	eh	PRON	_	Gender=Masc|Number=Sing|Person=3	5	obj	_	_
7	lesh	lesh	ADP	_	_	8	case	_	_
8	ooilley	ooilley	NOUN	_	_	6	nmod	_	_
9	ny	yn	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	druggaghyn	druggey	NOUN	_	_	8	nmod	_	_
11	v'	bee	VERB	_	Form=Len|Mood=Ind|Tense=Past	10	acl:relcl	_	_
12	ec	ec	ADP	_	_	13	case	_	_
13	eh	eh	PRON	_	Gender=Masc|Number=Sing|Person=3	11	xcomp:pred	_	_
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl:relcl	color:blue
1	Agh	agh	CCONJ	_	_	3	cc	_	_
2	my	my	SCONJ	_	_	3	mark	_	_
3	va	bee	VERB	_	Form=Len|Mood=Ind|Tense=Past	9	advcl	_	_
4	Marika	Marika	PROPN	_	_	3	nsubj	_	_
5	er	er	ADP	_	_	7	case	_	_
6	e	e	DET	_	Gender=Fem|Number=Sing|Person=3|Poss=Yes	7	nmod:poss	_	_
7	beealloo	beealloo	NOUN	_	_	3	xcomp:pred	_	SpaceAfter=No
8	,	,	PUNCT	_	_	3	punct	_	_
9	c'raad	c'raad	PRON	_	_	0	root	_	_
10	va	bee	VERB	_	Form=Len|Mood=Ind|Tense=Past	9	acl:relcl	_	_
11	Dooinney	dooinney	NOUN	_	_	10	nsubj	_	_
12	ny	yn	DET	_	Case=Gen|Definite=Def|Number=Sing|PronType=Art	13	det	_	_
13	Faasaag	faasaag	NOUN	_	_	11	nmod	_	SpaceAfter=No
14	?	?	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:relcl	color:blue
1	She	she	AUX	_	_	3	cop	_	_
2	'n	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	Nile	Nile	PROPN	_	_	0	root	_	_
4	ta	bee	VERB	_	Mood=Ind|Tense=Pres	3	acl:relcl	_	_
5	cur	cur	NOUN	_	_	4	xcomp	_	_
6	ushtey	ushtey	NOUN	_	_	5	obj	_	_
7	da	da	ADP	_	_	9	case	_	_
8	yn	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	Ejypt	Ejypt	PROPN	_	_	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


