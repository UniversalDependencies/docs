---
layout: base
title:  'Statistics of advcl:relcl in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="el_gud-dep-advcl.html">advcl</a></tt>.

15 nodes (0%) are attached to their parents as `advcl:relcl`.

15 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.06666666666667.

The following 3 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (12; 80% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl:relcl	color:blue
1	Εκεί	εκεί	ADV	_	_	0	root	_	_
2	που	που	ADV	_	PronType=Rel	3	advmod	_	_
3	προκύπτουν	προκύπτω	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl:relcl	_	_
4	περισσότερα	πολύς	DET	_	Case=Nom|Degree=Cmp|Gender=Neut|Number=Plur|PronType=Ind	5	det	_	_
5	ερωτήματα	ερώτημα	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	3	nsubj	_	_
6	είναι	είμαι	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	cop	_	_
7	ο	ο	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	πυροβολισμός	πυροβολισμός	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 advcl:relcl	color:blue
1	Τώρα	τώρα	ADV	_	PronType=Dem	13	advmod	_	_
2	που	που	ADV	_	PronType=Rel	7	advmod	_	_
3	η	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	επένδυση	επένδυση	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
5	είναι	είμαι	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	7	cop	_	_
6	πρωτίστως	πρώτιστα	ADV	_	_	7	advmod	_	_
7	χρήμα	χρήμα	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	1	advcl:relcl	_	_
8	,	,	PUNCT	_	_	1	punct	_	PunctType=Comm
9	πολλές	πολύς	DET	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Ind	10	det	_	_
10	φορές	φορά	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	13	obl	_	_
11	δε	δεν	PART	_	Polarity=Neg	13	advmod	_	_
12	μας	εγώ	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	13	obj	_	_
13	ενδιαφέρει	ενδιαφέρω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
14	ποια	ποιος	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Int	17	nsubj	_	_
15	είναι	είμαι	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	17	cop	_	_
16	η	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	πηγή	πηγή	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	13	csubj	_	_
18	της	εγώ	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	17	nmod	_	SpaceAfter=No
19	.	.	PUNCT	_	_	13	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advcl:relcl	color:blue
1	«	«	PUNCT	_	_	2	punct	_	PunctType=Quot
2	Συγγνώμη	συγγνώμη	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	0	root	_	_
3	που	που	SCONJ	_	_	4	mark	_	_
4	ρωτάω	ρωτώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl:relcl	_	_
5	,	,	PUNCT	_	_	10	punct	_	PunctType=Comm
6	αλλά	αλλά	CCONJ	_	_	10	cc	_	_
7	γιατί	γιατί	ADV	_	PronType=Int	10	advmod	_	_
8	δεν	δεν	PART	_	Polarity=Neg	10	advmod	_	_
9	το	εγώ	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	obj	_	_
10	κάνατε	κάνω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
11	τόσα	τόσος	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	12	det	_	_
12	χρόνια	χρόνος	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	10	obl	_	_
13	;	;	PUNCT	_	_	2	punct	_	PunctType=Qest
14	»	»	PUNCT	_	_	2	punct	_	PunctType=Quot

~~~


