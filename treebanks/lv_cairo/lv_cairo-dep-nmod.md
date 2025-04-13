---
layout: base
title:  'Statistics of nmod in UD_Latvian-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Latvian-Cairo: Relations: `nmod`

This relation is universal.

3 nodes (2%) are attached to their parents as `nmod`.

3 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nmod`: <tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_cairo-pos-PROPN.html">PROPN</a></tt> (2; 67% instances), <tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_cairo-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Pētera	Pēteris	PROPN	npmsg2	Case=Gen|Gender=Masc|Number=Sing	2	nmod	2:nmod:gen	LvtbNodeId=a-c70-Cairo-p7s1w1
2	kaimiņi	kaimiņš	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	3:nsubj	LvtbNodeId=a-c70-Cairo-p7s1w2
3	nokrāsoja	nokrāsot	VERB	vmnist230an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-c70-Cairo-p7s1w3
4	žogu	žogs	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	3	obj	3:obj	LvtbNodeId=a-c70-Cairo-p7s1w4
5	sarkanā	sarkans	ADJ	affslnp	Case=Loc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	LvtbNodeId=a-c70-Cairo-p7s1w5
6	krāsā	krāsa	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl:loc	LvtbNodeId=a-c70-Cairo-p7s1w6|SpaceAfter=No
7	.	.	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-c70-Cairo-p7s1w7

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Viņš	viņš	PRON	pp3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	LvtbNodeId=a-c70-Cairo-p15s1w1
2	nopirka	nopirkt	VERB	vmnist130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-c70-Cairo-p15s1w2
3	mašīnu	mašīna	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	2	obj	2:obj	LvtbNodeId=a-c70-Cairo-p15s1w3|SpaceAfter=No
4	,	,	PUNCT	zc	_	7	punct	7.1:punct	LvtbNodeId=a-c70-Cairo-p15s1w4
5	bet	bet	CCONJ	cc	_	7	cc	7.1:cc	LvtbNodeId=a-c70-Cairo-p15s1w5
6	viņa	viņš	PRON	pp3msgn	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nmod	7:nmod	LvtbNodeId=a-c70-Cairo-p15s1w6
7	brālis	brālis	NOUN	ncmsn2	Case=Nom|Gender=Masc|Number=Sing	2	conj	7.1:nsubj	LvtbNodeId=a-c70-Cairo-p15s1w7
8	tikai	tikai	PART	q	_	9	advmod:emph	9:advmod:emph	LvtbNodeId=a-c70-Cairo-p15s1w8
9	velosipēdu	velosipēds	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	7	orphan	7.1:obj	LvtbNodeId=a-c70-Cairo-p15s1w9|SpaceAfter=No
10	.	.	PUNCT	zs	_	2	punct	2:punct	LvtbNodeId=a-c70-Cairo-p15s1w10

~~~


