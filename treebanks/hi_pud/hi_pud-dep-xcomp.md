---
layout: base
title:  'Statistics of xcomp in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `xcomp`

This relation is universal.

172 nodes (1%) are attached to their parents as `xcomp`.

172 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.30813953488372.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (98; 57% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (51; 30% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (9; 5% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 xcomp	color:blue
1	हमारे	_	PRON	PRP	Animacy=Anim|Case=Acc|Number=Sing|Person=1	6	nsubj	_	Translit=hamāre
2	पास	_	ADP	IN	_	1	case	_	Translit=pāsa
3	एक	_	DET	DT	Definite=Ind|Number=Sing	5	det	_	Translit=eka
4	शानदार	_	ADJ	JJ	_	5	amod	_	Translit=śānadāra
5	टीम	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	obj	_	Translit=ṭīma
6	है	_	VERB	VBI	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	Translit=hai
7	और	_	CCONJ	CC	_	15	cc	_	Translit=aura
8	यह	_	PRON	PDEM	Number=Sing	15	nsubj	_	Translit=yaha
9	हमारे	_	PRON	PRP	Animacy=Anim|Case=Acc|Number=Plur|Person=1	15	iobj	_	Translit=hamāre
10	लिए	_	ADP	IN	_	9	case	_	Translit=lie
11	आगे	_	NOUN	NST	_	12	compound:lvc	_	Translit=āge
12	बढ़ने	_	VERB	VINF	VerbForm=Inf	14	xcomp	_	Translit=baṛhane
13	का	_	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	12	case	_	Translit=kā
14	अवसर	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	15	obj	_	Translit=avasara
15	है	_	VERB	VBI	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	conj	_	SpaceAfter=No|Translit=hai
16	।	_	PUNCT	.	_	6	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 xcomp	color:blue
1	पहले	_	ADV	RB	_	8	advmod	_	Translit=pahale
2	एक	_	DET	DT	Definite=Ind|Number=Sing	4	det	_	Translit=eka
3	यजीदी	_	ADJ	JJ	_	4	amod	_	Translit=yajīdī
4	महिला	_	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Fem|Number=Sing	8	nsubj	_	Translit=mahilā
5	ने	_	ADP	IN	Case=Erg	4	case	_	Translit=ne
6	रोना	_	VERB	VINF	VerbForm=Inf	8	xcomp	_	Translit=ronā
7	शुरू	_	NOUN	NN	Gender=Masc|Number=Sing	8	compound:lvc	_	Translit=śurū
8	किया	_	VERB	VBI	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No|Bug=multi-subj|Translit=kiyā
9	,	_	PUNCT	,	_	10	punct	_	Translit=,
10	फिर	_	ADV	RB	_	8	advmod	_	Translit=phira
11	उसकी	_	PRON	PRP$	Animacy=Anim|Case=Nom|Gender=Fem|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	13	nmod:poss	_	Translit=usakī
12	एक	_	DET	DT	Definite=Ind|Number=Sing	13	det	_	Translit=eka
13	दोस्त	_	NOUN	NN	Animacy=Anim|Case=Acc|Number=Sing	8	nsubj	_	Translit=dosta
14	ने	_	ADP	IN	Case=Erg	13	case	_	SpaceAfter=No|Translit=ne
15	।	_	PUNCT	.	_	8	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 xcomp	color:blue
1	इसके	_	PRON	PDEM	Number=Sing	13	obl	_	Translit=isake
2	अलावा	_	ADP	IN	_	1	case	_	SpaceAfter=No|Translit=alāvā
3	,	_	PUNCT	,	_	1	punct	_	Translit=,
4	तांबे	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	Translit=tāṁbe
5	पर	_	ADP	IN	Case=Loc	4	case	_	Translit=para
6	सोने	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	nmod:poss	_	Translit=sone
7	का	_	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	6	case	_	Translit=kā
8	पानी	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	obj	_	Translit=pānī
9	चढ़ाना	_	VERB	VINF	VerbForm=Inf	13	xcomp	_	Translit=caṛhānā
10	तकनीकी	_	ADJ	JJ	_	11	amod	_	Translit=takanīkī
11	रूप	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	13	obl	_	Translit=rūpa
12	से	_	ADP	IN	Case=Acc	11	case	_	Translit=se
13	उल्लेखनीय	_	ADJ	JJ	_	0	root	_	Translit=ullekhanīya
14	है	_	AUX	VBI	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	13	cop	_	SpaceAfter=No|Translit=hai
15	।	_	PUNCT	.	_	13	punct	_	Translit=.

~~~


