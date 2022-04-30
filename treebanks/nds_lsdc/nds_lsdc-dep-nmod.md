---
layout: base
title:  'Statistics of nmod in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="nds_lsdc-dep-nmod-poss.html">nmod:poss</a></tt>.

16 nodes (1%) are attached to their parents as `nmod`.

11 instances of `nmod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.9375.

The following 7 pairs of parts of speech are connected with `nmod`: <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (7; 44% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (4; 25% instances), <tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 6% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Weynige	weynig	ADJ	_	Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	lemma[gml]=weinich
2	dage	dag	NOUN	_	Gender=Masc|Number=Plur	3	nmod	_	lemma[gml]=dach
3	dårnå	dårnå	ADV	_	_	4	advmod	_	lemma[gml]=dãrnâ
4	kam	koamen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	lemma[gml]=kōmen¹
5	en	en	DET	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	lemma[gml]=êⁱn¹
6	junge	junge	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	lemma[gml]=junge
7	in	in	ADP	_	AdpType=Prep	10	case	_	lemma[gml]=in²
8	'	'	PUNCT	_	_	9	punct	_	_
9	t	dat	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	10	det	_	lemma[gml]=dat²
10	holt	holt	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	4	obl	_	lemma[gml]=holt¹|SpaceAfter=No
11	,	,	PUNCT	_	_	16	punct	_	_
12	dee	dee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	16	nsubj	_	lemma[gml]=dê¹
13	des	de	DET	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	lemma[gml]=dê¹
14	nachts	nacht	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	16	obl	_	lemma[gml]=nacht¹
15	pearde	peard	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	16	obj	_	lemma[gml]=pērt¹
16	höden	höden	VERB	_	VerbForm=Inf	6	acl	_	lemma[gml]=hö̂den
17	skul	sköälen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|VerbType=Aux	16	aux	_	lemma[gml]=schȫlen¹|SpaceAfter=No
18	,	,	PUNCT	_	_	22	punct	_	_
19	un	un	CCONJ	_	_	22	cc	_	lemma[gml]=unde²
20	de	de	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	lemma[gml]=dê¹
21	junge	junge	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	22	nsubj	_	lemma[gml]=junge
22	makede	maken	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	parataxis	_	lemma[gml]=māken
23	sik	sik	PRON	_	Case=Acc,Dat|Person=3|PronType=Prs|Reflex=Yes	22	iobj	_	lemma[gml]=sik¹
24	nich	nich	PART	_	_	25	advmod	_	lemma[gml]=nicht¹
25	wyd	wyd	ADJ	_	_	22	advmod	_	lemma[gml]=wît⁵
26	van	van	ADP	_	AdpType=Prep	28	case	_	lemma[gml]=van¹
27	der	de	DET	_	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	28	det	_	lemma[gml]=dê¹
28	eyke	eyke	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	25	obl	_	lemma[gml]=êⁱke¹
29	en	en	DET	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	31	det	_	lemma[gml]=êⁱn¹
30	grout	grout	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	31	amod	_	lemma[gml]=grôt²
31	vüür	vüür	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	22	obj	_	lemma[gml]=vü̂r¹
32	an	an	ADP	_	_	22	compound:prt	_	lemma[gml]=an|SpaceAfter=No
33	,	,	PUNCT	_	_	37	punct	_	_
34	wårby	wårby	ADV	_	_	37	advmod	_	_
35	hee	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	37	nsubj	_	lemma[gml]=hê¹
36	sik	sik	PRON	_	Case=Acc,Dat|Person=3|PronType=Prs|Reflex=Yes	37	expl:pv	_	lemma[gml]=sik¹
37	lagerde	lägeren	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	31	acl	_	lemma[gml]=lēgeren¹
38	un	un	CCONJ	_	_	41	cc	_	lemma[gml]=unde²
39	syn	syn	DET	_	Case=Acc|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	40	det:poss	_	lemma[gml]=sîn⁴
40	pypken	pypken	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	41	obj	_	_
41	smoukede	smöyken	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	37	conj	_	lemma[gml]=smö̂ken²|SpaceAfter=No
42	.	.	PUNCT	_	_	4	punct	_	_

~~~


