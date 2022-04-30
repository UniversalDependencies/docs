---
layout: base
title:  'Statistics of aux in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="lv_lvtb-dep-aux-pass.html">aux:pass</a></tt>.

1732 nodes (1%) are attached to their parents as `aux`.

1717 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19515011547344.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (1693; 98% instances), <tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (15; 1% instances), <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (11; 1% instances), <tt><a href="lv_lvtb-pos-ADV.html">ADV</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (9; 1% instances), <tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="lv_lvtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Viņš	viņš	PRON	pp3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	6:nsubj	LvtbNodeId=a-d177-p171s4w1
2	par	par	ADP	spsa	_	3	case	3:case	LvtbNodeId=a-d177-p171s4w2
3	to	tas	PRON	pd3msan	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	iobj	6:iobj	LvtbNodeId=a-d177-p171s4w3
4	jau	jau	ADV	r0t	_	6	advmod	6:advmod	LvtbNodeId=a-d177-p171s4w4
5	bija	būt	AUX	vcnisii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	6	aux	6:aux	LvtbNodeId=a-d177-p171s4w5
6	iedomājies	iedomāties	VERB	vmypdmsnasnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=Yes|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	LvtbNodeId=a-d177-p171s4w6|SpaceAfter=No
7	.	.	PUNCT	zs	_	6	punct	6:punct	LvtbNodeId=a-d177-p171s4w7

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Tā	tā	PRON	pd3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	nsubj	4:nsubj	LvtbNodeId=a-s41-p10s2w1
2	ir	būt	AUX	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	LvtbNodeId=a-s41-p10s2w2
3	neticama	ticēt	VERB	vmnpdfsnppnpy	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Neg|Tense=Pres|VerbForm=Part|Voice=Pass	4	amod	4:amod	LvtbNodeId=a-s41-p10s2w3
4	loģika	loģika	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	LvtbNodeId=a-s41-p10s2w4|SpaceAfter=No
5	!	!	PUNCT	zs	_	4	punct	4:punct	LvtbNodeId=a-s41-p10s2w5

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux	color:blue
1	Jāpiezīmē	piezīmēt	VERB	vmnd0t200an	Mood=Nec|Polarity=Pos|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-p8569-p4s1w1|SpaceAfter=No
2	,	,	PUNCT	zc	_	9	punct	9:punct	LvtbNodeId=a-p8569-p4s1w2
3	ka	ka	SCONJ	cs	_	9	mark	9:mark	LvtbNodeId=a-p8569-p4s1w3
4	pēdējie	pēdējais	ADJ	afmpnyp	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	5	amod	5:amod	LvtbNodeId=a-p8569-p4s1w4
5	mēneši	mēnesis	NOUN	ncmpn2	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	9:nsubj	LvtbNodeId=a-p8569-p4s1w5
6	aktierim	aktieris	NOUN	ncmsd2	Case=Dat|Gender=Masc|Number=Sing	9	obl	9:obl:dat	LvtbNodeId=a-p8569-p4s1w6
7	nav	būt	AUX	vcnipii30ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	9:aux	LvtbNodeId=a-p8569-p4s1w7
8	bijuši	būt	AUX	vcnpdmpnasnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	aux	9:aux	LvtbNodeId=a-p8569-p4s1w8
9	viegli	viegli	ADJ	afmpnnp	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	ccomp	1:ccomp	LvtbNodeId=a-p8569-p4s1w9|SpaceAfter=No
10	.	.	PUNCT	zs	_	1	punct	1:punct	LvtbNodeId=a-p8569-p4s1w10

~~~


