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

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADP.html">ADP</a></tt> (5; 56% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt> (3; 33% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


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
6	un	un	DET	_	_	8	det	_	lemma_gml=unde²
7	Wiesken	Wiesken	PROPN	_	Number=Sing	8	nsubj	_	_
8	ward	werden	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	lemma_gml=wērden¹
9	roud	roud	ADJ	_	Degree=Pos	8	xcomp	_	lemma_gml=rôt⁴
10	as	as	ADP	_	_	11	case	_	lemma_gml=alsô
11	vüür	vüür	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	9	nmod	_	lemma_gml=vü̂r¹|SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 compound	color:blue
1	Beaden	beaden	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	lemma_gml=bēden(t)
2	un	un	CCONJ	_	_	3	cc	_	lemma_gml=unde²
3	vlöken	vloken	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	1	conj	_	lemma_gml=vlôken(t)
4	wesselde	wesselen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma_gml=wes(se)len
5	mid	mid	ADP	_	AdpType=Prep	6	case	_	lemma_gml=mit
6	enander	enander	PRON	_	Case=Acc,Dat|PronType=Rcp	4	obl	_	lemma_gml=êⁱnander
7	af	af	ADV	_	_	4	compound	_	lemma_gml=af²|SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

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
6	hougenpreester	hougepreester	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	lemma_gml=hôgenprêster
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


