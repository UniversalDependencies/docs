---
layout: base
title:  'Statistics of dislocated:mod in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `dislocated:mod`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-dislocated.html">dislocated</a></tt>.
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="fr_parisstories-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="fr_parisstories-dep-dislocated-obl.html">dislocated:obl</a></tt>, <tt><a href="fr_parisstories-dep-dislocated-subj.html">dislocated:subj</a></tt>.

14 nodes (0%) are attached to their parents as `dislocated:mod`.

12 instances of `dislocated:mod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 11.7142857142857.

The following 8 pairs of parts of speech are connected with `dislocated:mod`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (7; 50% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 1 dislocated:mod	color:blue
1	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	14	dislocated:mod	_	AlignBegin=106294|AlignEnd=106431|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=106431|AlignEnd=106431
3	dès	dès	ADP	_	_	4	dep:comp	_	AlignBegin=106431|AlignEnd=106569
4	que	que	SCONJ	_	_	10	reparandum	_	AlignBegin=106569|AlignEnd=106706|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	AlignBegin=106706|AlignEnd=106706
6	dès	dès	ADP	_	_	10	mark	_	AlignBegin=106706|AlignEnd=106843
7	qu'	que	SCONJ	_	_	10	mark	_	AlignBegin=106843|AlignEnd=106980|SpaceAfter=No
8	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nsubj	_	AlignBegin=106980|AlignEnd=107118|Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
9	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	10	obj	_	AlignBegin=107118|AlignEnd=107255|Exponence[Person]=Inherent
10	voit	voir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	advcl	_	AlignBegin=107255|AlignEnd=107392|Exponence[Number]=Absent|Exponence[Person]=Absent|SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	AlignBegin=107392|AlignEnd=107392
12	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	expl:subj	_	AlignBegin=107392|AlignEnd=107536|Exponence[Person]=Inherent
13	y	y	PRON	_	Person=3|PronType=Prs	14	expl:comp	_	AlignBegin=107536|AlignEnd=107680|Exponence[Person]=Inherent
14	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=107680|AlignEnd=107824
15	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	16	det	_	AlignBegin=107824|AlignEnd=107968|HasSpokenGender=OnlySingExceptWithLiaison
16	potes	pote	NOUN	_	Number=Plur	14	obj	_	AlignBegin=107968|AlignEnd=108111|Exponence[Number]=Absent|SpaceAfter=No
17	.	.	PUNCT	_	_	14	punct	_	AlignBegin=108111|AlignEnd=108111

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 28 dislocated:mod	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	AlignBegin=120303|AlignEnd=120503|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	AlignBegin=120503|AlignEnd=120702
3	pas	pas	ADV	_	Polarity=Neg	8	advmod	_	AlignBegin=120702|AlignEnd=120901
4	de	de	ADP	_	_	6	case	_	AlignBegin=120901|AlignEnd=121100|wordform=du
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	HasSpokenGender=OnlySingExceptWithLiaison
6	tout	tout	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	AlignBegin=121100|AlignEnd=121299|Exponence[Gender]=Inherent|Exponence[Number]=Absent
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	AlignBegin=121299|AlignEnd=121499|HasSpokenGender=OnlySingExceptWithLiaison
8	même	même	ADJ	_	Gender=Masc|Number=Sing	0	root	_	AlignBegin=121499|AlignEnd=121698|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
9	,	,	PUNCT	_	_	20	punct	_	AlignBegin=121698|AlignEnd=121698
10	parce	parce	ADV	_	ExtPos=SCONJ	20	mark	_	AlignBegin=121698|AlignEnd=121897|Idiom=Yes
11	que	que	SCONJ	_	_	10	fixed	_	AlignBegin=121897|AlignEnd=122096|InIdiom=Yes|SpaceAfter=No
12	,	,	PUNCT	_	_	20	punct	_	AlignBegin=122096|AlignEnd=122096
13	pour	pour	ADP	_	_	15	case	_	AlignBegin=122096|AlignEnd=122295
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	AlignBegin=122295|AlignEnd=122495|HasSpokenGender=OnlySingExceptWithLiaison
15	coup	coup	NOUN	_	Gender=Masc|Number=Sing	20	discourse	_	AlignBegin=122495|AlignEnd=122694|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	_	AlignBegin=122694|AlignEnd=122694
17	euh	euh	INTJ	_	_	20	discourse	_	AlignBegin=122694|AlignEnd=122893|SpaceAfter=No
18	,	,	PUNCT	_	_	17	punct	_	AlignBegin=122893|AlignEnd=122893
19	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	20	nsubj	_	AlignBegin=122893|AlignEnd=123152|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
20	ai	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	advcl	_	AlignBegin=123152|AlignEnd=123411
21	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	AlignBegin=123411|AlignEnd=123670|Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|SpaceAfter=No
22	impression	impression	NOUN	_	Gender=Fem|Number=Sing	20	obj:lvc	_	AlignBegin=123670|AlignEnd=123928|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
23	que	que	SCONJ	_	_	41	mark	_	AlignBegin=123928|AlignEnd=124187|SpaceAfter=No
24	,	,	PUNCT	_	_	41	punct	_	AlignBegin=124187|AlignEnd=124187
25	euh	euh	INTJ	_	_	41	discourse	_	AlignBegin=124187|AlignEnd=124446|SpaceAfter=No
26	,	,	PUNCT	_	_	25	punct	_	AlignBegin=124446|AlignEnd=124446
27	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	28	det	_	AlignBegin=124446|AlignEnd=124705|HasSpokenGender=OnlySingExceptWithLiaison
28	scène	scène	NOUN	_	Gender=Fem|Number=Sing	41	dislocated:mod	_	AlignBegin=124705|AlignEnd=124964|Exponence[Gender]=Inherent|Exponence[Number]=Absent
29	de	de	ADP	_	_	31	case	_	AlignBegin=124964|AlignEnd=125223|wordform=du
30	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	31	det	_	HasSpokenGender=OnlySingExceptWithLiaison
31	hamac	hamac	NOUN	_	Gender=Masc|Number=Sing	28	nmod	_	AlignBegin=125223|AlignEnd=125481|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
32	,	,	PUNCT	_	_	28	punct	_	AlignBegin=125481|AlignEnd=125481
33	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	41	nsubj	_	AlignBegin=125481|AlignEnd=125740|Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
34	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	41	cop	_	AlignBegin=125740|AlignEnd=125999
35	quand	quand	SCONJ	_	ExtPos=ADV	41	advmod	_	AlignBegin=125999|AlignEnd=126258|Idiom=Yes
36	même	même	ADV	_	_	35	fixed	_	AlignBegin=126258|AlignEnd=126517|InIdiom=Yes
37	très	très	ADV	_	_	41	advmod	_	AlignBegin=126517|AlignEnd=126776
38	très	très	ADV	_	_	37	conj	_	AlignBegin=126776|AlignEnd=127034
39	très	très	ADV	_	_	37	conj	_	AlignBegin=127034|AlignEnd=127293
40	très	très	ADV	_	_	37	conj	_	AlignBegin=127293|AlignEnd=127552
41	jeunes	jeune	ADJ	_	Gender=Masc|Number=Sing	22	ccomp	_	AlignBegin=127552|AlignEnd=127811|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
42	.	.	PUNCT	_	_	8	punct	_	AlignBegin=127811|AlignEnd=127811

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 1 dislocated:mod	color:blue
1	ceux	celui	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Dem	20	dislocated:mod	_	Exponence[Person]=Inherent
2	qui	qui	PRON	_	PronType=Rel	4	nsubj	_	_
3	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	dyslexiques	dyslexique	ADJ	_	Gender=Masc|Number=Plur	1	acl:relcl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	ceux	celui	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Dem	1	appos	_	Exponence[Person]=Inherent
7	qui	qui	PRON	_	PronType=Rel	8	nsubj	_	_
8	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
9	besoin	besoin	NOUN	_	Gender=Masc|Number=Sing	8	obj:lvc	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
10	d'	de	ADP	_	_	12	case	_	SpaceAfter=No
11	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	AVS	AVS	PROPN	_	_	9	nmod	_	_
13	et	et	CCONJ	_	_	20	cc	_	_
14	euh	euh	INTJ	_	_	20	discourse	_	_
15	pour	pour	ADP	_	_	16	case	_	_
16	eux	lui	PRON	_	Emph=Yes|Gender=Masc|Number=Plur|Person=3|PronType=Prs	20	obl:mod	_	Exponence[Person]=Inherent
17	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	20	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
18	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
19	vraiment	vraiment	ADV	_	_	20	advmod	_	_
20	difficile	difficile	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
21	.	.	PUNCT	_	_	20	punct	_	_

~~~


