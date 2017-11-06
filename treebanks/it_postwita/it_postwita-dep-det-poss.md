---
layout: base
title:  'Statistics of det:poss in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_postwita-dep-det-predet.html">det:predet</a></tt>.

338 nodes (1%) are attached to their parents as `det:poss`.

312 instances of `det:poss` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09171597633136.

The following 8 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (319; 94% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (11; 3% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:poss	color:blue
1	@elena_casali	@elena_casali	SYM	SYM	_	5	vocative:mention	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	tuo	tuo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	moroso	moroso	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	_
5	sa	sapere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	che	che	SCONJ	CS	_	9	mark	_	_
7	oggi	oggi	ADV	B	_	9	advmod	_	_
8	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	9	expl	_	_
9	tornava	tornare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	ccomp	_	_
10	a	a	ADP	E	_	11	case	_	_
11	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	9	obl	_	_
12	?!	?!	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	bellezza	bellezza	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
3	di	di	ADP	E	_	6	case	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
5	mie	mio	DET	AP	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	Steve	Steve	PROPN	SP	_	2	nmod	_	_
7	Madden	Madden	PROPN	SP	_	6	flat:name	_	_
8	Fringly	Fringly	PROPN	SP	_	6	flat:name	_	_
9	💗	💗	SYM	SYM	_	2	discourse:emo	_	_
10	http://t.co/YZPob9SUws	http://t.co/YZPob9SUws	SYM	X	_	2	dep	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	RT	RT	X	X	_	7	dep	_	_
2	@justfcku	@justfcku	SYM	SYM	_	7	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
5	mia	mio	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	tl	tl	X	X	_	7	nsubj	_	_
7	continua	continuare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	a	a	ADP	E	_	9	mark	_	_
9	fare	fare	VERB	V	VerbForm=Inf	7	xcomp	_	_
10	schifo	schifo	NOUN	S	Gender=Masc|Number=Sing	9	obj	_	_

~~~


