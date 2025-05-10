---
layout: base
title:  'Statistics of flat:goeswith in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `flat:goeswith`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-flat.html">flat</a></tt>.
There are also 2 other language-specific subtypes of `flat`: <tt><a href="ru_taiga-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="ru_taiga-dep-flat-name.html">flat:name</a></tt>.

6 nodes (0%) are attached to their parents as `flat:goeswith`.

6 instances of `flat:goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `flat:goeswith`: <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (3; 50% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 17% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 17% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 29 flat:goeswith	color:blue
1	В	в	ADP	_	_	2	case	_	_
2	словарях	словарь	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	6	obl	_	_
3	того	тот	DET	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	4	det	_	_
4	времени	время	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	nmod	_	_
5	оно	оно	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj:pass	_	_
6	толковалось	толковать	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	feat="Transit=Tran"|_
7	как	как	SCONJ	_	_	9	case	_	_
8	«	«	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	упрямец	упрямец	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
10	»	»	PUNCT	_	_	9	punct	_	_
11	и	и	CCONJ	_	_	12	cc	_	_
12	фигурировало	фигурировать	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Pass	6	conj	_	feat="Transit=Intr"|_
13	с	с	ADP	_	_	15	case	_	_
14	территориальными	территориальный	ADJ	_	Case=Ins|Degree=Pos|Number=Plur	15	amod	_	_
15	пометами	помета	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	12	obl	_	SpaceAfter=No
16	:	:	PUNCT	_	_	17	punct	_	after=' <i>'
17	псков	псковский	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Typo=Yes	15	appos	_	after='</i>'|SpaceAfter=No
18	(	(	PUNCT	_	_	17	punct	_	SpaceAfter=No
19	ское	ское	X	_	_	17	flat:goeswith	_	SpaceAfter=No
20	)	)	PUNCT	_	_	17	punct	_	SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	after=' <i>'
22	твер	тверской	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Typo=Yes	17	conj	_	after='</i>'|SpaceAfter=No
23	(	(	PUNCT	_	_	22	punct	_	SpaceAfter=No
24	ское	ское	X	_	_	22	flat:goeswith	_	SpaceAfter=No
25	)	)	PUNCT	_	_	22	punct	_	SpaceAfter=No
26	,	,	PUNCT	_	_	27	punct	_	after=' <i>'
27	осташ	осташковский	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Typo=Yes	17	conj	_	after='</i>'|SpaceAfter=No
28	(	(	PUNCT	_	_	27	punct	_	SpaceAfter=No
29	ковское	ковское	X	_	_	27	flat:goeswith	_	SpaceAfter=No
30	)	)	PUNCT	_	_	27	punct	_	SpaceAfter=No
31	.	.	PUNCT	_	_	6	punct	_	sent_after='</p>\n<p>'

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:goeswith	color:blue
1	Гипо	гипогликемический	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Typo=Yes	0	root	_	SpaceAfter=No
2	…	…	PUNCT	_	_	1	punct	_	_
3	гликемический	гликемический	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	1	flat:goeswith	_	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:goeswith	color:blue
1	Как	как-то	ADV	_	Degree=Pos|PronType=Ind	7	advmod	_	SpaceAfter=No
2	-	-	PUNCT	_	_	3	punct	_	_
3	то	то	PART	_	_	1	flat:goeswith	_	_
4	слишком	слишком	ADV	_	Degree=Pos	5	advmod	_	_
5	мало	мало	NUM	_	Case=Acc|NumForm=Word|NumType=Card	6	nummod:gov	_	_
6	цветов	цветок	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	obj	_	_
7	получают	получать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	актёры	актер	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
9	после	после	ADP	_	_	10	case	_	_
10	спектакля	спектакль	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


