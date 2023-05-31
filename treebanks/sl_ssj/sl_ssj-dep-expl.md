---
layout: base
title:  'Statistics of expl in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `expl`

This relation is universal.

3708 nodes (1%) are attached to their parents as `expl`.

3386 instances of `expl` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.86272923408846.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (3683; 99% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (22; 1% instances), <tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl	color:blue
1	Si	biti	VERB	Va-r2s-n	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	NER=O|SpaceAfter=No
2	,	,	PUNCT	Z	_	3	punct	_	NER=O
3	bivaš	bivati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	parataxis	_	NER=O
4	tako	tako	ADV	Rgp	Degree=Pos	8	mark	_	NER=O|SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	NER=O
6	da	da	SCONJ	Cs	_	4	fixed	_	NER=O
7	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	8	expl	_	NER=O
8	razlikuješ	razlikovati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	advcl	_	NER=O
9	od	od	ADP	Sg	Case=Gen	10	case	_	NER=O
10	drugega	drug	ADJ	Mlpmsg	Case=Gen|Gender=Masc|Number=Sing	8	obl	_	NER=O|SpaceAfter=No
11	,	,	PUNCT	Z	_	13	punct	_	NER=O
12	od	od	ADP	Sg	Case=Gen	13	case	_	NER=O
13	drugih	drug	ADJ	Mlpmpg	Case=Gen|Gender=Masc|Number=Plur	8	obl	_	NER=O|SpaceAfter=No
14	.	.	PUNCT	Z	_	1	punct	_	NER=O

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 expl	color:blue
1	Zdravljenje	zdravljenje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
2	in	in	CCONJ	Cc	_	3	cc	_	_
3	odziv	odziv	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	_
4	na	na	ADP	Sa	Case=Acc	5	case	_	_
5	zdravljenje	zdravljenje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	3	nmod	_	_
6	sta	biti	AUX	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	_
8	tudi	tudi	PART	Q	_	9	advmod	_	_
9	podobna	podoben	ADJ	Agpmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl	color:blue
1	Ali	Ali	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	13	nsubj	_	NER=B-per
2	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	13	expl	_	NER=O
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	aux	_	NER=O|SpaceAfter=No
4	,	,	PUNCT	Z	_	6	punct	_	NER=O
5	ne	ne	PART	Q	Polarity=Neg	6	advmod	_	NER=O
6	meneč	meneč	ADV	Rr	VerbForm=Conv	13	advmod	_	NER=O
7	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	6	expl	_	NER=O
8	za	za	ADP	Sa	Case=Acc	9	case	_	NER=O
9	Vrano	Vrana	PROPN	Npfsa	Case=Acc|Gender=Fem|Number=Sing	6	nmod	_	NER=B-per
10	in	in	CCONJ	Cc	_	11	cc	_	NER=O
11	Daniela	Daniel	PROPN	Npmsay	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	9	conj	_	NER=B-per|SpaceAfter=No
12	,	,	PUNCT	Z	_	6	punct	_	NER=O
13	osredotočila	osredotočiti	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	NER=O
14	na	na	ADP	Sa	Case=Acc	15	case	_	NER=O
15	otroka	otrok	NOUN	Ncmsay	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	13	obl	_	NER=O
16	pred	pred	ADP	Si	Case=Ins	17	case	_	NER=O
17	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs|Reflex=Yes	15	nmod	_	NER=O|SpaceAfter=No
18	.	.	PUNCT	Z	_	13	punct	_	NER=O

~~~


