---
layout: base
title:  'Statistics of nmod in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="nds_lsdc-dep-nmod-poss.html">nmod:poss</a></tt>.

26 nodes (1%) are attached to their parents as `nmod`.

20 instances of `nmod` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.61538461538462.

The following 12 pairs of parts of speech are connected with `nmod`: <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (9; 35% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (4; 15% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="nds_lsdc-pos-NUM.html">NUM</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="nds_lsdc-pos-NUM.html">NUM</a></tt>-<tt><a href="nds_lsdc-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod	color:blue
1	Hee	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	lemma[gml]=hê¹
2	hadde	hebben	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma[gml]=hebben
3	eyne	en	DET	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	lemma[gml]=êⁱn¹
4	vrouw	vrouwe	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	lemma[gml]=vrouwe²
5	mid	mid	ADP	_	AdpType=Prep	7	case	_	lemma[gml]=mit
6	vyv	vyv	NUM	_	NumType=Card	7	nummod	_	lemma[gml]=vîf
7	kinder	kind	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	4	nmod	_	lemma[gml]=kint|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	dee	dee	PRON	_	Case=Nom|Number=Plur|PronType=Rel	12	nsubj	_	lemma[gml]=dê¹
10	aver	avers	ADV	_	_	12	advmod	_	lemma[gml]=āvers
11	alle	al	PRON	_	Case=Nom|Number=Plur|PronType=Tot	9	appos	_	lemma[gml]=al
12	uutsågen	uutseen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	4	acl	_	lemma[gml]=ûtsên|SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	äs	as	SCONJ	_	_	18	mark	_	lemma[gml]=alsô
15	wän	wan	SCONJ	_	_	18	mark	_	lemma[gml]=wan³
16	see	see	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	18	nsubj	_	_
17	bast	bast	NOUN	_	Case=Acc|Gender=Masc,Neut|Number=Sing	18	obj	_	lemma[gml]=bast
18	gnageden	gnagen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	12	advcl	_	lemma[gml]=gnāgen|SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nmod	color:blue
1	Alle	al	PRON	_	Case=Nom|Number=Plur|PronType=Tot	2	nsubj	_	lemma[gml]=al
2	lachen	lachen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	lemma[gml]=lachen¹
3	harde	harde	ADV	_	_	2	advmod	_	lemma[gml]=hā̆rde
4	up	up	ADP	_	_	2	compound	_	lemma[gml]=up¹|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	un	un	DET	_	_	8	det	_	lemma[gml]=unde²
7	Wiesken	Wiesken	PROPN	_	Number=Sing	8	nsubj	_	_
8	ward	werden	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	lemma[gml]=wērden¹
9	roud	roud	ADJ	_	Degree=Pos	8	xcomp	_	lemma[gml]=rôt⁴
10	as	as	ADP	_	_	11	case	_	lemma[gml]=alsô
11	vüür	vüür	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	9	nmod	_	lemma[gml]=vü̂r¹|SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 nmod	color:blue
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


