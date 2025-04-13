---
layout: base
title:  'Statistics of parataxis:discourse in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-parataxis.html">parataxis</a></tt>.

21 nodes (0%) are attached to their parents as `parataxis:discourse`.

12 instances of `parataxis:discourse` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.42857142857143.

The following 7 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (12; 57% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="orv_ruthenian-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis:discourse	color:blue
1	не	не	PART	_	Polarity=Neg	2	advmod	_	wf="не"
2	преходи	преходити	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	wf="преходи"
3	бо	бо	SCONJ	_	_	2	mark	_	wf="бо"
4	мовитъ	мовити	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis:discourse	_	wf="мовитъ"
5	границъ	граница	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	2	obj	_	wf="границъ"
6	которыe	который	DET	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Rel	7	obj	_	wf="которые"
7	положили	положити	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	5	acl:relcl	_	wf="положили"
8	ѡ(т)цы	отецъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	wf="отцы"
9	твоѝ	твой	DET	_	Case=Nom|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	8	det	_	wf="твои"|SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	wf="."

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 parataxis:discourse	color:blue
1	Добро	добрый	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	wf="Добро"
2	мовитъ	мовити	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis:discourse	_	wf="мовитъ"
3	древо	древо	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	wf="древо"
4	кꙋ	ку	ADP	_	_	5	case	_	wf="ку"
5	пока(р)мꙋ	покармъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	1	obl	_	wf="покарму"|SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	wf=","
7	и	и	CCONJ	_	_	8	cc	_	wf="и"
8	ѡздобно	оздобный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	1	conj	_	wf="оздобно"
9	кꙋ	ку	ADP	_	_	10	case	_	wf="ку"
10	пойзренью	пойзренье	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	8	obl	_	wf="пойзренью"|SpaceAfter=No
11	,	,	PUNCT	_	_	21	punct	_	wf=","
12	але	але	CCONJ	_	_	21	cc	_	wf="але"
13	в(ъ)	въ	ADP	_	_	15	case	_	wf="въ"
14	который	который	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	15	det	_	wf="который"
15	дн̃ь	духъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	16	obl:tmod	_	wf="дн̃ь"
16	з(ъ)ист(е)	зъѣсти	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	21	advcl	_	wf="зъисте"
17	ѡ(т)	отъ	ADP	_	_	18	case	_	wf="от"
18	него	оно	PRON	_	Case=Gen|Gender=Neut|Number=Sing|Person=3|PronType=Prs	16	obl	_	wf="него"|SpaceAfter=No
19	,	,	PUNCT	_	_	16	punct	_	wf=","
20	смертїю	смерть	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	21	obl	_	wf="смертию"
21	оумрете	умерети	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	1	conj	_	wf="умрете"|SpaceAfter=No
22	.	.	PUNCT	_	_	1	punct	_	wf="."

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis:discourse	color:blue
1	Свѣтилникъ	свѣтилникъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	wf="Свѣтилникъ"
2	тѣла	тѣло	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	wf="тѣла"
3	мовитъ	мовити	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis:discourse	_	wf="мовитъ"
4	eсть	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	wf="есть"
5	око	око	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	wf="око"|SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	wf="."

~~~


