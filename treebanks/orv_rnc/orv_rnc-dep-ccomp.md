---
layout: base
title:  'Statistics of ccomp in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `ccomp`

This relation is universal.

138 nodes (0%) are attached to their parents as `ccomp`.

131 instances of `ccomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.72463768115942.

The following 12 pairs of parts of speech are connected with `ccomp`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (104; 75% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (12; 9% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (8; 6% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 ccomp	color:blue
1	а	а	CCONJ	_	_	5	cc	_	_
2	ему	онъ	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	iobj	_	_
3	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	5	aux	_	_
4	указ	указъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	_
5	промыслить	промыслити	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	0	root	_	_
6	чтобъ	чтобы	SCONJ	_	Mood=Cnd	7	mark	_	_
7	жить	жити	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	5	ccomp	_	_
8	с	съ	ADP	_	_	10	case	_	_
9	ннешнеи	нынѣшний	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	_
10	женъкои	женка	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	7	obl	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	Роспис(ь)	роспись	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	wf="Роспись"|SpaceAfter=No
2	,	,	PUNCT	_	_	7	punct	_	wf=","|SpaceAfter=Yes
3	что	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	7	det	_	wf="что"|SpaceAfter=Yes
4	ис	изъ	ADP	_	_	6	case	_	wf="ис"|SpaceAfter=Yes
5	которои	который	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Rel	6	det	_	wf="которои"|SpaceAfter=Yes
6	д(е)р(е)вни	деревня	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	obl	_	wf="деревни"|SpaceAfter=Yes
7	пригнали	пригнати	VERB	_	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	1	ccomp	_	wf="пригнали"|SpaceAfter=Yes
8	баранов	баранъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	7	nsubj	_	wf="баранов"|SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	wf="."|SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	И	и	CCONJ	_	_	5	cc	_	Norm=И
2	не	не	PART	_	Polarity=Neg	3	advmod	_	Norm=не
3	вотще	вотще	ADV	_	Degree=Pos	5	advmod	_	Norm=вотще
4	сіꙗ	сей	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	3	nsubj:pass	_	Norm=сіꙗ
5	рекошасꙗ	рещи	VERB	Tense=Imp	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Norm=рекошасꙗ|SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	Norm=,
7	ꙗко	яко	SCONJ	_	_	9	mark	_	Norm=ꙗко
8	всꙗ	весь	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Tot	9	det	_	Norm=всꙗ
9	стран(н)аꙗ	странный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	5	ccomp	_	Norm=страннаꙗ
10	etc.	etc.	X	_	Foreign=Yes	9	dep	_	Norm=etc.

~~~


