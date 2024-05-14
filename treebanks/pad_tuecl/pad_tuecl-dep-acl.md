---
layout: base
title:  'Statistics of acl in UD_Paumari-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Paumari-TueCL: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pad_tuecl-dep-acl-relcl.html">acl:relcl</a></tt>.

5 nodes (1%) are attached to their parents as `acl`.

5 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="pad_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pad_tuecl-pos-VERB.html">VERB</a></tt> (4; 80% instances), <tt><a href="pad_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pad_tuecl-pos-ADV.html">ADV</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	Binoki'aha	_	VERB	_	_	0	root	_	Gloss=3SG-see-ASP-THEME
2	ada	_	DET	_	_	3	det	_	Gloss=DEM,m
3	isai	_	NOUN	_	_	1	obj	_	Gloss=boy
4	ananahi	_	VERB	_	_	3	acl	_	Gloss=bite-NOMLZR
5	hina	_	AUX	_	_	4	aux:pass	_	Gloss=AUX-DEP:INTRANS|SpaceAfter=No
6	.	_	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 acl	color:blue
1	Ovari	_	PRON	_	_	3	nsubj	_	Gloss=S:EMPH
2	hiki	_	DET	_	_	1	det	_	Gloss=CONTR
3	nivaravaraki	_	VERB	_	_	0	root	_	Gloss=NEG-talk-NONTHEME|SpaceAfter=No
4	,	_	PUNCT	_	_	3	punct	_	_
5	nihoariha	_	ADJ	_	_	7	nsubj	_	Gloss=NEG-other
6	jaboni	_	ADV	_	_	7	advmod	_	Gloss=also
7	varavaraki	_	VERB	_	_	3	conj	_	Gloss=talk-NONTHEME|SpaceAfter=No
8	,	_	PUNCT	_	_	3	punct	_	_
9	Vararibori	_	PROPN	_	_	12	nsubj	_	Gloss=Vararibori
10	vani	_	DET	_	_	9	advmod:emph	_	Gloss=CONTR
11	ada	_	DET	_	_	10	det	_	Gloss=DEM,m
12	varavaraha	_	VERB	_	_	3	conj	_	Gloss=talk-THEME,m
13	afosiaga	_	ADV	_	_	9	acl	_	Gloss=ADVBLZR-following|SpaceAfter=No
14	.	_	PUNCT	_	_	3	punct	_	_

~~~


