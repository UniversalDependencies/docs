---
layout: base
title:  'Statistics of flat in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="fr_rhapsodie-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="fr_rhapsodie-dep-flat-name.html">flat:name</a></tt>.

95 nodes (0%) are attached to their parents as `flat`.

95 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71578947368421.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (85; 89% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (7; 7% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	AlignBegin=132106|AlignEnd=132216|SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	AlignBegin=132216|AlignEnd=132296|SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	AlignBegin=132296|AlignEnd=132296
4	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	AlignBegin=132296|AlignEnd=132336
5	te	toi	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=2|PronType=Prs	6	obj	_	AlignBegin=132336|AlignEnd=132427
6	dis	dire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	discourse	_	AlignBegin=132427|AlignEnd=132554|SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	AlignBegin=132696|AlignEnd=132696
8	dix-huit	dix-huit	NUM	_	_	0	root	_	AlignBegin=132696|AlignEnd=132926|Number[lex]=Plur
9	cent	cent	NUM	_	Number=Plur	8	flat	_	AlignBegin=132926|AlignEnd=133016
10	soixante-dix	soixante-dix	NUM	_	Number=Plur	8	flat	_	AlignBegin=133016|AlignEnd=133336
11	par	par	ADP	_	_	12	case	_	AlignBegin=133336|AlignEnd=133426
12	là	là	ADV	_	_	8	advmod	_	AlignBegin=133426|AlignEnd=133558|SpaceAfter=No
13	.	.	PUNCT	_	_	8	punct	_	AlignBegin=133558|AlignEnd=133558

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 flat	color:blue
1	là	là	ADV	_	_	4	advmod	_	AlignBegin=36506|AlignEnd=36705|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=36705|AlignEnd=36705
3	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	4	nsubj	_	AlignBegin=36705|AlignEnd=36892|Polite=Unknown
4	remontez	remonter	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=36892|AlignEnd=37393
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	AlignBegin=37393|AlignEnd=37559
6	boulevard	boulevard	NOUN	_	_	4	obj	_	AlignBegin=37559|AlignEnd=38183|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	AlignBegin=38183|AlignEnd=38183
8	euh	euh	INTJ	_	_	6	discourse	_	AlignBegin=38183|AlignEnd=38977|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	AlignBegin=38977|AlignEnd=38977
10	fff	fff	INTJ	_	_	6	discourse	_	AlignBegin=38977|AlignEnd=39387|SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	AlignBegin=39387|AlignEnd=39671
12	machin	machin	NOUN	_	_	15	reparandum	_	AlignBegin=39671|AlignEnd=40227|Gender[lex]=Masc|Number[ctxt]=Sing
13	Sembat	Sembat	PROPN	_	_	12	flat	_	AlignBegin=40227|AlignEnd=40671|Gender[lex]=Unknown|SpaceAfter=No
14	,	,	PUNCT	_	_	12	punct	_	AlignBegin=40671|AlignEnd=41843
15	Sembat	Sembat	PROPN	_	_	6	nmod:appos	_	AlignBegin=41843|AlignEnd=42163|Gender[lex]=Unknown
16	quelque	quelque	DET	_	Number=Sing|PronType=Ind	17	det	_	AlignBegin=42163|AlignEnd=42332
17	chose	chose	NOUN	_	_	15	flat	_	AlignBegin=42332|AlignEnd=42742|Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	AlignBegin=42742|AlignEnd=42742

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat	color:blue
1	là	là	ADV	_	_	4	advmod	_	AlignBegin=36506|AlignEnd=36705|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=36705|AlignEnd=36705
3	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	4	nsubj	_	AlignBegin=36705|AlignEnd=36892|Polite=Unknown
4	remontez	remonter	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=36892|AlignEnd=37393
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	AlignBegin=37393|AlignEnd=37559
6	boulevard	boulevard	NOUN	_	_	4	obj	_	AlignBegin=37559|AlignEnd=38183|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	AlignBegin=38183|AlignEnd=38183
8	euh	euh	INTJ	_	_	6	discourse	_	AlignBegin=38183|AlignEnd=38977|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	AlignBegin=38977|AlignEnd=38977
10	fff	fff	INTJ	_	_	6	discourse	_	AlignBegin=38977|AlignEnd=39387|SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	AlignBegin=39387|AlignEnd=39671
12	machin	machin	NOUN	_	_	15	reparandum	_	AlignBegin=39671|AlignEnd=40227|Gender[lex]=Masc|Number[ctxt]=Sing
13	Sembat	Sembat	PROPN	_	_	12	flat	_	AlignBegin=40227|AlignEnd=40671|Gender[lex]=Unknown|SpaceAfter=No
14	,	,	PUNCT	_	_	12	punct	_	AlignBegin=40671|AlignEnd=41843
15	Sembat	Sembat	PROPN	_	_	6	nmod:appos	_	AlignBegin=41843|AlignEnd=42163|Gender[lex]=Unknown
16	quelque	quelque	DET	_	Number=Sing|PronType=Ind	17	det	_	AlignBegin=42163|AlignEnd=42332
17	chose	chose	NOUN	_	_	15	flat	_	AlignBegin=42332|AlignEnd=42742|Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	AlignBegin=42742|AlignEnd=42742

~~~


