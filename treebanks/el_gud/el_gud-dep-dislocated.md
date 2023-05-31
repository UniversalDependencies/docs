---
layout: base
title:  'Statistics of dislocated in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `dislocated`

This relation is universal.

6 nodes (0%) are attached to their parents as `dislocated`.

6 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.5.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (4; 67% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (1; 17% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated	color:blue
1	Αυτό	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	dislocated	_	_
2	πρέπει	πρέπει	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	SCONJ	PtSj	_	4	mark	_	_
4	καταλάβεις	καταλαβαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	2	csubj	_	SpaceAfter=No
5	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 40 32 dislocated	color:blue
1	Για	για	ADP	AsPpSp	_	4	case	_	_
2	καλή	καλός	ADJ	AjBa	Case=Acc|Gender=Fem|Number=Sing	4	amod	_	_
3	μου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod	_	_
4	τύχη	τύχη	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	_
5	,	,	PUNCT	PUNCT	PunctType=Comm	7	punct	_	_
6	με	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	expl	_	_
7	παίρνει	παίρνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	σ	σε	ADP	AsPpSp	_	10	case	_	_
9	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	10	det	_	_
10	ενδιάμεσο	ενδιάμεσος	ADJ	AjBa	Case=Acc|Gender=Neut|Number=Sing	7	obl	_	_
11	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Δημητριού	Δημητρίου	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
13	,	,	PUNCT	PUNCT	PunctType=Comm	17	punct	_	_
14	για	για	ADP	AsPpSp	_	17	mark	_	_
15	να	να	SCONJ	PtSj	_	14	fixed	_	_
16	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	17	iobj	_	_
17	πει	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	7	advcl	_	_
18	ότι	ότι	SCONJ	CjSb	_	29	mark	_	_
19	,	,	PUNCT	PUNCT	PunctType=Comm	20	punct	_	_
20	σύμφωνα	σύμφωνα	ADV	AdBa	_	29	advmod	_	_
21	με	με	ADP	AsPpSp	_	23	case	_	_
22	τον	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	κλειδαρά	κλειδαράς	NOUN	NoCm	Case=Acc|Gender=Masc|Number=Sing	20	obl	_	_
24	,	,	PUNCT	PUNCT	PunctType=Comm	20	punct	_	_
25	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	26	det	_	_
26	σύστημα	σύστημα	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	28	nsubj	_	_
27	ασφαλείας	ασφάλεια	NOUN	NoCm	Case=Gen|Gender=Fem|Number=Sing	26	nmod	_	_
28	έχει	έχω	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	29	advcl	_	_
29	παραβιαστεί	παραβιάζω	VERB	VbMn	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	17	ccomp	_	_
30	,	,	PUNCT	PUNCT	PunctType=Comm	37	punct	_	_
31	αλλά	αλλά	CCONJ	CjCo	_	37	cc	_	_
32	αυτός	αυτός	DET	PnDm	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	40	dislocated	_	_
33	που	που	PRON	PnRe	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	35	nsubj	_	_
34	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	35	obj	_	_
35	έκανε	κάνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	32	acl:relcl	_	_
36	θα	θα	AUX	PtFu	Tense=Fut	37	aux	_	_
37	πρέπει	πρέπει	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	29	conj	_	_
38	να	να	SCONJ	PtSj	_	40	mark	_	_
39	ήταν	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	40	cop	_	_
40	μάστορας	μάστορας	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	37	csubj	_	_
41	,	,	PUNCT	PUNCT	PunctType=Comm	47	punct	_	_
42	γιατί	γιατί	SCONJ	CjSb	_	47	mark	_	_
43	εκ	εκ	ADP	AsPpSp	_	45	case	_	_
44	πρώτης	πρώτος	ADJ	NmOd	Case=Gen|Gender=Fem|Number=Sing|NumType=Ord	45	amod	_	_
45	όψεως	όψη	NOUN	NoCm	Case=Gen|Gender=Fem|Number=Sing	47	obl	_	_
46	δε	δεν	PART	PtNg	Polarity=Neg	47	advmod	_	_
47	φαίνεται	φαίνομαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	37	advcl	_	_
48	τίποτα	τίποτα	DET	PnId	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	47	nsubj:pass	_	SpaceAfter=No
49	.	.	PUNCT	PTERMP	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 27 dislocated	color:blue
1	Η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	μόνη	μόνος	DET	AjBa	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	εξήγηση	εξήγηση	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	_
4	που	που	PRON	PnRe	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	7	obj	_	_
5	μπορώ	μπορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
6	να	να	SCONJ	PtSj	_	7	mark	_	_
7	δώσω	δίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	5	xcomp	_	_
8	είναι	είμαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
9	ότι	ότι	SCONJ	CjSb	_	13	mark	_	_
10	οι	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	_	_
11	δυο	δύο	NUM	NmCd	Case=Nom|Gender=Fem|Number=Plur|NumType=Card	12	nmod	_	_
12	ομολογίες	ομολογία	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Plur	13	nsubj	_	_
13	κλείνουν	κλείνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp	_	_
14	και	και	CCONJ	CjCo	_	17	cc	_	_
15	τις	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	_
16	αντίστοιχες	αντίστοιχος	ADJ	AjBa	Case=Acc|Gender=Fem|Number=Plur	17	amod	_	_
17	υποθέσεις	υπόθεση	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Plur	13	obj	_	_
18	και	και	CCONJ	CjCo	_	20	cc	_	_
19	μας	εγώ	PRON	PnPe	Case=Acc|Number=Plur|Person=1|PronType=Prs	20	obj	_	_
20	αποτρέπουν	αποτρέπω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	conj	_	_
21	να	να	SCONJ	PtSj	_	22	mark	_	_
22	ψάξουμε	ψάχνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	20	xcomp	_	_
23	για	για	ADP	AsPpSp	_	25	case	_	_
24	άλλα	άλλος	DET	PnId	Case=Acc|Gender=Neut|Number=Plur|PronType=Ind	25	det	_	_
25	κίνητρα	κίνητρο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	22	obl	_	_
26	,	,	PUNCT	PUNCT	PunctType=Comm	29	punct	_	_
27	που	που	PRON	PnRe	Case=Nom|Gender=Neut|Number=Plur|PronType=Rel	32	dislocated	_	_
28	κάποιοι	κάποιος	DET	PnId	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	29	nsubj	_	_
29	έχουν	έχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	25	acl:relcl	_	_
30	συμφέρον	συμφέρον	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	29	obj	_	_
31	να	να	SCONJ	PtSj	_	32	mark	_	_
32	παραμείνουν	παραμένω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	30	acl	_	_
33	σ	σε	ADP	AsPpSp	_	35	case	_	_
34	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	35	det	_	_
35	σκοτάδι	σκοτάδι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	32	obl	_	SpaceAfter=No
36	.	.	PUNCT	PTERMP	PunctType=Peri	8	punct	_	_

~~~


