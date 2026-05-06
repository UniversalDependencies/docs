---
layout: base
title:  'Statistics of nsubj in UD_Pashto-Prince'
udver: '2'
---

## Treebank Statistics: UD_Pashto-Prince: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="ps_prince-dep-nsubj-pass.html">nsubj:pass</a></tt>.

92 nodes (8%) are attached to their parents as `nsubj`.

92 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.93478260869565.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-PRON.html">PRON</a></tt> (39; 42% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (18; 20% instances), <tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ps_prince-pos-PRON.html">PRON</a></tt> (7; 8% instances), <tt><a href="ps_prince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="ps_prince-pos-AUX.html">AUX</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="ps_prince-pos-AUX.html">AUX</a></tt>-<tt><a href="ps_prince-pos-PRON.html">PRON</a></tt> (5; 5% instances), <tt><a href="ps_prince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ps_prince-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="ps_prince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ps_prince-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ps_prince-pos-ADV.html">ADV</a></tt>-<tt><a href="ps_prince-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ps_prince-pos-AUX.html">AUX</a></tt>-<tt><a href="ps_prince-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj	color:blue
1	ما	زه	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
2	هغه	هغه	DET	_	Deixis=Remt|Number=Sing|PronType=Dem	3	det	_	_
3	وخ	وخت	NOUN	_	Number=Sing	7	obl	_	_
4	ډير	ډير	ADV	_	_	6	advmod	_	_
5	ژور	ژور	ADJ	_	_	6	amod	_	_
6	سوچ	سوچ	NOUN	_	Number=Sing	7	obj	_	_
7	وکړو	کول	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
8	،	,	PUNCT	_	_	7	punct	_	_
9	په	په	ADP	_	_	10	case	_	_
10	ځنګل	ځنګل	NOUN	_	Number=Sing	15	nmod	_	_
11	کښي	کښي	ADP	_	_	10	case	_	_
12	د	د	ADP	_	_	10	case	_	_
13	گرځيدو	گرځېدل	ADP	_	_	15	case	_	_
14	په	په	ADP	_	_	15	case	_	_
15	باره	باره	NOUN	_	Number=Sing	7	obl	_	_
16	کښي	کښي	ADP	_	_	15	case	_	_
17	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj	color:blue
1	زما	زه	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	det:poss	_	_
2	دویم	دویم	ADJ	_	_	3	amod	_	_
3	تصویر	تصویر	NOUN	_	_	5	nsubj	_	_
4	داسې	داسې	ADV	_	_	5	advmod	_	_
5	ښکارېدو	ښکارېدل	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	.	.	PUNCT	_	_	4	punct	_	_
2	دا	دا	PRON	_	Deixis=Prox|Number=Sing|PronType=Dem	4	nsubj	_	_
3	یو	یو	DET	_	PronType=Ind	4	det	_	_
4	مار	مار	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	وو	ول	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
6	بوا	بوا	NOUN	_	_	7	compound	_	_
7	کنسټريکټر	کنسټريکټر	NOUN	_	_	4	compound	_	_
8	چې	چې	SCONJ	_	_	16	mark	_	_
9	یوه	یو	DET	_	PronType=Ind	10	det	_	_
10	هاتي	هاتي	NOUN	_	Case=Acc|Number=Sing	16	obj	_	_
11	یې	هغه	PRON	_	Number=Sing|Person=3|PronType=Prs	16	nsubj	_	_
12	لواړ	لواړ	ADV	_	_	16	advmod	_	_
13	د	د	ADP	_	_	14	case	_	_
14	مرئ	مرئ	NOUN	_	Number=Sing	16	obl	_	_
15	نه	نه	ADP	_	_	14	case	_	_
16	تيرولو	تېرول	VERB	_	VerbForm=Inf	4	acl	_	_
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


