---
layout: base
title:  'Statistics of csubj in UD_Greek-Lesbian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Lesbian: Relations: `csubj`

This relation is universal.

5 nodes (0%) are attached to their parents as `csubj`.

5 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt> (4; 80% instances), <tt><a href="el_lesbian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt> (1; 20% instances).


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
8	λαδουμένου	λαδουμένους	VERB	_	Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	7	amod	_	_
9	.	.	PUNCT	_	_	1	punct	_	_

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
5	ένι	είμι	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	6	cop	_	_
6	σουστό	σουστός	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	2	ccomp	_	_
7	να	να	SCONJ	_	_	8	mark	_	_
8	γλιντούμι	γλιντώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	csubj	_	_
9	μι	μι	ADP	_	_	11	case	_	_
10	τουν	η	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	καημό	καημός	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	obl	_	_
12	τ’	η	DET	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	αλλουνού	άλλους	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Int	11	nmod	_	_
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


