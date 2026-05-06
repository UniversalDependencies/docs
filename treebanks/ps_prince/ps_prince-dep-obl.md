---
layout: base
title:  'Statistics of obl in UD_Pashto-Prince'
udver: '2'
---

## Treebank Statistics: UD_Pashto-Prince: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="ps_prince-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ps_prince-dep-obl-arg.html">obl:arg</a></tt>.

77 nodes (7%) are attached to their parents as `obl`.

71 instances of `obl` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.41558441558442.

The following 14 pairs of parts of speech are connected with `obl`: <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (41; 53% instances), <tt><a href="ps_prince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="ps_prince-pos-AUX.html">AUX</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-ADP.html">ADP</a></tt> (5; 6% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-PRON.html">PRON</a></tt> (5; 6% instances), <tt><a href="ps_prince-pos-ADV.html">ADV</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="ps_prince-pos-AUX.html">AUX</a></tt>-<tt><a href="ps_prince-pos-ADP.html">ADP</a></tt> (2; 3% instances), <tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ps_prince-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="ps_prince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ps_prince-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ps_prince-pos-NUM.html">NUM</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 obl	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obl	color:blue
1	زه	زه	PRON	_	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
2	د	د	ADP	_	_	5	case	_	_
3	يو	يو	DET	_	PronType=Ind	5	det	_	_
4	داسې	داسې	ADJ	_	_	5	amod	_	_
5	سړي	سړی	NOUN	_	_	8	obl	_	_
6	نه	نه	ADP	_	_	5	case	_	_
7	هم	هم	ADV	_	_	8	advmod	_	_
8	يواځې	يوازې	ADJ	_	_	0	root	_	_
9	وم	ول	AUX	_	Tense=Past|VerbForm=Fin	8	cop	_	_
10	،	،	PUNCT	_	_	8	punct	_	_
11	چې	چې	SCONJ	_	_	19	mark	_	_
12	د	د	ADP	_	_	13	case	_	_
13	سمندر	سمندر	NOUN	_	_	15	nmod	_	_
14	په	په	ADP	_	_	15	case	_	_
15	منځ	منځ	NOUN	_	_	19	obl	_	_
16	کښې	کښې	ADP	_	_	15	case	_	_
17	لهړو	لهړ	NOUN	_	Number=Plur	19	obl	_	_
18	باندې	باندې	ADP	_	_	17	case	_	_
19	وي	ول	AUX	_	Mood=Sub|VerbForm=Fin	5	acl:relcl	_	SpaceAfter=No
20	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 obl	color:blue
1	.	.	PUNCT	_	_	12	punct	_	_
2	او	او	CCONJ	_	_	12	discourse	_	_
3	بیا	بیا	ADV	_	_	12	advmod	_	_
4	ما	زه	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
5	په	په	ADP	_	_	7	case	_	_
6	رنګین	رنګین	ADJ	_	_	7	amod	_	_
7	پنسلونو	پنسل	NOUN	_	Number=Plur	12	obl	_	_
8	خپل	خپل	DET	_	Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	10	det:poss	_	_
9	اولنئ	اولنئ	ADJ	_	_	10	amod	_	_
10	تصویر	تصویر	NOUN	_	Number=Sing	12	obj	_	_
11	روغ	روغ	NOUN	_	Number=Sing	12	xcomp	_	_
12	کړو	کول	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_

~~~


