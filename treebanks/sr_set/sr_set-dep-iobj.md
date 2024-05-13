---
layout: base
title:  'Statistics of iobj in UD_Serbian-SET'
udver: '2'
---

## Treebank Statistics: UD_Serbian-SET: Relations: `iobj`

This relation is universal.

2 nodes (0%) are attached to their parents as `iobj`.

1 instances of `iobj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Dizajn	dizajn	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	novog	nov	ADJ	Agpmsgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	muzeja	muzej	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
4	omogućava	omogućavati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	posetiocima	posetilac	NOUN	Ncmpd	Case=Dat|Gender=Masc|Number=Plur	4	iobj	_	_
6	da	da	SCONJ	Cs	_	7	mark	_	_
7	proučavaju	proučavati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	_	_
8	mermere	mermer	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	7	obj	_	_
9	Partenona	Partenon	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
10	dok	dok	SCONJ	Cs	_	12	mark	_	_
11	istovremeno	istovremeno	ADV	Rgp	Degree=Pos	12	advmod	_	_
12	gledaju	gledati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	_
13	njihovu	njihov	DET	Ps3fsa	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	15	det	_	_
14	originalnu	originalan	ADJ	Agpfsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	15	amod	_	_
15	lokaciju	lokacija	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	_
16	-	-	PUNCT	Z	_	18	punct	_	_
17	sam	sam	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	18	amod	_	_
18	Akropolj	Akropolj	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	15	appos	_	SpaceAfter=No
19	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 28 iobj	color:blue
1	U	u	ADP	Sa	Case=Acc	2	case	_	_
2	ponedeljak	ponedeljak	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	obl	_	_
3	(	(	PUNCT	Z	_	5	punct	_	SpaceAfter=No
4	7.	7.	ADJ	Mdo	NumType=Ord	5	amod	_	_
5	aprila	april	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	2	appos	_	SpaceAfter=No
6	)	)	PUNCT	Z	_	5	punct	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	2	punct	_	_
8	vlada	vlada	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	_
9	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	saopštila	saopštiti	VERB	Vmp-sf	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
11	da	da	SCONJ	Cs	_	15	mark	_	_
12	će	hteti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
13	ove	ovaj	DET	Pd-fsg	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	14	det	_	_
14	nedelje	nedelja	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	15	obl	_	_
15	pokrenuti	pokrenuti	VERB	Vmn	VerbForm=Inf	10	ccomp	_	_
16	pregovore	pregovor	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	15	obj	_	_
17	da	da	SCONJ	Cs	_	19	mark	_	_
18	bi	biti	AUX	Vaa3s	Mood=Cnd|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	19	aux	_	_
19	rešila	rešiti	VERB	Vmp-sf	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	15	advcl	_	_
20	spor	spor	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	19	obj	_	_
21	sa	sa	ADP	Si	Case=Ins	22	case	_	_
22	Grčkom	Grčka	PROPN	Npfsi	Case=Ins|Gender=Fem|Number=Sing	20	nmod	_	_
23	oko	oko	ADP	Sg	Case=Gen	24	case	_	_
24	imena	ime	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	20	nmod	_	SpaceAfter=No
25	,	,	PUNCT	Z	_	29	punct	_	_
26	koji	koji	DET	Pi-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	29	nsubj	_	_
27	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	aux	_	_
28	Makedoniju	Makedonija	PROPN	Npfsa	Case=Acc|Gender=Fem|Number=Sing	29	iobj	_	_
29	koštao	koštati	VERB	Vmp-sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	20	acl	_	_
30	poziva	poziv	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	29	obj	_	_
31	za	za	ADP	Sa	Case=Acc	32	case	_	_
32	NATO	NATO	PROPN	Npmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	30	nmod	_	SpaceAfter=No
33	.	.	PUNCT	Z	_	10	punct	_	_

~~~


