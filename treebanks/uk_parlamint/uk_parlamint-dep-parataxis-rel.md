---
layout: base
title:  'Statistics of parataxis:rel in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `parataxis:rel`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="uk_parlamint-dep-parataxis-discourse.html">parataxis:discourse</a></tt>.

9 nodes (0%) are attached to their parents as `parataxis:rel`.

9 instances of `parataxis:rel` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.6666666666667.

The following 4 pairs of parts of speech are connected with `parataxis:rel`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (6; 67% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 parataxis:rel	color:blue
1	Головне	головне	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	сьогодні	сьогодні	ADV	ADV	_	1	advmod	_	_
3	не	не	PART	PART	Polarity=Neg	4	advmod:neg	_	_
4	дати	дати	VERB	VERB	Aspect=Perf|VerbForm=Inf	1	csubj	_	_
5	підірвати	підірвати	VERB	VERB	Aspect=Perf|VerbForm=Inf	4	xcomp	_	_
6	всю	весь	DET	DET	Case=Acc|Gender=Fem|Number=Sing|PronType=Tot	7	det	_	_
7	країну	країна	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	12	punct	_	_
9	на	на	ADP	ADP	Case=Acc	10	case	_	_
10	що	що	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	12	obl	_	_
11	вони	вони	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	12	nsubj	_	_
12	сподіваються	сподіватися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	5	parataxis:rel	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 14 parataxis:rel	color:blue
1	Для	для	ADP	ADP	Case=Gen	2	case	_	_
2	цього	це	PRON	PRON	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	4	obl	_	_
3	вкрай	вкрай	ADV	ADV	_	4	advmod	_	_
4	важливо	важливо	ADV	ADV	Degree=Pos	0	root	_	_
5	продемонструвати	продемонструвати	VERB	VERB	Aspect=Perf|VerbForm=Inf	4	csubj	_	_
6	реалізм	реалізм	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obj	_	_
7	в	а	CCONJ	CCONJ	_	9	case	_	_
8	кадровій	кадровий	ADJ	ADJ	Case=Loc|Gender=Fem|Number=Sing	9	amod	_	_
9	роботі	робота	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	14	punct	_	_
11	про	про	ADP	ADP	Case=Acc	12	case	_	_
12	що	що	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	14	obl	_	_
13	вже	вже	ADV	ADV	_	14	advmod	_	_
14	говорили	говорити	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	parataxis:rel	_	_
15	наші	наш	DET	DET	Case=Nom|Number=Plur|Person=1|Poss=Yes|PronType=Prs	16	det	_	_
16	колеги	колега	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Fem,Masc|Number=Plur	14	nsubj	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	19	punct	_	_
18	зокрема	зокрема	ADV	ADV	_	19	advmod	_	_
19	Ірина	Ірина	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv|Number=Sing	16	appos	_	_
20	Геращенко	Геращенко	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Fem|InflClass=Ind|NameType=Sur|Number=Sing	19	flat:name	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 22 parataxis:rel	color:blue
1	Вірогідність	вірогідність	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	nsubj:outer	_	_
2	військової	військовий	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	3	amod	_	_
3	операції	операція	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
4	з	з	ADP	ADP	Case=Gen|ExtPos=ADP	6	case	_	_
5	боку	бік	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	fixed	_	_
6	Росії	Росія	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	3	nmod	_	_
7	—	—	PUNCT	PUNCT	_	9	punct	_	_
8	це	це	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj	_	_
9	означає	означати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	блокування	блокування	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	9	obj	_	_
11	військово-морських	військово-морський	ADJ	ADJ	Case=Gen|Number=Plur	12	amod	_	_
12	сил	сила	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	10	nmod	_	_
13	України	Україна	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	12	nmod	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	22	punct	_	_
15	що	що	SCONJ	SCONJ	_	22	mark	_	_
16	є	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	_	_
17	ніщо	ніщо	PRON	PRON	Animacy=Inan|Case=Nom|PronType=Neg	22	discourse	_	_
18	інше	інше	DET	DET	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	17	fixed	_	SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	20	punct	_	_
20	як	як	SCONJ	SCONJ	_	17	fixed	_	_
21	військовий	військовий	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	22	amod	_	_
22	конфлікт	конфлікт	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	parataxis:rel	_	SpaceAfter=No
23	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


