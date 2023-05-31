---
layout: base
title:  'Statistics of xcomp in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `xcomp`

This relation is universal.

21 nodes (0%) are attached to their parents as `xcomp`.

21 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47619047619048.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (9; 43% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (5; 24% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (3; 14% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Бұл	бұл	PRON	prn	Case=Nom|PronType=Dem	4	nsubj	_	_
2	сені	сен	PRON	prn	Case=Acc|Number=Sing|Person=2|PronType=Prs	4	obj	_	_
3	қатын	қатын	NOUN	n	Case=Nom	4	xcomp	_	_
4	қылады	қыл	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Aor|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	Шешуі	шеш	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	3	xcomp	_	_
2	деп	деп	X	x	_	3	dep	_	_
3	атауға	ата	VERB	v	Case=Dat|VerbForm=Ger	4	ccomp	_	_
4	болатын	бол	VERB	v	Aspect=Imp|VerbForm=Part	10	advcl	_	_
5	болса	бол	AUX	v	Mood=Cnd|Number=Sing|Person=3|VerbForm=Conv	4	cop	_	SpaceAfter=No
6	,	,	PUNCT	cm	_	5	punct	_	_
7	адамның	адам	NOUN	n	Case=Gen	8	nmod:poss	_	_
8	шешуі	шеш	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	10	nsubj	_	_
9	жалғыз	жалғыз	ADJ	adj	_	10	amod	_	_
10	өлім	өлім	NOUN	n	Case=Nom	0	root	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Одан	ол	PRON	prn	Case=Abl|Number=Sing|Person=3|PronType=Prs	2	nmod	_	_
2	өзгесін	өзге	ADJ	adj	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	5	obj	_	_
3	артық	артық	ADJ	adj	_	4	advmod	_	_
4	керек	керек	ADJ	adj	_	5	xcomp	_	_
5	қылмады	қыл	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


