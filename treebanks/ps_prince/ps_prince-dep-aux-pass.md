---
layout: base
title:  'Statistics of aux:pass in UD_Pashto-Prince'
udver: '2'
---

## Treebank Statistics: UD_Pashto-Prince: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ps_prince-dep-aux.html">aux</a></tt>.

4 nodes (0%) are attached to their parents as `aux:pass`.

4 instances of `aux:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-AUX.html">AUX</a></tt> (3; 75% instances), <tt><a href="ps_prince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ps_prince-pos-AUX.html">AUX</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 aux:pass	color:blue
1	ولسونه	ولس	NOUN	_	Number=Plur	7	nsubj:pass	_	_
2	له	له	ADP	_	_	4	case	_	_
3	خپلو	خپل	DET	_	Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	4	det:poss	_	_
4	کورونو	کور	NOUN	_	Number=Plur	7	obl	_	_
5	او	او	CCONJ	_	_	6	cc	_	_
6	علاقو	علاقو	NOUN	_	Number=Plur	4	conj	_	_
7	راپاڅول	راپاڅول	VERB	_	VerbForm=Inf	0	root	_	_
8	کېږي	کېدل	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
9	او	او	CCONJ	_	_	18	cc	_	_
10	په	په	ADP	_	_	12	case	_	_
11	خپله	خپل	DET	_	Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	12	det:poss	_	_
12	خاوره	خاوره	NOUN	_	Number=Sing	18	obl	_	_
13	د	د	ADP	_	_	15	case	_	_
14	پناه	پناه	NOUN	_	Number=Sing	15	compound	_	_
15	ګزیانو	ګزیان	NOUN	_	Number=Plur	16	nmod	_	_
16	نوم	نوم	NOUN	_	Number=Sing	18	obj	_	_
17	پرې	پر	ADP	_	_	18	compound:prt	_	_
18	ایښودل	ایښودل	VERB	_	VerbForm=Inf	7	conj	_	_
19	کېږي	کېدل	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	aux:pass	_	_
20	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 aux:pass	color:blue
1	نو	نو	ADV	_	_	5	discourse	_	_
2	تاسو	تاسو	PRON	_	Person=2	5	nsubj	_	_
3	تصور	تصور	NOUN	_	_	5	obj	_	_
4	کولای	کول	VERB	_	VerbForm=Inf	5	xcomp	_	_
5	شئ	کېدل	VERB	_	Mood=Sub	0	root	_	_
6	چې	چې	SCONJ	_	_	9	mark	_	_
7	کله	کله	ADV	_	_	9	advmod	_	_
8	لمر	لمر	NOUN	_	_	9	nsubj	_	_
9	راوخوت	راوتل	VERB	_	Tense=Past	5	advcl	_	_
10	،	،	PUNCT	_	_	9	punct	_	_
11	او	او	CCONJ	_	_	18	cc	_	_
12	ما	زه	PRON	_	Person=1	18	nsubj	_	_
13	د	د	ADP	_	_	16	case	_	_
14	يو	يو	DET	_	_	16	det	_	_
15	عجيب	عجيب	ADJ	_	_	16	amod	_	_
16	آواز	آواز	NOUN	_	_	18	obl	_	_
17	سره	سره	ADP	_	_	16	case	_	_
18	ويښ	ويښ	ADJ	_	_	9	conj	_	_
19	شوم	ول	AUX	_	Tense=Past	18	cop	_	_
20	،	،	PUNCT	_	_	19	punct	_	_
21	څومره	څومره	ADV	_	_	22	advmod	_	_
22	حيران	حيران	ADJ	_	_	18	conj	_	_
23	شوی	کېدل	AUX	_	VerbForm=Part	22	aux:pass	_	_
24	وم	ول	AUX	_	Tense=Past	22	cop	_	_
25	.	.	PUNCT	_	_	5	punct	_	_

~~~


