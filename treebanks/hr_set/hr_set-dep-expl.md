---
layout: base
title:  'Statistics of expl in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="hr_set-dep-expl-pv.html">expl:pv</a></tt>.

10 nodes (0%) are attached to their parents as `expl`.

10 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4.

The following 9 pairs of parts of speech are connected with `expl`: <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-PART.html">PART</a></tt> (2; 20% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-PART.html">PART</a></tt> (1; 10% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="hr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (1; 10% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 expl	color:blue
1	U	u	ADP	Sl	Case=Loc	5	case	_	_
2	hrvatskoj	hrvatski	ADJ	Agpfsly	Case=Loc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
3	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	uskrsnoj	uskrsni	ADJ	Agpfsly	Case=Loc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	tradiciji	tradicija	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
6	prisutno	prisutan	ADJ	Agpnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
7	bojenje	bojenje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	6	nsubj	_	_
8	jaja	jaje	NOUN	Ncnpg	Case=Gen|Gender=Neut|Number=Plur	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Z	_	11	punct	_	_
10	tj.	tj.	PART	Y	_	11	expl	_	_
11	pisanica	pisanica	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	8	appos	_	_
12	koje	koji	DET	Pi-fpn	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	20	nsubj	_	_
13	su	biti	AUX	Var3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	_
14	osim	osim	ADP	Sg	Case=Gen	15	case	_	_
15	simbola	simbol	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	20	nmod	_	ToDo=nmod
16	života	život	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
17	bile	biti	AUX	Vap-pf	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	20	cop	_	_
18	i	i	CCONJ	Cc	_	20	discourse	_	_
19	tradicionalan	tradicionalan	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	20	amod	_	_
20	dar	dar	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	11	acl	_	SpaceAfter=No
21	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl	color:blue
1	Najčešći	češći	ADJ	Agsmsny	Case=Nom|Definite=Def|Degree=Sup|Gender=Masc|Number=Sing	2	amod	_	_
2	uzrok	uzrok	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	ovom	ovaj	DET	Pd-msl	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	problemu	problem	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	2	nmod	_	_
5	su	biti	AUX	Var3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	driveri	driver	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	_	_
8	točnije	točno	ADV	Rgc	Degree=Cmp	9	expl	_	_
9	moguće	moguć	ADJ	Agpnpny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur	6	parataxis	_	_
10	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
11	da	da	SCONJ	Cs	_	14	mark	_	_
12	proizvođač	proizvođač	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
13	nije	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	postavio	postaviti	VERB	Vmp-sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	9	csubj	_	_
15	drivere	driver	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	14	obj	_	_
16	za	za	ADP	Sa	Case=Acc	18	case	_	_
17	vaše	vaš	DET	Ps2nsa	Case=Acc|Gender=Neut|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	18	nmod	_	_
18	računalo	računalo	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	15	nmod	_	SpaceAfter=No
19	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 25 expl	color:blue
1	Istra	Istra	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	također	također	ADV	Rgp	Degree=Pos	4	advmod	_	_
4	privlačna	privlačan	ADJ	Agpfsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
5	jer	jer	SCONJ	Cs	_	18	mark	_	_
6	su	biti	AUX	Var3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	18	aux:pass	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	12	punct	_	_
8	za	za	ADP	Sa	Case=Acc	12	case	_	_
9	razliku	razlika	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	8	fixed	_	_
10	od	od	ADP	Sg	Case=Gen	8	fixed	_	_
11	drugih	drugi	ADJ	Mlompg	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	12	amod	_	_
12	dijelova	dio	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	18	obl	_	_
13	Hrvatske	Hrvatska	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
14	,	,	PUNCT	Z	_	12	punct	_	_
15	ovdje	ovdje	ADV	Rgp	Degree=Pos|PronType=Dem	18	advmod	_	_
16	puno	puno	ADV	Rgp	Degree=Pos	17	advmod	_	_
17	bolje	dobro	ADV	Rgc	Degree=Cmp	18	advmod	_	_
18	riješene	riješiti	ADJ	Appfpny	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	4	advcl	_	_
19	zemljišne	zemljišni	ADJ	Agpfpny	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	20	amod	_	_
20	knjige	knjiga	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	18	nsubj:pass	_	SpaceAfter=No
21	,	,	PUNCT	Z	_	26	punct	_	_
22	prostorni	prostoran	ADJ	Agpmpny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	23	amod	_	_
23	planovi	plan	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	26	nsubj	_	_
24	su	biti	AUX	Var3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	26	cop	_	_
25	sve	sve	PART	Qo	_	26	expl	_	_
26	bolji	dobar	ADJ	Agcmpny	Case=Nom|Definite=Def|Degree=Cmp|Gender=Masc|Number=Plur	18	conj	_	SpaceAfter=No
27	,	,	PUNCT	Z	_	31	punct	_	_
28	a	a	CCONJ	Cc	_	31	cc	_	_
29	dozvole	dozvola	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	31	nsubj	_	_
30	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	31	aux	_	_
31	izdaju	izdati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	18	conj	_	_
32	brže	brzo	ADV	Rgc	Degree=Cmp	31	advmod	_	SpaceAfter=No
33	.	.	PUNCT	Z	_	4	punct	_	_

~~~


