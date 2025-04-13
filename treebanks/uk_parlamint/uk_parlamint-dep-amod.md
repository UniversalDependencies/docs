---
layout: base
title:  'Statistics of amod in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `amod`

This relation is universal.

4326 nodes (8%) are attached to their parents as `amod`.

4050 instances of `amod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19556171983356.

The following 18 pairs of parts of speech are connected with `amod`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (4210; 97% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (43; 1% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (24; 1% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-ADP.html">ADP</a></tt> (11; 0% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (10; 0% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-PART.html">PART</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Двосторонній	двосторонній	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	2	amod	_	_
2	товарообіг	товарообіг	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	більше	більше	ADV	ADV	Degree=Cmp	4	advmod	_	_
4	8,5	8,5	NUM	NUM	Case=Gen|NumType=Card	5	nummod	_	_
5	мільярда	мільярд	NOUN	NUM	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumType=Card	6	nummod:gov	_	_
6	доларів	долар	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 amod	color:blue
1	Так	так	ADV	ADV	PronType=Dem	2	advmod	_	_
2	звані	званий	ADJ	ADJ	Aspect=Imp|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	4	amod	_	_
3	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
4	ДНР	ДНР	PROPN	NOUN	Abbr=Yes|Animacy=Inan|Case=Nom|Gender=Fem|InflClass=Ind|NameType=Geo|Number=Sing	13	nsubj	_	SpaceAfter=No
5	"	"	PUNCT	PUNCT	_	4	punct	_	_
6	і	і	CCONJ	CCONJ	_	8	cc	_	_
7	"	"	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
8	ЛНР	ЛНР	PROPN	PROPN	Abbr=Yes|Animacy=Inan|Case=Nom|Gender=Fem|InflClass=Ind|NameType=Geo|Number=Sing	4	conj	_	SpaceAfter=No
9	"	"	PUNCT	PUNCT	_	8	punct	_	_
10	не	не	PART	PART	Polarity=Neg	13	advmod:neg	_	_
11	є	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	терористичними	терористичний	ADJ	ADJ	Case=Ins|Number=Plur	13	amod	_	_
13	організаціями	організація	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Сьогодні	сьогодні	ADV	ADV	_	6	advmod	_	NER=O
2	о	о	ADP	ADP	_	4	case	_	NER=O
3	5	5	NUM	NUM	_	4	amod	_	NER=O|Uninflect=Yes
4	годині	година	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	obl	_	NER=O
5	ранку	ранок	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	NER=O
6	розпочалися	розпочатися	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Reflex=Yes|Tense=Past	0	root	_	NER=O
7	бої	бій	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	NER=O
8	на	на	ADP	ADP	_	9	case	_	NER=O
9	кордонах	кордон	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	6	obl	_	NER=O
10	нашої	наш	DET	DET	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	11	det	_	NER=O
11	країни	країна	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	NER=O|SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	6	punct	_	NER=O

~~~


