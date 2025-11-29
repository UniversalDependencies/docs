---
layout: base
title:  'Statistics of csubj in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="egy_ujaen-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="egy_ujaen-dep-csubj-pass.html">csubj:pass</a></tt>.

12 nodes (0%) are attached to their parents as `csubj`.

7 instances of `csubj` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (5; 42% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (4; 33% instances), <tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="egy_ujaen-pos-NUM.html">NUM</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	ḥtp.t	ḥtp.t	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Hiero=(𓊵:𓏏𓊪)(𓏏:𓏝)
2	mꜣꜣ.t	mꜣꜣ	VERB	_	Gender=Fem|Mood=Ind|Nominal=Yes|Number=Sing|SubForm=RelForm|Tense=Pres|VerbClass=2aered|VerbForm=Fin	1	csubj	_	Hiero=(𓌴:𓁹)𓄿𓏏𓄿|Hierocl=𓁹|SPC=Pres
3	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	Hiero=𓎡|Pron=SFP

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	č̣(ṭ)	č̣ṭ	VERB	_	Gender=Masc|VerbClass=2lit|VerbForm=Inf	0	root	_	Hiero=𓆓
2	mṭw	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓌃
3	wꜥb.n	wꜥb	VERB	_	Mood=Ind|SubForm=AbstRel|Tense=Past|VerbClass=3lit|VerbForm=Fin|Voice=Act	1	ccomp	_	Hiero=𓃂𓈖|SPC=Past-2
4	wꜥb.n	wꜥb	VERB	_	Gender=Masc|Mood=Ind|Nominal=Yes|Number=Sing|SubForm=RelForm|Tense=Past|VerbClass=3lit|VerbForm=Fin	3	csubj	_	Hiero=𓃂𓈖|SPC=Past-2
5	(⸗ꞽ)	ꞽ	PRON	_	Gender=Com|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Hiero=No|Pron=SFP
6	m	m	ADP	_	_	7	case	_	Hiero=𓅓|Status=Cons
7	śḫ.t	śḫ.t	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	Hiero=𓋴(𓐍:𓏏)𓇏|Hierocl=𓇏
8	ꞽꜣr.w	ꞽꜣr	NOUN	_	Gender=Masc|Number=Plur	7	nmod:poss	_	Hiero=𓇋𓄿𓃭

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 csubj	color:blue
1	č̣(ṭ)	č̣ṭ	NOUN	_	Gender=Masc|VerbForm=Inf	0	root	_	Hiero=𓆓
2	mṭw	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓌃
3	nfr	nfr	ADJ	_	Gender=Masc|Number=Sing	1	ccomp	_	Hiero=𓄤(𓆑:𓂋)
4	w(ꞽ)	wꞽ	INTJ	_	_	3	discourse	_	Hiero=𓅱
5	ꜣ	ꜣ	PART	_	PartType=Mod	3	discourse	_	Hiero=𓄿
6	mꜣ.w	mꜣ	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	Hiero=(𓌴:𓁹)𓄿𓅱
7	ḥtp	ḥtp	ADJ	_	Gender=Masc|Number=Sing	3	conj	_	Hiero=(𓊵:𓏏𓊪)
8	w(ꞽ)	wꞽ	INTJ	_	_	7	discourse	_	Hiero=𓅱
9	ꜣ	ꜣ	PART	_	PartType=Mod	7	discourse	_	Hiero=𓄿
10	pt(r)	ptr	VERB	_	Gender=Masc|VerbClass=3lit|VerbForm=Inf	7	csubj	_	Hiero=(𓊪*𓏏:)UC_1397B|Hierocl=UC_1397B
11	ꞽ.n	ꞽ	VERB	_	Mood=Ind|SubForm=Pred|Tense=Past|VerbClass=Def|VerbForm=Fin	3	parataxis	_	Hiero=𓇋:𓈖|SPC=Past-2
12	⸗śn	śn	PRON	_	Gender=Com|Number=Plur|Person=3|PronType=Prs	11	nsubj	_	Hiero=𓋴𓈖|Pron=SFP
13	ꞽn	ꞽn	ADP	_	_	14	case	_	Hiero=𓇋:𓈖|Status=Cons
14	nčr(.w)	nčr	NOUN	_	Gender=Masc|Number=Plur	11	obl	_	Hiero=𓊹𓊹𓊹
15	pr.t	pri̯	VERB	_	Gender=Masc|VerbClass=3aeinf|VerbForm=Inf	10	ccomp	_	Hiero=𓉐:𓂋:𓏏
16	r	r	ADP	_	_	17	case	_	Hiero=𓂋|Status=Pron
17	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	obl	_	Hiero=𓆑|Pron=SFP
18	nčr	nčr	NOUN	_	Gender=Masc|Number=Sing	15	nsubj	_	Hiero=𓊹𓅆|Hierocl=𓅆
19	pn	pn	DET	_	Gender=Masc|Number=Sing|PronType=Dem	18	det	_	Hiero=𓊪:𓈖
20	ꞽr	r	ADP	_	_	21	case	_	Hiero=𓇋𓂋|Status=Cons
21	p.t	p.t	NOUN	_	Gender=Fem|Number=Sing	15	obl	_	Hiero=(𓊪𓏏:𓇯)|Hierocl=𓇯
22	pr.t	pri̯	VERB	_	Gender=Masc|VerbClass=3aeinf|VerbForm=Inf	15	conj	_	Hiero=𓉐:𓂋:𓏏
23	r	r	ADP	_	_	24	case	_	Hiero=𓂋|Status=Pron
24	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	obl	_	Hiero=𓆑|Pron=SFP
25	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	22	nsubj	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
26	r	r	ADP	_	_	27	case	_	Hiero=𓂋|Status=Cons
27	p.t	p.t	NOUN	_	Gender=Fem|Number=Sing	22	obl	_	Hiero=(𓊪𓏏:𓇯)|Hierocl=𓇯
28	bꜣ(.w)	bꜣ	NOUN	_	Gender=Masc|Number=Plur	31	nsubj	_	Hiero=𓅢
29	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	28	nmod	_	Hiero=𓆑|Pron=SFP
30	ṭp	ṭp	ADP	_	Case=Sup	31	case	_	Hiero=𓁶:𓏤|Hierocl=𓏤|Status=Cons
31	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	22	advcl	_	Hiero=𓆑|Pron=SFP
32	šꜥ.t	šꜥ.t	NOUN	_	Gender=Fem|Number=Sing	36	nsubj	_	Hiero=(𓈙:𓂝)(𓏏:UC_No)|Hierocl=UC_No
33	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	32	nmod	_	Hiero=𓆑|Pron=SFP
34	r	r	ADP	_	ExtPos=ADP	36	case	_	Hiero=𓂋|Status=Cons
35	gś(.wꞽ)	gś	NOUN	_	Gender=Masc|Number=Dual	34	fixed	_	Hiero=𓐜:𓐜
36	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	31	conj	_	Hiero=𓆑|Pron=SFP
37	ḥkꜣ(.w)	ḥkꜣ	NOUN	_	Gender=Masc|Number=Plur	41	nsubj	_	Hiero=𓎛𓂓(𓂓:𓂓)
38	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	37	nmod	_	Hiero=𓆑|Pron=SFP
39	ṭp	ṭp	ADP	_	Case=Sup|ExtPos=ADP	41	case	_	Hiero=𓁶:𓏤|Hierocl=𓏤|Status=Cons
40	rṭ(.wꞽ)	rṭ	NOUN	_	Gender=Masc|Number=Dual	39	fixed	_	Hiero=(𓂋:𓂧)𓂾𓂾|Hierocl=𓂾𓂾
41	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	31	conj	_	Hiero=𓆑|Pron=SFP

~~~


