---
layout: base
title:  'Statistics of parataxis in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `parataxis`

This relation is universal.

606 nodes (0%) are attached to their parents as `parataxis`.

590 instances of `parataxis` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.07920792079208.

The following 13 pairs of parts of speech are connected with `parataxis`: <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (358; 59% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-PUNCT.html">PUNCT</a></tt> (166; 27% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (42; 7% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (17; 3% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	Виното	вино	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	2	nsubj	2:nsubj	_
2	рекло	река	VERB	Vpptcao-sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
3	:	:	PUNCT	punct	_	6	punct	6:punct	_
4	мене	аз	PRON	Ppelas1	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	obj	6:obj	_
5	ме	аз	PRON	Ppetas1	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	expl	6:expl	_
6	мъчат	мъча-(се)	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	2:parataxis	SpaceAfter=No
7	,	,	PUNCT	punct	_	8	punct	8:punct	_
8	ама	ама	CCONJ	Cc	_	11	cc	11:cc	_
9	и	и	CCONJ	Cp	_	11	cc	11:cc	_
10	аз	аз	PRON	Ppe-os1	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	11:nsubj	_
11	мъча	мъча-(се)	VERB	Vpitf-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	6:conj	SpaceAfter=No
12	.	.	PUNCT	punct	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 parataxis	color:blue
1	,	,	PUNCT	punct	_	2	parataxis	2:parataxis	_
2	уточни	уточня	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	първата	пръв	ADJ	Mofsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	5	amod	5:amod	_
4	US	us	ADJ	A	Degree=Pos	5	amod	5:amod	_
5	дама	дама	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	SpaceAfter=No
6	.	.	PUNCT	punct	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 parataxis	color:blue
1	Това	този	PRON	Pde-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	_
2	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	игра	игра	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	9	parataxis	9:parataxis	_
4	на	на	ADP	R	_	5	case	5:case	_
5	котка	котка	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	3	nmod	3:nmod:на	_
6	и	и	CCONJ	Cp	_	7	cc	7:cc	_
7	мишка	мишка	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	5	conj	5:conj	SpaceAfter=No
8	,	,	PUNCT	punct	_	3	punct	3:punct	_
9	твърди	твърдя	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	Божилова	божилова	PROPN	Hfsi	Definite=Ind|Gender=Fem|Number=Sing	9	nsubj	9:nsubj	SpaceAfter=No
11	.	.	PUNCT	punct	_	9	punct	9:punct	_

~~~


