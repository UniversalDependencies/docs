---
layout: base
title:  'Statistics of csubj in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="egy_ujaen-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="egy_ujaen-dep-csubj-pass.html">csubj:pass</a></tt>.

5 nodes (0%) are attached to their parents as `csubj`.

3 instances of `csubj` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.8.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="egy_ujaen-pos-NUM.html">NUM</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (1; 20% instances).


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
7	ḥtp	ḥtp	ADJ	_	Gender=Masc|Number=Sing	3	conj	_	Hiero=𓊵(:𓏏*𓊪)
8	w(ꞽ)	wꞽ	INTJ	_	_	7	discourse	_	Hiero=𓅱
9	ꜣ	ꜣ	PART	_	PartType=Mod	7	discourse	_	Hiero=𓄿
10	pt(r)	ptr	VERB	Hierocl=Yes	Gender=Masc|VerbForm=Inf	7	csubj	_	Hiero=(𓊪*𓏏:)UC_1397B
11	ꞽ.n	ꞽ	VERB	SPC=Past-2|Type=Pred	Tense=Past|VerbForm=Fin	3	parataxis	_	Hiero=𓇋:𓈖
12	⸗śn	śn	PRON	Pron=SFP	Gender=Com|Number=Plur|Person=3|PronType=Prs	11	nsubj	_	Hiero=𓋴𓈖
13	ꞽn	ꞽn	ADP	Status=Cons	_	14	case	_	Hiero=𓇋:𓈖
14	nčr(.w)	nčr	NOUN	_	Gender=Masc|Number=Plur	11	obl	_	Hiero=𓊹𓊹𓊹
15	pr.t	pr	VERB	_	Gender=Masc|VerbForm=Inf	10	ccomp	_	Hiero=𓉐:𓂋:𓏏
16	r	r	ADP	Status=Pron	_	17	case	_	Hiero=𓂋
17	⸗f	f	PRON	Pron=SFP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	obl	_	Hiero=𓆑
18	nčr	nčr	NOUN	Hierocl=Yes	Gender=Masc|Number=Sing	15	nsubj	_	Hiero=𓊹𓅆
19	pn	pn	DET	Dem	Gender=Masc|Number=Sing|PronType=Dem	18	det	_	Hiero=𓊪:𓈖
20	ꞽr	r	ADP	Status=Cons	_	21	case	_	Hiero=𓇋𓂋
21	p.t	p.t	NOUN	Hierocl=Yes	Gender=Fem|Number=Sing	15	obl	_	Hiero=(𓊪*𓏏:)𓇯
22	pr.t	pr	VERB	_	Gender=Masc|VerbForm=Inf	15	conj	_	Hiero=𓉐:𓂋:𓏏
23	r	r	ADP	Status=Pron	_	24	case	_	Hiero=𓂋
24	⸗f	f	PRON	Pron=SFP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	obl	_	Hiero=𓆑
25	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	22	nsubj	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺
26	r	r	ADP	Status=Cons	_	27	case	_	Hiero=𓂋
27	p.t	p.t	NOUN	Hierocl=Yes	Gender=Fem|Number=Sing	22	obl	_	Hiero=(𓊪*𓏏:)𓇯
28	bꜣ(.w)	bꜣ	NOUN	_	Gender=Masc|Number=Plur	31	nsubj	_	Hiero=𓅢
29	⸗f	f	PRON	Pron=SFP|Poss=Yes	Gender=Masc|Number=Sing|Person=3|PronType=Prs	28	nmod	_	Hiero=𓆑
30	ṭp	ṭp	ADP	Status=Cons|Hierocl=Yes	Case=Sup	31	case	_	Hiero=𓁶:𓏤
31	⸗f	f	PRON	Pron=SFP|Poss=Yes	Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	advcl	_	Hiero=𓆑
32	šꜥ.t	šꜥ.t	NOUN	Hierocl=Yes	Gender=Fem|Number=Sing	36	nsubj	_	Hiero=(𓈙:𓂝)(𓏏:UC_No)
33	⸗f	f	PRON	Pron=SFP|Poss=Yes	Gender=Masc|Number=Sing|Person=3|PronType=Prs	32	nmod	_	Hiero=𓆑
34	r	r	ADP	Status=Cons	_	36	case	_	Hiero=𓂋
35	gś(.wꞽ)	gś	NOUN	Hierocl=Yes	Gender=Masc|Number=Dual	34	fixed	_	Hiero=𓐜:𓐜
36	⸗f	f	PRON	Pron=SFP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	31	conj	_	Hiero=𓆑
37	ḥkꜣ(.w)	ḥkꜣ	NOUN	Hierocl=Yes	Gender=Masc|Number=Plur	41	nsubj	_	Hiero=𓎛𓂓(𓂓:𓂓)
38	⸗f	f	PRON	Pron=SFP|Poss=Yes	Gender=Masc|Number=Sing|Person=3|PronType=Prs	37	nmod	_	Hiero=𓆑
39	ṭp	ṭp	ADP	Status=Cons|Hierocl=Yes	Case=Sup	41	case	_	Hiero=𓁶:𓏤
40	rṭ(.wꞽ)	rṭ	NOUN	Hierocl=Yes	Gender=Masc|Number=Dual	39	fixed	_	Hiero=(𓂋:𓂧)𓂾𓂾
41	⸗f	f	PRON	Pron=SFP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	31	conj	_	Hiero=𓆑

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	č̣(ṭ)	č̣ṭ	VERB	_	Gender=Masc|VerbForm=Inf	0	root	_	Hiero=𓆓
2	mṭw	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓌃
3	ntktk	ntktk	VERB	_	Gender=Masc|VerbForm=Inf	6	csubj	_	Hiero=(𓈖:𓏏:𓎡)(𓏏:𓎡)
4	⸗k	k	PRON	Pron=SFP|Poss=Yes	Gender=Masc|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	Hiero=𓎡
5	n	n	ADP	Status=Cons	Case=Ben	6	case	_	Hiero=𓈖
6	tk.ꞽ	tk	NOUN	_	Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	1	ccomp	_	Hiero=(𓏏:𓎡)𓇋
7	Ꞽkn	Ꞽkn	PROPN	_	Gender=Masc	6	vocative	_	Hiero=𓇋(𓎡:𓈖)
8	hꞽ	hꞽ	NOUN	_	Gender=Masc|Number=Sing	7	flat	_	Hiero=𓉔𓇋𓆙

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	šsp.t	šsp	VERB	NOUN|VerbForm=RelForm|Tense=Pres	Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Fin	5	csubj	_	Hiero=𓊐(:𓊪*𓏏)
2	rmč(.w)	rmč	NOUN	_	Gender=Masc|Number=Plur	1	nsubj	_	Hiero=𓂋𓅓𓍿
3	ḳrś(.w)	ḳrś	VERB	SPC=PastPass|Type=Pred|Hierocl=Yes	Tense=Past|VerbForm=Fin|Voice=Pass	1	advcl	_	Hiero=(𓈎:𓂋)𓋴𓌟𓊭
4	⸗śn	śn	PRON	Pron=SFP	Gender=Com|Number=Plur|Person=3|PronType=Prs	3	nsubj:pass	_	Hiero=𓋴𓈖
5	ḫꜣ	ḫꜣ	NUM	CARD|NOUN	Gender=Masc|Number=Sing	0	root	_	Hiero=𓆼
6	⸗ś	ś	PRON	Pron=SFP|Poss=Yes	Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nmod	_	Hiero=𓋴
7	m	m	ADP	Status=Cons	_	8	case	_	Hiero=𓅓
8	tʾ	tʾ	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	Hiero=𓏏:𓏐
9	ḫꜣ	ḫꜣ	NUM	CARD|NOUN	Gender=Masc|Number=Sing	5	conj	_	Hiero=𓆼
10	⸗ś	ś	PRON	Pron=SFP|Poss=Yes	Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nmod	_	Hiero=𓋴
11	m	m	ADP	Status=Cons	_	12	case	_	Hiero=𓅓
12	ḥ(n)ḳ.t	ḥnḳ.t	NOUN	Hierocl=Yes	Gender=Fem|Number=Sing	9	obl	_	Hiero=𓎛(𓈎:𓏏)𓏊
13	ḥr	ḥr	ADP	Status=Cons	_	14	case	_	Hiero=𓁷
14	wṭḥ.w	wṭḥ.w	NOUN	Hierocl=Yes	Gender=Masc|Number=Sing	5	obl	_	Hiero=𓅱𓂧𓎛𓅱𓊯
15	n(.ꞽ)	n	ADJ	Nisba=Prep	Case=Gen|Gender=Masc|Number=Sing	14	amod	_	Hiero=𓈖
16	Ḫnt(.ꞽ)	Ḫnt.ꞽ	PROPN	_	Gender=Masc	15	obl	_	Hiero=(𓏃:𓏏)
17	ꞽmn.t(ꞽ)w	ꞽmn.tꞽ	ADJ	Nisba=Noun	Gender=Masc|Number=Plur	16	flat	_	Hiero=𓇋(𓏠:𓈖)𓅂

~~~


