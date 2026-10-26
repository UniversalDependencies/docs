---
layout: base
title:  'Statistics of ccomp in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `ccomp`

This relation is universal.

87 nodes (2%) are attached to their parents as `ccomp`.

66 instances of `ccomp` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.88505747126437.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (74; 85% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-INTJ.html">INTJ</a></tt> (2; 2% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="el_cretan-pos-PRON.html">PRON</a></tt>-<tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	Να	να	SCONJ	PtSj	_	3	mark	_	_
2	την	εγώ	PRON	PnPe	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	πουλήσει	πουλώ	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	5	ccomp	_	_
4	δεν	δεν	PART	PtNg	Polarity=Neg	5	advmod	_	_
5	ήθελε	θέλω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	PTERMP	_	5	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	Σιμώνει	σιμώνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	μια	ένας	DET	AtId	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	1	nsubj	_	_
3	κι	και	CCONJ	CjCo	_	4	cc	_	_
4	ακούει	ακούω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
5	:	:	PUNCT	PTERM	_	7	punct	_	PunctType=Colo
6	«	«	PUNCT	OPUNCT	_	7	punct	_	PunctType=Quot
7	ώρα	ώρα	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	1	ccomp	_	_
8	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	7	cop	_	_
9	;	;	PUNCT	PTERM	_	7	punct	_	PunctType=Qest
10	»	»	PUNCT	CPUNCT	_	7	punct	_	PunctType=Quot
11	.	.	PUNCT	PTERMP	_	1	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 ccomp	color:blue
1	Πασίχαρος	πασίχαρος	ADJ	NoPr	Case=Nom|Gender=Masc|Number=Sing	5	advcl	_	_
2	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Νικολής	Νικολής	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
4	τηνε	εγώ	PRON	PnPe	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	obj	_	MGloss=her-euphonic|MSeg=την-ε
5	ρωτά	ρωτώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	:	:	PUNCT	PTERM	_	5	punct	_	PunctType=Colo
7	«	«	PUNCT	CPUNCT	_	8	punct	_	PunctType=Quot
8	Πού	Πού	ADV	AdBa	PronType=Int	5	ccomp	_	_
9	;	;	PUNCT	PTERM	_	8	punct	_	PunctType=Qest
10	»	»	PUNCT	CPUNCT	_	8	punct	_	PunctType=Quot
11	.	.	PUNCT	PTERMP	_	5	punct	_	PunctType=Peri

~~~


