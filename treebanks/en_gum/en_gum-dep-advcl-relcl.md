---
layout: base
title:  'Statistics of advcl:relcl in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-advcl.html">advcl</a></tt>.

164 nodes (0%) are attached to their parents as `advcl:relcl`.

164 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.77439024390244.

The following 14 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (96; 59% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (24; 15% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (19; 12% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (8; 5% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:relcl	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:65->66:0|Entity=(10-person-giv:inact-cf1-1-ana)
2	know	know	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	how	how	SCONJ	WRB	PronType=Rel	2	obj	2:obj	Discourse=evaluation-comment:66->64:0
4	that	that	PRON	DT	Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
5	works	work	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl:relcl	3:advcl:relcl	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 advcl:relcl	color:blue
1	Some	some	DET	DT	PronType=Ind	2	det	2:det	Discourse=joint-other_m:83->82:0|Entity=(196-place-new-cf2-2-sgl
2	countries	country	NOUN	NNS	Number=Plur	5	nsubj	5:nsubj	Entity=196)
3	have	have	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
4	recently	recently	ADV	RB	Degree=Pos	5	advmod	5:advmod	_
5	adopted	adopt	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root|12:ccomp	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	Entity=(197-abstract-new-cf3-3-sgl
7	similar	similar	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	course	course	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=197)|SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	12:punct	_
10	which	which	PRON	WDT	PronType=Rel	12	obj	5:ref|12:obj	Discourse=evaluation-comment:84->83:0
11	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	12:nsubj	Entity=(27-person-giv:inact-cf1-1-ana)
12	welcome	welcome	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	advcl:relcl	5:advcl:relcl	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 advcl:relcl	color:blue
1	Why	why	ADV	WRB	PronType=Rel	0	root	0:root	Discourse=organization-preparation:1->16:8
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Entity=(1-abstract-new-cf1-2-coref
3	Division	division	NOUN	NN	Number=Sing	6	nsubj	6:nsubj	_
4	of	of	ADP	IN	_	5	case	5:case	_
5	Labor	labor	NOUN	NN	Number=Sing	3	nmod	3:nmod:of	Entity=(2-abstract-new-cf3-1-sgl)1)
6	Increases	increase	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	advcl:relcl	1:advcl:relcl	_
7	Production	production	NOUN	NN	Number=Sing	6	obj	6:obj	Entity=(3-event-new-cf2-1-sgl)

~~~


