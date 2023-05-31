---
layout: base
title:  'Statistics of appos in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `appos`

This relation is universal.

11 nodes (0%) are attached to their parents as `appos`.

11 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.90909090909091.

The following 7 pairs of parts of speech are connected with `appos`: <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (4; 36% instances), <tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt>-<tt><a href="nds_lsdc-pos-NUM.html">NUM</a></tt> (1; 9% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-X.html">X</a></tt> (1; 9% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 appos	color:blue
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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 appos	color:blue
1	Beskreaven	beskryven	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	lemma[gml]=beschrîven
2	un	un	CCONJ	_	_	10	cc	_	lemma[gml]=unde²
3	to	to	ADP	_	AdpType=Prep	7	case	_	lemma[gml]=tô⁴
4	'	'	PUNCT	_	_	5	punct	_	_
5	m	de	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	lemma[gml]=dê¹
6	31.	31.	ADJ	_	Case=Dat|Gender=Masc|Number=Sing	7	amod	_	_
7	oktober	oktober	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	10	obl	_	_
8	ao.	ao.	ADV	_	_	7	advmod	_	_
9	1817	1817	NUM	_	_	8	appos	_	_
10	heruutgeaven	heruutgeaven	VERB	_	Aspect=Perf|VerbForm=Part	1	conj	_	_
11	van	van	ADP	_	AdpType=Prep	12	case	_	lemma[gml]=van¹
12	Claus	Claus	PROPN	_	Gender=Masc|Number=Sing	10	obl	_	_
13	Harms	Harms	PROPN	_	Gender=Masc|Number=Sing	12	flat	_	_
14	archidiakonus	archidiakonus	NOUN	_	Gender=Masc|Number=Sing	12	appos	_	_
15	an	an	ADP	_	AdpType=Prep	17	case	_	lemma[gml]=an
16	de	de	DET	_	Case=Acc,Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	lemma[gml]=dê¹
17	St.	St.	PROPN	_	Case=Acc,Dat|Gender=Fem|Number=Sing	14	nmod	_	_
18	Nicolaikarke	Nicolaikarke	PROPN	_	Case=Dat|Gender=Fem|Number=Sing	17	flat	_	_
19	in	in	ADP	_	AdpType=Prep	20	case	_	lemma[gml]=in²
20	Kiel	Kiel	PROPN	_	Number=Sing	17	nmod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 appos	color:blue
1	Beskreaven	beskryven	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	lemma[gml]=beschrîven
2	un	un	CCONJ	_	_	10	cc	_	lemma[gml]=unde²
3	to	to	ADP	_	AdpType=Prep	7	case	_	lemma[gml]=tô⁴
4	'	'	PUNCT	_	_	5	punct	_	_
5	m	de	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	lemma[gml]=dê¹
6	31.	31.	ADJ	_	Case=Dat|Gender=Masc|Number=Sing	7	amod	_	_
7	oktober	oktober	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	10	obl	_	_
8	ao.	ao.	ADV	_	_	7	advmod	_	_
9	1817	1817	NUM	_	_	8	appos	_	_
10	heruutgeaven	heruutgeaven	VERB	_	Aspect=Perf|VerbForm=Part	1	conj	_	_
11	van	van	ADP	_	AdpType=Prep	12	case	_	lemma[gml]=van¹
12	Claus	Claus	PROPN	_	Gender=Masc|Number=Sing	10	obl	_	_
13	Harms	Harms	PROPN	_	Gender=Masc|Number=Sing	12	flat	_	_
14	archidiakonus	archidiakonus	NOUN	_	Gender=Masc|Number=Sing	12	appos	_	_
15	an	an	ADP	_	AdpType=Prep	17	case	_	lemma[gml]=an
16	de	de	DET	_	Case=Acc,Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	lemma[gml]=dê¹
17	St.	St.	PROPN	_	Case=Acc,Dat|Gender=Fem|Number=Sing	14	nmod	_	_
18	Nicolaikarke	Nicolaikarke	PROPN	_	Case=Dat|Gender=Fem|Number=Sing	17	flat	_	_
19	in	in	ADP	_	AdpType=Prep	20	case	_	lemma[gml]=in²
20	Kiel	Kiel	PROPN	_	Number=Sing	17	nmod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	10	punct	_	_

~~~


