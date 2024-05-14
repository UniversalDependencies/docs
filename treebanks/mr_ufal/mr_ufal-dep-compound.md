---
layout: base
title:  'Statistics of compound in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="mr_ufal-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="mr_ufal-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="mr_ufal-dep-compound-svc.html">compound:svc</a></tt>.

7 nodes (0%) are attached to their parents as `compound`.

5 instances of `compound` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14285714285714.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (4; 57% instances), <tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (2; 29% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	हात	हात	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	2	compound	_	Translit=hāta|LTranslit=hāta
2	पाय	पाय	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	Translit=pāya|LTranslit=pāya
3	धुऊन	धुणे	VERB	_	Aspect=Perf|VerbForm=Conv	5	advcl	_	Translit=dhuūna|LTranslit=dhuṇe
4	तेथे	तेथे	ADV	_	_	5	advmod	_	Translit=tethe|LTranslit=tethe
5	बसला	बसणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=basalā|LTranslit=basaṇe
6	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	साधी	साधा	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	2	compound	_	Translit=sādhī|LTranslit=sādhā
2	भोळी	भोळा	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	5	xcomp	_	Translit=bhoḷī|LTranslit=bhoḷā
3	,	,	PUNCT	_	_	4	punct	_	Translit=,|LTranslit=,
4	निष्पाप	निष्पाप	ADJ	_	Case=Nom	2	conj	_	Translit=niṣpāpa|LTranslit=niṣpāpa
5	दिसत	दिसणे	VERB	_	Aspect=Imp|VerbForm=Part	0	root	_	Translit=disata|LTranslit=disaṇe
6	होती	असणे	AUX	_	Gender=Fem|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	5	aux	_	SpaceAfter=No|Translit=hotī|LTranslit=asaṇe
7	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	तिला	तो	PRON	_	Case=Dat|Deixis=Remt|Gender=Fem|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	Translit=tilā|LTranslit=to
2	आता	आता	ADV	_	_	5	advmod	_	Translit=ātā|LTranslit=ātā
3	तो	तो	PRON	_	Case=Acc|Deixis=Remt|Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	obj	_	Translit=to|LTranslit=to
4	नीट	नीट	ADV	_	_	5	advmod	_	Translit=nīṭa|LTranslit=nīṭa
5	ऐकू	ऐकणे	VERB	_	InfForm=Incp|VerbForm=Inf	0	root	_	Translit=aikū|LTranslit=aikaṇe
6	येत	येणे	VERB	_	Aspect=Imp|VerbForm=Part	5	compound	_	Translit=yeta|LTranslit=yeṇe
7	आहे	असणे	AUX	_	Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	SpaceAfter=No|Translit=āhe|LTranslit=asaṇe
8	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


