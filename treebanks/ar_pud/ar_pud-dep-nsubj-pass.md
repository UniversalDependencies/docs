---
layout: base
title:  'Statistics of nsubj:pass in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-nsubj.html">nsubj</a></tt>.

141 nodes (1%) are attached to their parents as `nsubj:pass`.

95 instances of `nsubj:pass` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.95744680851064.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (78; 55% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (24; 17% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (22; 16% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	تمول	maw~al_1	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
2	النفقات	nafaqap_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Fem|Number=Plur	1	nsubj:pass	_	_
3	الجديدة	jadiyd_1	ADJ	JJ	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	amod	_	_
4	من	min_1	ADP	IN	_	6	case	_	_
5	خلال	xilAl_1	ADP	IN	_	4	fixed	_	_
6	حساب	HisAb_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	_
7	كلينتون	kliynotuwn_1	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	6	nmod	_	_
8	المصرفي	maSorafiy~_1	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	amod	_	_
9	الكبير	kabiyr_1	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
10	.	._0	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 nsubj:pass	color:blue
1	قد	qado_1	PART	RP	_	6	compound:prt	_	_
2	يكون	kAn-u_1	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	cop	_	_
3	"	"_0	PUNCT	``	_	4	punct	_	SpaceAfter=No
4	خنزير	xinoziyr_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	SpaceAfter=No
5	"	"_0	PUNCT	''	_	4	punct	_	_
6	خنزيراً	xinoziyr_1	NOUN	NN	Animacy=Nhum|Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
7	وحيداً	waHiyd_2	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	,	,_0	PUNCT	,	_	13	punct	_	_
9	غير	gayor_1	PART	RP	_	13	compound:prt	_	_
10	أن	>an~a_1	SCONJ	IN	_	9	fixed	_	SpaceAfter=No
11	ه	h	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	nsubj:pass	_	_
12	لا	lA_1	PART	RP	Polarity=Neg	13	advmod	_	_
13	يترك	tarak-u_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	6	advcl	_	_
14	وحد	waHod_1	NOUN	NN	Animacy=Nhum|Case=Acc|Definite=Def|Gender=Masc|Number=Sing	13	advmod	_	SpaceAfter=No
15	ه	h	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	14	nmod	_	_
16	أبداً	>abad_1	ADV	RB	_	13	advmod	_	SpaceAfter=No
17	.	._0	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	خلقت	xalaq-u_1	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
2	الثورة	vaworap_1	PROPN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	nsubj:pass	_	_
3	الصناعية	SinAEiy~_1	ADJ	JJ	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	amod	_	Proper=True
4	طلباً	Talab_1	NOUN	VBG	Case=Acc|Definite=Ind|Gender=Masc	1	advcl	_	_
5	ل	l	ADP	IN	_	6	case	_	SpaceAfter=No
6	لقطع	qaToE_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Plur	4	obl	_	_
7	المعدنية	maEodiniy~_1	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	amod	_	_
8	المستخدمة	musotaxodam_1	ADJ	VBN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	6	ccomp	_	_
9	في	fiy_1	ADP	IN	_	10	case	_	_
10	الآلات	|lap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Plur	8	obl	_	SpaceAfter=No
11	.	._0	PUNCT	.	_	1	punct	_	_

~~~


