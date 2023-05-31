---
layout: base
title:  'Statistics of advmod:tto in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `advmod:tto`

This relation is a language-specific subtype of <tt><a href="hu_szeged-dep-advmod.html">advmod</a></tt>.
There are also 6 other language-specific subtypes of `advmod`: <tt><a href="hu_szeged-dep-advmod-locy.html">advmod:locy</a></tt>, <tt><a href="hu_szeged-dep-advmod-mode.html">advmod:mode</a></tt>, <tt><a href="hu_szeged-dep-advmod-que.html">advmod:que</a></tt>, <tt><a href="hu_szeged-dep-advmod-tfrom.html">advmod:tfrom</a></tt>, <tt><a href="hu_szeged-dep-advmod-tlocy.html">advmod:tlocy</a></tt>, <tt><a href="hu_szeged-dep-advmod-to.html">advmod:to</a></tt>.

36 nodes (0%) are attached to their parents as `advmod:tto`.

35 instances of `advmod:tto` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.30555555555556.

The following 2 pairs of parts of speech are connected with `advmod:tto`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (31; 86% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (5; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 advmod:tto	color:blue
1	Mindez	mindez	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	_
2	mára	mára	ADV	_	_	8	advmod:tto	_	_
3	kritikus	kritikus	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod:att	_	_
4	forgalmi	forgalmi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod:att	_	_
5	és	és	CCONJ	_	_	6	cc	_	_
6	környezeti	környezeti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	conj	_	_
7	helyzethez	helyzet	NOUN	_	Case=All|Number=Sing	8	obl	_	_
8	vezetett	vezet	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 advmod:tto	color:blue
1	Márkus	Márkus	PROPN	_	Case=Nom|Number=Sing	2	nmod:att	_	_
2	érmei	érem	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	_
3	nagyon	nagyon	ADV	_	_	4	advmod:mode	_	_
4	kellettek	kell	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	az	az	DET	_	Definite=Def|PronType=Art	12	det	_	_
6	Athénban	Athén	PROPN	_	Case=Ine|Number=Sing	10	obl	_	_
7	eddig	eddig	ADV	_	PronType=Dem	10	advmod:tto	_	_
8	gyengébbik	gyenge	ADJ	_	Case=Nom|Degree=Cmp|Number=Sing	9	amod:att	_	_
9	oldalát	oldal	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	obj	_	_
10	mutató	mutató	ADJ	_	Case=Nom|Number=Sing|VerbForm=PartPres	12	amod:att	_	_
11	magyar	magyar	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	12	amod:att	_	_
12	súlyemelésnek	súlyemelés	NOUN	_	Case=Dat|Number=Sing	4	obl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


