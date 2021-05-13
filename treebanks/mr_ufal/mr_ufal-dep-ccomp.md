---
layout: base
title:  'Statistics of ccomp in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `ccomp`

This relation is universal.

24 nodes (1%) are attached to their parents as `ccomp`.

16 instances of `ccomp` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.41666666666667.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (14; 58% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (4; 17% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (2; 8% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 ccomp	color:blue
1	केशवचंद्राने	केशवचंद्र	PROPN	_	Case=Erg|Gender=Masc|Number=Sing	10	nsubj	_	_
2	वशिला	वशिला	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
3	लावून	लावणे	VERB	_	Aspect=Perf|VerbForm=Conv	10	advcl	_	_
4	राजा	राजा	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
5	_	आपण	PRON	_	PronType=Prs	8	nmod:poss	_	_
6	_	चा	ADP	_	Case=Abs	5	case	_	_
7	गावी	गाव	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	8	obj	_	_
8	येईल	येणे	VERB	_	Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	10	ccomp	_	_
9	असे	असे	SCONJ	_	_	8	mark	_	_
10	केले	करणे	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 ccomp	color:blue
1	_	राजा	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	3	nmod:poss	_	_
2	_	चा	ADP	_	Case=Abs	1	case	_	_
3	_	कान	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	7	obl	_	_
4	_	वर	ADP	_	_	3	case	_	_
5	ते	तो	PRON	_	Case=Nom|Deixis=Remt|Gender=Masc|Number=Plur|Person=3	7	nsubj	_	_
6	कागाळ्या	कागाळी	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	7	obj	_	_
7	घालतील	घालतील	VERB	_	Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	अशी	असा	SCONJ	_	_	11	mark	_	_
10	त्याला	तो	PRON	_	Case=Dat|Deixis=Remt|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	_
11	शंका	शंका	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	ccomp	_	_
12	होती	असणे	AUX	_	Gender=Fem|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	cop	_	SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 ccomp	color:blue
1	आपण	आपण	PRON	_	Case=Nom|PronType=Prs	4	nsubj	_	_
2	आता	आता	ADV	_	_	4	advmod	_	_
3	शहाणे	शहाणा	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	6	ccomp	_	_
4	झालोत	झालोत	AUX	_	Aspect=Perf|Number=Plur|Person=1|VerbForm=Fin	3	cop	_	_
5	असे	असे	ADV	_	_	4	mark	_	_
6	वाटेल	वाटणे	VERB	_	Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	9	advcl	_	_
7	तेव्हा	तेव्हा	ADV	_	_	6	mark	_	_
8	घरी	घरी	ADV	_	_	9	obl	_	_
9	ये	येणे	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
10	!	!	PUNCT	_	_	9	punct	_	_

~~~


