---
layout: base
title:  'Statistics of flat:foreign in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_syntagrus-dep-flat-name.html">flat:name</a></tt>.

2223 nodes (0%) are attached to their parents as `flat:foreign`.

2145 instances of `flat:foreign` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66306792622582.

The following 24 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (811; 36% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (809; 36% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (120; 5% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (119; 5% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (107; 5% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (101; 5% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (85; 4% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (23; 1% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (15; 1% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (8; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (7; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-dep-_.html">_</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-dep-_.html">_</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 flat:foreign	color:blue
1	1857	1857	NUM	_	_	0	root	0:root	_
2	-	-	PUNCT	_	_	1	punct	1:punct	_
3	Основание	основание	PROPN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	1	parataxis	1:parataxis	_
4	Альпийского	альпийский	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	клуба	клуб	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	3:nmod	_
6	(	(	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
7	Alpine	alpine	PROPN	_	Foreign=Yes	5	flat:foreign	5:flat:foreign	_
8	Club	club	PROPN	_	Foreign=Yes	7	flat:foreign	7:flat:foreign	SpaceAfter=No
9	)	)	PUNCT	_	_	8	punct	8:punct	_
10	в	в	ADP	_	_	11	case	11:case	_
11	Лондоне	лондон	PROPN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	nmod	3:nmod	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 flat:foreign	color:blue
1	Встречался	встречаться	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	0:root	_
2	также	также	ADV	_	Degree=Pos	3	obl	3:obl	_
3	вариант	вариант	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	nsubj	1:nsubj	_
4	написания	написание	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	nmod	3:nmod	_
5	имени	имя	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	nmod	4:nmod	_
6	Аргус	аргус	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	appos	3:appos	_
7	(	(	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No
8	Argus	argus	PROPN	_	Foreign=Yes	6	flat:foreign	6:flat:foreign	SpaceAfter=No
9	)	)	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:foreign	color:blue
1	И	и	CCONJ	_	_	6	cc	6:cc	_
2	все	весь	DET	_	Case=Nom|Number=Plur	3	det	3:det	_
3	они	они	PRON	_	Case=Nom|Number=Plur|Person=3	6	nsubj	6:nsubj	_
4	в	в	ADP	_	_	5	case	5:case	_
5	названии	название	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	6	obl	6:obl	_
6	имели	иметь	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	слово	слово	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	6	obj	6:obj	_
8	algoritmi	algoritmi	X	_	Foreign=Yes	7	flat:foreign	7:flat:foreign	_
9	или	или	CCONJ	_	_	10	cc	10:cc	_
10	algorismi	algorismi	X	_	Foreign=Yes	8	flat:foreign	8:flat:foreign	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


