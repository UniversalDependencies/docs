---
layout: base
title:  'Statistics of advmod:emph in UD_Paumari-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Paumari-TueCL: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="pad_tuecl-dep-advmod.html">advmod</a></tt>.
There are also 1 other language-specific subtypes of `advmod`: <tt><a href="pad_tuecl-dep-advmod-lmod.html">advmod:lmod</a></tt>.

6 nodes (1%) are attached to their parents as `advmod:emph`.

4 instances of `advmod:emph` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="pad_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pad_tuecl-pos-ADV.html">ADV</a></tt> (3; 50% instances), <tt><a href="pad_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pad_tuecl-pos-ADV.html">ADV</a></tt> (1; 17% instances), <tt><a href="pad_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pad_tuecl-pos-DET.html">DET</a></tt> (1; 17% instances), <tt><a href="pad_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="pad_tuecl-pos-ADV.html">ADV</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Pitani	_	NOUN	_	_	3	obj	_	Gloss=part
2	vani	_	ADV	_	_	1	advmod:emph	_	Gloss=CONTR
3	ono'avini	_	VERB	_	_	0	root	_	Gloss=1SG-give-DEP:TRANS
4	hi'ihi	_	AUX	_	_	3	aux	_	Gloss=AUX-ASP-THEME,f|SpaceAfter=No
5	.	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:emph	color:blue
1	Hovani	_	ADV	_	_	2	advmod:emph	_	Gloss=1SG-CONTR
2	José	_	PROPN	_	_	3	nsubj	_	Gloss=José
3	ho	_	PRON	_	_	0	root	_	Gloss=1SG|SpaceAfter=No
4	.	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 advmod:emph	color:blue
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


