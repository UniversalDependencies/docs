---
layout: base
title:  'Statistics of cop in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `cop`

This relation is universal.

404 nodes (2%) are attached to their parents as `cop`.

361 instances of `cop` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97277227722772.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (150; 37% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (129; 32% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (54; 13% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (32; 8% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (17; 4% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="el_gud-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	Το	ο	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
2	πρώτο	πρώτος	ADJ	_	Case=Nom|Gender=Neut|Number=Sing|NumType=Ord	3	amod	_	_
3	ερώτημα	ερώτημα	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
4	είναι	είμαι	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	:	:	PUNCT	_	_	3	punct	_	PunctType=Colo
6	το	εγώ	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	λέω	λέω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
8	σ	σε	ADP	_	_	10	case	_	_
9	την	ο	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Αδριανή	Αδριανή	PROPN	_	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	_
11	και	και	CCONJ	_	_	14	cc	_	_
12	πώς	πώς	ADV	_	PronType=Int	14	advmod	_	_
13	το	εγώ	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
14	λέω	λέω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No
15	;	;	PUNCT	_	_	3	punct	_	PunctType=Qest

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	Είναι	είμαι	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	πεντακάθαροι	πεντακάθαρος	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Η	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	σκέψη	σκέψη	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
3	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod	_	_
4	είναι	είμαι	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	κολλημένη	κολλάω	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Conv|Voice=Pass	0	root	_	_
6	σ	σε	ADP	_	_	8	case	_	_
7	τη	ο	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	συζήτησή	συζήτηση	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obl	_	_
9	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	nmod	_	_
10	με	με	ADP	_	_	12	case	_	_
11	τον	ο	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	καθωσπρέπει	καθωσπρέπει	ADV	_	_	8	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	PunctType=Peri

~~~


