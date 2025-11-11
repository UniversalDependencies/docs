---
layout: base
title:  'Statistics of flat:foreign in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_syntagrus-dep-flat-name.html">flat:name</a></tt>.

1163 nodes (0%) are attached to their parents as `flat:foreign`.

1163 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.1676698194325.

The following 9 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1139; 98% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (7; 1% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (6; 1% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:foreign	color:blue
1	1857	1857	ADJ	_	NumForm=Digit|NumType=Ord	0	root	0:root	pos="ANUM"|_
2	-	-	PUNCT	_	_	3	punct	3:punct	_
3	Основание	основание	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	1	parataxis	1:parataxis	_
4	Альпийского	альпийский	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	клуба	клуб	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	3:nmod:gen	_
6	(	(	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
7	Alpine	Alpine	X	_	Foreign=Yes	5	parataxis	5:parataxis	_
8	Club	Club	X	_	Foreign=Yes	7	flat:foreign	7:flat:foreign	SpaceAfter=No
9	)	)	PUNCT	_	_	7	punct	7:punct	_
10	в	в	ADP	_	_	11	case	11:case	_
11	Лондоне	Лондон	PROPN	_	Animacy=Inan|Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	3	nmod	3:nmod:в:loc	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 flat:foreign	color:blue
1	В	в	ADP	_	_	2	case	2:case	_
2	разгар	разгар	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	12	obl	12:obl:в:acc	_
3	Гражданской	гражданский	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
4	войны	война	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	2	nmod	2:nmod:gen	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	7:punct	_
6	в	в	ADP	_	_	7	case	7:case	_
7	октябре	октябрь	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	2	conj	2:conj|12:obl:в:acc	_
8	1919	1919	ADJ	_	NumForm=Digit|NumType=Ord	9	amod	9:amod	pos="ANUM"|_
9	года	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	7:nmod:gen	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	9:punct	_
11	Ленин	Ленин	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	12	nsubj	12:nsubj	_
12	дал	дать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
13	интервью	интервью	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|InflClass=Ind|Number=Sing	12	obj	12:obj	_
14	газете	газета	NOUN	_	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	13	nmod	13:nmod:dat	_
15	"	"	PUNCT	_	_	16	punct	16:punct	SpaceAfter=No
16	Чикаго	Чикаго	PROPN	_	Animacy=Inan|Case=Nom|Gender=Masc|InflClass=Ind|NameType=Geo|Number=Sing	14	appos	14:appos	_
17	дейли	дейли	X	_	Foreign=Yes	16	flat:foreign	16:flat:foreign	_
18	ньюс	ньюс	X	_	Foreign=Yes	16	flat:foreign	16:flat:foreign	SpaceAfter=No
19	"	"	PUNCT	_	_	16	punct	16:punct	SpaceAfter=No
20	.	.	PUNCT	_	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:foreign	color:blue
1	А	а	CCONJ	_	_	3	cc	3:cc	_
2	еще	еще	ADV	_	Degree=Pos	3	advmod	3:advmod	_
3	хорошо	хороший	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	0:root	_
4	для	для	ADP	_	_	5	case	5:case	_
5	иностранцев	иностранец	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	3	obl	3:obl:для:gen	_
6	было	быть	AUX	_	Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	3:cop	SpaceAfter=No
7	:	:	PUNCT	_	_	9	punct	3:punct	_
8	"	"	PUNCT	_	_	9	punct	9:punct	SpaceAfter=No
9	2012	2012	NOUN	_	_	3	parataxis	3:parataxis	_
10	PUTINPUTOUT	PUTINPUTOUT	X	_	Foreign=Yes	9	flat:foreign	9:flat:foreign	SpaceAfter=No
11	"	"	PUNCT	_	_	9	punct	9:punct	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


