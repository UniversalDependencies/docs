---
layout: base
title:  'Statistics of csubj in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="el_gud-dep-csubj-pass.html">csubj:pass</a></tt>.

148 nodes (1%) are attached to their parents as `csubj`.

143 instances of `csubj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.31081081081081.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (113; 76% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (10; 7% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Δε	δεν	PART	_	Polarity=Neg	3	advmod	_	_
2	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	3	obl	_	_
3	μένει	μένω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	παρά	παρά	ADP	_	_	7	cc	_	_
5	να	να	SCONJ	_	_	4	fixed	_	_
6	τον	εγώ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	ευχαριστήσω	ευχαριστώ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	3	csubj	_	_
8	και	και	CCONJ	_	_	10	cc	_	_
9	να	να	SCONJ	_	_	10	mark	_	_
10	αποχωρήσω	αποχωρώ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj	color:blue
1	«	«	PUNCT	_	_	14	punct	_	PunctType=Quot
2	Καλό	καλός	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	14	ccomp	_	_
3	θα	θα	AUX	_	Tense=Fut	2	aux	_	_
4	ήταν	είμαι	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	2	cop	_	_
5	να	να	SCONJ	_	_	7	mark	_	_
6	μην	μην	PART	_	Polarity=Neg	7	advmod	_	_
7	παραβιάσουμε	παραβιάζω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	2	csubj	_	_
8	την	ο	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	πόρτα	πόρτα	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	_
10	ή	ή	CCONJ	_	_	11	cc	_	_
11	παράθυρο	παράθυρο	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	9	conj	_	_
12	»	»	PUNCT	_	_	14	punct	_	PunctType=Quot
13	του	εγώ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	iobj	_	_
14	λέω	λέω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	Πώς	πώς	ADV	_	PronType=Int	2	advmod	_	_
2	φαίνεται	φαίνομαι	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	ότι	ότι	SCONJ	_	_	6	mark	_	_
4	είσαι	είμαι	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	_
5	από	από	ADP	_	_	6	case	_	_
6	σπίτι	σπίτι	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	csubj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	PunctType=Peri

~~~


