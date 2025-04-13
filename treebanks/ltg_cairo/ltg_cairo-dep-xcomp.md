---
layout: base
title:  'Statistics of xcomp in UD_Latgalian-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Latgalian-Cairo: Relations: `xcomp`

This relation is universal.

10 nodes (6%) are attached to their parents as `xcomp`.

10 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="ltg_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ltg_cairo-pos-VERB.html">VERB</a></tt> (7; 70% instances), <tt><a href="ltg_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ltg_cairo-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="ltg_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ltg_cairo-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="ltg_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ltg_cairo-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Jis	jis	PRON	pp3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj|3:nsubj	LvtbNodeId=a-ltg-Cairo-p3s1w1
2	ceņtēs	ceņstīs	VERB	voyisi130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-ltg-Cairo-p3s1w2
3	atmest	atmest	VERB	vmnn0t1000n	Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	LvtbNodeId=a-ltg-Cairo-p3s1w3
4	peipiešonu	peipešona	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	LvtbNodeId=a-ltg-Cairo-p3s1w4
5	i	i	CCONJ	cc	_	6	cc	6:cc	LvtbNodeId=a-ltg-Cairo-p3s1w5
6	dzeršonu	dzeršona	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	4	conj	3:obj|4:conj	LvtbNodeId=a-ltg-Cairo-p3s1w6|SpaceAfter=No
7	.	.	PUNCT	zs	_	2	punct	2:punct	LvtbNodeId=a-ltg-Cairo-p3s1w7

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Muns	muns	DET	ps0msnn	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	2	det	2:det	LvtbNodeId=a-ltg-Cairo-p8s1w1
2	tēte	tēte	NOUN	ncmsn5	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj|4:nsubj	LvtbNodeId=a-ltg-Cairo-p8s1w2
3	ir	byut	VERB	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-ltg-Cairo-p8s1w3
4	foršuoks	foršs	ADJ	afmsnnc	Case=Nom|Definite=Ind|Degree=Cmp|Gender=Masc|Number=Sing	3	xcomp	3:xcomp	LvtbNodeId=a-ltg-Cairo-p8s1w4
5	nakai	nakai	SCONJ	cs	_	6	mark	6:mark	LvtbNodeId=a-ltg-Cairo-p8s1w5
6	tovejais	tovejs	ADJ	armsnyp	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	3	advcl	3:advcl:nakai	LvtbNodeId=a-ltg-Cairo-p8s1w6|SpaceAfter=No
7	.	.	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-ltg-Cairo-p8s1w7

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 xcomp	color:blue
1	Voi	voi	PART	q	_	3	discourse	3:discourse	LvtbNodeId=a-ltg-Cairo-p10s1w1
2	Igvasu	Igvasu	PROPN	np0000	_	3	nsubj	3:nsubj|7:nsubj	LvtbNodeId=a-ltg-Cairo-p10s1w2
3	ir	byut	VERB	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-ltg-Cairo-p10s1w3
4	lela	lels	ADJ	affsnnp	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	LvtbNodeId=a-ltg-Cairo-p10s1w4
5	voi	voi	CCONJ	cc	_	6	cc	6:cc	LvtbNodeId=a-ltg-Cairo-p10s1w5
6	moza	mozs	ADJ	affsnnp	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	conj	4:conj|7:amod	LvtbNodeId=a-ltg-Cairo-p10s1w6
7	vaļsts	vaļsts	NOUN	ncfsn6	Case=Nom|Gender=Fem|Number=Sing	3	xcomp	3:xcomp	LvtbNodeId=a-ltg-Cairo-p10s1w7|SpaceAfter=No
8	?	?	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-ltg-Cairo-p10s1w8

~~~


