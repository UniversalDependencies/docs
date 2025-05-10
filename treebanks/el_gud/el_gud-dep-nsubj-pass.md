---
layout: base
title:  'Statistics of nsubj:pass in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="el_gud-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="el_gud-dep-nsubj-outer.html">nsubj:outer</a></tt>.

65 nodes (0%) are attached to their parents as `nsubj:pass`.

39 instances of `nsubj:pass` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (40; 62% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (11; 17% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (8; 12% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (5; 8% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	κατάνυξη	κατάνυξη	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	_	_
3	περιορίζεται	περιορίζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	εντός	εντός	ADP	AdBa	_	6	case	_	_
5	της	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	εκκλησίας	εκκλησία	NOUN	NoCm	Case=Gen|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	Αν	αν	SCONJ	CjSb	_	4	mark	_	_
2	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Αδριανή	Αδριανή	PROPN	NoPr	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	_	_
4	απογοητεύτηκε	απογοητεύω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	11	advcl	_	_
5	από	από	ADP	AsPpSp	_	7	case	_	_
6	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	είδηση	είδηση	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	4	obl:agent	_	_
8	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
9	δεν	δεν	PART	PtNg	Polarity=Neg	11	advmod	_	_
10	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
11	δείχνει	δείχνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	_	11	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	«	«	PUNCT	OPUNCT	_	3	punct	_	PunctType=Quot
2	Αυτό	εγώ	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	3	nsubj:pass	_	_
3	γίνεται	γίνομαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	δυο	δύο	NUM	NmCd	Case=Acc|Gender=Fem|Number=Plur|NumType=Card	7	nummod	_	_
5	με	με	ADP	AsPpSp	_	7	case	_	_
6	τρεις	τρεις	NUM	NmCd	Case=Acc|Gender=Fem|Number=Plur|NumType=Card	7	nummod	_	_
7	φορές	φορά	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Plur	3	obl	_	_
8	τη	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	μέρα	μέρα	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	7	nmod	_	_
10	»	»	PUNCT	CPUNCT	_	3	punct	_	PunctType=Quot|SpaceAfter=No
11	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


