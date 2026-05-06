---
layout: base
title:  'Statistics of compound in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="mr_ufal-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="mr_ufal-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="mr_ufal-dep-compound-svc.html">compound:svc</a></tt>.

10 nodes (0%) are attached to their parents as `compound`.

5 instances of `compound` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (5; 50% instances), <tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (2; 20% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (2; 20% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 compound	color:blue
1	एकुलता	एकुलता	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	3	amod	_	Translit=ekulatā|LTranslit=ekulatā
2	एक	एक	DET	_	Number=Sing|PronType=Ind	3	det	_	Translit=eka|LTranslit=eka
3	मुलगा	मुलगा	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	Translit=mulagā|LTranslit=mulagā
4	म्हणून	म्हणून	CCONJ	_	_	3	cc	_	Translit=mhaṇūna|LTranslit=mhaṇūna
5	राजा	राजा	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	12	nsubj	_	SpaceAfter=No|Translit=rājā|LTranslit=rājā
6	-	-	PUNCT	_	_	7	punct	_	SpaceAfter=No|Translit=-|LTranslit=-
7	राणी	राणी	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	conj	_	Translit=rāṇī|LTranslit=rāṇī
8	त्याला	तो	PRON	_	Case=Dat|Deixis=Remt|Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	obj	_	Translit=tyālā|LTranslit=to
9	जीव	जीव	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	12	compound:lvc	_	Translit=jīva|LTranslit=jīva
10	की	की	ADV	_	_	9	compound	_	Translit=kī|LTranslit=kī
11	प्राण	प्राण	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	compound	_	Translit=prāṇa|LTranslit=prāṇa
12	करित	करित	VERB	_	Aspect=Hab|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	SpaceAfter=No|Translit=karita|LTranslit=karita
13	.	.	PUNCT	_	_	12	punct	_	Translit=.|LTranslit=.

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


