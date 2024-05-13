---
layout: base
title:  'Statistics of nmod in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="is_modern-dep-nmod-poss.html">nmod:poss</a></tt>.

72 nodes (0%) are attached to their parents as `nmod`.

45 instances of `nmod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19444444444444.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (38; 53% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (25; 35% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (4; 6% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="is_modern-pos-PART.html">PART</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nmod	color:blue
1	Mér	ég	PRON	PRO-D	Case=Dat|Number=Sing|Person=1|PronType=Prs	0	root	_	IFD_tag=fp1eþ
2	er	vera	AUX	BEPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	IFD_tag=sfg3en
3	spurn	spurn	NOUN	N-N	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	xcomp	_	IFD_tag=nven|SpaceAfter=No
4	:	:	PUNCT	,	_	3	punct	_	IFD_tag=:
5	Er	vera	AUX	BEPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	IFD_tag=sfg3en
6	ekki	ekki	ADV	NEG	_	5	advmod	_	IFD_tag=aa
7	markmiðið	markmið	NOUN	N-N	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	IFD_tag=nheng
8	að	að	SCONJ	C	_	10	mark	_	IFD_tag=c
9	allir	allur	DET	Q-N	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	10	nsubj	_	IFD_tag=fokfn
10	hafi	hafa	AUX	HVPS	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	ccomp	_	IFD_tag=svg3fn
11	sömu	sami	PRON	PRO-A	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	12	nmod	_	IFD_tag=fbhfo
12	réttindin	réttindi	NOUN	NS-A	Case=Acc|Definite=Def|Gender=Neut|Number=Plur	10	obj	_	IFD_tag=nhfog|SpaceAfter=No
13	?	?	PUNCT	.	_	12	punct	_	IFD_tag=?

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 nmod	color:blue
1	Ég	ég	PRON	PRO-N	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	IFD_tag=fp1en
2	skil	skilja	VERB	VBPI	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	IFD_tag=sfg1en
3	ekki	ekki	ADV	NEG	_	2	advmod	_	IFD_tag=aa
4	af	af	ADP	P	_	5	case	_	IFD_tag=aþ
5	hverju	hver	PRON	WPRO-D	Case=Dat|Gender=Neut|Number=Sing|PronType=Int	9	obl	_	IFD_tag=fsheþ
6	það	það	PRON	PRO-N	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	9	nsubj	_	IFD_tag=fphen
7	er	vera	AUX	BEPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	IFD_tag=sfg3en
8	eitthvert	einhver	DET	Q-N	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	9	amod	_	IFD_tag=fohen
9	takmark	takmark	NOUN	N-N	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	ccomp	_	IFD_tag=nhen
10	í	í	ADP	P	_	11	case	_	IFD_tag=aþ
11	sjálfu	sjálfur	PRON	PRO-D	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	9	obl	_	IFD_tag=fbheþ
12	sér	sig	PRON	PRO-D	Case=Dat|Gender=Neut|Number=Sing|PronType=Prs	11	nmod	_	IFD_tag=fpheþ|SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod	color:blue
1	Herra	herra	NOUN	N-N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	5	vocative	_	IFD_tag=nken
2	forseti	forseti	NOUN	N-N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	1	conj	_	IFD_tag=nken|SpaceAfter=No
3	.	.	PUNCT	.	_	2	punct	_	IFD_tag=.
4	Ég	ég	PRON	PRO-N	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	IFD_tag=fp1en
5	þakka	þakka	VERB	VBPI	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	IFD_tag=sfg1en
6	hv.	háttvirtur	ADJ	ADJ-D	_	7	amod	_	IFD_tag=as
7	þingmanni	þingmaður	NOUN	N-D	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing	5	iobj	_	IFD_tag=nkeþ
8	og	og	CCONJ	CONJ	_	10	cc	_	IFD_tag=c
9	mér	ég	PRON	PRO-D	Case=Dat|Number=Sing|Person=1|PronType=Prs	10	nmod	_	IFD_tag=fp1eþ
10	heyrist	heyra	VERB	VBPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	5	conj	_	IFD_tag=sfm3en|OriginalHead=0
11	að	að	SCONJ	C	_	14	mark	_	IFD_tag=c
12	við	ég	PRON	PRO-N	Case=Nom|Number=Plur|Person=1|PronType=Prs	14	nsubj	_	IFD_tag=fp1fn
13	séum	vera	AUX	BEPS	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	_	IFD_tag=svg1fn
14	sammála	sammála	ADJ	ADJ-N	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	10	ccomp	_	IFD_tag=lhfnof
15	um	um	ADP	P	_	16	case	_	IFD_tag=ao
16	ýmislegt	ýmislegur	ADJ	ADJ-A	Case=Acc|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	14	amod	_	IFD_tag=lheosf|SpaceAfter=No
17	,	,	PUNCT	,	_	16	punct	_	IFD_tag
18	ég	ég	PRON	PRO-N	Case=Nom|Number=Sing|Person=1|PronType=Prs	19	nsubj	_	IFD_tag=fp1en
19	tek	taka	VERB	VBPI	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	IFD_tag=sfg1en|OriginalHead=0
20	undir	undir	ADP	P	_	21	case	_	IFD_tag=ao
21	það	það	PRON	PRO-A	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs	19	obl	_	IFD_tag=fpheo|SpaceAfter=No
22	.	.	PUNCT	.	_	21	punct	_	IFD_tag=.

~~~


