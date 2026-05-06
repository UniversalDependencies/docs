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
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=301805|AlignEnd=301960|Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	AlignBegin=301960|AlignEnd=302120
3	sûr	sûr	ADJ	_	Gender=Masc|Number=Sing	0	root	_	AlignBegin=302120|AlignEnd=302410|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison
4	que	que	SCONJ	_	_	6	mark	_	AlignBegin=302410|AlignEnd=302480
5	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	6	nsubj	_	AlignBegin=302480|AlignEnd=302650|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown
6	allez	aller	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	ccomp	_	AlignBegin=302650|AlignEnd=302810
7	être	être	AUX	_	VerbForm=Inf	8	aux:pass	_	AlignBegin=302810|AlignEnd=303090|Subject=SubjRaising
8	convaincus	convaincre	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	6	xcomp	_	AlignBegin=303200|AlignEnd=303730|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
9	par	par	ADP	_	_	11	case	_	AlignBegin=303730|AlignEnd=303920
10	notre	son	DET	_	Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	11	det	_	AlignBegin=303920|AlignEnd=304200|HasSpokenGender=OnlySingExceptWithLiaison
11	boule	boule	NOUN	_	Gender=Fem|Number=Sing	8	obl:agent	_	AlignBegin=304200|AlignEnd=304490|Exponence[Gender]=Inherent|Exponence[Number]=Absent
12	magique	magique	ADJ	_	Gender=Fem|Number=Sing	11	amod	_	AlignBegin=304490|AlignEnd=304849|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison
13	tout	tout	ADV	_	_	15	advmod	_	AlignBegin=305139|AlignEnd=305284
14	comme	comme	ADP	_	_	15	case	_	AlignBegin=305284|AlignEnd=305434
15	Magalie	Magalie	PROPN	_	_	8	obl:mod	_	AlignBegin=305434|AlignEnd=305792|SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	AlignBegin=305792|AlignEnd=305792

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 26 obl:agent	color:blue
1	donc	donc	ADV	_	_	14	advmod	_	AlignBegin=111139|AlignEnd=111384|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	AlignBegin=111384|AlignEnd=111384
3	euh	euh	INTJ	_	_	1	discourse	_	AlignBegin=111384|AlignEnd=111904|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	AlignBegin=111904|AlignEnd=111904
5	bon	bon	INTJ	_	_	1	discourse	_	AlignBegin=111904|AlignEnd=112104|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	AlignBegin=112104|AlignEnd=112104
7	ben	ben	INTJ	_	_	1	discourse	_	AlignBegin=112104|AlignEnd=112234|SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	AlignBegin=112234|AlignEnd=112234
9	là	là	ADV	_	_	1	discourse	_	AlignBegin=112234|AlignEnd=112334|SpaceAfter=No
10	,	,	PUNCT	_	_	1	punct	_	AlignBegin=112334|AlignEnd=112334
11	maintenant	maintenant	ADV	_	_	14	advmod	_	AlignBegin=112334|AlignEnd=112574|SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	AlignBegin=112574|AlignEnd=112574
13	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	AlignBegin=112574|AlignEnd=113424|Exponence[Number]=Inherent|Exponence[Person]=Inherent
14	s~	s~	X	_	ExtPos=VERB	21	reparandum	_	AlignBegin=113424|AlignEnd=113454|SpaceAfter=No
15	,	,	PUNCT	_	_	14	punct	_	AlignBegin=113454|AlignEnd=113454
16	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	21	nsubj:pass	_	AlignBegin=113454|AlignEnd=113544|Exponence[Number]=Inherent|Exponence[Person]=Inherent
17	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	21	aux:pass	_	AlignBegin=113544|AlignEnd=113644
18	plus	plus	ADV	_	_	21	advmod	_	AlignBegin=113644|AlignEnd=113849
19	ou	ou	CCONJ	_	_	20	cc	_	AlignBegin=113849|AlignEnd=113979
20	moins	moins	ADV	_	_	18	conj	_	AlignBegin=113979|AlignEnd=114199
21	aidé	aider	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	AlignBegin=114199|AlignEnd=114579|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Tense[denom]=Past
22	,	,	PUNCT	_	_	23	punct	_	AlignBegin=114579|AlignEnd=114579
23	euh	euh	INTJ	_	_	21	discourse	_	AlignBegin=114579|AlignEnd=114749|SpaceAfter=No
24	,	,	PUNCT	_	_	26	punct	_	AlignBegin=114749|AlignEnd=114749
25	par	par	ADP	_	_	26	case	_	AlignBegin=114749|AlignEnd=114899
26	quelqu'un	quelqu'un	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	21	obl:agent	_	AlignBegin=114899|AlignEnd=115249|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
27	à	à	ADP	_	_	28	case	_	AlignBegin=115249|AlignEnd=115279
28	mi-temps	mi-temps	NOUN	_	Gender=Masc|Number=Sing	26	nmod	_	AlignBegin=115279|AlignEnd=115661|Exponence[Gender]=Inherent|Exponence[Number]=Absent
29	heureusement	heureusement	ADV	_	_	21	advmod	_	AlignBegin=116107|AlignEnd=116442|SpaceAfter=No
30	.	.	PUNCT	_	_	21	punct	_	AlignBegin=116442|AlignEnd=116442

~~~


