---
layout: base
title:  'Statistics of expl:impers in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_simonero-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_simonero-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_simonero-dep-expl-pv.html">expl:pv</a></tt>.

1 nodes (0%) are attached to their parents as `expl:impers`.

1 instances of `expl:impers` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `expl:impers`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl:impers	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	O
2	funcție	funcție	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	fixed	_	O
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	1	fixed	_	O
4	dimensiunea	dimensiune	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	obl	_	O
5	cavității	cavitate	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	4	nmod	_	B-ANAT
6	anevrismale	anevrismal	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	I-ANAT
7	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	8	expl:impers	_	O
8	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
9	instala	instala	VERB	Vmnp	Tense=Pres|VerbForm=Inf	8	ccomp	_	O
10	diskinezia	diskinezie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	nsubj:pass	_	B-DISO
11	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	O
12	formare	formare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	10	nmod	_	O
13	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	O
14	trombi	tromb	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	12	nmod	_	B-DISO
15	parietali	parietal	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	14	amod	_	I-DISO
16	,	,	PUNCT	COMMA	_	18	punct	_	O
17	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	18	nsubj	_	O
18	acționează	acționa	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	10	acl	_	O
19	concomitent	concomitent	ADV	Rgp	Degree=Pos	18	advmod	_	O
20	ca	ca	ADV	Rc	_	21	advmod	_	O
21	focare	focar	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	18	obl	_	B-DISO
22	emboligene	emboligen	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	21	amod	_	I-DISO
23	.	.	PUNCT	PERIOD	_	8	punct	_	O

~~~


