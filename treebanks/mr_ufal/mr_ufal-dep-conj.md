---
layout: base
title:  'Statistics of conj in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `conj`

This relation is universal.

95 nodes (2%) are attached to their parents as `conj`.

95 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.07368421052632.

The following 15 pairs of parts of speech are connected with `conj`: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (56; 59% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (17; 18% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-DET.html">DET</a></tt>-<tt><a href="mr_ufal-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mr_ufal-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 conj	color:blue
1	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
2	आपण	मी	PRON	_	Case=Nom|Clusivity=In|Number=Plur|Person=1	4	nsubj	_	_
3	चोर	चोर	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	4	obj	_	_
4	ठरलो	ठरणे	VERB	_	Aspect=Perf|Number=Plur|Person=1|VerbForm=Fin	0	root	_	_
5	नि	नि	CCONJ	_	_	8	cc	_	_
6	चोर	चोर	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
7	मालक	मालक	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	obj	_	_
8	ठरला	ठरणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	"	"	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 conj	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	देवबीव	देवबीव	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	_	सत्ता	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	0	root	_	_
4	_	जवळ	ADP	_	_	3	case	_	_
5	असतो	असणे	AUX	_	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	_	संपत्ती	NOUN	_	Case=Abs|Gender=Fem|Number=Sing	3	conj	_	_
8	_	जवळ	ADP	_	_	7	case	_	_
9	असतो	असणे	AUX	_	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	SpaceAfter=No
11	"	"	PUNCT	_	_	3	punct	_	_
12	वकील	वकील	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
13	म्हणाला	म्हणणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 conj	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	हे	हा	DET	_	Deixis=Prox|Gender=Neut|Number=Sing|PronType=Dem	4	det	_	_
3	म्हातारे	म्हातारा	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	4	amod	_	_
4	शेतकरी	शेतकरी	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
5	साक्षीदार	साक्षीदार	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	का	का	CCONJ	_	_	8	cc	_	_
7	खोटे	खोटा	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	8	compound:lvc	_	_
8	सांगतात	सांगसांगणे	VERB	_	Aspect=Imp|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	SpaceAfter=No
9	?	?	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	"	"	PUNCT	_	_	5	punct	_	_
11	वकील	वकील	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
12	म्हणाला	म्हणणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	5	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	_

~~~


