---
layout: base
title:  'Statistics of nsubj in UD_Latgalian-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Latgalian-Cairo: Relations: `nsubj`

This relation is universal.

21 nodes (12%) are attached to their parents as `nsubj`.

19 instances of `nsubj` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 4 pairs of parts of speech are connected with `nsubj`: <tt><a href="ltg_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ltg_cairo-pos-PRON.html">PRON</a></tt> (11; 52% instances), <tt><a href="ltg_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ltg_cairo-pos-NOUN.html">NOUN</a></tt> (6; 29% instances), <tt><a href="ltg_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ltg_cairo-pos-PROPN.html">PROPN</a></tt> (3; 14% instances), <tt><a href="ltg_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ltg_cairo-pos-DET.html">DET</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Jis	jis	PRON	pp3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj|3:nsubj	LvtbNodeId=a-ltg-Cairo-p3s1w1
2	ceņtēs	ceņstīs	VERB	voyisi130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-ltg-Cairo-p3s1w2
3	atmest	atmest	VERB	vmnn0t1000n	Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	LvtbNodeId=a-ltg-Cairo-p3s1w3
4	peipiešonu	peipešona	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	LvtbNodeId=a-ltg-Cairo-p3s1w4
5	i	i	CCONJ	cc	_	6	cc	6:cc	LvtbNodeId=a-ltg-Cairo-p3s1w5
6	dzeršonu	dzeršona	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	4	conj	3:obj|4:conj	LvtbNodeId=a-ltg-Cairo-p3s1w6|SpaceAfter=No
7	.	.	PUNCT	zs	_	2	punct	2:punct	LvtbNodeId=a-ltg-Cairo-p3s1w7

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Meitine	meitine	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	LvtbNodeId=a-ltg-Cairo-p1s1w1
2	pīraksteja	raksteit	VERB	vmnist330an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-ltg-Cairo-p1s1w2
3	viestuli	viestule	NOUN	ncfsa5	Case=Acc|Gender=Fem|Number=Sing	2	obj	2:obj	LvtbNodeId=a-ltg-Cairo-p1s1w3
4	sovai	sova	DET	ps0fsdn	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	5:det	LvtbNodeId=a-ltg-Cairo-p1s1w4
5	draudzinei	draudzine	NOUN	ncfsd5	Case=Dat|Gender=Fem|Number=Sing	2	iobj	2:iobj	LvtbNodeId=a-ltg-Cairo-p1s1w5|SpaceAfter=No
6	.	.	PUNCT	zs	_	2	punct	2:punct	LvtbNodeId=a-ltg-Cairo-p1s1w6

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Mareja	Mareja	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	LvtbNodeId=a-ltg-Cairo-p9s1w1
2	dabuoja	dabuot	VERB	vmnist230an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-ltg-Cairo-p9s1w2
3	bronzu	bronza	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	2	obj	2:obj	LvtbNodeId=a-ltg-Cairo-p9s1w3|SpaceAfter=No
4	,	,	PUNCT	zc	_	5	punct	6.1:punct	LvtbNodeId=a-ltg-Cairo-p9s1w4
5	Pīters	Pīters	PROPN	npmsn1	Case=Nom|Gender=Masc|Number=Sing	2	conj	6.1:nsubj	LvtbNodeId=a-ltg-Cairo-p9s1w5
6	–	-	PUNCT	zd	_	5	punct	6.1:punct	LvtbNodeId=a-ltg-Cairo-p9s1w6
7	sudobru	sudobrs	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	5	orphan	6.1:obj	LvtbNodeId=a-ltg-Cairo-p9s1w7|SpaceAfter=No
8	,	,	PUNCT	zc	_	10	punct	11.1:punct	LvtbNodeId=a-ltg-Cairo-p9s1w8
9	i	i	CCONJ	cc	_	10	cc	11.1:cc	LvtbNodeId=a-ltg-Cairo-p9s1w9
10	Džeina	Džeina	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	2	conj	11.1:nsubj	LvtbNodeId=a-ltg-Cairo-p9s1w10
11	–	-	PUNCT	zd	_	10	punct	11.1:punct	LvtbNodeId=a-ltg-Cairo-p9s1w11
12	zaltu	zalts	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	10	orphan	11.1:obj	LvtbNodeId=a-ltg-Cairo-p9s1w12|SpaceAfter=No
13	.	.	PUNCT	zs	_	2	punct	2:punct	LvtbNodeId=a-ltg-Cairo-p9s1w13

~~~


