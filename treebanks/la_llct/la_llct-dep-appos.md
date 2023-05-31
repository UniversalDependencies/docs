---
layout: base
title:  'Statistics of appos in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `appos`

This relation is universal.

8168 nodes (3%) are attached to their parents as `appos`.

8168 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.27277179236043.

The following 3 pairs of parts of speech are connected with `appos`: <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (7063; 86% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1104; 14% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	+	+	PUNCT	SYM	_	5	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	det	_	_
3	Eriteo	Eriteus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	nsubj	_	_
4	schabinus	scabinus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
5	suscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	+	+	PUNCT	SYM	_	3	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	det	_	_
3	Iohanni	Johannes	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	13	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	rogatus	rogo	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	3	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
6	at	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
7	domno	domnus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	5	obl:arg	_	_
8	Iacobo	Iacobus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	7	flat	_	_
9	episcopo	episcopus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	7	appos	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	3	punct	_	_
11	me	ego	PRON	p|p|1|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
12	teste	testis	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	13	advcl	_	_
13	subscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
14	.	.	PUNCT	Punc	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	signum	signum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	+	+	PUNCT	SYM	_	3	punct	_	_
3	manus	manus	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
4	Toti	totus	DET	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|PronType=Tot	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	6	punct	_	_
6	filio	filius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	appos	_	_
7	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	8	amod	_	_
8	Ratprandi	Rapprandus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	10	punct	_	_
10	testis	testis	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


