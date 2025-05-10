---
layout: base
title:  'Statistics of ccomp in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `ccomp`

This relation is universal.

589 nodes (2%) are attached to their parents as `ccomp`.

383 instances of `ccomp` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.05942275042445.

The following 12 pairs of parts of speech are connected with `ccomp`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (490; 83% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (43; 7% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (21; 4% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (11; 2% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (3; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	“	“	PUNCT	OPUNCT	_	2	punct	_	PunctType=Quot
2	Θέλετε	θέλω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	SCONJ	CjSb	_	4	mark	_	_
4	πάθετε	παθαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	2	ccomp	_	_
5	αυτό	αυτός	DET	PnDm	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	_
6	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	7	obj	_	_
7	έπαθε	παθαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
8	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	εφοπλιστής	εφοπλιστής	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
10	;	;	PUNCT	PTERM	_	2	punct	_	PunctType=Qest

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Δε	δεν	PART	PtNg	Polarity=Neg	2	advmod	_	_
2	θέλουμε	θέλω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	SCONJ	CjSb	_	6	mark	_	_
4	είμαστε	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	_
5	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	κέντρο	κέντρο	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	2	ccomp	_	_
7	,	,	PUNCT	PUNCT	_	10	punct	_	PunctType=Comm
8	αλλά	αλλά	CCONJ	CjCo	_	10	cc	_	_
9	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	περιφέρεια	περιφέρεια	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	2	conj	_	SpaceAfter=No
11	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 ccomp	color:blue
1	«	«	PUNCT	OPUNCT	_	2	punct	_	PunctType=Quot
2	Πιστεύεις	πιστεύω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ότι	ότι	SCONJ	CjSb	_	10	mark	_	_
4	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	φωτιά	φωτιά	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	_
6	και	και	CCONJ	CjCo	_	8	cc	_	_
7	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	έκρηξη	έκρηξη	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	5	conj	_	_
9	ήταν	είμαι	AUX	VbMn	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	10	cop	_	_
10	βαλτές	βαλτός	ADJ	AjBa	Case=Nom|Gender=Fem|Number=Plur	2	ccomp	_	_
11	;	;	PUNCT	PTERM	_	2	punct	_	PunctType=Qest
12	»	»	PUNCT	CPUNCT	_	2	punct	_	PunctType=Quot

~~~


