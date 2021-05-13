---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-nsubj.html">nsubj</a></tt>.

206 nodes (0%) are attached to their parents as `nsubj:pass`.

129 instances of `nsubj:pass` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.04854368932039.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (110; 53% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (49; 24% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (22; 11% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (18; 9% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nsubj:pass	color:blue
1	RT	retweet	NOUN	S	_	7	dep	_	_
2	@user	@user	SYM	SYM	_	7	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	A	a	ADP	E	_	6	case	_	_
5	certi	certo	DET	DI	PronType=Ind	6	det	_	_
6	tweet	tweet	NOUN	S	_	7	obl	_	_
7	andrebbero	andare	VERB	V	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	allegate	allegare	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	7	xcomp	_	_
9	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	lamette	lametta	NOUN	S	Gender=Fem|Number=Plur	8	nsubj:pass	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	Denunciato	denunciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	Mario	mario	PROPN	SP	_	1	nsubj:pass	_	_
3	Monti	Monti	PROPN	SP	_	2	flat:name	_	_
4	per	per	ADP	E	_	6	case	_	_
5	alto	alto	ADJ	A	Gender=Masc|Number=Sing	6	amod	_	_
6	tradimento	tradimento	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
7	http://t.co/QlD7KTk7	http://t.co/QlD7KTk7	SYM	X	_	1	dep	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	#Mario	#Mario	SYM	SYM	_	3	nsubj:pass	_	_
2	Monti	Monti	PROPN	SP	_	1	flat:name	_	_
3	denunciato	denunciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	24-12-2011	24-12-2011	NUM	N	NumType=Card	3	nummod	_	_
5	http://t.co/KhgxSasp	http://t.co/KhgxSasp	SYM	X	_	3	dep	_	_
6	via	via	ADP	E	_	7	case	_	_
7	@user	@user	SYM	SYM	_	3	vocative:mention	_	_

~~~


