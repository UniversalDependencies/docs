---
layout: base
title:  'Statistics of nmod:poss in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="mr_ufal-dep-nmod.html">nmod</a></tt>.

156 nodes (4%) are attached to their parents as `nmod:poss`.

154 instances of `nmod:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.20512820512821.

The following 8 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (79; 51% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (56; 36% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-PROPN.html">PROPN</a></tt> (10; 6% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod:poss	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	न्याय	न्याय	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
3	_	मी	PRON	_	Number=Plur|Person=1	5	nmod:poss	_	_
4	_	चा	ADP	_	Case=Abs	3	case	_	_
5	हातात	हात	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	0	root	_	_
6	असतो	असणे	AUX	_	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	भीमा	भीमा	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	vocative	_	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No
10	"	"	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:poss	color:blue
1	या	हा	DET	_	Case=Abs|Deixis=Prox|PronType=Dem	2	det	_	_
2	_	प्रांत	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	4	nmod:poss	_	_
3	_	चा	ADP	_	Gender=Masc|Number=Sing	2	case	_	_
4	राजा	राजा	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
5	_	दौऱ्य	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	7	obl	_	_
6	_	वर	ADP	_	_	5	case	_	_
7	निघाला	निघणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
8	होता	असणे	AUX	_	Gender=Masc|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:poss	color:blue
1	न्यायाधीशाने	न्यायाधीश	NOUN	_	Case=Erg|Gender=Masc|Number=Sing	5	nsubj	_	_
2	_	भीम	PROPN	_	Case=Abs|Gender=Masc|Number=Sing	4	nmod:poss	_	_
3	_	चा	ADP	_	Gender=Fem|Number=Sing	2	case	_	_
4	मालकी	मालकी	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
5	काढून	काढणे	VERB	_	Aspect=Perf|VerbForm=Conv	0	root	_	_
6	घेतली	घेणे	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Fin	5	compound:svc	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


