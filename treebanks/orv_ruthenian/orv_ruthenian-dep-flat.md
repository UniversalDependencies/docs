---
layout: base
title:  'Statistics of flat in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="orv_ruthenian-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="orv_ruthenian-dep-flat-name.html">flat:name</a></tt>.

23 nodes (0%) are attached to their parents as `flat`.

23 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26086956521739.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (19; 83% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (4; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Ген(варя)	генварь	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	0	root	_	wf="Генваря"
2	5	5	ADJ	ORD	Case=Acc|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	1	flat	_	_
3	,	,	PUNCT	-COMMA-	_	4	punct	_	_
4	инъдик(т)	индиктъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	wf="инъдикт"
5	11	11	ADJ	ORD	Case=Nom|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	4	amod	_	_
6	.	.	PUNCT	-PERIOD-	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 flat	color:blue
1	Писанъ	писати	VERB	VBNH	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="Писанъ"
2	ꙋ	въ	ADP	IN	_	3	case	_	wf="ꙋ"
3	Троцех	Троки	PROPN	NPI	Case=Loc|Gender=Masc|NameType=Geo|Number=Plur	1	obl	_	wf="Троцех"|SpaceAfter=No
4	,	,	PUNCT	-COMMA-	_	5	punct	_	_
5	авъгꙋстъ	августъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	1	obl	_	wf="авъгꙋстъ"
6	12	12	ADJ	ORD	Case=Acc|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	7	amod	_	_
7	день	день	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	5	flat	_	wf="день"|SpaceAfter=No
8	,	,	PUNCT	-COMMA-	_	9	punct	_	_
9	инъдикъ	индиктъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Sing	5	nmod	_	wf="инъдикъ"
10	2	2	ADJ	ORD	Case=Nom|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	9	amod	_	_
11	.	.	PUNCT	-PERIOD-	_	1	punct	_	_

~~~


