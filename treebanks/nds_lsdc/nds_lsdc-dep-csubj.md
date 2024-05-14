---
layout: base
title:  'Statistics of csubj in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="nds_lsdc-dep-csubj-outer.html">csubj:outer</a></tt>.

15 nodes (0%) are attached to their parents as `csubj`.

12 instances of `csubj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.53333333333333.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (8; 53% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (3; 20% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 csubj	color:blue
1	Dee	dee	PRON	_	Case=Nom|Gender=Fem,Masc|Number=Sing|PronType=Dem	4	nsubj	_	lemma_gml=dê
2	nich	nich	PART	_	PartType=Neg	4	advmod	_	lemma_gml=nicht
3	stuur	stuur	ADJ	_	Degree=Pos	4	xcomp	_	lemma_gml=stûr
4	bleyv	blyven	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	11	csubj	_	lemma_gml=blîven
5	un	un	CCONJ	_	_	6	cc	_	lemma_gml=unde
6	lachde	lachen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	conj	_	lemma_gml=lachen|SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	_
8	moste	möten	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	11	aux	_	lemma_gml=mö̂ten
9	eynen	en	DET	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	lemma_gml=êin,êine,êin
10	stuten	stute	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	11	obj	_	lemma_gml=stûte
11	betalen	betalen	VERB	_	VerbForm=Inf	0	root	_	lemma_gml=betālen|SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 14 csubj	color:blue
1	Vrouwe	vrouwe	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	vocative	_	lemma_gml=vrouwe
2	Harder	Harder	PROPN	_	Number=Sing	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	is	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	lemma_gml=wēsen
5	dat	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	expl	_	lemma_gml=dê,dê,dat
6	wår	wår	ADJ	_	Degree=Pos	0	root	_	lemma_gml=wâr|SpaceAfter=No
7	,	,	PUNCT	_	_	14	punct	_	_
8	dat	dat	SCONJ	_	_	14	mark	_	lemma_gml=dat
9	See	see	PRON	_	Case=Nom|Number=Plur,Sing|Person=2,3|Polite=Form|PronType=Prs	14	nsubj	_	lemma_gml=sê
10	al	al	ADV	_	_	14	advmod	_	lemma_gml=al
11	veer	veer	NUM	_	NumType=Card	12	nummod	_	lemma_gml=vêr
12	manslüde	man	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	14	obj	_	lemma_gml=man
13	doud	doud	ADJ	_	Degree=Pos	14	xcomp	_	lemma_gml=dôt
14	hebbet	hebben	VERB	_	Mood=Ind|Number=Plur,Sing|Person=2,3|Polite=Form|Tense=Pres	6	csubj	_	lemma_gml=hebben|SpaceAfter=No
15	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubj	color:blue
1	Dat	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	lemma_gml=dat
2	is	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	lemma_gml=wēsen
3	en	en	DET	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	4	det	_	lemma_gml=êin,êine,êin
4	ungelük	ungelük	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	lemma_gml=ungelücke|SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	_
6	dat	dat	SCONJ	_	_	9	mark	_	lemma_gml=dat
7	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	lemma_gml=ik
8	nit	nich	PART	_	PartType=Neg	9	advmod	_	lemma_gml=nicht
9	dår	dår	ADV	_	_	4	csubj	_	lemma_gml=dâr
10	was	weasen	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past	9	cop	_	lemma_gml=wēsen|SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	as	as	SCONJ	_	_	15	mark	_	lemma_gml=alsô
13	dyne	dyn	DET	_	Case=Nom|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	14	det	_	lemma_gml=dîn
14	boaden	boade	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	15	nsubj	_	lemma_gml=bōde
15	ekoamen	koamen	VERB	_	Tense=Past|VerbForm=Part	9	advcl	_	lemma_gml=kōmen
16	sint	weasen	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres	15	aux	_	lemma_gml=wēsen|SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


