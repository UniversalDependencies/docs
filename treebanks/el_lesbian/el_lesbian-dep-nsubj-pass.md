---
layout: base
title:  'Statistics of nsubj:pass in UD_Greek-Lesbian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Lesbian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="el_lesbian-dep-nsubj.html">nsubj</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:pass`.

3 instances of `nsubj:pass` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-PROPN.html">PROPN</a></tt> (2; 40% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-DET.html">DET</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nsubj:pass	color:blue
1	Σιγά	σιγά	ADV	_	ExtPos=ADV	5	advmod	_	_
2	τώρα	τώρα	ADV	_	_	1	advmod	_	_
3	π’	που	SCONJ	_	PronType=Rel	1	fixed	_	_
4	δε	δεν	PART	_	Polarity=Neg	5	advmod	_	_
5	ξέρουμι	ξέρου	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	τίλιγια	τίλιγια	ADV	_	PronType=Int	7	advmod	_	_
7	γ’νόντιν	γίνουμι	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	ccomp	_	_
8	τα	η	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	9	det	_	_
9	μουρά	μουρό	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	7	nsubj:pass	_	_
10	!	!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Γιάνν’ς	Γιάννς	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj:pass	_	_
2	αλείβγιτι	αλείβου	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	απ’	απού	ADP	_	_	5	case	_	_
4	του	η	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	Γιώργ’	Γιώργς	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	2	obl:agent	_	_
6	,	,	PUNCT	_	_	10	punct	_	_
7	γι’	για	ADP	_	_	8	case	_	_
8	αυτό	αυτός	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	obl	_	_
9	δεν	δεν	PART	_	Polarity=Neg	10	advmod	_	_
10	ξικουλλά	ξικουλλώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
11	απί	απί	ADP	_	_	12	case	_	_
12	κουντά	κουντά	ADV	_	_	10	obl	_	_
13	τ’	μ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obl	_	_
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Έγιουτα	έγιουτους	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	2	nsubj:pass	_	_
2	γίνταν	γίνουμι	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	τρεις	τρεις	NUM	_	Case=Acc|Gender=Fem|Number=Plur|NumType=Card	4	nummod	_	_
4	βδουμάδις	βδουμάδα	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	2	obl	_	_
5	πριν	πριν	ADV	_	ExtPos=ADP	8	case	_	_
6	απ’	απού	ADP	_	_	5	fixed	_	_
7	τσ	η	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|PronType=Art|Typo=Yes	8	det	_	CorrectForm=τς
8	απουκριγιές	απουκριγιά	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	2	obl	_	_
9	,	,	PUNCT	_	_	18	punct	_	_
10	έγτιν	έγιουτους	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	12	det	_	_
11	τ	η	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	μέρα	μέρα	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	18	obl	_	_
13	ντ	η	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	τσιριατσή	Τσυριατσή	PROPN	_	Case=Acc|Gender=Fem|Number=Sing|Typo=Yes	12	appos	_	CorrectForm=Τσυριατσή
15	κατά	κατά	ADP	_	_	17	case	_	_
16	του	η	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	σπρινό	σπρινός	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	18	obl	_	_
18	ίβγινι	βγαίνου	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|Typo=Yes|VerbForm=Fin|Voice=Act	2	parataxis	_	CorrectForm=ήβγινι
19	τσι	τσι	CCONJ	_	_	20	cc	_	_
20	καρνάβαλους	καρνάβαλους	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	_
21	έτσι	έτσι	ADV	_	_	23	advmod	_	_
22	πλια	πλια	ADV	_	_	23	advmod	_	_
23	λέγαν	λέγαν	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	_
24	τα	ιγώ	PRON	_	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	23	expl	_	_
25	ούλα	ούλους	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	26	det	_	_
26	όσα	όσους	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Rel	23	obj	_	_
27	γέντα	γίνουμι	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	26	acl:relcl	_	_
28	μες	μέσα	ADP	_	_	30	case	_	_
29	του	η	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	30	det	_	_
30	χουριό	χουριό	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	27	obl	_	_
31	ούλου	ούλους	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Tot	33	det	_	_
32	του	η	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	33	det	_	_
33	χρόνου	χρόνους	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	27	obl	_	_
34	.	.	PUNCT	_	_	2	punct	_	_

~~~


