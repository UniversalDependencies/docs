---
layout: base
title:  'Statistics of appos in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `appos`

This relation is universal.

3 nodes (0%) are attached to their parents as `appos`.

3 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 3 pairs of parts of speech are connected with `appos`: <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (1; 33% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-PROPN.html">PROPN</a></tt> (1; 33% instances), <tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	_	तू	PRON	_	Case=Abs|Number=Plur|Person=2	3	nmod:poss	_	_
2	_	चा	ADP	_	Gender=Fem|Number=Sing	1	case	_	_
3	आज्ञा	आज्ञा	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
4	प्रमाण	प्रमाण	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	असे	असा	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	4	appos	_	_
7	म्हणून	म्हणणे	VERB	_	Aspect=Perf|VerbForm=Conv	11	advcl	_	_
8	_	पिता	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	10	nmod	_	_
9	_	चा	ADP	_	Case=Abs	8	case	_	_
10	पाया	पाय	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	11	obl	_	_
11	पडून	पडणे	VERB	_	Aspect=Perf|VerbForm=Conv	17	advcl	_	_
12	तो	तो	PRON	_	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|Person=3	17	nsubj	_	_
13	_	आई	NOUN	_	Case=Abs|Gender=Fem|Number=Sing	15	nmod	_	_
14	_	चा	ADP	_	Case=Nom|Gender=Masc|Number=Sing	13	case	_	_
15	निरोप	निरोप	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	17	nsubj	_	_
16	घ्यायला	घेणे	VERB	_	VerbForm=Sup	17	xcomp	_	_
17	गेला	जाणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
18	.	.	PUNCT	_	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	इतक्यात	इतक्यात	ADV	_	_	10	advmod	_	_
2	_	तो	PRON	_	Deixis=Remt|Gender=Neut|Number=Sing|Person=3	4	nmod:poss	_	_
3	_	चा	ADP	_	Gender=Fem|Number=Sing	2	case	_	_
4	वडील	वडील	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
5	मुलगी	मुलगी	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	flat	_	_
6	भीमी	भीमी	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	4	appos	_	_
7	लहान	लहान	ADJ	_	Case=Abs	8	amod	_	_
8	भावंडाला	भावंड	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	9	obj	_	_
9	घेऊन	घेणे	VERB	_	Aspect=Perf|VerbForm=Conv	10	advcl	_	_
10	आली	येणे	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	हे	हा	PRON	_	Deixis=Prox|Gender=Neut|Number=Sing|Person=3	2	obj	_	_
2	घे	घेणे	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
3	चार	चार	NUM	_	_	4	nummod	_	_
4	लाडू	लाडू	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	1	appos	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


