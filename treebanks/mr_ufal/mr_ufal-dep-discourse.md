---
layout: base
title:  'Statistics of discourse in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `discourse`

This relation is universal.

57 nodes (1%) are attached to their parents as `discourse`.

40 instances of `discourse` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 18 pairs of parts of speech are connected with `discourse`: <tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="mr_ufal-pos-PART.html">PART</a></tt> (12; 21% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-PART.html">PART</a></tt> (11; 19% instances), <tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mr_ufal-pos-PART.html">PART</a></tt> (4; 7% instances), <tt><a href="mr_ufal-pos-DET.html">DET</a></tt>-<tt><a href="mr_ufal-pos-PART.html">PART</a></tt> (4; 7% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (4; 7% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-INTJ.html">INTJ</a></tt> (4; 7% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-PART.html">PART</a></tt> (3; 5% instances), <tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="mr_ufal-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="mr_ufal-pos-ADP.html">ADP</a></tt>-<tt><a href="mr_ufal-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="mr_ufal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mr_ufal-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	_	तो	PRON	_	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
2	_	ही	PART	_	_	1	discourse	_	_
3	म्हणाला	म्हणणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
2	_	खरा	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	6	discourse	_	_
3	_	च	PART	_	_	2	discourse	_	_
4	,	,	PUNCT	_	_	2	punct	_	_
5	न्याय	न्याय	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
6	उरला	उरणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
7	नाही	नाही	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No
9	"	"	PUNCT	_	_	6	punct	_	_
10	_	देवी	NOUN	_	Case=Abs|Gender=Fem|Number=Sing	13	nmod:poss	_	_
11	_	चा	ADP	_	Gender=Masc|Number=Sing	10	case	_	_
12	तो	तो	DET	_	Deixis=Remt|Gender=Masc|Number=Sing|PronType=Dem	13	det	_	_
13	पुजारी	पुजारी	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
14	म्हणाला	म्हणणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	6	parataxis	_	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	_	जवळ	ADJ	_	Case=Nom	4	amod	_	_
2	_	च	PART	_	_	1	discourse	_	_
3	एक	एक	DET	_	Number=Sing|PronType=Ind	4	det	_	_
4	शहर	शहर	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	5	obj	_	_
5	दिसत	दिसणे	VERB	_	Aspect=Imp|VerbForm=Part	0	root	_	_
6	होते	असणे	AUX	_	Gender=Neut|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


