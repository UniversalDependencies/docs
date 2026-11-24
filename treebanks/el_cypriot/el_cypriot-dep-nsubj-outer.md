---
layout: base
title:  'Statistics of nsubj:outer in UD_Greek-Cypriot'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cypriot: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="el_cypriot-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="el_cypriot-dep-nsubj-pass.html">nsubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:outer`.

4 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.75.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="el_cypriot-pos-DET.html">DET</a></tt>-<tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-NUM.html">NUM</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:outer	color:blue
1	Ε	ε	INTJ	_	_	3	discourse	_	_
2	η	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	αλήθκεια	αλήθκεια	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	nsubj:outer	_	_
4	εν	εν	PART	_	Polarity=Neg	6	advmod	_	_
5	τον	εγώ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
6	πιερώννω	πιερώννω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	εγώ	εγώ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
8	τον	ο	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	λοαρκασμόν	λοαρκασμός	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
10	του	ο	DET	_	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	11	det	_	_
11	κινητού	κινητόν	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	9	nmod	_	_
12	,	,	PUNCT	_	_	13	punct	_	_
13	πιερώννουμεν	πιερώννω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
14	τον	εγώ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
15	οικογενειακώς	οικογενειακώς	ADV	_	_	13	advmod	_	_
16	,	,	PUNCT	_	_	20	punct	_	_
17	τζ̆αι	τζ̆αι	CCONJ	_	_	20	cc	_	_
18	εν	εν	PART	_	Polarity=Neg	20	advmod	_	_
19	είμαι	είμαι	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	20	cop	_	_
20	σίουρη	σίουρος	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	6	conj	_	_
21	πώς	πώς	ADV	_	PronType=Int	24	advmod	_	_
22	ακριβώς	ακριβώς	ADV	_	_	24	advmod	_	_
23	τον	εγώ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	obj	_	_
24	πιερώννουμεν	πιερώννω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	20	ccomp	_	_
25	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 13 nsubj:outer	color:blue
1	Έσ̆ει	έχω	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	έναν	ένας	DET	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	μιτσήν	μιτσής	ADJ	_	Case=Acc|Gender=Masc|Number=Sing	1	obj	_	_
4	που	που	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	5	obl	_	_
5	εκάμναμεν	κάμνω	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
6	παρέαν	παρέα	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
7	σ	σε	ADP	_	_	9	case	_	_
8	το	ο	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
9	δημοτικόν	δημοτικόν	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	5	obl	_	_
10	,	,	PUNCT	_	_	5	punct	_	_
11	που	που	SCONJ	_	_	20	mark	_	_
12	ο	ο	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	λόγος	λόγος	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	20	nsubj:outer	_	_
14	που	που	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	15	obl	_	_
15	εκάμναμεν	κάμνω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl:relcl	_	_
16	παρέαν	παρέα	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	15	obj	_	_
17	ήταν	είμαι	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	20	cop	_	_
18	που	που	ADP	_	_	20	case	_	_
19	τους	ο	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
20	λλίους	λλίος	DET	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Ind	3	advcl	_	_
21	που	που	PRON	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Rel	23	obl	_	_
22	του	εγώ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	23	expl	_	_
23	αρέσκασιν	αρέσκω	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	acl:relcl	_	_
24	τα	ο	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	25	det	_	_
25	Pokemon	Pokemon	X	_	Foreign=Yes	23	nsubj	_	_
26	τζ̆αι	τζ̆αι	CCONJ	_	_	28	cc	_	_
27	ο	ο	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	_	_
28	Super	Super	X	_	Foreign=Yes	25	conj	_	_
29	Mario	Mario	X	_	Foreign=Yes	28	flat	_	_
30	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 12 nsubj:outer	color:blue
1	Ξέρω	ξέρω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	,	PUNCT	_	_	3	punct	_	_
3	ακούεται	ακούω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	parataxis	_	_
4	φαλλοκρατικόν	φαλλοκρατικός	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	3	xcomp	_	_
5	τζ̆αι	τζ̆αι	CCONJ	_	Polarity=Neg	6	cc	_	_
6	σεξιστικόν	σεξιστικός	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	4	conj	_	_
7	τούτον	τούτος	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj:pass	_	_
8	που	που	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	9	obj	_	_
9	λαλώ	λαλώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	_	_
10	,	,	PUNCT	_	_	20	punct	_	_
11	αλλά	αλλά	CCONJ	_	_	20	cc	_	_
12	ένας	ένας	NUM	_	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	20	nsubj:outer	_	_
13	που	που	ADP	_	_	15	case	_	_
14	τους	ο	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
15	ρόλους	ρόλος	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	12	nmod	_	_
16	του	ο	DET	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	άντρα	άντρας	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
18	είναι	είμαι	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
19	να	να	SCONJ	_	_	20	mark	_	_
20	προνοούν	προνοώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
21	για	για	ADP	_	_	23	case	_	_
22	το	ο	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	23	det	_	_
23	σπίτιν	σπίτιν	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	20	obl	_	_
24	τους	εγώ	PRON	_	Case=Gen|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	23	nmod	_	_
25	,	,	PUNCT	_	_	28	punct	_	_
26	για	για	ADP	_	_	28	case	_	_
27	την	ο	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	28	det	_	_
28	οικογένειαν	οικογένεια	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	23	conj	_	_
29	τους	εγώ	PRON	_	Case=Gen|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	28	nmod	_	_
30	.	.	PUNCT	_	_	3	punct	_	_

~~~


