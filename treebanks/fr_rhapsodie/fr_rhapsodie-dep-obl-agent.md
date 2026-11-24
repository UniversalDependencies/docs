---
layout: base
title:  'Statistics of obl:agent in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_rhapsodie-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_rhapsodie-dep-obl-mod.html">obl:mod</a></tt>.

3 nodes (0%) are attached to their parents as `obl:agent`.

3 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:agent	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=301805|WordAlignmentEnd=301960
2	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	WordAlignmentBegin=301960|WordAlignmentEnd=302120
3	sûr	sûr	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=302120|WordAlignmentEnd=302410
4	que	que	SCONJ	_	_	6	mark	_	WordAlignmentBegin=302410|WordAlignmentEnd=302480
5	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	6	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown|WordAlignmentBegin=302480|WordAlignmentEnd=302650
6	allez	aller	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	ccomp	_	WordAlignmentBegin=302650|WordAlignmentEnd=302810
7	être	être	AUX	_	VerbForm=Inf	8	aux:pass	_	Subject=SubjRaising|WordAlignmentBegin=302810|WordAlignmentEnd=303090
8	convaincus	convaincre	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	6	xcomp	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=303200|WordAlignmentEnd=303730
9	par	par	ADP	_	_	11	case	_	WordAlignmentBegin=303730|WordAlignmentEnd=303920
10	notre	son	DET	_	Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	11	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=303920|WordAlignmentEnd=304200
11	boule	boule	NOUN	_	Gender=Fem|Number=Sing	8	obl:agent	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=304200|WordAlignmentEnd=304490
12	magique	magique	ADJ	_	Gender=Fem|Number=Sing	11	amod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=304490|WordAlignmentEnd=304849
13	tout	tout	ADV	_	_	15	advmod	_	WordAlignmentBegin=305139|WordAlignmentEnd=305284
14	comme	comme	ADP	_	_	15	case	_	WordAlignmentBegin=305284|WordAlignmentEnd=305434
15	Magalie	Magalie	PROPN	_	_	8	obl:mod	_	SpaceAfter=No|WordAlignmentBegin=305434|WordAlignmentEnd=305792
16	.	.	PUNCT	_	_	3	punct	_	WordAlignmentBegin=305792|WordAlignmentEnd=305792

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 26 obl:agent	color:blue
1	donc	donc	ADV	_	_	14	advmod	_	SpaceAfter=No|WordAlignmentBegin=111139|WordAlignmentEnd=111384
2	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=111384|WordAlignmentEnd=111384
3	euh	euh	INTJ	_	_	1	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=111384|WordAlignmentEnd=111904
4	,	,	PUNCT	_	_	5	punct	_	WordAlignmentBegin=111904|WordAlignmentEnd=111904
5	bon	bon	INTJ	_	_	1	discourse	_	SpaceAfter=No|WordAlignmentBegin=111904|WordAlignmentEnd=112104
6	,	,	PUNCT	_	_	7	punct	_	WordAlignmentBegin=112104|WordAlignmentEnd=112104
7	ben	ben	INTJ	_	_	1	discourse	_	SpaceAfter=No|WordAlignmentBegin=112104|WordAlignmentEnd=112234
8	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=112234|WordAlignmentEnd=112234
9	là	là	ADV	_	_	1	discourse	_	SpaceAfter=No|WordAlignmentBegin=112234|WordAlignmentEnd=112334
10	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=112334|WordAlignmentEnd=112334
11	maintenant	maintenant	ADV	_	_	14	advmod	_	SpaceAfter=No|WordAlignmentBegin=112334|WordAlignmentEnd=112574
12	,	,	PUNCT	_	_	11	punct	_	WordAlignmentBegin=112574|WordAlignmentEnd=112574
13	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=112574|WordAlignmentEnd=113424
14	s~	s~	X	_	ExtPos=VERB	21	reparandum	_	SpaceAfter=No|WordAlignmentBegin=113424|WordAlignmentEnd=113454
15	,	,	PUNCT	_	_	14	punct	_	WordAlignmentBegin=113454|WordAlignmentEnd=113454
16	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	21	nsubj:pass	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=113454|WordAlignmentEnd=113544
17	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	21	aux:pass	_	WordAlignmentBegin=113544|WordAlignmentEnd=113644
18	plus	plus	ADV	_	_	21	advmod	_	WordAlignmentBegin=113644|WordAlignmentEnd=113849
19	ou	ou	CCONJ	_	_	20	cc	_	WordAlignmentBegin=113849|WordAlignmentEnd=113979
20	moins	moins	ADV	_	_	18	conj	_	WordAlignmentBegin=113979|WordAlignmentEnd=114199
21	aidé	aider	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Status[Tense]=Denom|WordAlignmentBegin=114199|WordAlignmentEnd=114579
22	,	,	PUNCT	_	_	23	punct	_	WordAlignmentBegin=114579|WordAlignmentEnd=114579
23	euh	euh	INTJ	_	_	21	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=114579|WordAlignmentEnd=114749
24	,	,	PUNCT	_	_	26	punct	_	WordAlignmentBegin=114749|WordAlignmentEnd=114749
25	par	par	ADP	_	_	26	case	_	WordAlignmentBegin=114749|WordAlignmentEnd=114899
26	quelqu'un	quelqu'un	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	21	obl:agent	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=114899|WordAlignmentEnd=115249
27	à	à	ADP	_	_	28	case	_	WordAlignmentBegin=115249|WordAlignmentEnd=115279
28	mi-temps	mi-temps	NOUN	_	Gender=Masc|Number=Sing	26	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=115279|WordAlignmentEnd=115661
29	heureusement	heureusement	ADV	_	_	21	advmod	_	SpaceAfter=No|WordAlignmentBegin=116107|WordAlignmentEnd=116442
30	.	.	PUNCT	_	_	21	punct	_	WordAlignmentBegin=116442|WordAlignmentEnd=116442

~~~


