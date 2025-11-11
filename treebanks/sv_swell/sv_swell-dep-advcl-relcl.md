---
layout: base
title:  'Statistics of advcl:relcl in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-advcl.html">advcl</a></tt>.

8 nodes (0%) are attached to their parents as `advcl:relcl`.

8 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5.

The following 3 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (6; 75% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 advcl:relcl	color:blue
1	Filmen	film	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	börjar	börja	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	med	med	ADP	_	_	6	mark	_	_
4	att	att	SCONJ	_	_	6	mark	_	_
5	systern	syster	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	nsubj:pass	_	_
6	träffas	träffa	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	2	advcl	_	_
7	i	i	ADP	_	_	8	case	_	_
8	huvudet	huvud	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	6	obl	_	_
9	av	av	ADP	_	_	10	case	_	_
10	våda	våda	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obl:agent	_	_
11	vilket	vilken	PRON	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Rel	12	nsubj	_	_
12	leder	leda	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl:relcl	_	_
13	till	till	ADP	_	_	16	mark	_	_
14	att	att	SCONJ	_	_	16	mark	_	_
15	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	16	nsubj:pass	_	CorrectionLabels=L-Ref
16	skiljs	skilja	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	12	advcl	_	_
17	åt	åt	ADV	_	_	16	compound:prt	_	_
18	fram	fram	ADV	_	ExtPos=ADV	23	case	_	_
19	tills	tills	ADP	_	_	18	fixed	_	_
20	den	den	DET	_	Definite=Def|Gender=Com|Number=Sing|PronType=Art	22	det	_	_
21	äldre	gammal	ADJ	_	Case=Nom|Degree=Cmp	22	amod	_	_
22	systerns	syster	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Sing	23	nmod:poss	_	_
23	kröningsdag	kröningsdag	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	16	obl	_	_
24	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 29 advcl:relcl	color:blue
1	Patrik	Patrik	PROPN	_	Case=Nom	6	nsubj	_	_
2	Lindenfors	Lindenfors	PROPN	_	Case=Nom	1	flat:name	_	_
3	,	,	PUNCT	_	_	4	punct	_	_
4	dn.se	dn.se	PROPN	_	Case=Nom	1	list	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	säger	säga	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	att	att	SCONJ	_	_	11	mark	_	_
8	”	”	PUNCT	_	_	11	punct	_	_
9	En	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	10	det	_	_
10	del	del	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	11	nsubj	_	_
11	menar	mena	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
12	att	att	SCONJ	_	_	16	mark	_	_
13	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	16	nsubj	_	_
14	inte	inte	PART	_	_	16	advmod	_	Polarity=Neg
15	ska	skola	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	16	aux	_	_
16	sänka	sänka	VERB	_	VerbForm=Inf|Voice=Act	11	ccomp	_	_
17	åldern	ålder	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	16	obj	_	_
18	eftersom	eftersom	SCONJ	_	_	24	mark	_	_
19	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	24	nsubj	_	_
20	under	under	ADV	_	_	21	advmod	_	_
21	18	18	NUM	_	Case=Nom|NumType=Card	22	nummod	_	_
22	år	år	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	19	nmod	_	_
23	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	24	cop	_	_
24	ansvarslösa	ansvarslös	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	16	advcl	_	_
25	”	”	PUNCT	_	_	24	punct	_	_
26	,	,	PUNCT	_	_	29	punct	_	_
27	vilket	vilken	PRON	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Rel	29	nsubj	_	_
28	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	29	aux	_	_
29	resultera	resultera	VERB	_	VerbForm=Inf|Voice=Act	24	advcl:relcl	_	_
30	i	i	ADP	_	_	33	mark	_	_
31	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	33	nsubj	_	_
32	inte	inte	PART	_	_	33	advmod	_	Polarity=Neg
33	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	29	advcl	_	_
34	tillräckligt	tillräcklig	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	33	obj	_	_
35	med	med	ADP	_	_	36	case	_	_
36	fakta	faktum	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	34	obl	_	_
37	för	för	ADP	_	_	40	mark	_	_
38	att	att	PART	_	_	40	mark	_	_
39	kunna	kunna	AUX	_	VerbForm=Inf|Voice=Act	40	aux	_	_
40	rösta	rösta	VERB	_	VerbForm=Inf|Voice=Act	34	advcl	_	_
41	respektabelt	respektabelt	ADV	_	Degree=Pos	40	advmod	_	_
42	,	,	PUNCT	_	_	45	punct	_	_
43	vilket	vilken	PRON	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Rel	45	nsubj	_	_
44	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	45	aux	_	_
45	leda	leda	VERB	_	VerbForm=Inf|Voice=Act	33	advcl:relcl	_	_
46	till	till	ADP	_	_	49	mark	_	_
47	att	att	SCONJ	_	_	49	mark	_	_
48	extrempartier	extremparti	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	49	nsubj	_	_
49	vinner	vinna	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	45	advcl	_	_
50	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 28 advcl:relcl	color:blue
1	Jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	tror	tro	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	CorrectionLabels=L-W
3	att	att	SCONJ	_	_	6	mark	_	_
4	romane	romane	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|Typo=Yes	6	nsubj	_	CorrectionLabels=O
5	var	vara	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
6	lärande	lärande	ADJ	_	Case=Nom|Degree=Pos|Tense=Pres|VerbForm=Part	2	ccomp	_	CorrectionLabels=L-W
7	och	och	CCONJ	_	_	8	cc	_	_
8	visade	visa	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	6	conj	_	_
9	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	10	det	_	_
10	del	del	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obj	_	_
11	av	av	ADP	_	_	12	case	_	_
12	världen	värld	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	10	nmod	_	_
13	som	som	PRON	_	PronType=Rel	15	obj	_	_
14	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	15	nsubj	_	_
15	visste	veta	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	10	acl:relcl	_	CorrectionLabels=L-W
16	inte	inte	PART	_	_	15	advmod	_	CorrectionLabels=S-Adv|Polarity=Neg
17	om	om	ADP	_	_	18	case	_	CorrectionLabels=L-W
18	den	den	DET	_	Definite=Def|Gender=Com|Number=Sing|PronType=Art	15	obl	_	CorrectionLabels=S-R
19	eftrsom	eftrsom	SCONJ	_	Typo=Yes	22	mark	_	CorrectionLabels=O
20	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	22	nsubj	_	_
21	som	som	PRON	_	PronType=Rel	22	dep	_	CorrectionLabels=S-R
22	kommer	komma	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	advcl	_	_
23	frön	frön	ADP	_	Typo=Yes	25	case	_	CorrectionLabels=O
24	ett	en	DET	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	25	det	_	_
25	land	land	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	22	obj	_	_
26	i	i	ADP	_	_	27	case	_	_
27	melanöster	melanöster	PROPN	_	Case=Nom|Typo=Yes	25	nmod	_	CorrectionLabels=M-Def;O;O-Cap
28	vet	veta	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	27	advcl:relcl	_	CorrectionLabels=S-Clause
29	vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	28	nsubj	_	_
30	inte	inte	PART	_	_	32	advmod	_	Polarity=Neg
31	så	så	ADV	_	_	32	advmod	_	_
32	mycke	mycke	ADV	_	Typo=Yes	28	advmod	_	CorrectionLabels=O
33	om	om	ADP	_	_	35	case	_	_
34	Amerikansk	amerikansk	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Typo=Yes	35	amod	_	CorrectionLabels=M-Num;O-Cap
35	länder	land	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	28	obl	_	_
36	och	och	CCONJ	_	_	38	cc	_	_
37	vilka	vilken	DET	_	Definite=Ind|Number=Plur|PronType=Int	38	det	_	_
38	problemer	problem	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	35	conj	_	CorrectionLabels=M-F
39	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	40	nsubj	_	_
40	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	38	acl:relcl	_	_
41	eller	eller	CCONJ	_	_	44	cc	_	_
42	hur	hur	ADV	_	_	44	advmod	_	_
43	mäniskors	mäniska	NOUN	_	Case=Gen|Definite=Ind|Gender=Com|Number=Plur|Typo=Yes	44	nmod:poss	_	CorrectionLabels=O
44	liv	liv	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	40	conj	_	_
45	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	44	cop	_	_
46	där	där	ADV	_	_	40	advmod	_	_
47	.	.	PUNCT	_	_	2	punct	_	_

~~~


