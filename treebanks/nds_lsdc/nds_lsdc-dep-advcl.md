---
layout: base
title:  'Statistics of advcl in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `advcl`

This relation is universal.

42 nodes (2%) are attached to their parents as `advcl`.

32 instances of `advcl` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.73809523809524.

The following 7 pairs of parts of speech are connected with `advcl`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (28; 67% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (4; 10% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (4; 10% instances), <tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 advcl	color:blue
1	Ik	ik	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	lemma[gml]=ik
2	wol	willen	VERB	_	Mood=Sub|Number=Sing|Person=1|Tense=Past	0	root	_	lemma[gml]=willen¹|Mood[regional]=Ind|SpaceAfter=No
3	,	,	PUNCT	_	_	9	punct	_	_
4	dat	dat	SCONJ	_	_	9	mark	_	lemma[gml]=dat²
5	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	lemma[gml]=ik
6	in	in	ADP	_	AdpType=Prep	8	case	_	lemma[gml]=in²
7	de	de	DET	_	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	Case[regional]=Acc|lemma[gml]=dê¹
8	stad	stad	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	9	obl	_	Case[regional]=Acc|lemma[gml]=stat⁴
9	sat	sitten	VERB	_	Mood=Sub|Number=Sing|Person=1|Tense=Past	2	advcl	_	lemma[gml]=sitten|Mood[regional]=Ind|SpaceAfter=No
10	!	!	PUNCT	_	_	2	punct	_	SpaceAfter=No
11	"	"	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 22 advcl	color:blue
1	-	-	PUNCT	_	_	4	punct	_	_
2	De	de	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	lemma[gml]=dê¹
3	buur	buur	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	lemma[gml]=bûr¹
4	smeyt	smyten	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma[gml]=smyten
5	sik	sik	PRON	_	Case=Acc,Dat|Number=Sing|Person=3|PronType=Rcp	4	obj	_	lemma[gml]=sik¹
6	van	van	ADP	_	AdpType=Prep	9	case	_	lemma[gml]=van¹
7	de	de	DET	_	Case=Dat|Gender=Fem|Number=Sing|PronType=Art	9	det	_	lemma[gml]=dê¹
8	eyne	eyn	NUM	_	Case=Dat|Gender=Fem|Number=Sing	9	nummod	_	lemma[gml]=êⁱn¹
9	syde	syde	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	4	obl	_	lemma[gml]=sîde¹
10	up	up	ADP	_	AdpType=Prep	12	case	_	lemma[gml]=up²
11	de	de	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	lemma[gml]=dê¹
12	andere	ander	ADJ	_	Case=Acc|Gender=Fem|Number=Sing	9	nmod	_	lemma[gml]=ander|SpaceAfter=No
13	,	,	PUNCT	_	_	18	punct	_	_
14	et	et	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	expl	_	lemma[gml]=et¹
15	was	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	18	cop	_	lemma[gml]=wēsen²
16	em	hee	PRON	_	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	18	obj	_	lemma[gml]=hê¹
17	nich	nich	PART	_	PartType=Neg	18	advmod	_	lemma[gml]=nicht¹
18	müägelik	möägelik	ADJ	_	Degree=Pos	4	parataxis	_	lemma[gml]=mȫgelĩk¹|SpaceAfter=No
19	,	,	PUNCT	_	_	22	punct	_	_
20	dat	dat	SCONJ	_	_	22	mark	_	lemma[gml]=dat²
21	hee	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	nsubj	_	lemma[gml]=hê¹
22	slåpen	slåpen	VERB	_	VerbForm=Inf	18	advcl	_	lemma[gml]=slâpen
23	kon	künnen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	22	aux	_	lemma[gml]=künnen|SpaceAfter=No
24	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 14 advcl	color:blue
1	In	in	ADP	_	AdpType=Prep	3	case	_	lemma[gml]=in²
2	de	de	DET	_	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	lemma[gml]=dê¹|Case[regional]=Acc
3	stad	stad	NOUN	_	Gender=Fem|Number=Sing	4	obl	_	lemma[gml]=stat⁴
4	hove	höven	VERB	_	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	lemma[gml]=hö̂ven¹
5	y	jy	PRON	_	Case=Nom|Person=2|PronType=Prs	4	nsubj	_	lemma[gml]=gî²
6	niks	niks	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Neg	7	obj	_	lemma[gml]=nichtes
7	eleyrd	leyren	VERB	_	Aspect=Perf|VerbForm=Part	4	xcomp	_	lemma[gml]=lêren
8	te	to	PART	_	PartType=Inf	7	mark	_	lemma[gml]=tô⁵
9	hebben	hebben	AUX	_	VerbForm=Inf	7	aux	_	lemma[gml]=hebben|SpaceAfter=No
10	,	,	PUNCT	_	_	14	punct	_	_
11	as	as	SCONJ	_	_	14	mark	_	lemma[gml]=alsô
12	y	jy	PRON	_	Case=Nom|Person=2|PronType=Prs	14	nsubj	_	lemma[gml]=gî²
13	mer	men	ADV	_	_	14	advmod	_	lemma[gml]=men³
14	gefyvd	gefyvd	ADJ	_	Degree=Pos	4	advcl	_	_
15	sint	weasen	AUX	_	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	14	cop	_	lemma[gml]=wēsen²
16	-	-	PUNCT	_	_	18	punct	_	_
17	en	un	CCONJ	_	_	18	cc	_	lemma[gml]=unde²
18	dát	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	4	parataxis	_	lemma[gml]=dat²
19	sin	weasen	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	18	cop	_	lemma[gml]=wēsen²
20	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	18	nsubj	_	lemma[gml]=ik|SpaceAfter=No
21	!	!	PUNCT	_	_	4	punct	_	_

~~~


