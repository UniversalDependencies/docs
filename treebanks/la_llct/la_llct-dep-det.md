---
layout: base
title:  'Statistics of det in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `det`

This relation is universal.

23300 nodes (10%) are attached to their parents as `det`.

17111 instances of `det` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2949356223176.

The following 13 pairs of parts of speech are connected with `det`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (15839; 68% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (4892; 21% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1502; 6% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (530; 2% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (204; 1% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (171; 1% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (88; 0% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (30; 0% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (28; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 det	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	cc	_	_
2	Adalbertus	Adalpertus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	dux	dux	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
4	direxit	dirigo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	missos	missus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	4	obj	_	_
6	suos	suus	DET	a|a|3|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	SpaceAfter=No
7	;	;	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	+	+	PUNCT	SYM	_	3	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	det	_	_
3	Teudimundus	Teudimundus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	rogatus	rogo	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	3	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
6	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
7	Leoprando	Leoprandus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	5	obl:arg	_	_
8	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	9	cc	_	_
9	Iohanne	Johannes	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	3	punct	_	_
11	subscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	dicebat	dico	VERB	v|v|3|s|i|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Imperfectum
2	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	Eriteo	Eriteus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	1	nsubj	_	_
4	advocatus	aduocatus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	SpaceAfter=No
5	:	:	PUNCT	Punc	_	1	punct	_	_

~~~


