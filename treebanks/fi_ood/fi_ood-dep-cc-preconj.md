---
layout: base
title:  'Statistics of cc:preconj in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-cc.html">cc</a></tt>.

6 nodes (0%) are attached to their parents as `cc:preconj`.

6 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 3 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (4; 67% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 17% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADP.html">ADP</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Sekä	sekä	CCONJ	_	_	2	cc:preconj	_	_
2	IABP	IABP	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	5	obj	_	Gen=kontrapulsaattori
3	että	että	CCONJ	_	_	4	cc	_	_
4	dreenit	dreeni	NOUN	_	Case=Nom|Number=Plur	2	conj	_	Gen=laskuputket
5	poistettu	poistaa	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	SENSE=0
6	potilaalta	potilas	NOUN	_	Case=Abl|Number=Sing	5	obl	_	_
7	tänään	tänään	ADV	_	_	5	advmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 cc:preconj	color:blue
1	Käännetty	kääntää	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	SENSE=0
2	usein	usein	ADV	_	_	1	advmod	_	_
3	asentoa	asento	NOUN	_	Case=Par|Number=Sing	1	obj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	10	punct	_	_
5	-	-	PUNCT	_	_	10	punct	_	SpaceAfter=No
6	milloin	milloin	ADV	_	_	10	cc:preconj	_	_
7	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
8	tyynyt	tyyny	NOUN	_	Case=Nom|Number=Plur	10	nsubj:cop	_	_
9	olleet	olla	AUX	_	Case=Nom|Degree=Pos|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Act	10	cop	_	SENSE=0
10	huonosti	huonosti	ADV	_	Derivation=Sti	1	parataxis	_	_
11	-	-	PUNCT	_	_	13	punct	_	SpaceAfter=No
12	milloin	milloin	ADV	_	_	13	cc	_	_
13	polttanut	polttaa	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	10	conj	_	_
14	selkää	selkä	NOUN	_	Case=Par|Number=Sing	13	obj	_	_
15	tai	tai	CCONJ	_	_	17	cc	_	_
16	polvet	polvi	NOUN	_	Case=Nom|Number=Plur	17	nsubj:cop	_	_
17	huonosti	huonosti	ADV	_	Derivation=Sti	10	conj	_	SpaceAfter=No
18	...	...	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 cc:preconj	color:blue
1	En	ei	AUX	_	Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin|Voice=Act	4	aux	_	_
2	nyt	nyt	ADV	_	_	4	advmod	_	_
3	muuten	muuten	ADV	_	_	4	advmod	_	_
4	ota	ottaa	VERB	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	kantaa	kanta	NOUN	_	Case=Par|Number=Sing	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	13	punct	_	_
7	mut	mutta	CCONJ	_	Style=Coll	13	cc	_	_
8	liika	liika	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	11	amod	_	_
9	sugar-free	sugar#free	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod	_	_
10	energiajuomien	energia#juoma	NOUN	_	Case=Gen|Number=Plur	11	nmod:gobj	_	_
11	juominen	juominen	NOUN	_	Case=Nom|Derivation=Minen|Number=Sing	13	nsubj:cop	_	_
12	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
13	vaarallista	vaarallinen	ADJ	_	Case=Par|Degree=Pos|Derivation=Llinen|Number=Sing	4	conj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	paitsi	paitsi	ADP	_	AdpType=Prep	16	cc:preconj	_	_
16	kofeiinin	kofeiini	NOUN	_	Case=Gen|Number=Sing	13	obl	_	_
17	myös	myös	ADV	_	_	18	cc	_	_
18	aspartaamin	aspartaami	NOUN	_	Case=Gen|Number=Sing	16	conj	_	_
19	(	(	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	makeutusaine	makeutus#aine	NOUN	_	Case=Nom|Number=Sing	18	appos	_	SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	_
22	maksalla	maksa	NOUN	_	Case=Ade|Number=Sing	20	parataxis	_	_
23	iso	iso	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	24	amod	_	_
24	työ	työ	NOUN	_	Case=Nom|Number=Sing	22	nsubj:cop	_	_
25	metaboloida	metaboloida	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	acl	_	_
26	se	se	PRON	_	Case=Nom|Number=Sing|PronType=Dem	27	det	_	_
27	myrkky	myrkky	NOUN	_	Case=Nom|Number=Sing	25	obj	_	SpaceAfter=No
28	)	)	PUNCT	_	_	20	punct	_	SpaceAfter=No
29	,	,	PUNCT	_	_	30	punct	_	_
30	tauriinin	tauriini	NOUN	_	Case=Gen|Number=Sing	16	conj	_	_
31	jne.	jne.	ADV	_	Abbr=Yes	16	advmod	_	_
32	johdosta	johdosta	ADP	_	AdpType=Post	16	case	_	SpaceAfter=No
33	.	.	PUNCT	_	_	4	punct	_	_

~~~


