---
layout: base
title:  'Statistics of conj in UD_Latvian-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Latvian-Cairo: Relations: `conj`

This relation is universal.

10 nodes (6%) are attached to their parents as `conj`.

10 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3.

The following 7 pairs of parts of speech are connected with `conj`: <tt><a href="lv_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lv_cairo-pos-PROPN.html">PROPN</a></tt> (2; 20% instances), <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_cairo-pos-PROPN.html">PROPN</a></tt> (2; 20% instances), <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt> (2; 20% instances), <tt><a href="lv_cairo-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv_cairo-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="lv_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 conj	color:blue
1	Nevarēja	varēt	VERB	vonisi330ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-c70-Cairo-p11s1w1
2	izvēlēties	izvēlēties	VERB	vmyn0t3000n	Polarity=Pos|Reflex=Yes|VerbForm=Inf	1	xcomp	1:xcomp	LvtbNodeId=a-c70-Cairo-p11s1w2
3	ne	ne	CCONJ	cc	Polarity=Neg	4	cc	4:cc	LvtbNodeId=a-c70-Cairo-p11s1w3
4	Pēteri	Pēteris	PROPN	npmsa2	Case=Acc|Gender=Masc|Number=Sing	2	obj	2:obj	LvtbNodeId=a-c70-Cairo-p11s1w4
5	Smitu	Smits	PROPN	npmsa1	Case=Acc|Gender=Masc|Number=Sing	4	flat:name	4:flat:name	LvtbNodeId=a-c70-Cairo-p11s1w5|SpaceAfter=No
6	,	,	PUNCT	zc	_	8	punct	8:punct	LvtbNodeId=a-c70-Cairo-p11s1w6
7	ne	ne	CCONJ	cc	Polarity=Neg	8	cc	8:cc	LvtbNodeId=a-c70-Cairo-p11s1w7
8	Mariju	Marija	PROPN	npfsa4	Case=Acc|Gender=Fem|Number=Sing	4	conj	2:obj|4:conj	LvtbNodeId=a-c70-Cairo-p11s1w8
9	Braunu	Brauna	PROPN	npfsa4	Case=Acc|Gender=Fem|Number=Sing	8	flat:name	8:flat:name	LvtbNodeId=a-c70-Cairo-p11s1w9|SpaceAfter=No
10	.	.	PUNCT	zs	_	1	punct	1:punct	LvtbNodeId=a-c70-Cairo-p11s1w10

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj	color:blue
1	Marija	marija	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	LvtbNodeId=a-c70-Cairo-p9s1w1
2	ieguva	iegūt	VERB	vmnist130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-c70-Cairo-p9s1w2
3	bronzu	bronza	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	2	obj	2:obj	LvtbNodeId=a-c70-Cairo-p9s1w3|SpaceAfter=No
4	,	,	PUNCT	zc	_	5	punct	6.1:punct	LvtbNodeId=a-c70-Cairo-p9s1w4
5	Pēteris	Pēteris	PROPN	npmsn2	Case=Nom|Gender=Masc|Number=Sing	2	conj	6.1:nsubj	LvtbNodeId=a-c70-Cairo-p9s1w5
6	—	–	PUNCT	zd	_	5	punct	6.1:punct	LvtbNodeId=a-c70-Cairo-p9s1w6
7	sudrabu	sudrabs	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	5	orphan	6.1:obj	LvtbNodeId=a-c70-Cairo-p9s1w7|SpaceAfter=No
8	,	,	PUNCT	zc	_	10	punct	11.1:punct	LvtbNodeId=a-c70-Cairo-p9s1w8
9	un	un	CCONJ	cc	_	10	cc	11.1:cc	LvtbNodeId=a-c70-Cairo-p9s1w9
10	Džeina	Džeina	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	2	conj	11.1:nsubj	LvtbNodeId=a-c70-Cairo-p9s1w10
11	—	–	PUNCT	zd	_	10	punct	11.1:punct	LvtbNodeId=a-c70-Cairo-p9s1w11
12	zeltu	zelts	NOUN	ncmva1	Case=Acc|Gender=Masc|Number=Coll	10	orphan	11.1:obj	LvtbNodeId=a-c70-Cairo-p9s1w12|SpaceAfter=No
13	.	.	PUNCT	zs	_	2	punct	2:punct	LvtbNodeId=a-c70-Cairo-p9s1w13

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 conj	color:blue
1	Pēteris	Pēteris	PROPN	npmsn2	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj|7:nsubj	LvtbNodeId=a-c70-Cairo-p16s1w1
2	un	un	CCONJ	cc	_	3	cc	3:cc	LvtbNodeId=a-c70-Cairo-p16s1w2
3	Marija	Marija	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	1	conj	1:conj|4:nsubj|7:nsubj	LvtbNodeId=a-c70-Cairo-p16s1w3
4	apskāvās	apskauties	VERB	vmyisi130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-c70-Cairo-p16s1w4
5	un	un	CCONJ	cc	_	7	cc	7:cc	LvtbNodeId=a-c70-Cairo-p16s1w5
6	tad	tad	ADV	r0n	PronType=Dem	7	advmod	7:advmod	LvtbNodeId=a-c70-Cairo-p16s1w6
7	atstāja	atstāt	VERB	vmnist130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	4:conj	LvtbNodeId=a-c70-Cairo-p16s1w7
8	istabu	istaba	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	7	obj	7:obj	LvtbNodeId=a-c70-Cairo-p16s1w8|SpaceAfter=No
9	.	.	PUNCT	zs	_	4	punct	4:punct	LvtbNodeId=a-c70-Cairo-p16s1w9

~~~


