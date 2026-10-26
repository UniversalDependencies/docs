---
layout: base
title:  'Statistics of ccomp in UD_Chintang-CTNTB'
udver: '2'
---

## Treebank Statistics: UD_Chintang-CTNTB: Relations: `ccomp`

This relation is universal.

75 nodes (1%) are attached to their parents as `ccomp`.

69 instances of `ccomp` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.50666666666667.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (57; 76% instances), <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt> (12; 16% instances), <tt><a href="ctn_ctntb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ctn_ctntb-pos-PRON.html">PRON</a></tt>-<tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="ctn_ctntb-pos-VERB.html">VERB</a></tt>-<tt><a href="ctn_ctntb-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 ccomp	color:blue
1	“	“	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
2	Asawa	sawa	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person=1	4	nsubj	4:nsubj	Gloss=1SG.POSS-strength|MSeg=a-sawa
3	le	le	PART	RESTR	InfStruct=Foc	2	advmod:emph	2:advmod:emph	Gloss=RESTR|MSeg=le
4	tukno	tuk	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp	7:ccomp	Gloss=ache-IND.NPST[.3SG.S]|MSeg=tuk-nok|SpaceAfter=No
5	”	”	PUNCT	_	_	4	punct	4:punct	_
6	mo	mo	SCONJ	CIT	_	4	mark	4:mark	Gloss=CIT|MSeg=mo
7	cektayakte	cekt	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Gloss=say--PST-IPFV-PST-IND.PST[.3SG.S]|MSeg=cekt-a-yakt-a-e|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 ccomp	color:blue
1	Phakkhorai	phak-khor	NOUN	NTVZ-LOC1	Case=Loc|Number=Sing	4	ccomp	4:ccomp	Gloss=pig-cage-NTVZ-LOC1|MSeg=phak-khor-a-iʔ
2	mane	mane	PART	NEG.DESID	Polarity=Neg	1	advmod	1:advmod	Gloss=NEG.DESID|MSeg=mane
3	mo	mo	SCONJ	CIT	_	1	mark	1:mark	Gloss=CIT|MSeg=mo
4	ludukuŋ	lud	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Number[p]=Sing|Person=1|Person[p]=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Gloss=tell-3[SG].P-IND.NPST-1SG[.A]|MSeg=lud-u-kV-ŋ
5	ta	ta	PART	FOC	InfStruct=Foc	4	advmod:emph	4:advmod:emph	Gloss=FOC|MSeg=ta
6	na	na	PART	TOP	InfStruct=Top	4	discourse	4:discourse	Gloss=TOP|MSeg=na|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 ccomp	color:blue
1	Kamchakamcha	kamchakamcha	ADV	_	_	6	advmod	6:advmod	Gloss=among_friends|MSeg=kamchakamcha
2	appi	appi	ADV	_	_	3	advmod	3:advmod	Gloss=self|MSeg=appi
3	rɨŋbe	rɨŋ	NOUN	LOC2	Case=Loc|Number=Sing	6	obl	6:obl	Gloss=language-LOC2|MSeg=rɨŋ-beʔ
4	asuk	asuk	ADV	_	PronType=Int	5	advmod	5:advmod	Gloss=how_much|MSeg=asuk
5	temma	temma	ADJ	_	_	0	root	0:root	Gloss=nice|MSeg=temma
6	haĩmacama	hand-ca	VERB	AUTOBEN	Aspect=Imp|Case=Abs|VerbForm=Inf|Voice=Act	5	ccomp	5:ccomp	Gloss=talk-INF-AUTOBEN-INF|MSeg=hand-ma-ca-ma|SpaceAfter=No
7	!	!	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


