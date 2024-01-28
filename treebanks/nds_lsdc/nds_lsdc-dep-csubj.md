---
layout: base
title:  'Statistics of csubj in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `csubj`

This relation is universal.

6 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (4; 67% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt> (1; 17% instances).


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
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 27 csubj	color:blue
1	Dat	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	lemma_gml=dat
2	is	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Cop	4	cop	_	lemma_gml=wēsen²
3	ouk	ouk	ADV	_	_	4	advmod	_	lemma_gml=ôk
4	wår	wår	ADJ	_	Degree=Pos	0	root	_	lemma_gml=wâr¹
5	un	un	CCONJ	_	_	10	cc	_	lemma_gml=unde²
6	is	weasen	AUX	_	Number=Sing|Person=3|VerbType=Aux	10	aux:pass	_	lemma_gml=wēsen²
7	döär	döär	ADP	_	AdpType=Prep	9	case	_	lemma_gml=dȫr¹
8	veale	veale	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	9	amod	_	lemma_gml=vēle¹
9	teyken	teyken	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	10	obl:agent	_	lemma_gml=têⁱken¹
10	bewysd	bewysen	VERB	_	Aspect=Perf|VerbForm=Part	4	conj	_	lemma_gml=bewîsen|SpaceAfter=No
11	,	,	PUNCT	_	_	27	punct	_	_
12	dat	dat	SCONJ	_	_	27	mark	_	lemma_gml=dat
13	düslike	düslik	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	15	amod	_	lemma_gml=düslĩk
14	vordamde	vordammen	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	15	amod	_	lemma_gml=vordammen
15	saelen	saele	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	27	nsubj:pass	_	lemma_gml=sêle⁴|SpaceAfter=No
16	,	,	PUNCT	_	_	23	punct	_	_
17	dee	dee	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	23	nsubj	_	lemma_gml=dê¹
18	in	in	ADP	_	AdpType=Prep	20	case	_	lemma_gml=in²
19	dem	de	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	lemma_gml=dê¹
20	grav	grav	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	23	obl	_	lemma_gml=graf
21	keyne	keyn	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Neg	22	det	_	lemma_gml=kêⁱn²
22	rouwe	rouwe	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	23	obj	_	lemma_gml=rouwe¹
23	hebben	hebben	VERB	_	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	15	acl	_	lemma_gml=hebben|SpaceAfter=No
24	,	,	PUNCT	_	_	27	punct	_	_
25	van	van	ADP	_	AdpType=Prep	26	case	_	lemma_gml=van¹
26	god	god	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	27	obl:agent	_	lemma_gml=got¹
27	bruked	bruken	VERB	_	Aspect=Perf|VerbForm=Part	4	csubj	_	lemma_gml=brûken
28	warden	werden	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux	27	aux:pass	_	lemma_gml=wērden¹
29	de	de	DET	_	Case=Acc|Definite=Def|Number=Plur|PronType=Art	30	det	_	lemma_gml=dê¹
30	slimmen	slim	ADJ	_	Case=Acc|Number=Plur	34	obj	_	lemma_gml=slim¹
31	in	in	ADP	_	AdpType=Prep	32	case	_	lemma_gml=in²
32	tucht	tucht	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	34	obl	_	lemma_gml=tucht¹
33	to	to	PART	_	PartType=Inf	34	mark	_	lemma_gml=tô⁵
34	holden	holden	VERB	_	VerbForm=Inf	27	ccomp	_	lemma_gml=hōlden|SpaceAfter=No
35	.	.	PUNCT	_	_	4	punct	_	_

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


