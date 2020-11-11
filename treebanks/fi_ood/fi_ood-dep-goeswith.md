---
layout: base
title:  'Statistics of goeswith in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `goeswith`

This relation is universal.

20 nodes (0%) are attached to their parents as `goeswith`.

20 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (16; 80% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (2; 10% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	K	K	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	2	nsubj	_	Gen=Kalium
2	korjautuu	korjautua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	myös	myös	ADV	_	_	2	advmod	_	_
4	K	K	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	6	compound	_	Gen=kalium
5	cl	Cl	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	4	goeswith	_	Gen=kloridi
6	lisällä	lisä	NOUN	_	Case=Ade|Number=Sing	2	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 goeswith	color:blue
1	Kalium	kalium	NOUN	_	Case=Nom|Number=Sing	4	nsubj:cop	_	_
2	ja	ja	CCONJ	_	_	3	cc	_	_
3	natrium	natrium	NOUN	_	Case=Nom|Number=Sing	1	conj	_	_
4	matalat	matala	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	verensok.	verensok.	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	7	nsubj:cop	_	Gen=verensokeri
7	noususuuntainen	nousu#suuntainen	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	conj	_	SpaceAfter=No
8	--	--	PUNCT	_	_	9	punct	_	_
9	aloitettu	aloittaa	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	4	parataxis	_	_
10	Actrpid-	Actrapid	PROPN	_	Case=Nom|Number=Sing|Typo=Yes	9	obj	_	Gen_desc=lääke
11	infuusio	infuusio	NOUN	_	Case=Nom|Number=Sing	10	goeswith	_	Gen=tiputus|SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 goeswith	color:blue
1	Meillä	minä	PRON	_	Case=Ade|Number=Plur|Person=1|PronType=Prs	3	xcomp	_	_
2	vaan	vaan	ADV	_	_	3	advmod	_	_
3	sattuu	sattua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	olemaan	olla	AUX	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	1	cop:own	_	_
5	muitakin	muu	PRON	_	Case=Par|Clitic=Kin|Number=Plur|PronType=Ind	6	det	_	_
6	puheenaiheita	puheen#aihe	NOUN	_	Case=Par|Number=Plur	1	nsubj:cop	_	_
7	ku	kun	SCONJ	_	Style=Coll	8	mark	_	_
8	lapset	lapsi	NOUN	_	Case=Nom|Number=Plur	5	advcl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	14	punct	_	SpaceAfter=No
10	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	14	aux	_	_
11	lapsettomat	lapseton	ADJ	_	Case=Nom|Degree=Pos|Derivation=Ton|Number=Plur	12	amod	_	_
12	kaverit	kaveri	NOUN	_	Case=Nom|Number=Plur	14	nsubj	_	_
13	edes	edes	ADV	_	_	14	advmod	_	_
14	kiinnostu	kiinnostua	VERB	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
15	lapsi	lapsi	NOUN	_	Case=Nom|Number=Sing	17	amod	_	_
16	aiheisista	aiheinen	ADJ	_	Case=Ela|Degree=Pos|Derivation=Inen|Number=Plur	15	goeswith	_	_
17	puheista	puhe	NOUN	_	Case=Ela|Number=Plur	14	obl	_	_
18	vaan	vaan	CCONJ	_	_	20	cc	_	_
19	hekin	he	PRON	_	Case=Nom|Clitic=Kin|Number=Plur|Person=3|PronType=Prs	20	nsubj	_	_
20	kohtelee	kohdella	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	_	_
21	poikaani	poika	NOUN	_	Case=Par|Number=Sing|Number[psor]=Sing|Person[psor]=1	20	obj	_	_
22	ihmisenä	ihminen	NOUN	_	Case=Ess|Number=Sing	20	obl	_	SpaceAfter=No
23	,	,	PUNCT	_	_	25	punct	_	SpaceAfter=No
24	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	25	aux	_	_
25	lässytä	lässyttää	VERB	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	20	conj	_	_
26	ku	kun	SCONJ	_	Style=Coll	27	mark	_	_
27	vauvalle	vauva	NOUN	_	Case=All|Number=Sing	25	advcl	_	SpaceAfter=No
28	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


