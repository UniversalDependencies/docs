---
layout: base
title:  'Statistics of expl in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `expl`

This relation is universal.

2360 nodes (1%) are attached to their parents as `expl`.

1738 instances of `expl` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06059322033898.

The following 9 pairs of parts of speech are connected with `expl`: <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (2326; 99% instances), <tt><a href="hr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (22; 1% instances), <tt><a href="hr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 expl	color:blue
1	Srbija	Srbija	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
2	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	6	expl	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	4	punct	_	_
4	istodobno	istodobno	ADV	Rgp	Degree=Pos	6	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	_
6	našla	naći	VERB	Vmp-sf	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	u	u	ADP	Sl	Case=Loc	9	case	_	_
8	diplomatskim	diplomatski	ADJ	Agpfply	Case=Loc|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	_
9	neprilikama	neprilika	NOUN	Ncfpl	Case=Loc|Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl	color:blue
1	Poslije	poslije	ADP	Sg	Case=Gen	2	case	_	_
2	0:03	0:03	NUM	Mdm	NumType=Mult	5	nummod	_	_
3	bilo	biti	AUX	Vap-sn	Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	5	aux	_	_
4	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	5	expl	_	_
5	teško	teško	ADV	Rgp	Degree=Pos	0	root	_	_
6	vraćati	vraćati	VERB	Vmn	VerbForm=Inf	5	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	10	punct	_	_
8	a	a	CCONJ	Cc	_	10	cc	_	_
9	kamoli	kamoli	ADV	Rgp	Degree=Pos	10	advmod	_	_
10	pobijediti	pobijediti	VERB	Vmn	VerbForm=Inf	5	conj	_	orig_deprel=nsubj|SpaceAfter=No
11	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 expl	color:blue
1	Istina	istina	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
2	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	7	expl	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	4	punct	_	_
4	izgleda	izgledati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	_
6	nikad	nikad	ADV	Rgp	Degree=Pos|PronType=Neg	7	advmod	_	_
7	neće	htjeti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	_
8	utvrditi	utvrditi	VERB	Vmn	VerbForm=Inf	7	xcomp	_	_
9	jer	jer	SCONJ	Cs	_	27	mark	_	SpaceAfter=No
10	,	,	PUNCT	Z	_	17	punct	_	_
11	osim	osim	SCONJ	Cs	_	17	mark	_	_
12	što	što	SCONJ	Cs	_	11	fixed	_	_
13	i	i	PART	Qo	_	16	discourse	_	_
14	u	u	ADP	Sl	Case=Loc	16	case	_	_
15	samom	sam	ADJ	Agpnsly	Case=Loc|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	16	amod	_	_
16	susjedstvu	susjedstvo	NOUN	Ncnsl	Case=Loc|Gender=Neut|Number=Sing	17	obl	_	_
17	postoje	postojati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	27	advcl	_	_
18	oni	oni	PRON	Pp3mpn	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	17	nsubj	_	_
19	"	"	PUNCT	Z	_	20	punct	_	SpaceAfter=No
20	za	za	ADP	Sa	Case=Acc	17	case	_	SpaceAfter=No
21	"	"	PUNCT	Z	_	24	punct	_	_
22	i	i	CCONJ	Cc	_	24	cc	_	_
23	"	"	PUNCT	Z	_	24	punct	_	SpaceAfter=No
24	protiv	protiv	ADP	Sg	Case=Gen	20	conj	_	SpaceAfter=No
25	"	"	PUNCT	Z	_	24	punct	_	SpaceAfter=No
26	,	,	PUNCT	Z	_	17	punct	_	_
27	podijeljena	podijeliti	ADJ	Appfsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	8	advcl	_	_
28	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	cop	_	_
29	i	i	PART	Qo	_	30	discourse	_	_
30	Istra	Istra	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	27	nsubj	_	SpaceAfter=No
31	.	.	PUNCT	Z	_	7	punct	_	_

~~~


