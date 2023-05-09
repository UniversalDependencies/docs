---
layout: base
title:  'Statistics of ccomp in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `ccomp`

This relation is universal.

408 nodes (2%) are attached to their parents as `ccomp`.

397 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.56862745098039.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (361; 88% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (24; 6% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (9; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	“	“	PUNCT	OPUNCT	PunctType=Quot	2	punct	_	_
2	Θέλετε	θέλω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	SCONJ	CjSb	_	4	mark	_	_
4	πάθετε	παθαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	2	ccomp	_	_
5	αυτό	αυτός	DET	PnDm	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	_
6	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	7	obj	_	_
7	έπαθε	παθαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
8	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	εφοπλιστής	εφοπλιστής	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
10	;	;	PUNCT	PTERM	PunctType=Qest	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 ccomp	color:blue
1	Με	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obj	_	_
2	έχει	έχω	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
3	δει	βλέπω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
4	και	και	CCONJ	CjCo	_	5	cc	_	_
5	εκείνος	εκείνος	DET	PnDm	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	nsubj	_	_
6	και	και	CCONJ	CjCo	_	8	cc	_	_
7	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	8	iobj	_	_
8	κάνει	κάνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
9	νόημα	νόημα	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	8	obj	_	_
10	με	με	ADP	AsPpSp	_	12	case	_	_
11	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	12	det	_	_
12	χέρι	χέρι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	8	obl	_	_
13	του	μου	PRON	PnPo	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	PTERMP	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 ccomp	color:blue
1	Είχαν	έχω	AUX	VbMn	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	χωρίσει	χωρίζω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	1	ccomp	_	_
3	από	από	ADP	AsPpSp	_	4	case	_	_
4	χρόνια	χρόνος	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	2	obl	_	_
5	,	,	PUNCT	PUNCT	PunctType=Comm	7	punct	_	_
6	αλλά	αλλά	CCONJ	CjCo	_	7	cc	_	_
7	διατηρούσαν	διατηρώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
8	πολύ	πολύ	ADV	AdBa	_	9	advmod	_	_
9	φιλική	φιλικός	ADJ	AjBa	Case=Acc|Gender=Fem|Number=Sing	10	amod	_	_
10	σχέση	σχέση	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
11	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


