---
layout: base
title:  'Statistics of aux in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="lv_lvtb-dep-aux-pass.html">aux:pass</a></tt>.

2079 nodes (1%) are attached to their parents as `aux`.

2058 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1981721981722.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (2029; 98% instances), <tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (20; 1% instances), <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (15; 1% instances), <tt><a href="lv_lvtb-pos-ADV.html">ADV</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="lv_lvtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Viņš	viņš	PRON	pp3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	6:nsubj	LvtbNodeId=a-d177-p171s4w1
2	par	par	ADP	spsa	_	3	case	3:case	LvtbNodeId=a-d177-p171s4w2
3	to	tas	PRON	pd3msan	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	iobj	6:iobj	LvtbNodeId=a-d177-p171s4w3
4	jau	jau	ADV	r0n	_	6	advmod	6:advmod	LvtbNodeId=a-d177-p171s4w4
5	bija	būt	AUX	vcnisii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	6	aux	6:aux	LvtbNodeId=a-d177-p171s4w5
6	iedomājies	iedomāties	VERB	vmypdmsnasnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=Yes|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	LvtbNodeId=a-d177-p171s4w6|SpaceAfter=No
7	.	.	PUNCT	zs	_	6	punct	6:punct	LvtbNodeId=a-d177-p171s4w7

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 aux	color:blue
1	Metējs	metējs	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	LvtbNodeId=a-d211-p221s2w1
2	nekad	nekad	ADV	r0n	PronType=Int,Neg	1	advmod	1:advmod	LvtbNodeId=a-d211-p221s2w2
3	neesmu	būt	AUX	vcnipii1say	Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	LvtbNodeId=a-d211-p221s2w3
4	bijis	būt	AUX	vcnpdmsnasnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	aux	1:aux	LvtbNodeId=a-d211-p221s2w4|SpaceAfter=No
5	.	.	PUNCT	zs	_	1	punct	1:punct	LvtbNodeId=a-d211-p221s2w5

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	Nē	nē	PART	q	Polarity=Neg	5	discourse	5:discourse|8:discourse	LvtbNodeId=a-d1270-p4s20w1|SpaceAfter=No
2	,	,	PUNCT	zc	_	1	punct	1:punct	LvtbNodeId=a-d1270-p4s20w2
3	šīs	šī	PRON	pd3fpnn	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	5	dep	5:dep	LvtbNodeId=a-d1270-p4s20w3
4	ir	būt	AUX	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux|8:aux	LvtbNodeId=a-d1270-p4s20w4
5	jaunas	jauns	ADJ	affpnnp	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	0	root	0:root	LvtbNodeId=a-d1270-p4s20w5|SpaceAfter=No
6	,	,	PUNCT	zc	_	8	punct	8:punct	LvtbNodeId=a-d1270-p4s20w6
7	aizvakar	aizvakar	ADV	r0n	_	8	advmod	8:advmod	LvtbNodeId=a-d1270-p4s20w7
8	pirktas	pirkt	VERB	vmnpdfpnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	5	conj	5:conj	LvtbNodeId=a-d1270-p4s20w8|SpaceAfter=No
9	,	,	PUNCT	zc	_	11	punct	11:punct	LvtbNodeId=a-d1270-p4s20w9
10	viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	nsubj	11:nsubj	LvtbNodeId=a-d1270-p4s20w10
11	irgojas	irgoties	VERB	vmyipi230an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	5:parataxis|8:parataxis	LvtbNodeId=a-d1270-p4s20w11|SpaceAfter=No
12	.	.	PUNCT	zs	_	5	punct	5:punct	LvtbNodeId=a-d1270-p4s20w12

~~~


