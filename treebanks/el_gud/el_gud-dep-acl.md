---
layout: base
title:  'Statistics of acl in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="el_gud-dep-acl-relcl.html">acl:relcl</a></tt>.

58 nodes (0%) are attached to their parents as `acl`.

57 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8448275862069.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (42; 72% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (5; 9% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	«	«	PUNCT	OPUNCT	_	3	punct	_	PunctType=Quot
2	Δεν	δεν	PART	PtNg	Polarity=Neg	3	advmod	_	_
3	είχα	έχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	14	ccomp	_	_
4	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	κουράγιο	κουράγιο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	3	obj	_	_
6	να	να	SCONJ	CjSb	_	9	mark	_	_
7	σου	εγώ	PRON	PnPe	Case=Gen|Gender=Fem|Number=Sing|Person=2|PronType=Prs	9	iobj	_	_
8	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
9	πω	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	5	acl	_	_
10	μόνος	μόνος	DET	AjBa	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	9	advcl	_	_
11	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	10	nmod	_	_
12	»	»	PUNCT	CPUNCT	_	3	punct	_	PunctType=Quot
13	της	εγώ	PRON	PnPe	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	14	iobj	_	_
14	εξηγώ	εξηγώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
15	.	.	PUNCT	PTERMP	_	14	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 17 acl	color:blue
1	Μπαίνω	μπαίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	σ	σε	ADP	AsPpSp	_	4	case	_	_
3	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	γραφείο	γραφείο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	1	obl	_	_
5	μου	μου	PRON	PnPo	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod	_	_
6	με	με	ADP	AsPpSp	_	9	case	_	_
7	τη	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
8	δυσάρεστη	δυσάρεστος	ADJ	AjBa	Case=Acc|Gender=Fem|Number=Sing	9	amod	_	_
9	αίσθηση	αίσθηση	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	1	obl	_	_
10	ότι	ότι	SCONJ	CjSb	_	17	mark	_	_
11	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	δολοφονία	δολοφονία	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	17	nsubj	_	_
13	του	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	Σωτηρόπουλου	Σωτηρόπουλος	PROPN	NoPr	Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	_
15	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	17	cop	_	mwe=1:VID
16	ένα	ένας	NUM	NmCd	Case=Nom|Gender=Neut|Number=Sing|NumType=Card	17	nummod	_	mwe=1
17	βήμα	βήμα	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	9	acl	_	mwe=1
18	από	από	ADP	AsPpSp	_	20	case	_	mwe=1
19	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	20	det	_	_
20	αδιέξοδο	αδιέξοδο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	17	obl	_	SpaceAfter=No
21	.	.	PUNCT	PTERMP	_	1	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Ένα	ένας	DET	AtId	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	3	nsubj	_	_
2	είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	cop	_	_
3	βέβαιο	βέβαιος	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
4	:	:	PUNCT	PTERM	_	3	punct	_	PunctType=Colo
5	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Σωτηρόπουλος	Σωτηρόπουλος	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	φοβόταν	φοβούμαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	3	acl	_	SpaceAfter=No
8	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


