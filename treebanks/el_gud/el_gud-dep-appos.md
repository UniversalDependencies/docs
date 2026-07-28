---
layout: base
title:  'Statistics of appos in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `appos`

This relation is universal.

32 nodes (0%) are attached to their parents as `appos`.

32 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3125.

The following 15 pairs of parts of speech are connected with `appos`: <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (6; 19% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (5; 16% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (5; 16% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (2; 6% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	«	«	PUNCT	_	_	2	punct	_	PunctType=Quot|SpaceAfter=No
2	Μπράβο	μπράβο	INTJ	_	_	9	ccomp	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	PunctType=Comm
4	Ούλι	Ούλι	PROPN	_	_	2	vocative	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	PunctType=Comm
6	παιδί	παιδί	NOUN	_	Case=Voc|Gender=Neut|Number=Sing	4	appos	_	_
7	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod	_	SpaceAfter=No
8	»	»	PUNCT	_	_	6	punct	_	PunctType=Quot
9	ενθουσιάζεται	ενθουσιάζω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
10	η	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	Αδριανή	Αδριανή	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 appos	color:blue
1	Η	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	αγαπημένη	αγαπημένος	VERB	_	Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	3	amod	_	_
3	θέση	θέση	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	13	nsubj	_	_
4	του	ο	DET	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Ζήση	Ζήσης	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	PunctType=Comm
7	δίπλα	δίπλα	ADV	_	_	3	appos	_	_
8	σ	σε	ADP	_	_	10	case	_	_
9	την	ο	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	είσοδο	είσοδος	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	PunctType=Comm
12	είναι	είμαι	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	άδεια	άδειος	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 appos	color:blue
1	Αυτός	αυτός	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	6	nsubj	_	_
2	είναι	είμαι	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
3	ο	ο	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
4	πιο	πιο	ADV	_	Degree=Cmp	5	advmod	_	_
5	αποτελεσματικός	αποτελεσματικός	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	6	amod	_	_
6	τρόπος	τρόπος	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
7	διαφυγής	διαφυγή	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	PunctType=Comm
9	μετά	μετά	ADV	_	_	6	advmod	_	_
10	από	από	ADP	_	_	12	case	_	_
11	τέτοιο	τέτοιος	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	12	det	_	_
12	έγκλημα	έγκλημα	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	9	obl	_	SpaceAfter=No
13	:	:	PUNCT	_	_	15	punct	_	PunctType=Colo
14	το	ο	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	15	det	_	_
15	μηχανάκι	μηχανάκι	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	appos	_	SpaceAfter=No
16	.	.	PUNCT	_	_	6	punct	_	PunctType=Peri

~~~


