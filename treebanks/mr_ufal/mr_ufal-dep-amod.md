---
layout: base
title:  'Statistics of amod in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `amod`

This relation is universal.

88 nodes (2%) are attached to their parents as `amod`.

88 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34090909090909.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (66; 75% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (9; 10% instances), <tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="mr_ufal-pos-NUM.html">NUM</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 amod	color:blue
1	त्या	तो	DET	_	Case=Abs|Deixis=Remt|PronType=Dem	2	det	_	_
2	_	गाव	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	5	amod	_	_
3	_	तील	ADP	_	_	2	case	_	_
4	सारे	सारा	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	5	amod	_	_
5	गोरगरीब	गोरगरीब	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
6	_	केशवचंद्र	PROPN	_	Case=Abs|Gender=Masc|Number=Plur	8	nmod:poss	_	_
7	_	चा	ADP	_	Case=Abs	6	case	_	_
8	नावे	नाव	NOUN	_	Case=Dat|Gender=Neut|Number=Plur	10	obl	_	_
9	खडे	खडा	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	10	obj	_	_
10	फोडीत	फोडणे	VERB	_	Aspect=Imp|VerbForm=Part	0	root	_	_
11	होते	असणे	AUX	_	Gender=Masc|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 amod	color:blue
1	_	असा	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	3	amod	_	_
2	_	च	PART	_	_	1	discourse	_	_
3	दयाळू	दयाळू	ADJ	_	Case=Nom	6	xcomp	_	SpaceAfter=No
4	-	-	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	मायाळू	मायाळू	ADJ	_	Case=Nom	3	compound	_	_
6	हो	होणे	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
7	!	!	PUNCT	_	_	6	punct	_	_

~~~


