---
layout: base
title:  'Statistics of orphan in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `orphan`

This relation is universal.

14 nodes (0%) are attached to their parents as `orphan`.

8 instances of `orphan` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.42857142857143.

The following 13 pairs of parts of speech are connected with `orphan`: <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-X.html">X</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-X.html">X</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 orphan	color:blue
1	«	«	PUNCT	OPUNCT	_	2	punct	_	PunctType=Quot
2	Άνθρακες	άνθρακας	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Plur	7	ccomp	_	_
3	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	θησαυρός	θησαυρός	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	2	orphan	_	_
5	»	»	PUNCT	CPUNCT	_	2	punct	_	PunctType=Quot
6	του	εγώ	PRON	PnPe	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	iobj	_	_
7	απαντώ	απαντώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PTERMP	_	7	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 orphan	color:blue
1	Το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	κίνητρο	κίνητρο	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
3	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	4	obj	_	_
4	επικαλούνται	επικαλούμαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	acl:relcl	_	_
5	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	υπουργός	υπουργός	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
7	και	και	CCONJ	CjCo	_	9	cc	_	_
8	οι	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	πλοιοκτήτες	πλοιοκτήτης	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Plur	6	conj	_	_
10	ταιριάζει	ταιριάζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	περισσότερο	πολύ	ADV	AdCp	Degree=Cmp|PronType=Ind	10	advmod	_	_
12	σ	σε	ADP	AsPpSp	_	14	case	_	_
13	τον	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	Δημητράκο	Δημητράκος	PROPN	NoPr	Case=Acc|Gender=Masc|Number=Sing	10	obl	_	_
15	και	και	CCONJ	CjCo	_	19	cc	_	_
16	λιγότερο	λίγο	ADV	AdCp	Degree=Cmp	19	orphan	_	_
17	σ	σε	ADP	AsPpSp	_	19	case	_	_
18	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	19	det	_	_
19	σήμερα	σήμερα	ADV	AdBa	_	14	conj	_	SpaceAfter=No
20	.	.	PUNCT	PTERMP	_	10	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 orphan	color:blue
1	Ήταν	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	2	cop	_	_
2	κατηγορηματικός	κατηγορηματικός	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
3	:	:	PUNCT	PTERM	_	2	punct	_	PunctType=Colo
4	οι	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	πειρατές	πειρατής	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	_
6	επιτίθενται	επιτίθημι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	parataxis	_	_
7	σε	σε	ADP	AsPpSp	_	9	case	_	_
8	ανοιχτή	ανοιχτός	ADJ	AjBa	Case=Acc|Gender=Fem|Number=Sing	9	amod	_	_
9	θάλασσα	θάλασσα	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	_
10	,	,	PUNCT	PUNCT	_	6	punct	_	PunctType=Comm
11	ποτέ	ποτέ	ADV	AdBa	PronType=Neg	6	conj	_	_
12	σε	σε	ADP	AsPpSp	_	13	case	_	_
13	λιμάνια	λιμάνι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	11	orphan	_	SpaceAfter=No
14	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


