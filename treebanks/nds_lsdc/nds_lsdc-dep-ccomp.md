---
layout: base
title:  'Statistics of ccomp in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `ccomp`

This relation is universal.

290 nodes (1%) are attached to their parents as `ccomp`.

232 instances of `ccomp` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.68620689655172.

The following 12 pairs of parts of speech are connected with `ccomp`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (189; 65% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (40; 14% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (20; 7% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt> (14; 5% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-INTJ.html">INTJ</a></tt> (9; 3% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (8; 3% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt> (5; 2% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 ccomp	color:blue
1	Hee	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	lemma_gml=hê¹
2	vorwündert	vorwunderen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	lemma_gml=vorwunderen
3	sik	sik	PRON	_	Case=Acc,Dat|Person=3|PronType=Prs|Reflex=Yes	2	expl:pv	_	lemma_gml=sik¹
4	un	un	CCONJ	_	_	5	cc	_	lemma_gml=unde²
5	vrågt	vrågen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	lemma_gml=vrâgen
6	den	de	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	lemma_gml=dê¹
7	waerd	waerd	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	5	iobj	_	lemma_gml=wērt¹|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	hwat	wat	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Int	11	obj	_	lemma_gml=wat(te)³
10	dat	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	lemma_gml=dat
11	bedüdde	bedüden	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	ccomp	_	lemma_gml=bedü̂den|SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 ccomp	color:blue
1	Pastor	pastor	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	lemma_gml=pâstôr
2	mid	mid	ADP	_	AdpType=Prep	4	case	_	lemma_gml=mit
3	en	en	DET	_	Case=Acc,Dat|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	lemma_gml=êin,êine,êin
4	handgebäärde	handgebäärde	NOUN	_	Case=Acc,Dat|Gender=Masc|Number=Sing	1	orphan	_	lemma_gml=hantgebêrde|SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	_
6	as	as	SCONJ	_	_	9	cc	_	lemma_gml=alsô
7	wul	willen	AUX	_	Mood=Ind,Sub|Number=Sing|Person=3|Tense=Past	9	aux	_	lemma_gml=willen
8	hee	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	lemma_gml=hê,sê,et
9	seggen	seggen	VERB	_	VerbForm=Inf	4	acl	_	lemma_gml=seggen|SpaceAfter=No
10	:	:	PUNCT	_	_	11	punct	_	_
11	Tappen	tappe	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	9	ccomp	_	lemma_gml=tappe
12	af	af	ADP	_	_	11	orphan	_	lemma_gml=af|SpaceAfter=No
13	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 ccomp	color:blue
1	–	–	PUNCT	_	_	6	punct	_	_
2	»	»	PUNCT	_	_	6	punct	_	SpaceAfter=No
3	Hyr	hyr	ADV	_	_	6	advmod	_	lemma_gml=hîr
4	is	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	lemma_gml=wēsen
5	en	en	DET	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	lemma_gml=êin,êine,êin
6	nygen	ny	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	9	ccomp	_	lemma_gml=nîe|SpaceAfter=No
7	!	!	PUNCT	_	_	6	punct	_	SpaceAfter=No
8	«	«	PUNCT	_	_	6	punct	_	_
9	reyp	ropen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma_gml=rôpen
10	de	de	DET	_	Case=Nom|Definite=Def|Gender=Fem,Masc|Number=Sing|PronType=Art	11	det	_	lemma_gml=dê,dê,dat
11	eyn	eyn	PRON	_	Case=Nom|Gender=Fem,Masc|Number=Sing|PronType=Ind	9	nsubj	_	lemma_gml=êin,êine,êin|SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


