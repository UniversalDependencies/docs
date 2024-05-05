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

The following 6 pairs of parts of speech are connected with `nsubj`: <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_cairo-pos-PRON.html">PRON</a></tt> (12; 57% instances), <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt> (5; 24% instances), <tt><a href="lv_cairo-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_cairo-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="lv_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lv_cairo-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_cairo-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	Mans	mans	DET	ps0msnn	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	2	det	2:det	LvtbNodeId=a-c70-Cairo-p8s1w1
2	tētis	tētis	NOUN	ncmsn2	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	LvtbNodeId=a-c70-Cairo-p8s1w2
3	ir	būt	AUX	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	LvtbNodeId=a-c70-Cairo-p8s1w3
4	foršāks	foršs	ADJ	afmsnnc	Case=Nom|Definite=Ind|Degree=Cmp|Gender=Masc|Number=Sing	0	root	0:root	LvtbNodeId=a-c70-Cairo-p8s1w4
5	nekā	nekā	SCONJ	cs	_	6	case	6:case	LvtbNodeId=a-c70-Cairo-p8s1w5
6	tavējais	tavējs	ADJ	armsnyp	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	4	obl	4:obl:nekā	LvtbNodeId=a-c70-Cairo-p8s1w6|SpaceAfter=No
7	.	.	PUNCT	zs	_	4	punct	4:punct	LvtbNodeId=a-c70-Cairo-p8s1w7

~~~


