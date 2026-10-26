---
layout: base
title:  'Statistics of compound:prt in UD_Zazaki-ZSD'
udver: '2'
---

## Treebank Statistics: UD_Zazaki-ZSD: Relations: `compound:prt`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `compound`: <tt><a href="zza_zsd-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="zza_zsd-dep-compound-redup.html">compound:redup</a></tt>.

16 nodes (1%) are attached to their parents as `compound:prt`.

13 instances of `compound:prt` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `compound:prt`: <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-ADP.html">ADP</a></tt> (9; 56% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-PART.html">PART</a></tt> (6; 38% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:prt	color:blue
1	Dewlete	dewlete	NOUN	_	Gender=Fem|Number=Sing	2	nsubj	_	TextBegin=0|TextEnd=7
2	êşîna	êşîyayene	VERB	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	TextBegin=8|TextEnd=13
3	pê	pê	ADP	_	_	2	compound:prt	_	SpaceAfter=No|TextBegin=14|TextEnd=16
4	,	,	PUNCT	_	_	2	punct	_	TextBegin=16|TextEnd=17
5	êna	ameyene	VERB	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	TextBegin=18|TextEnd=21
6	dana	dayene	VERB	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	TextBegin=22|TextEnd=26
7	kena	kerdene	VERB	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	TextBegin=27|TextEnd=31
8	zere	zere	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	TextBegin=32|TextEnd=36
9	.	.	PUNCT	_	_	2	punct	_	TextBegin=37|TextEnd=38

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:prt	color:blue
1	"	"	PUNCT	_	_	6	punct	_	TextBegin=0|TextEnd=1
2	Ma	ma	PRON	_	Number=Plur|Person=1|PronType=Prs	6	nsubj	_	TextBegin=2|TextEnd=3
3	ik	kî	PART	_	_	6	advmod	_	TextBegin=4|TextEnd=6
4	ya	a	PRON	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Prs	6	obj	_	TextBegin=7|TextEnd=9
5	hes	hes	PART	_	_	6	compound:prt	_	TextBegin=10|TextEnd=13
6	kenîm	kerdene	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	TextBegin=14|TextEnd=21
7	"	"	PUNCT	_	_	6	punct	_	TextBegin=14|TextEnd=21

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:prt	color:blue
1	Vano	vatene	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	TextBegin=0|TextEnd=4
2	ke	ke	SCONJ	_	_	8	mark	_	TextBegin=5|TextEnd=7
3	îşte	îşte	PART	_	_	8	discourse	_	TextBegin=8|TextEnd=12
4	îta	îta	ADV	_	_	8	advmod	_	TextBegin=13|TextEnd=16
5	resim	resim	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	TextBegin=17|TextEnd=23
6	ê	ê	ADP	_	_	5	case	_	TextBegin=17|TextEnd=23
7	Alî	Alî	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	5	nmod:poss	_	TextBegin=24|TextEnd=27
8	dano	dayene	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	xcomp	_	TextBegin=28|TextEnd=32
9	pi	pi	PRON	_	Person=3|PronType=Prs	8	compound:prt	_	TextBegin=33|TextEnd=37
10	ro	ro	ADP	_	_	9	case	_	TextBegin=33|TextEnd=37
11	.	.	PUNCT	_	_	1	punct	_	TextBegin=38|TextEnd=39

~~~


