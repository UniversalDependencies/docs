---
layout: base
title:  'Statistics of nsubj in UD_Latvian-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Latvian-Cairo: Relations: `nsubj`

This relation is universal.

21 nodes (13%) are attached to their parents as `nsubj`.

19 instances of `nsubj` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61904761904762.

The following 7 pairs of parts of speech are connected with `nsubj`: <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_cairo-pos-PRON.html">PRON</a></tt> (11; 52% instances), <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt> (4; 19% instances), <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_cairo-pos-PROPN.html">PROPN</a></tt> (2; 10% instances), <tt><a href="lv_cairo-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_cairo-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="lv_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_cairo-pos-DET.html">DET</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Viņš	viņš	PRON	pp3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj|3:nsubj	LvtbNodeId=a-c70-Cairo-p3s1w1
2	centās	censties	VERB	voyisi130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-c70-Cairo-p3s1w2
3	atmest	atmest	VERB	vmnn0t1000n	Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	LvtbNodeId=a-c70-Cairo-p3s1w3
4	smēķēšanu	smēķēšana	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	LvtbNodeId=a-c70-Cairo-p3s1w4
5	un	un	CCONJ	cc	_	6	cc	6:cc	LvtbNodeId=a-c70-Cairo-p3s1w5
6	dzeršanu	dzeršana	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	4	conj	3:obj|4:conj	LvtbNodeId=a-c70-Cairo-p3s1w6|SpaceAfter=No
7	.	.	PUNCT	zs	_	2	punct	2:punct	LvtbNodeId=a-c70-Cairo-p3s1w7

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Meitene	meitene	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	LvtbNodeId=a-c70-Cairo-p1s1w1
2	uzrakstīja	uzrakstīt	VERB	vmnist330an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-c70-Cairo-p1s1w2
3	vēstuli	vēstule	NOUN	ncfsa5	Case=Acc|Gender=Fem|Number=Sing	2	obj	2:obj	LvtbNodeId=a-c70-Cairo-p1s1w3
4	savai	sava	DET	ps0fsdn	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	5:det	LvtbNodeId=a-c70-Cairo-p1s1w4
5	draudzenei	draudzene	NOUN	ncfsd5	Case=Dat|Gender=Fem|Number=Sing	2	iobj	2:iobj	LvtbNodeId=a-c70-Cairo-p1s1w5|SpaceAfter=No
6	.	.	PUNCT	zs	_	2	punct	2:punct	LvtbNodeId=a-c70-Cairo-p1s1w6

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Marija	Marija	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	LvtbNodeId=a-c70-Cairo-p9s1w1
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


