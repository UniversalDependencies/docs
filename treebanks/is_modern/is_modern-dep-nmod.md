---
layout: base
title:  'Statistics of nmod in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="is_modern-dep-nmod-poss.html">nmod:poss</a></tt>.

144 nodes (0%) are attached to their parents as `nmod`.

90 instances of `nmod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19444444444444.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (76; 53% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (50; 35% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (8; 6% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (6; 4% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="is_modern-pos-PART.html">PART</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nmod	color:blue
1	Mér	ég	PRON	PRO-D	Case=Dat	0	root	_	_
2	er	vera	AUX	BEPI	Mood=Ind|Tense=Pres	1	cop	_	_
3	spurn	spurn	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	1	xcomp	_	SpaceAfter=No
4	:	:	PUNCT	,	_	3	punct	_	_
5	Er	vera	AUX	BEPI	Mood=Ind|Tense=Pres	3	ccomp	_	_
6	ekki	ekki	ADV	NEG	_	5	advmod	_	_
7	markmiðið	markmið	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	_
8	að	að	SCONJ	C	_	10	mark	_	_
9	allir	allur	DET	Q-N	Case=Nom|Degree=Pos	10	nsubj	_	_
10	hafi	hafa	AUX	HVPS	Mood=Sub|Tense=Pres	5	ccomp	_	_
11	sömu	sami	PRON	PRO-A	Case=Acc	12	nmod	_	_
12	réttindin	réttindi	NOUN	NS-A	Case=Acc|Definite=Ind|Number=Plur	10	obj	_	SpaceAfter=No
13	?	?	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 nmod	color:blue
1	Ég	ég	PRON	PRO-N	Case=Nom	2	nsubj	_	_
2	skil	skilja	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
3	ekki	ekki	ADV	NEG	_	2	advmod	_	_
4	af	af	ADP	P	_	5	case	_	_
5	hverju	hver	PRON	WPRO-D	Case=Dat	9	obl	_	_
6	það	það	PRON	PRO-N	Case=Nom	9	nsubj	_	_
7	er	vera	AUX	BEPI	Mood=Ind|Tense=Pres	9	cop	_	_
8	eitthvert	einhver	DET	Q-N	Case=Nom|Degree=Pos	9	amod	_	_
9	takmark	takmark	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	2	ccomp	_	_
10	í	í	ADP	P	_	11	case	_	_
11	sjálfu	sjálfur	PRON	PRO-D	Case=Dat	9	obl	_	_
12	sér	sig	PRON	PRO-D	Case=Dat	11	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod	color:blue
1	Herra	herra	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	5	vocative	_	_
2	forseti	forseti	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	1	conj	_	SpaceAfter=No
3	.	.	PUNCT	.	_	2	punct	_	_
4	Ég	ég	PRON	PRO-N	Case=Nom	5	nsubj	_	_
5	þakka	þakka	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
6	hv.	háttvirtur	ADJ	ADJ-D	Case=Dat|Degree=Pos	7	amod	_	_
7	þingmanni	þingmaður	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	5	iobj	_	_
8	og	og	CCONJ	CONJ	_	10	cc	_	_
9	mér	ég	PRON	PRO-D	Case=Dat	10	nmod	_	_
10	heyrist	heyra	VERB	VBPI	Mood=Ind|Tense=Pres	5	conj	_	OriginalHead=0
11	að	að	SCONJ	C	_	14	mark	_	_
12	við	ég	PRON	PRO-N	Case=Nom	14	nsubj	_	_
13	séum	vera	AUX	BEPS	Mood=Sub|Tense=Pres	14	cop	_	_
14	sammála	sammála	ADJ	ADJ-N	Case=Nom|Degree=Pos	10	ccomp	_	_
15	um	um	ADP	P	_	16	case	_	_
16	ýmislegt	ýmislegur	ADJ	ADJ-A	Case=Acc|Degree=Pos	14	amod	_	SpaceAfter=No
17	,	,	PUNCT	,	_	16	punct	_	_
18	ég	ég	PRON	PRO-N	Case=Nom	19	nsubj	_	_
19	tek	taka	VERB	VBPI	Mood=Ind|Tense=Pres	5	conj	_	OriginalHead=0
20	undir	undir	ADP	P	_	21	case	_	_
21	það	það	PRON	PRO-A	Case=Acc	19	obl	_	SpaceAfter=No
22	.	.	PUNCT	.	_	21	punct	_	_

~~~


