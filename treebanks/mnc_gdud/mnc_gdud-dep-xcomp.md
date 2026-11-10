---
layout: base
title:  'Statistics of xcomp in UD_Manchu-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Manchu-GDUD: Relations: `xcomp`

This relation is universal.

3 nodes (1%) are attached to their parents as `xcomp`.

3 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="mnc_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mnc_gdud-pos-ADJ.html">ADJ</a></tt> (1; 33% instances), <tt><a href="mnc_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="mnc_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mnc_gdud-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	encu	encu	DET	_	PronType=Ind	2	det	_	_
2	hehe	hehe	NOUN	_	Number=Plur	5	obl	_	_
3	ši	ši	ADP	_	_	2	case	_	_
4	deri	deri	ADV	_	Degree=Cmp	5	advmod	_	_
5	fulu	fulu	ADJ	_	Degree=Pos	6	xcomp	_	_
6	tua-mbi	tua	VERB	_	Aspect=Imp|Mood=Ind|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	si	si	PRON	_	Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	tobsere	tobsere	ADJ	_	_	3	amod	_	_
3	niyalma	niyalma	NOUN	_	_	4	xcomp	_	_
4	o-fi	o	VERB	_	Aspect=Perf|VerbForm=Conv	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp	color:blue
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


