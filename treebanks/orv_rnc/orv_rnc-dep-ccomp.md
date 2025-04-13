---
layout: base
title:  'Statistics of ccomp in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `ccomp`

This relation is universal.

551 nodes (0%) are attached to their parents as `ccomp`.

531 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.47912885662432.

The following 15 pairs of parts of speech are connected with `ccomp`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (426; 77% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (36; 7% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (31; 6% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (17; 3% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	а	а	CCONJ	_	_	3	cc	_	_
2	он	онъ	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	сказывалъ	сказывати	VERB	_	Aspect=Imp|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	_
4	что	что	SCONJ	_	_	7	mark	_	_
5	тою	тотъ	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
6	челобитную	челобитная	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	_
7	отдалъ	отдати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	3	ccomp	_	_
8	де	де	PART	_	_	7	discourse	_	_
9	Савы	Сава	PROPN	_	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	7	iobj	_	_
10	Еѳимовичю	Ефимовичь	PROPN	_	Case=Dat|Gender=Masc|NameType=Pat|Number=Sing	9	flat:name	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	И	и	CCONJ	_	_	5	cc	_	Norm="И"
2	не	не	PART	_	Polarity=Neg	3	advmod	_	Norm="не"
3	вотще	вотще	ADV	_	Degree=Pos	5	advmod	_	Norm="вотще"
4	сіꙗ	сей	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	3	nsubj:pass	_	Norm="сіꙗ"
5	рекошасꙗ	рещи	VERB	Tense=Imp	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Norm="рекошасꙗ"|SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	Norm=","
7	ꙗко	яко	SCONJ	_	_	9	mark	_	Norm="ꙗко"
8	всꙗ	весь	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Tot	9	det	_	Norm="всꙗ"
9	стран(н)аꙗ	странный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	5	ccomp	_	Norm="страннаꙗ"
10	etc.	etc.	X	_	Foreign=Yes	9	dep	_	Norm="etc."

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 ccomp	color:blue
1	О	о	ADP	_	_	2	case	_	norm="О"|check=@
2	сем	сие	PRON	_	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	norm="сем"|Decl=X|End=ме|check=@
3	иныя	иной	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	4	det	_	norm="иныя"|Decl=X|End=яы|check=@
4	летописцы	лѣтописецъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	norm="летописцы"|Decl=2|End=ы|check=@
5	сумневаются	сумнѣватися	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	norm="сумневаются"|Decl=X|End=ястю
6	и	и	CCONJ	_	_	7	cc	_	norm="и"
7	глаголют	глаголати	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	norm="глаголют"|Decl=X|End=тю|SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	norm=","
9	что	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	13	det	_	norm="что"
10	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	13	aux	_	norm="бы"|Decl=X|End=0
11	то	то	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	13	nsubj	_	norm="то"|Decl=X|End=о
12	за	за	ADP	_	_	13	case	_	norm="за"|check=@
13	дивы	диво	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	7	ccomp	_	norm="дивы"|Decl=2|End=ы|check=@
14	были	быти	AUX	_	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	13	cop	_	norm="были"|Decl=X|End=ил|SpaceAfter=No
15	?	?	PUNCT	_	_	5	punct	_	norm="?"

~~~


