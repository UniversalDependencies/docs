---
layout: base
title:  'Statistics of nsubj:outer in UD_Manchu-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Manchu-GDUD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="mnc_gdud-dep-nsubj.html">nsubj</a></tt>.

4 nodes (1%) are attached to their parents as `nsubj:outer`.

4 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="mnc_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mnc_gdud-pos-PROPN.html">PROPN</a></tt> (2; 50% instances), <tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="mnc_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:outer	color:blue
1	K'an	K'an	PROPN	_	_	3	nsubj	_	_
2	Ze	Ze	PROPN	_	_	3	nsubj:outer	_	_
3	hendu-me	hendu	VERB	_	VerbForm=Conv	0	root	_	Gloss=say-ing
4	Weile-be	Weile	VERB	_	Case=Acc	6	obj	_	Gloss=work-Acc
5	elhese-ci	elhese	NOUN	_	Case=Abl	6	obl	_	Gloss=slacken-ing
6	ojorakû	ojo	VERB	_	Polarity=Neg|VerbForm=Part	3	parataxis	_	Gloss=won't.do
7	Te	te	ADV	_	_	8	advmod	_	Gloss=now
8	uthai	uthai	ADV	_	_	6	advmod	_	Gloss=at.once

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 nsubj:outer	color:blue
1	yuan	yuan	PROPN	_	_	2	compound	_	_
2	fai	fai	PROPN	_	Case=Gen	5	nmod:poss	_	_
3	i	i	PART	_	_	2	case	_	_
4	sargan	sargan	NOUN	_	_	5	compound	_	_
5	jui	jui	NOUN	_	_	6	nsubj	_	_
6	hendu-re-nge	hendu	VERB	_	VerbForm=Part	15	csubj	_	Nominalizer=Yes
7	tere	tere	DET	_	PronType=Dem	11	det	_	_
8	ahūn	ahūn	NOUN	_	_	11	nmod	_	_
9	deo	deo	NOUN	_	_	8	conj	_	_
10	nadan	nadan	NUM	_	NumType=Card	11	nummod	_	_
11	niyalma	niyalma	NOUN	_	_	15	nsubj:outer	_	_
12	gemu	gemu	ADV	_	_	11	advmod	_	_
13	hūsun	hūsun	NOUN	_	_	15	compound	_	_
14	amba	amba	ADJ	_	_	15	amod	_	_
15	niyalma	niyalma	NOUN	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:outer	color:blue
1	sahûrun	sahûrun	NOUN	_	_	4	nsubj	_	Gloss=cold
2	usiha	usiha	NOUN	_	_	4	nsubj:outer	_	Gloss=star
3	abka-i	abka	NOUN	_	Case=Gen	4	obl	_	Gloss=sky-'s
4	jalu	jalu	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Fin	0	root	_	Gloss=float-ed
5	dekde-hebi	dekde	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Fin	4	parataxis	_	Gloss=has
6	Ila-ci	ila	NUM	_	_	9	nummod	_	Gloss=third.watch
7	ging	ging	NOUN	_	_	9	nsubj	_	Gloss=be-ing
8	o-me	o	AUX	_	Tense=Pres	9	cop	_	Gloss=copula
9	muke-i	muke	NOUN	_	Case=Gen	4	obl	_	Gloss=water-'s

~~~


