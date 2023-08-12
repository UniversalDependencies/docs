---
layout: base
title:  'Statistics of iobj in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `iobj`

This relation is universal.

347 nodes (1%) are attached to their parents as `iobj`.

341 instances of `iobj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04899135446686.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (340; 98% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	κατάλαβα	καταλαβαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	6	punct	_	_
4	όταν	όταν	SCONJ	CjSb	_	6	mark	_	_
5	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
6	είπε	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
7	εκείνο	εκείνος	PRON	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	obj	_	_
8	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	10	det	_	_
9	“	“	PUNCT	OPUNCT	PunctType=Quot	10	punct	_	_
10	καλύτερα	καλά	ADV	AdCp	Degree=Cmp	6	advmod	_	_
11	να	να	AUX	PtSj	_	13	aux	_	_
12	μην	μην	PART	PtNg	Polarity=Neg	13	advmod	_	_
13	ξέρεις	ξέρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	_	_
14	”	”	PUNCT	CPUNCT	PunctType=Quot	10	punct	_	SpaceAfter=No
15	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 iobj	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	2	punct	_	_
2	Έχω	έχω	AUX	VbMn	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
3	σκάσει	σκάω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
4	»	»	PUNCT	CPUNCT	PunctType=Quot	3	punct	_	_
5	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	obj	_	_
6	λέει	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
7	,	,	PUNCT	PUNCT	PunctType=Comm	14	punct	_	_
8	και	και	CCONJ	CjCo	_	14	cc	_	_
9	σαν	σαν	ADV	AdBa	_	13	mark	_	_
10	να	να	SCONJ	PtSj	_	13	mark	_	_
11	μην	μην	PART	PtNg	Polarity=Neg	13	advmod	_	_
12	του	εγώ	PRON	PnPe	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	iobj	_	_
13	έχει	έχω	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	advcl	_	_
14	φτάσει	φτάνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	20	advcl	_	_
15	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
16	μια	ένας	DET	AtId	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	φορά	φορά	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	14	nsubj	_	_
18	,	,	PUNCT	PUNCT	PunctType=Comm	20	punct	_	_
19	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	20	obj	_	_
20	επαναλαμβάνει	επαναλαμβάνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
21	:	:	PUNCT	PTERM	PunctType=Colo	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 18 iobj	color:blue
1	Η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	οικογένεια	οικογένεια	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	χαίρεται	χαίρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	,	,	PUNCT	PUNCT	PunctType=Comm	6	punct	_	_
5	γιατί	γιατί	SCONJ	CjSb	_	6	mark	_	_
6	πιστεύει	πιστεύω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	_
7	ότι	ότι	SCONJ	CjSb	_	11	mark	_	_
8	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	άρρωστός	άρρωστος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
10	της	μου	PRON	PnPo	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	9	nmod	_	_
11	πήρε	παίρνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	ccomp	_	_
12	τα	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	13	det	_	_
13	πάνω	πάνω	ADV	AdBa	_	11	advmod	_	_
14	του	μου	PRON	PnPo	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	13	nmod	_	_
15	,	,	PUNCT	PUNCT	PunctType=Comm	20	punct	_	_
16	αλλά	αλλά	CCONJ	CjCo	_	20	cc	_	_
17	αυτός	αυτός	DET	PnDm	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	20	nsubj	_	_
18	σε	σε	ADP	PnPe	_	20	iobj	_	_
19	λίγο	λίγο	ADV	AdBa	_	20	advmod	_	_
20	παραδίδει	παραδίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
21	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	22	det	_	_
22	πνεύμα	πνεύμα	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	20	obj	_	SpaceAfter=No
23	.	.	PUNCT	PTERMP	PunctType=Peri	3	punct	_	_

~~~


