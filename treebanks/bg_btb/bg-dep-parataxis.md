---
layout: base
title:  'Statistics of parataxis in UD_Bulgarian'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian: Relations: `parataxis`

This relation is universal.

606 nodes (0%) are attached to their parents as `parataxis`.

590 instances of `parataxis` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.07920792079208.

The following 13 pairs of parts of speech are connected with `parataxis`: <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-VERB.html">VERB</a></tt> (358; 59% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (166; 27% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (42; 7% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-ADJ.html">ADJ</a></tt> (17; 3% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="bg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	Виното	вино	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	2	nsubj	_	_
2	рекло	река	VERB	Vpptcao-sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
3	:	:	PUNCT	punct	_	6	punct	_	_
4	мене	аз	PRON	Ppelas1	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	obj	_	_
5	ме	аз	PRON	Ppetas1	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	expl	_	_
6	мъчат	мъча-(се)	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	punct	_	8	punct	_	_
8	ама	ама	CCONJ	Cc	_	11	cc	_	_
9	и	и	CCONJ	Cp	_	11	cc	_	_
10	аз	аз	PRON	Ppe-os1	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	мъча	мъча-(се)	VERB	Vpitf-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 parataxis	color:blue
1	,	,	PUNCT	punct	_	2	parataxis	_	_
2	уточни	уточня	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	първата	пръв	ADJ	Mofsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	5	amod	_	_
4	US	us	ADJ	A	Degree=Pos	5	amod	_	_
5	дама	дама	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	2	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 parataxis	color:blue
1	Това	този	PRON	Pde-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
2	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	игра	игра	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	9	parataxis	_	_
4	на	на	ADP	R	_	5	case	_	_
5	котка	котка	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	3	nmod	_	_
6	и	и	CCONJ	Cp	_	7	cc	_	_
7	мишка	мишка	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	punct	_	3	punct	_	_
9	твърди	твърдя	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Божилова	божилова	PROPN	Hfsi	Definite=Ind|Gender=Fem|Number=Sing	9	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	9	punct	_	_

~~~


