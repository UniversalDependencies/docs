---
layout: base
title:  'Statistics of det in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `det`

This relation is universal.

218 nodes (2%) are attached to their parents as `det`.

218 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22477064220183.

The following 5 pairs of parts of speech are connected with `det`: <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-DET.html">DET</a></tt> (211; 97% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="kk_ktb-pos-DET.html">DET</a></tt>-<tt><a href="kk_ktb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Қазақстан	Қазақстан	PROPN	np	Case=Nom	5	nsubj	_	_
2	осы	осы	DET	det	PronType=Dem	3	det	_	_
3	өңірдегі	өңір	NOUN	n	Case=Loc	4	amod	_	_
4	бейбітшілікті	бейбітшілік	NOUN	n	Case=Acc	5	obj	_	_
5	қолдайды	қолда	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Бірақ	бірақ	CCONJ	cnjcoo	_	18	cc	_	_
2	1918	1918	NUM	num	NumType=Ord	3	amod	_	_
3	ж.	ж.	NOUN	abbr	_	6	obl	_	_
4	ағылшындар	ағылшын	NOUN	n	Case=Nom|Number=Plur	6	nsubj	_	_
5	бүкіл	бүкіл	DET	det	PronType=Tot	6	det	_	_
6	Иранды	Иран	PROPN	np	Case=Acc	8	obj	_	_
7	басып	басып	X	x	_	8	dep	_	_
8	алып	ал	VERB	v	Aspect=Perf|VerbForm=Conv	18	advcl	_	SpaceAfter=No
9	,	,	PUNCT	cm	_	8	punct	_	_
10	1919	1919	NUM	num	NumType=Ord	11	amod	_	_
11	ж.	ж.	NOUN	abbr	_	18	obl	_	_
12	оны	ол	PRON	prn	Case=Acc|PronType=Dem	18	obl	_	_
13	кіріптарлық	кіріптарлық	NOUN	n	Case=Nom	18	nsubj	_	_
14	шарттарға	шарт	NOUN	n	Case=Dat|Number=Plur	16	obl	_	_
15	қол	қол	X	x	_	16	dep	_	_
16	қоюға	қой	VERB	v	Case=Dat|VerbForm=Ger	18	ccomp	_	_
17	мәжбүр	мәжбүр	X	x	_	18	dep	_	_
18	етті	ет	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
19	.	.	PUNCT	sent	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 det	color:blue
1	Сұрақтарыңызды	сұрақ	NOUN	n	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=2|Polite=Form	6	obj	_	_
2	мына	мына	DET	det	PronType=Dem	5	det	_	_
3	мекен	мекен	NOUN	n	Case=Nom	5	compound	_	SpaceAfter=No
4	-	-	PUNCT	guio	_	3	punct	_	SpaceAfter=No
5	жайға	жай	ADJ	adj	Case=Dat	6	obl	_	_
6	жолдауыңызды	жолда	VERB	v	Case=Acc|Number[psor]=Sing|Person[psor]=2|Polite=Form|VerbForm=Ger	7	ccomp	_	_
7	сұраймыз	сұра	VERB	v	Aspect=Hab|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


