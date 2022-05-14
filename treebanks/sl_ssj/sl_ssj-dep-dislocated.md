---
layout: base
title:  'Statistics of dislocated in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `dislocated`

This relation is universal.

8 nodes (0%) are attached to their parents as `dislocated`.

4 instances of `dislocated` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.25.

The following 5 pairs of parts of speech are connected with `dislocated`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (4; 50% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (1; 13% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (1; 13% instances).


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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 1 dislocated	color:blue
1	Razpust	razpust	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	41	dislocated	_	NER=O
2	-	-	PUNCT	Z	_	3	punct	_	NER=O
3	popoln	popoln	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	NER=O|SpaceAfter=No
4	,	,	PUNCT	Z	_	7	punct	_	NER=O
5	le	le	PART	Q	_	7	cc	_	NER=O
6	da	da	SCONJ	Cs	_	5	fixed	_	NER=O
7	prikrit	prikrit	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	3	conj	_	NER=O
8	-	-	PUNCT	Z	_	3	punct	_	NER=O
9	deželne	deželen	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	NER=O
10	brambe	bramba	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	NER=O
11	kot	kot	SCONJ	Cs	_	14	case	_	NER=O
12	zadnjega	zadnji	ADJ	Agpmsg	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	NER=O
13	demokratičnega	demokratičen	ADJ	Agpmsg	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	NER=O
14	ostanka	ostanek	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	NER=O
15	iz	iz	ADP	Sg	Case=Gen	16	case	_	NER=O
16	časov	čas	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	14	nmod	_	NER=O
17	pred	pred	ADP	Si	Case=Ins	18	case	_	NER=O
18	letom	leto	NOUN	Ncnsi	Case=Ins|Gender=Neut|Number=Sing	16	nmod	_	NER=O
19	1810	1810	NUM	Mdc	NumForm=Digit|NumType=Card	18	nummod	_	NER=O|SpaceAfter=No
20	,	,	PUNCT	Z	_	21	punct	_	NER=O
21	ustvaritev	ustvaritev	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	NER=O
22	ogromnega	ogromen	ADJ	Agpmsg	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	23	amod	_	NER=O
23	aparata	aparat	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	21	nmod	_	NER=O
24	moči	moč	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	NER=O|SpaceAfter=No
25	,	,	PUNCT	Z	_	28	punct	_	NER=O
26	ki	ki	SCONJ	Cs	_	28	mark	_	NER=O
27	naj	naj	PART	Q	_	28	advmod	_	NER=O
28	služi	služiti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	acl	_	NER=O
29	absolutizmu	absolutizem	NOUN	Ncmsd	Case=Dat|Gender=Masc|Number=Sing	28	obj	_	NER=O
30	in	in	CCONJ	Cc	_	31	cc	_	NER=O
31	junkerstvu	junkerstvo	NOUN	Ncnsd	Case=Dat|Gender=Neut|Number=Sing	29	conj	_	NER=O|SpaceAfter=No
32	,	,	PUNCT	Z	_	28	punct	_	NER=O
33	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	41	nsubj	_	NER=O
34	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	41	cop	_	NER=O|SpaceAfter=No
35	,	,	PUNCT	Z	_	38	punct	_	NER=O
36	v	v	ADP	Sl	Case=Loc	38	case	_	NER=O
37	dveh	dva	NUM	Mlcfdl	Case=Loc|Gender=Fem|Number=Dual|NumForm=Word|NumType=Card	38	nummod	_	NER=O
38	besedah	beseda	NOUN	Ncfdl	Case=Loc|Gender=Fem|Number=Dual	41	obl	_	NER=O|SpaceAfter=No
39	,	,	PUNCT	Z	_	38	punct	_	NER=O
40	edini	edin	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	41	amod	_	NER=O
41	cilj	cilj	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	NER=O
42	te	ta	DET	Pd-fsg	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	43	det	_	NER=O
43	reforme	reforma	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	41	nmod	_	NER=O|SpaceAfter=No
44	.	.	PUNCT	Z	_	41	punct	_	NER=O

~~~


