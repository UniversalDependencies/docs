---
layout: base
title:  'Statistics of appos in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `appos`

This relation is universal.

25 nodes (0%) are attached to their parents as `appos`.

25 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.08.

The following 12 pairs of parts of speech are connected with `appos`: <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (8; 32% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (4; 16% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (3; 12% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	3	punct	_	_
2	Δε	δεν	PART	PtNg	Polarity=Neg	3	advmod	_	_
3	χωράμε	χωρώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	πια	πια	ADV	AdBa	_	3	advmod	_	_
5	σ	σε	ADP	AsPpSp	_	7	case	_	_
6	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	δυάρι	δυάρι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	_
8	,	,	PUNCT	PUNCT	PunctType=Comm	9	punct	_	_
9	μαμά	μαμά	NOUN	NoCm	Case=Voc|Gender=Fem|Number=Sing	7	appos	_	_
10	»	»	PUNCT	CPUNCT	PunctType=Quot	3	punct	_	_
11	της	εγώ	PRON	PnPe	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	iobj	_	_
12	εξηγεί	εξηγώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
13	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	Κατερίνα	Κατερίνα	PROPN	NoPr	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	_
15	»	»	PUNCT	CPUNCT	PunctType=Quot	3	punct	_	SpaceAfter=No
16	.	.	PUNCT	PTERMP	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	2	punct	_	_
2	Παπαδιάς	Παπαδιάς	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
4	διοικητής	διοικητής	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
5	του	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
6	αστυνομικού	αστυνομικός	ADJ	AjBa	Case=Gen|Gender=Neut|Number=Sing	7	amod	_	_
7	τμήματος	τμήμα	NOUN	NoCm	Case=Gen|Gender=Neut|Number=Sing	4	nmod	_	_
8	Ηλιούπολης	Ηλιούπολη	PROPN	NoPr	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
9	,	,	PUNCT	PUNCT	PunctType=Comm	11	punct	_	_
10	κύριε	κύριος	ADJ	NoCm	Case=Voc|Gender=Masc|Number=Sing	11	nmod	_	_
11	συνάδελφε	συνάδελφος	NOUN	NoCm	Case=Voc|Gender=Masc|Number=Sing	2	conj	_	_
12	»	»	PUNCT	CPUNCT	PunctType=Quot	2	punct	_	SpaceAfter=No
13	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 appos	color:blue
1	Σ	σε	ADP	AsPpSp	_	3	case	_	_
2	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	τέλος	τέλος	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	5	obl	_	_
4	θα	θα	AUX	PtFu	Tense=Fut	5	aux	_	_
5	μπει	μπαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
6	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
7	γνωστό	γνωστός	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Sing	8	amod	_	_
8	ερώτημα	ερώτημα	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
9	:	:	PUNCT	PTERM	PunctType=Colo	8	punct	_	_
10	τι	τι	PRON	PnIr	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	11	obj	_	_
11	κάνει	κάνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	appos	_	_
12	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	αστυνομία	αστυνομία	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	_
14	;	;	PUNCT	PTERM	PunctType=Qest	5	punct	_	_

~~~


