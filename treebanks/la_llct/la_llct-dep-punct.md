---
layout: base
title:  'Statistics of punct in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `punct`

This relation is universal.

35265 nodes (15%) are attached to their parents as `punct`.

20611 instances of `punct` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.11348362398979.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (15815; 45% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (11739; 33% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (4491; 13% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (1085; 3% instances), <tt><a href="la_llct-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (530; 2% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (504; 1% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (348; 1% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (304; 1% instances), <tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (223; 1% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (171; 0% instances), <tt><a href="la_llct-pos-ADP.html">ADP</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (31; 0% instances), <tt><a href="la_llct-pos-PART.html">PART</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (17; 0% instances), <tt><a href="la_llct-pos-X.html">X</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="la_llct-pos-NUM.html">NUM</a></tt>-<tt><a href="la_llct-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 punct	color:blue
1	actum	ago	VERB	t|t|-|s|r|p|p|n|n|-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
2	Luca	Luca	PROPN	Propn|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
3	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 punct	color:blue
1	+	+	PUNCT	SYM	_	3	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	det	_	_
3	Viventius	Viuentius	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
4	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	3	appos	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	3	punct	_	_
6	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	8	mark	_	_
7	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	8	advmod	_	_
8	legitur	lego	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	10	advcl:cmp	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	,	,	PUNCT	Punc	_	8	punct	_	_
10	missus	missus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
11	fui	sum	AUX	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	10	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
12	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 punct	color:blue
1	[Propn]	_	PROPN	Punc	_	9	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	3	punct	_	_
3	rogatu	rogo	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	1	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
4	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
5	Leuprando	Leoprandus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	3	obl:arg	_	_
6	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	7	cc	_	_
7	Iohanne	Johannes	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	1	punct	_	_
9	subscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


