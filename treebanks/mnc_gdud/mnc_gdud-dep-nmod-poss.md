---
layout: base
title:  'Statistics of nmod:poss in UD_Manchu-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Manchu-GDUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="mnc_gdud-dep-nmod.html">nmod</a></tt>.

17 nodes (4%) are attached to their parents as `nmod:poss`.

17 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58823529411765.

The following 8 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt> (8; 47% instances), <tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mnc_gdud-pos-PRON.html">PRON</a></tt> (2; 12% instances), <tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mnc_gdud-pos-PROPN.html">PROPN</a></tt> (2; 12% instances), <tt><a href="mnc_gdud-pos-ADP.html">ADP</a></tt>-<tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="mnc_gdud-pos-ADV.html">ADV</a></tt>-<tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="mnc_gdud-pos-NUM.html">NUM</a></tt>-<tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="mnc_gdud-pos-NUM.html">NUM</a></tt>-<tt><a href="mnc_gdud-pos-NUM.html">NUM</a></tt> (1; 6% instances), <tt><a href="mnc_gdud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	boo	boo	NOUN	_	_	3	nmod:poss	_	_
2	i	i	ADP	_	_	1	case	_	_
3	ejen	ejen	NOUN	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:poss	color:blue
1	te	te	ADV	_	_	2	advmod	_	_
2	gaija-r-akū	gaija	VERB	_	Aspect=Imp|Polarity=Neg|VerbForm=Part	3	xcomp	_	Gloss=take-PTCP.IMPERF-NEG
3	o-ci	o	VERB	_	Mood=Cnd|VerbForm=Conv	9	advcl	_	Gloss=become-CVB.COND
4	gūwa	gūwa	PRON	_	PronType=Ind	5	nsubj	_	Gloss=other
5	gai-ka	gai	VERB	_	Aspect=Perf|VerbForm=Part	3	conj	_	Gloss=take-PTCP.PERF
6	de	de	ADP	_	Case=Dat	5	case	_	Gloss=DAT
7	sini	sini	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	8	nmod:poss	_	Gloss=you.GEN
8	dolo	dolo	NOUN	_	_	9	obl	_	Gloss=inside
9	ume	ume	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	Gloss=PTCL.PROH|Polarity=Proh

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	baniha	baniha	INTJ	_	_	0	root	_	_
2	si	si	PRON	_	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
3	oci	oci	PART	_	_	6	discourse	_	_
4	Xiao	Xiao	PROPN	_	_	6	nmod:poss	_	_
5	Wang	Wang	PROPN	_	_	4	flat:name	_	_
6	gucu	gucu	NOUN	_	_	1	parataxis	_	_
7	i	i	PART	_	Case=Gen	4	case	_	_
8	tacin	tacin	NOUN	_	_	6	compound	_	_
9	inuo	inuo	PART	_	_	6	discourse	_	_

~~~


