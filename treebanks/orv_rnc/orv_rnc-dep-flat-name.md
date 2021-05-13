---
layout: base
title:  'Statistics of flat:name in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-flat.html">flat</a></tt>.

685 nodes (2%) are attached to their parents as `flat:name`.

685 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16496350364964.

The following 6 pairs of parts of speech are connected with `flat:name`: <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (661; 96% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (14; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Скрѣпа	скрѣпа	NOUN	Animacy[lex]=Inan	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	_	_	1	punct	_	_
3	Діакъ	дьякъ	NOUN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	1	appos	_	_
4	Андрей	Андрѣй	PROPN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
5	Городецкой	Городецкий	PROPN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	4	flat:name	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 flat:name	color:blue
1	Сентября	сентябрь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	5	obl	_	Norm=Сентября|SpaceAfter=Yes
2	въ	въ	ADP	_	_	4	case	_	Norm=въ|SpaceAfter=Yes
3	З	3	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|NumForm=Digit	4	amod	_	Norm=3|SpaceAfter=Yes
4	де	день	NOUN	_	Abbr=Yes	1	nmod	_	Norm=де|SpaceAfter=Yes
5	подал	подати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	Norm=подал|SpaceAfter=Yes
6	грамотку	грамотка	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	Norm=грамотку|SpaceAfter=Yes
7	Иванова	ивановъ	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Poss=Yes|Variant=Short	8	amod	_	Norm=Иванова|SpaceAfter=Yes
8	приказу	приказъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	Norm=приказу|SpaceAfter=Yes
9	Елагина	Елагинъ	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	Norm=Елагина|SpaceAfter=Yes
10	стрелец	стрѣлецъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Norm=стрелец|SpaceAfter=Yes
11	Захарко	Захарко	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	10	appos	_	Norm=Захарко|SpaceAfter=Yes
12	Ѡндреевъ	Ондрѣевъ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	11	flat:name	_	Norm=Ѡндреевъ|SpaceAfter=Yes
13	снъ	сынъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	11	flat:name	_	Norm=снъ

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 flat:name	color:blue
1	Государю	государь	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	4	obl	_	_
2	Борису	Борисъ	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	1	appos	_	_
3	Ивановичю	Ивановичь	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	2	flat:name	_	_
4	бьет	бити	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	челом	чело	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	4	iobj	_	_
6	сирота	сирота	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	4	nsubj	_	_
7	твой	твой	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	6	det	_	_
8	села	село	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	10	nmod	_	_
9	Горо[д]н[я]	Городень	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	8	appos	_	_
10	крестиянин	крестьянинъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	appos	_	_
11	Ивашко	Ивашко	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	10	appos	_	_
12	Перфильев	Перфильевъ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	10	flat:name	_	_
13	с	съ	ADP	_	_	14	case	_	_
14	товарищи	товарищь	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


