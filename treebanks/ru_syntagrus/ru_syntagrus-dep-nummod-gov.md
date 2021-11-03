---
layout: base
title:  'Statistics of nummod:gov in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_syntagrus-dep-nummod-entity.html">nummod:entity</a></tt>.

6323 nodes (0%) are attached to their parents as `nummod:gov`.

5785 instances of `nummod:gov` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44314407717855.

The following 17 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (5442; 86% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (207; 3% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (179; 3% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (175; 3% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (127; 2% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (80; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (28; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (24; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (24; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (13; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod:gov	color:blue
1	Ее	ее	DET	_	Poss=Yes|PronType=Prs	2	det	2:det	_
2	уход	уход	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
3	под	под	ADP	_	_	4	case	4:case	_
4	воду	вода	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	nmod	2:nmod:под:acc	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	2:punct	_
6	как	как	SCONJ	_	_	7	mark	7:mark	_
7	полагал	полагать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	10	parataxis	10:parataxis	_
8	Жиров	Жиров	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	7:nsubj	SpaceAfter=No
9	,	,	PUNCT	_	_	7	punct	7:punct	_
10	происходил	происходить	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
11	в	в	ADP	_	_	13	case	13:case	_
12	два	два	NUM	_	Animacy=Inan|Case=Acc|Gender=Masc|NumType=Card	13	nummod:gov	13:nummod:gov	_
13	этапа	этап	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	obl	10:obl:в:acc	SpaceAfter=No
14	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod:gov	color:blue
1	Он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	_
2	вообще	вообще	ADV	_	Degree=Pos	5	advmod	5:advmod	_
3	много	много	NUM	_	NumType=Card	4	nummod:gov	4:nummod:gov	_
4	чего	что	PRON	_	Case=Gen|PronType=Int,Rel	5	obl	5:obl	_
5	понимал	понимать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod:gov	color:blue
1	Азоврыбвод	азоврыбвод	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
2	"	"	PUNCT	_	_	1	punct	1:punct	SpaceAfter=No
3	предъявил	предъявить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	иск	иск	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	3:obj	_
5	ирригаторам	ирригатор	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	4	iobj	4:iobj	_
6	на	на	ADP	_	_	9	case	9:case	_
7	1,5	1,5	NUM	_	NumType=Card	8	nummod	8:nummod	_
8	миллиона	миллион	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nummod:gov	9:nummod:gov	_
9	рублей	рубль	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	nmod	4:nmod:на:gen	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


