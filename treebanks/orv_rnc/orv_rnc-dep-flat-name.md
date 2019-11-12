---
layout: base
title:  'Statistics of flat:name in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-flat.html">flat</a></tt>.

393 nodes (2%) are attached to their parents as `flat:name`.

393 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10941475826972.

The following 4 pairs of parts of speech are connected with `flat:name`: <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (389; 99% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Скрѣпа	скрѣпа	NOUN	OOV|Animacy[lex]=Inan	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	_	_	1	punct	_	_
3	Діакъ	дьякъ	NOUN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	1	appos	_	_
4	Андрей	Андрѣй	PROPN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
5	Городецкой	Городецкий	PROPN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	4	flat:name	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 flat:name	color:blue
1	Государю	государь	NOUN	OOV	Case=Dat|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=Yes
2	Борису	Борисъ	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	1	appos	_	SpaceAfter=Yes
3	Ивановичю	Ивановичь	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	2	flat:name	_	SpaceAfter=Yes
4	бьет	бити	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=Yes
5	челом	чело	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	4	iobj	_	SpaceAfter=Yes
6	сирота	сирота	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=Yes
7	твой	твой	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	6	det	_	SpaceAfter=Yes
8	села	село	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	10	nmod	_	SpaceAfter=Yes
9	Горо[д]н[я]	Городень	PROPN	OOV	Case=Gen|Gender=Masc|Number=Sing	8	appos	_	SpaceAfter=Yes
10	крестиянин	крестьянинъ	NOUN	OOV	Case=Nom|Gender=Masc|Number=Sing	6	appos	_	SpaceAfter=Yes
11	Ивашко	Ивашко	PROPN	OOV	Case=Nom|Gender=Masc|Number=Sing	10	appos	_	SpaceAfter=Yes
12	Перфильев	Перфильевъ	PROPN	OOV	Case=Nom|Gender=Masc|Number=Sing	10	flat:name	_	SpaceAfter=Yes
13	с	съ	ADP	_	_	14	case	_	SpaceAfter=Yes
14	товарищи	товарищь	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat:name	color:blue
1	К	къ	ADP	_	_	3	case	_	_
2	сей	сей	DET	OOV	Case=Nom|Gender=Masc|Number=Sing	3	det	_	_
3	челобитной	челобитная	NOUN	OOV|Animacy[lex]=Inan	Case=Dat|Gender=Fem|Number=Sing	15	obl	_	_
4	рязанец	рязанецъ	NOUN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	15	nsubj	_	_
5	Василей	Василей	PROPN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	4	appos	_	_
6	Зарецкой	Зарецкий	PROPN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	5	flat:name	_	_
7	в	въ	ADP	_	_	9	case	_	_
8	Уварове	уваровъ	ADJ	OOV	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	9	amod	_	_
9	место	мѣсто	NOUN	Animacy[lex]=Inan	Case=Loc|Gender=Neut|Number=Sing	15	nmod	_	_
10	Барсукове	барсуковъ	ADJ	OOV|Animacy[lex]=Inan	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	8	flat:name	_	_
11	по	по	ADP	_	_	13	case	_	_
12	ево	онъ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	det	_	_
13	веленью	веленье	NOUN	OOV|Animacy[lex]=Inan	Case=Dat|Gender=Neut|Number=Sing	15	obl	_	_
14	руку	рука	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Fem|Number=Sing	15	obj	_	_
15	приложил	приложити	VERB	OOV|Transit=Tran	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	0	root	_	SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


