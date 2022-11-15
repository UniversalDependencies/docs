---
layout: base
title:  'Statistics of dislocated in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `dislocated`

This relation is universal.

10 nodes (0%) are attached to their parents as `dislocated`.

6 instances of `dislocated` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 14.5.

The following 6 pairs of parts of speech are connected with `dislocated`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (4; 40% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (2; 20% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (1; 10% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dislocated	color:blue
1	To	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	NER=O
2	velja	veljati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	NER=O|SpaceAfter=No
3	,	,	PUNCT	Z	_	4	punct	_	NER=O
4	kri	kri	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	2	dislocated	_	NER=O|SpaceAfter=No
5	.	.	PUNCT	Z	_	2	punct	_	NER=O

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 2 dislocated	color:blue
1	Kdor	kdor	PRON	Pr-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	2	nsubj	_	NER=O
2	veruje	verovati	VERB	Vmbr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	dislocated	_	NER=O
3	vame	vame	PRON	Pp1-sa--b	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Bound	2	obl	_	NER=O|SpaceAfter=No
4	,	,	PUNCT	Z	_	2	punct	_	NER=O
5	bodo	biti	AUX	Va-f3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	14	aux	_	NER=O|SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	_	NER=O
7	kakor	kakor	SCONJ	Cs	_	8	mark	_	NER=O
8	pravi	praviti	VERB	Vmbr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	advcl	_	NER=O
9	Pismo	pismo	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	NER=B-misc|SpaceAfter=No
10	,	,	PUNCT	Z	_	8	punct	_	NER=O
11	iz	iz	ADP	Sg	Case=Gen	13	case	_	NER=O
12	njegovega	njegov	DET	Ps3nsgsm	Case=Gen|Gender=Neut|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	13	det	_	NER=O
13	osrčja	osrčje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	14	obl	_	NER=O
14	tekle	teči	VERB	Vmpp-pf	Aspect=Imp|Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	NER=O
15	reke	reka	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	14	nsubj	_	NER=O
16	žive	živ	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	NER=O
17	vode	voda	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	NER=O|SpaceAfter=No
18	.	.	PUNCT	Z	_	14	punct	_	NER=O
19	«	«	PUNCT	Z	_	14	punct	_	NER=O

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 2 dislocated	color:blue
1	Modro	moder	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	amod	_	NER=O
2	nebo	nebo	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	28	dislocated	_	NER=O|SpaceAfter=No
3	,	,	PUNCT	Z	_	5	punct	_	NER=O
4	modro	moder	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	NER=O
5	morje	morje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	2	conj	_	NER=O|SpaceAfter=No
6	,	,	PUNCT	Z	_	7	punct	_	NER=O
7	Eclipse	Eclipse	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	2	conj	_	NER=B-misc|SpaceAfter=No
8	,	,	PUNCT	Z	_	13	punct	_	NER=O
9	ki	ki	SCONJ	Cs	_	13	mark	_	NER=O
10	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	13	expl	_	NER=O
11	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	aux	_	NER=O
12	dostojanstveno	dostojanstveno	ADV	Rgp	Degree=Pos	13	advmod	_	NER=O
13	pozibavala	pozibavati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	7	acl	_	NER=O
14	na	na	ADP	Sl	Case=Loc	16	case	_	NER=O
15	svojem	svoj	DET	Px-nsl	Case=Loc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	16	det	_	NER=O
16	sidrišču	sidrišče	NOUN	Ncnsl	Case=Loc|Gender=Neut|Number=Sing	13	obl	_	NER=O|SpaceAfter=No
17	,	,	PUNCT	Z	_	19	punct	_	NER=O
18	bela	bel	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	19	amod	_	NER=O
19	terasa	terasa	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	2	conj	_	NER=O|SpaceAfter=No
20	,	,	PUNCT	Z	_	22	punct	_	NER=O
21	rdeče	rdeč	ADJ	Agpfpn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	22	amod	_	NER=O
22	geranije	geranija	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	2	conj	_	NER=O|SpaceAfter=No
23	,	,	PUNCT	Z	_	2	punct	_	NER=O
24	vse	ves	DET	Pg-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	28	nsubj	_	NER=O
25	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	28	aux	_	NER=O
26	bilo	biti	AUX	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	28	cop	_	NER=O
27	očarljivo	očarljivo	ADV	Rgp	Degree=Pos	28	advmod	_	NER=O
28	domače	domač	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	NER=O|SpaceAfter=No
29	,	,	PUNCT	Z	_	37	punct	_	NER=O
30	pa	pa	CCONJ	Cc	_	37	cc	_	NER=O
31	vendar	vendar	CCONJ	Cc	_	30	fixed	_	NER=O
32	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	37	aux	_	NER=O
33	bilo	biti	AUX	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	37	cop	_	NER=O
34	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	35	det	_	NER=O
35	jutro	jutro	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	37	nsubj	_	NER=O
36	čisto	čisto	ADV	Rgp	Degree=Pos	37	advmod	_	NER=O
37	drugačno	drugačen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	28	conj	_	NER=O|SpaceAfter=No
38	.	.	PUNCT	Z	_	28	punct	_	NER=O

~~~


