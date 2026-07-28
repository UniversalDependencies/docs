---
layout: base
title:  'Statistics of csubj in UD_Greek-Lesbian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Lesbian: Relations: `csubj`

This relation is universal.

18 nodes (0%) are attached to their parents as `csubj`.

18 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.27777777777778.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt> (14; 78% instances), <tt><a href="el_lesbian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-DET.html">DET</a></tt> (1; 6% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-SCONJ.html">SCONJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Έπριπι	πρέπ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	να	να	SCONJ	_	_	3	mark	_	_
3	παν	πγαίνου	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	1	csubj	_	_
4	να	να	SCONJ	_	_	5	mark	_	_
5	μαγειρέψιν	μαγειρεύγου	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	3	advcl	_	_
6	κουμάτ	κουμμάτ	ADV	_	Typo=Yes	5	advmod	_	CorrectForm=κουμμάτ
7	φαγί	φαγί	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	5	obj	_	_
8	λαδουμένου	λαδουμένους	VERB	_	Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	_	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	Γω	ιγώ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs|Typo=Yes	2	nsubj	_	_
2	λέγου	λέγου	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	πους	πους	SCONJ	_	_	6	mark	_	_
4	δεν	δεν	PART	_	Polarity=Neg	6	advmod	_	_
5	ένι	είμι	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
6	σουστό	σουστός	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	2	ccomp	_	_
7	να	να	SCONJ	_	_	8	mark	_	_
8	γλιντούμι	γλιντώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	csubj	_	_
9	μι	μι	ADP	_	_	11	case	_	_
10	τουν	η	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	καημό	καημός	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	obl	_	_
12	τ’	η	DET	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	αλλουνού	άλλους	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Int	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 24 csubj	color:blue
1	Από	απού	ADP	_	_	2	case	_	_
2	μωρό	μουρό	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	4	obl	_	_
3	χρόνια	χρόνους	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	4	obl	_	_
4	φορούσα	φουρώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	μαύρα	μαύρους	ADJ	_	Case=Acc|Gender=Neut|Number=Plur	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	_	PunctType=Comm	7	punct	_	_
7	έπρεπε	πρέπ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	_
8	να	να	SCONJ	_	_	9	mark	_	_
9	φουρώ	φουρώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	csubj	_	_
10	τσαι	τσι	CCONJ	_	_	12	cc	_	_
11	το	η	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	12	det	_	_
12	βρατσί	βρατσί	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	9	obj	_	SpaceAfter=No
13	,	,	PUNCT	_	PunctType=Comm	15	punct	_	_
14	του	ιγώ	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	15	obj	_	_
15	λέγαμι	λέγου	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	_	_
16	‘μείς	ιγώ	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	SpaceAfter=No
17	,	,	PUNCT	_	PunctType=Comm	21	punct	_	_
18	τσαι	τσι	CCONJ	_	_	21	cc	_	_
19	το	η	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	20	det	_	_
20	βρατσί	βρατσί	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	21	dislocated	_	_
21	έπρεπε	πρέπ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	_	_
22	να	να	SCONJ	_	_	24	mark	_	_
23	είναι	είμι	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	_
24	μαύρο	μαύρους	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	21	csubj	_	SpaceAfter=No
25	.	.	PUNCT	_	PunctType=Peri	4	punct	_	_

~~~


