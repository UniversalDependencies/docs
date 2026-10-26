---
layout: base
title:  'Statistics of nmod:appos in UD_Hausa-EasternAutogramm'
udver: '2'
---

## Treebank Statistics: UD_Hausa-EasternAutogramm: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="ha_easternautogramm-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="ha_easternautogramm-dep-nmod-poss.html">nmod:poss</a></tt>.

129 nodes (1%) are attached to their parents as `nmod:appos`.

128 instances of `nmod:appos` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1937984496124.

The following 5 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="ha_easternautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ha_easternautogramm-pos-PROPN.html">PROPN</a></tt> (80; 62% instances), <tt><a href="ha_easternautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ha_easternautogramm-pos-NUM.html">NUM</a></tt> (20; 16% instances), <tt><a href="ha_easternautogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ha_easternautogramm-pos-PROPN.html">PROPN</a></tt> (17; 13% instances), <tt><a href="ha_easternautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ha_easternautogramm-pos-NOUN.html">NOUN</a></tt> (10; 8% instances), <tt><a href="ha_easternautogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ha_easternautogramm-pos-NOUN.html">NOUN</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:appos	color:blue
1	Yàr̃iːmà	yàr̃iːmà	NOUN	_	Gender=Masc	4	nsubj	_	Gloss=prince.Masc
2	Charles	Charles	PROPN	_	_	1	nmod:appos	_	Gloss=Charles
3	yaː	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	4	aux	_	Gloss=3Masc.Perf
4	kai	kai	VERB	_	_	0	root	_	Gloss=reach/carry_to
5	zìyaːr̃àː	zìyaːr̃àː	NOUN	_	Gender=Fem	4	obj	_	Gloss=visit.Fem
6	zuwàː	zuwàː	ADP	_	_	7	case	_	Gloss=towards
7	Afìr̃kà	Afìr̃kà	PROPN	_	_	5	nmod	_	Gloss=Africa
8	ta	na	PART	_	Case=Gen|Gender=Fem|PartType=Case	9	case	_	Gloss=Gen.Fem
9	Yâmma	yâmma	ADV	_	_	7	nmod	_	Gloss=west

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:appos	color:blue
1	don	don	ADP	_	_	2	case	_	Gloss=because
2	hakà	hakà	ADV	_	_	15	advmod	_	Gloss=thus
3	neː	neː	PART	_	PartType=Foc	2	discourse	_	Gloss=Emph
4	à	à	ADP	_	_	5	case	_	Gloss=at
5	shèːkaràr̃	shèːkaràː	NOUN	_	Definite=Cons|Gender=Fem	15	obl:mod	_	Gloss=year.Fem.Cons
6	alìf	alìf	NUM	_	_	5	nmod:appos	_	Gloss=one_thousand
7	dà	dà	CCONJ	_	_	8	cc	_	Gloss=and
8	ɗàriː	ɗàriː	NUM	_	Gender=Fem	6	conj	_	Gloss=hundred
9	tar̃à	tar̃à	NUM	_	_	8	nummod	_	Gloss=nine
10	dà	dà	CCONJ	_	_	11	cc	_	Gloss=and
11	hàmsin	hàmsin	NOUN	_	Definite=Cons|Gender=Masc	6	conj	_	Gloss=fifty
12	dà	dà	CCONJ	_	_	13	cc	_	Gloss=and
13	takwàs	takwàs	NUM	_	_	6	conj	_	Gloss=eight
14	ya	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	15	aux	_	Gloss=3Masc.Perf.Rel|Relative=Yes
15	zoː	zoː	VERB	_	_	0	root	_	Gloss=go
16	nân	nân	ADV	_	Deixis=ProxS|PronType=Dem	15	obl	_	Gloss=ProxS
17	Landân	Landân	PROPN	_	_	16	appos	_	Gloss=London|SpaceAfter=No
18	,	,	PUNCT	_	_	19	punct	_	Gloss=PUNCT
19	indà	indà	PRON	_	PronType=Rel	17	acl:relcl	_	Gloss=where
20	ya	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	21	aux	_	Gloss=3Masc.Perf.Rel|Relative=Yes
21	shìga	shig-	VERB	_	_	19	ccomp	_	Gloss=enter
22	Kwaleːjìn	kwaleːjìː	NOUN	_	Definite=Cons|Gender=Masc	21	obl	_	Gloss=college.Masc.Cons
23	Kàɗe-Kàɗe	kaɗìː	NOUN	_	Number=Plur	22	nmod	_	Gloss=music.Plur
24	dà	dà	CCONJ	_	_	25	cc	_	Gloss=and
25	Wàːƙe-Wàːƙe	waːƙàː	NOUN	_	Gender=Fem	23	conj	_	Gloss=song.Fem
26	ta	na	PART	_	Case=Gen|Gender=Fem|PartType=Case	28	case	_	Gloss=Gen.Fem
27	"	"	PUNCT	_	_	28	punct	_	Gloss=PUNCT|SpaceAfter=No
28	Trinity	Trinity	PROPN	_	_	22	nmod	_	Gloss=Trinity|SpaceAfter=No
29	"	"	PUNCT	_	_	28	punct	_	Gloss=PUNCT|SpaceAfter=No
30	.	.	PUNCT	_	_	15	punct	_	Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:appos	color:blue
1	shiː	shiː	PRON	_	Case=Nom|Gender=Masc|Person=3	6	dislocated	_	Gloss=3Masc.Nom
2	Mr	Mr	PROPN	_	_	1	appos	_	Gloss=Mr
3	Oyakhilome	Oyakhilome	PROPN	_	_	2	nmod:appos	_	Gloss=Oyakhilome
4	dai	dai	PART	_	PartType=Top	1	discourse	_	Gloss=anyway
5	yaː	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	6	aux	_	Gloss=3Masc.Perf
6	musàntà	musant-	VERB	_	_	0	root	_	Gloss=deny
7	wannàn	nân	DET	_	Deixis=ProxS|Number=Sing|PronType=Dem	8	det	_	Gloss=ProxS.Sing
8	zàrgîn	zàrgiː	NOUN	_	Definite=Def|Gender=Masc	6	obl:mod	_	Gloss=accusation.Masc.Def|SpaceAfter=No
9	,	,	PUNCT	_	_	6	punct	_	Gloss=PUNCT

~~~


