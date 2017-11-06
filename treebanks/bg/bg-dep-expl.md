---
layout: base
title:  'Statistics of expl in UD_Bulgarian'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian: Relations: `expl`

This relation is universal.

3380 nodes (2%) are attached to their parents as `expl`.

2917 instances of `expl` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05207100591716.

The following 8 pairs of parts of speech are connected with `expl`: <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (3285; 97% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (61; 2% instances), <tt><a href="bg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (17; 1% instances), <tt><a href="bg-pos-ADV.html">ADV</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (12; 0% instances), <tt><a href="bg-pos-DET.html">DET</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="bg-pos-PART.html">PART</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bg-pos-PRON.html">PRON</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	Щом	щом	SCONJ	Cs	_	3	mark	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	_	_
3	наям	наям-(се)	VERB	Vpptf-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	3	punct	_	_
5	ставам	ставам	VERB	Vpiif-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 expl	color:blue
1	Той	аз	PRON	Ppe-os3m	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	гледаше	гледам	VERB	Vpitf-m3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
3	към	към	ADP	R	_	8	case	_	_
4	бясно	бясно	ADV	Dm	Degree=Pos	5	advmod	_	_
5	въртящия	въртя-(се)	ADJ	Vpitcar-smh	Aspect=Imp|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	8	amod	_	_
6	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	5	expl	_	_
7	цифров	цифров	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	брояч	брояч	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	2	iobj	_	_
9	на	на	ADP	R	_	10	case	_	_
10	годините	година	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 expl	color:blue
1	Ако	ако	SCONJ	Cs	_	2	mark	_	_
2	мисли	мисля	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	6	punct	_	_
4	че	че	SCONJ	Cs	_	6	mark	_	_
5	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	най-добрият	добър	ADJ	Amsf	Definite=Def|Degree=Sup|Gender=Masc|Number=Sing	2	ccomp	_	SpaceAfter=No
7	,	,	PUNCT	punct	_	2	punct	_	_
8	това	този	PRON	Pde-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	12	nsubj	_	_
9	си	се	PRON	Ppxtd	Case=Dat|PronType=Prs|Reflex=Yes	12	expl	_	_
10	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
11	негов	мой	DET	Psol-s3mim	Definite=Ind|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	_
12	проблем	проблем	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	12	punct	_	_

~~~


