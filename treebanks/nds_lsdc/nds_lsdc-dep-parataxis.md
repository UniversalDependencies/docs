---
layout: base
title:  'Statistics of parataxis in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `parataxis`

This relation is universal.

58 nodes (2%) are attached to their parents as `parataxis`.

55 instances of `parataxis` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.948275862069.

The following 11 pairs of parts of speech are connected with `parataxis`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (36; 62% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (6; 10% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (4; 7% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (4; 7% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 parataxis	color:blue
1	Dat	Dat	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	lemma[gml]=dat²
2	wet	weaten	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	lemma[gml]=wēten¹
3	y	jy	PRON	_	Case=Nom|Person=2|PronType=Prs	2	nsubj	_	lemma[gml]=gî²
4	net	net	ADV	_	_	6	advmod	_	lemma[gml]=net³
5	sou	sou	ADV	_	_	6	advmod	_	lemma[gml]=sô²
6	good	good	ADJ	_	Degree=Pos	2	advmod	_	lemma[gml]=gôt²
7	as	as	ADP	_	_	8	case	_	lemma[gml]=alsô
8	ikke	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	obl	_	lemma[gml]=ik|SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	dat	dat	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	obj	_	lemma[gml]=dat²
11	do	doon	VERB	_	Mood=Ind|Person=2|Tense=Pres	2	parataxis	_	lemma[gml]=dôn¹
12	y	jy	PRON	_	Case=Nom|Person=2|PronType=Prs	11	nsubj	_	lemma[gml]=gî²|SpaceAfter=No
13	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 parataxis	color:blue
1	Sü	seen	VERB	_	Mood=Imp|Number=Sing|Person=2	0	root	_	lemma[gml]=sên|SpaceAfter=No
2	,	,	PUNCT	_	_	8	punct	_	_
3	dat	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	8	nsubj	_	lemma[gml]=dat²
4	is	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	cop	_	lemma[gml]=wēsen²
5	al	al	ADV	_	_	8	advmod	_	lemma[gml]=al
6	dat	dat	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	lemma[gml]=dat²
7	drüdde	drüdde	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	lemma[gml]=drüdde
8	mål	mål	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	1	parataxis	_	lemma[gml]=mâl¹|SpaceAfter=No
9	,	,	PUNCT	_	_	15	punct	_	_
10	dat	dat	SCONJ	_	_	15	mark	_	lemma[gml]=dat²
11	see	see	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	lemma[gml]=sê¹
12	den	de	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	lemma[gml]=dê¹
13	vadem	vadem	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	15	obj	_	lemma[gml]=vādem
14	loupen	loupen	VERB	_	VerbForm=Inf	15	xcomp	_	lemma[gml]=lôpen¹
15	löt	låten	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	acl	_	lemma[gml]=lâten¹|SpaceAfter=No
16	!	!	PUNCT	_	_	1	punct	_	SpaceAfter=No
17	’	’	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 parataxis	color:blue
1	Dårup	dårup	ADV	_	_	11	advmod	_	lemma[gml]=dãrup(pe)
2	mut	möten	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux	11	aux	_	lemma[gml]=mö̂ten²
3	'	'	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	e	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	lemma[gml]=hê¹
5	de	de	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	lemma[gml]=dê¹
6	düvel	düvel	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	11	obj	_	lemma[gml]=dü̂vel
7	by	by	ADP	_	AdpType=Prep	10	case	_	lemma[gml]=bî
8	'	'	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	n	de	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	lemma[gml]=dê¹
10	kop	kop	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	11	obl	_	lemma[gml]=kop²
11	pakked	pakken	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	lemma[gml]=packen¹
12	hebben	hebben	AUX	_	VerbForm=Inf|VerbType=Aux	11	aux	_	lemma[gml]=hebben
13	en	un	CCONJ	_	_	14	cc	_	lemma[gml]=unde²
14	uuteropen	uutropen	VERB	_	Aspect=Perf|VerbForm=Part	11	conj	_	SpaceAfter=No
15	:	:	PUNCT	_	_	14	punct	_	_
16	'	'	PUNCT	_	_	17	punct	_	SpaceAfter=No
17	Belsebul	belsebul	NOUN	_	Number=Sing	14	parataxis	_	SpaceAfter=No
18	!	!	PUNCT	_	_	17	punct	_	_
19	Smalbek	smalbek	NOUN	_	Number=Sing	17	parataxis	_	SpaceAfter=No
20	!	!	PUNCT	_	_	19	punct	_	_
21	Sikkebård	sikkebård	NOUN	_	Number=Sing	19	parataxis	_	SpaceAfter=No
22	!	!	PUNCT	_	_	21	punct	_	_
23	Kumst	koamen	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	21	parataxis	_	lemma[gml]=kōmen¹
24	e	du	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	23	nsubj	_	lemma[gml]=dû¹
25	her	her	ADV	_	_	23	advmod	_	lemma[gml]=hēr²
26	um	üm	SCONJ	_	_	30	mark	_	lemma[gml]=ümme⁴
27	baas	baas	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	30	obj	_	lemma[gml]=bās
28	Julfring	Julfring	PROPN	_	Number=Sing	27	flat	_	_
29	te	te	PART	_	PartType=Inf	30	mark	_	lemma[gml]=tô⁵
30	halen	halen	VERB	_	VerbForm=Inf	23	advcl	_	lemma[gml]=hālen¹|SpaceAfter=No
31	?	?	PUNCT	_	_	30	punct	_	SpaceAfter=No
32	'	'	PUNCT	_	_	17	punct	_	_

~~~


