---
layout: base
title:  'Statistics of goeswith in UD_Serbian-SET'
udver: '2'
---

## Treebank Statistics: UD_Serbian-SET: Relations: `goeswith`

This relation is universal.

22 nodes (0%) are attached to their parents as `goeswith`.

16 instances of `goeswith` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04545454545455.

The following 8 pairs of parts of speech are connected with `goeswith`: <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-ADP.html">ADP</a></tt> (12; 55% instances), <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="sr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_set-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="sr_set-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sr_set-pos-SCONJ.html">SCONJ</a></tt> (2; 9% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="sr_set-pos-ADP.html">ADP</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 goeswith	color:blue
1	To	taj	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	det	_	_
2	važno	važan	ADJ	Agpnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	9	punct	_	_
4	u	u	ADP	Sl	Case=Loc	6	case	_	_
5	mnogo	mnogo	ADV	Rgp	Degree=Pos	6	det:numgov	_	_
6	čemu	što	PRON	Pi3n-l	Case=Loc|Gender=Neut|PronType=Int,Rel	8	obl	_	_
7	i	i	CCONJ	Cc	_	8	advmod	_	_
8	presudno	presudan	ADJ	Agpnsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	_
9	pitanje	pitanje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	13	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	Z	_	13	punct	_	_
11	za	za	ADP	Sa	Case=Acc	12	goeswith	_	_
12	sada	sada	ADV	Rgp	Degree=Pos|PronType=Dem	13	advmod	_	_
13	ostaje	ostajati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	bez	bez	ADP	Sg	Case=Gen	15	case	_	_
15	odgovora	odgovor	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
16	.	.	PUNCT	Z	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Video	video	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	19	nsubj	_	_
2	spotovi	spot	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	1	goeswith	_	_
3	sa	sa	ADP	Si	Case=Ins	5	case	_	_
4	sličnom	sličan	ADJ	Agpfsiy	Case=Ins|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	porukom	poruka	NOUN	Ncfsi	Case=Ins|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	10	punct	_	_
7	u	u	ADP	Sl	Case=Loc	8	case	_	_
8	kojima	koji	DET	Pi-mpl	Case=Loc|Gender=Masc|Number=Plur|PronType=Int,Rel	10	obl	_	_
9	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	10	compound	_	_
10	pojavljuju	pojavljivati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	acl	_	_
11	glumci	glumac	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
12	i	i	CCONJ	Cc	_	15	cc	_	_
13	druge	drugi	ADJ	Mlofpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	15	amod	_	_
14	poznate	poznat	ADJ	Agpfpay	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	15	amod	_	_
15	osobe	osoba	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	11	conj	_	SpaceAfter=No
16	,	,	PUNCT	Z	_	10	punct	_	_
17	redovno	redovno	ADV	Rgp	Degree=Pos	19	advmod	_	_
18	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	19	compound	_	_
19	emituju	emitovati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
20	na	na	ADP	Sl	Case=Loc	21	case	_	_
21	televiziji	televizija	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No
22	.	.	PUNCT	Z	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 goeswith	color:blue
1	Procena	procena	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
2	iz	iz	ADP	Sg	Case=Gen	3	case	_	_
3	Brisela	Brisel	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
4	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	najnoviji	nov	ADJ	Agsmsny	Case=Nom|Definite=Def|Degree=Sup|Gender=Masc|Number=Sing	0	root	_	_
6	u	u	ADP	Sl	Case=Loc	7	case	_	_
7	nizu	niz	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	5	obl	_	_
8	izveštaja	izveštaj	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	--	--	PUNCT	Z	_	11	punct	_	_
10	od	od	ADP	Sg	Case=Gen	11	case	_	_
11	Fridom	Fridom	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	8	parataxis	_	_
12	hausa	Haus	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	11	goeswith	_	SpaceAfter=No
13	,	,	PUNCT	Z	_	16	punct	_	_
14	preko	preko	ADP	Sg	Case=Gen	16	case	_	_
15	Svetske	svetski	ADJ	Agpfsgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	16	amod	_	_
16	banke	banka	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	11	conj	_	SpaceAfter=No
17	,	,	PUNCT	Z	_	19	punct	_	_
18	do	do	ADP	Sg	Case=Gen	19	case	_	_
19	Transparensi	Transparens	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	11	conj	_	_
20	internešenela	internešenel	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	19	flat	_	_
21	--	--	PUNCT	Z	_	25	punct	_	_
22	u	u	ADP	Sl	Case=Loc	23	case	_	_
23	kojem	koji	DET	Pi-msl	Case=Loc|Gender=Masc|Number=Sing|PronType=Int,Rel	25	mark	_	_
24	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	25	compound	_	_
25	ukazuje	ukazivati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
26	na	na	ADP	Sa	Case=Acc	28	case	_	_
27	ozbiljne	ozbiljan	ADJ	Agpmpay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	28	amod	_	_
28	probleme	problem	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	25	obl	_	_
29	te	taj	DET	Pd-fsg	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	31	det	_	_
30	najnovije	nov	ADJ	Agsfsgy	Case=Gen|Definite=Def|Degree=Sup|Gender=Fem|Number=Sing	31	amod	_	_
31	države	država	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	28	nmod	_	_
32	u	u	ADP	Sl	Case=Loc	33	case	_	_
33	Evropi	Evropa	PROPN	Npfsl	Case=Loc|Gender=Fem|Number=Sing	31	nmod	_	SpaceAfter=No
34	.	.	PUNCT	Z	_	5	punct	_	_

~~~


