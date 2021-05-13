---
layout: base
title:  'Statistics of obl:agent in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-obl.html">obl</a></tt>.

288 nodes (0%) are attached to their parents as `obl:agent`.

265 instances of `obl:agent` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.15277777777778.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (239; 83% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt> (28; 10% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (11; 4% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Бунт	бунт	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
2	быў	быць	AUX	VBC	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
3	жорстка	жорстка	ADV	RB	Degree=Pos	4	advmod	4:advmod	_
4	падаўлены	падавіць	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	савецкімі	савецкі	ADJ	JJL	Case=Ins|Degree=Pos|Number=Plur	6	amod	6:amod	_
6	акупантамі	акупант	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	4	obl:agent	4:obl:agent	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:agent	color:blue
1	Як	як	ADV	WRB	Degree=Pos	2	advmod	2:advmod	_
2	жывуць	жыць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	вызваленыя	вызваліць	VERB	VBNL	Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	5	acl	5:acl	_
4	Лукашэнкам	Лукашэнка	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	3	obl:agent	3:obl:agent	_
5	забойцы	забойка	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	2	nsubj	2:nsubj	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:agent	color:blue
1	І	і	CCONJ	CC	_	2	cc	2:cc	_
2	памятаць	памятаць	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	5:punct	_
4	кім	хто	PRON	WP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|PronType=Int	5	obl:agent	5:obl:agent	_
5	прызначаныя	прызначыць	VERB	VBNH	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	2	ccomp	2:ccomp	_
6	"	"	PUNCT	PUNCT	_	7	punct	7:punct	SpaceAfter=No
7	прадстаўнікі	прадстаўнік	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	nsubj:pass	5:nsubj:pass	_
8	РБ	РБ	PROPN	NNP	Abbr=Yes	7	nmod	7:nmod	SpaceAfter=No
9	"	"	PUNCT	PUNCT	_	8	punct	8:punct	_
10	у	у	ADP	IN	_	11	case	11:case	_
11	ААН	ААН	PROPN	NNP	Abbr=Yes	8	nmod	8:nmod:у	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	2	punct	2:punct	_

~~~


