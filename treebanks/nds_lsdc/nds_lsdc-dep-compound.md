---
layout: base
title:  'Statistics of compound in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="nds_lsdc-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="nds_lsdc-dep-compound-redup.html">compound:redup</a></tt>.

9 nodes (0%) are attached to their parents as `compound`.

8 instances of `compound` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.55555555555556.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADP.html">ADP</a></tt> (7; 78% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound	color:blue
1	Alle	al	PRON	_	Case=Nom|Number=Plur|PronType=Tot	2	nsubj	_	lemma_gml=al
2	lachen	lachen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	lemma_gml=lachen¹
3	harde	harde	ADV	_	_	2	advmod	_	lemma_gml=hā̆rde
4	up	up	ADP	_	_	2	compound	_	lemma_gml=up¹|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	un	un	CCONJ	_	_	8	cc	_	lemma_gml=unde²
7	Wiesken	Wiesken	PROPN	_	Number=Sing	8	nsubj	_	_
8	ward	werden	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	lemma_gml=wērden¹
9	roud	roud	ADJ	_	Degree=Pos	8	xcomp	_	lemma_gml=rôt⁴
10	as	as	ADP	_	_	11	case	_	lemma_gml=alsô
11	vüür	vüür	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	9	nmod	_	lemma_gml=vü̂r¹|SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 compound	color:blue
1	De	de	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	3	det	_	lemma_gml=dê¹
2	beiden	beide	ADJ	_	Case=Acc|Gender=Neut|Number=Plur	3	amod	_	lemma_gml=bêⁱde¹
3	vinsteren	vinster	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	11	obj	_	lemma_gml=vinster¹
4	to	to	ADP	_	AdpType=Prep	5	case	_	lemma_gml=tô⁴
5	westen	westen	NOUN	_	Case=Acc,Dat|Gender=Masc,Neut|Number=Sing	3	nmod	_	lemma_gml=westen
6	hadde	hebben	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbType=Aux	11	aux	_	lemma_gml=hebben
7	man	man	PRON	_	Case=Nom|Number=Sing|PronType=Ind	11	nsubj	_	lemma_gml=man²
8	mid	mid	ADP	_	AdpType=Prep	10	case	_	lemma_gml=mit
9	witte	wit	ADJ	_	Case=Acc,Dat|Degree=Pos|Gender=Neut|Number=Plur	10	amod	_	lemma_gml=wit¹
10	lakens	laken	NOUN	_	Case=Acc,Dat|Gender=Neut|Number=Plur	11	obl	_	lemma_gml=lāken¹
11	vorhungen	vorhangen	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	lemma_gml=vorhangen|SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	_
13	to	to	ADP	_	AdpType=Prep	14	case	_	lemma_gml=tô⁴
14	noorden	noorden	NOUN	_	Case=Acc,Dat|Gender=Masc,Neut|Number=Sing	15	obl	_	lemma_gml=nōrden
15	weer	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	11	parataxis	_	lemma_gml=wēsen²
16	man	men	ADV	_	_	17	advmod	_	lemma_gml=men³
17	eyn	eyn	NUM	_	NumType=Card	15	nsubj	_	lemma_gml=êⁱn¹|SpaceAfter=No
18	,	,	PUNCT	_	_	21	punct	_	_
19	un	un	CCONJ	_	_	21	cc	_	lemma_gml=unde²
20	dat	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	21	nsubj	_	lemma_gml=dat
21	stund	stån	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	15	conj	_	lemma_gml=stân
22	oapen	oapen	ADJ	_	_	21	compound	_	lemma_gml=ōpen¹|SpaceAfter=No
23	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 compound	color:blue
1	Den	de	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	lemma_gml=dê
2	anderen	ander	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	lemma_gml=ander
3	morgen	morgen	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	lemma_gml=morgen
4	heelden	holden	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	lemma_gml=hōlden
5	de	de	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	lemma_gml=dê
6	hougenpreester	hougenpreester	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	lemma_gml=hôgenprêster
7	un	un	CCONJ	_	_	9	cc	_	lemma_gml=unde
8	de	de	DET	_	Case=Nom|Definite=Def|Number=Plur|PronType=Art	9	det	_	lemma_gml=dê
9	äldsten	old	ADJ	_	Case=Nom|Degree=Sup|Number=Plur	6	conj	_	lemma_gml=ōlt
10	råd	råd	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	4	compound	_	lemma_gml=rât|SpaceAfter=No
11	,	,	PUNCT	_	_	21	punct	_	_
12	wo	wo	ADV	_	_	21	advmod	_	lemma_gml=wô
13	see	see	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	21	nsubj	_	lemma_gml=sê
14	Jesus	Jesus	PROPN	_	Number=Sing	21	obj	_	lemma_gml=jêsus
15	an	an	ADP	_	AdpType=Prep	17	case	_	lemma_gml=an
16	m	de	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	lemma_gml=dê
17	besten	good	ADJ	_	Case=Dat|Degree=Sup|Gender=Masc|Number=Sing	21	advmod	_	lemma_gml=gôt
18	up	up	ADP	_	AdpType=Prep	20	case	_	lemma_gml=uppe
19	de	de	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	lemma_gml=dê
20	syde	syde	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	21	obl	_	lemma_gml=sîde
21	bringen	bringen	VERB	_	VerbForm=Inf	10	acl	_	lemma_gml=bringen
22	können	künnen	AUX	_	Mood=Sub|Number=Plur|Person=3|Tense=Past	21	aux	_	lemma_gml=künnen|SpaceAfter=No
23	.	.	PUNCT	_	_	4	punct	_	_

~~~


