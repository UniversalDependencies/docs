---
layout: base
title:  'Statistics of ccomp in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `ccomp`

This relation is universal.

129 nodes (1%) are attached to their parents as `ccomp`.

129 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.62015503875969.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (84; 65% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (15; 12% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (14; 11% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-ADV.html">ADV</a></tt> (4; 3% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-INTJ.html">INTJ</a></tt> (2; 2% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 ccomp	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 ccomp	color:blue
1	Макроэкономикалық	макроэкономикалық	ADJ	adj	_	2	amod	_	_
2	көрсеткіштер	көрсеткіш	NOUN	n	Case=Nom|Number=Plur	3	nsubj	_	_
3	жаман	жаман	ADJ	adj	_	7	ccomp	_	_
4	емес	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Aor|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	3	punct	_	_
6	-	-	PUNCT	guio	_	7	punct	_	_
7	деді	де	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	Г.	Г.	NOUN	abbr	_	7	nsubj	_	_
9	Марченко	Марченко	PROPN	np	Case=Nom	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 ccomp	color:blue
1	Соның	сол	PRON	prn	Case=Gen|PronType=Dem	2	nmod:poss	_	_
2	өзінде	өз	PRON	prn	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3|PronType=Ref	10	obl	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	7	punct	_	_
4	біз	біз	PRON	prn	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
5	бұл	бұл	DET	det	PronType=Dem	7	det	_	_
6	жаман	жаман	ADJ	adj	_	7	amod	_	_
7	көрсеткіш	көрсеткіш	NOUN	n	Case=Nom	9	ccomp	_	_
8	емес	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Aor|VerbForm=Fin	7	cop	_	_
9	деп	де	VERB	v	Aspect=Perf|VerbForm=Conv	10	advcl	_	_
10	санаймыз	сана	VERB	v	Mood=Ind|Number=Plur|Person=1|Tense=Aor|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


