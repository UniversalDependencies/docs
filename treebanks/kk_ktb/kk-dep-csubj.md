---
layout: base
title:  'Statistics of csubj in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `csubj`

This relation is universal.

77 nodes (1%) are attached to their parents as `csubj`.

76 instances of `csubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.54545454545455.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (33; 43% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (23; 30% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (11; 14% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="kk-pos-PRON.html">PRON</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	Адам	адам	NOUN	n	Case=Nom	5	nsubj	_	_
2	–	–	PUNCT	guio	_	5	punct	_	_
3	шешуі	шеш	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	4	csubj	_	_
4	жоқ	жоқ	ADJ	adj	_	5	acl:relcl	_	_
5	жұмбақ	жұмбақ	NOUN	n	Case=Nom	0	root	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 csubj	color:blue
1	Жобаны	жоба	NOUN	n	Case=Acc	9	obj	_	_
2	5	5	NUM	num	NumType=Card	3	nummod	_	_
3	кезеңге	кезең	NOUN	n	Case=Dat	4	obl	_	_
4	бөліп	бөл	VERB	v	Aspect=Perf|VerbForm=Conv	9	advcl	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	4	punct	_	_
6	12	12	NUM	num	NumType=Ord	7	amod	_	_
7	жылда	жыл	NOUN	n	Case=Loc	9	obl	_	_
8	жүзеге	жүзеге	X	x	_	9	dep	_	_
9	асыру	асыр	VERB	v	Case=Nom|VerbForm=Ger	10	csubj	_	_
10	жоспарланып	жоспарла	VERB	v	Aspect=Perf|VerbForm=Cov|Voice=Pass	0	root	_	_
11	отыр	отыр	AUX	vaux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj	color:blue
1	Бюджетке	бюджет	NOUN	n	Case=Dat	5	obl	_	_
2	ақшаның	ақша	NOUN	n	Case=Gen	4	nsubj	_	_
3	түсуі	түс	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	5	csubj	_	_
4	көбейгені	көбей	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|Tense=Past|VerbForm=Part	3	conj	_	_
5	рас	рас	NOUN	n	Case=Nom	0	root	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


