---
layout: base
title:  'Statistics of parataxis in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `parataxis`

This relation is universal.

26 nodes (0%) are attached to their parents as `parataxis`.

26 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.07692307692308.

The following 10 pairs of parts of speech are connected with `parataxis`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (11; 42% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (4; 15% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (3; 12% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (2; 8% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	«	«	PUNCT	OPUNCT	_	2	punct	_	PunctType=Quot
2	Μπορούμε	μπορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	SCONJ	PtSj	_	4	mark	_	_
4	αρχίσουμε	αρχίζω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	2	xcomp	_	_
5	»	»	PUNCT	CPUNCT	_	2	punct	_	PunctType=Quot
6	σηκώνει	σηκώνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	_
7	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
8	κεφάλι	κεφάλι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	_
9	και	και	CCONJ	CjCo	_	11	cc	_	_
10	με	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	11	obj	_	_
11	κοιτάζει	κοιτάζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	“	“	PUNCT	OPUNCT	_	2	punct	_	PunctType=Quot
2	Καπάτσα	καπάτσος	ADJ	NoPr	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
3	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	μικρή	μικρός	ADJ	AjBa	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
5	,	,	PUNCT	PUNCT	_	2	punct	_	PunctType=Comm
6	τον	εγώ	PRON	PnPe	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
7	τύλιξε	τυλίγω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	_
8	τον	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Παπαδάκη	Παπαδάκης	PROPN	NoPr	Case=Acc|Gender=Masc|Number=Sing	7	obj	_	_
10	”	”	PUNCT	CPUNCT	_	2	punct	_	PunctType=Quot|SpaceAfter=No
11	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	Το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
2	πρώτο	πρώτος	ADJ	NmOd	Case=Nom|Gender=Neut|Number=Sing|NumType=Ord	3	amod	_	_
3	ερώτημα	ερώτημα	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
4	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	cop	_	_
5	:	:	PUNCT	PTERM	_	3	punct	_	PunctType=Colo
6	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	λέω	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
8	σ	σε	ADP	AsPpSp	_	10	case	_	_
9	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Αδριανή	Αδριανή	PROPN	NoPr	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	_
11	και	και	CCONJ	CjCo	_	14	cc	_	_
12	πώς	πώς	ADV	AdBa	PronType=Int	14	advmod	_	_
13	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
14	λέω	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	_
15	;	;	PUNCT	PTERM	_	3	punct	_	PunctType=Qest

~~~


