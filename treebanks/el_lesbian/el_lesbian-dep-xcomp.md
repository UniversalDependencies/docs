---
layout: base
title:  'Statistics of xcomp in UD_Greek-Lesbian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Lesbian: Relations: `xcomp`

This relation is universal.

33 nodes (1%) are attached to their parents as `xcomp`.

29 instances of `xcomp` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.42424242424242.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt> (21; 64% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-NOUN.html">NOUN</a></tt> (8; 24% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-ADJ.html">ADJ</a></tt> (4; 12% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Γι	η	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	CorrectForm=Γη|MGloss=euphonic-the|MSeg=Γ-η
2	Μάρτς	Μάρτς	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	κοντολόγα	κουντουλουγώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	νά	να	SCONJ	_	Typo=Yes	5	mark	_	CorrectForm=να
5	βγει	βγαίνου	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	xcomp	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Τουν	ιγώ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	πήγι	πγαίνου	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	σουρτσ’	σούρτσ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing|Typo=Yes	2	xcomp	_	CorrectForm=σούρτσ’
4	τσι	τσι	CCONJ	_	_	6	cc	_	_
5	δε	δεν	PART	_	Polarity=Neg	6	advmod	_	_
6	μπρόφτινι	προυφταίνου	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
7	να	να	SCONJ	_	_	8	mark	_	_
8	πάγ’	πγαίνου	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	6	xcomp	_	_
9	σ	σ	ADP	_	_	11	case	_	_
10	τουν	η	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	απόπατου	απόπατους	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	obl	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	Ζουντανοί	ζουντανός	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	3	xcomp	_	_
2	θα	θα	AUX	_	Tense=Fut	3	aux	_	_
3	π’ληθούμι	πλώ	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Pass	0	root	_	_
4	για	για	ADP	_	ExtPos=SCONJ	6	mark	_	_
5	να	να	SCONJ	_	_	4	fixed	_	_
6	πληρώσουμε	πληρώνου	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	3	advcl	_	_
7	τα	η	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	8	det	_	_
8	καμώματα	κάμουμα	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	6	obj	_	_
9	σ’	μ	PRON	_	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	8	nmod	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


