---
layout: base
title:  'Statistics of compound:prt in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="fi_pud-dep-compound-nn.html">compound:nn</a></tt>.

17 nodes (0%) are attached to their parents as `compound:prt`.

10 instances of `compound:prt` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29411764705882.

The following 4 pairs of parts of speech are connected with `compound:prt`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (13; 76% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="fi_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound:prt	color:blue
1	Virsi	virsi	NOUN	_	Case=Nom|Number=Sing	2	obj	_	_
2	otettiin	ottaa	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	hyvin	hyvin	ADV	_	_	2	advmod	_	_
4	vastaan	vastaan	ADV	_	_	2	compound:prt	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	ja	ja	CCONJ	_	_	8	cc	_	_
7	yleisö	yleisö	NOUN	_	Case=Nom|Number=Sing	8	nsubj	_	_
8	vaati	vaatia	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
9	encorea	encore	NOUN	_	Case=Nom|Number=Sing|Style=Coll	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:prt	color:blue
1	Skotti	skotti	NOUN	_	Case=Nom|Number=Sing	2	compound:nn	_	_
2	James	James	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	_
3	Watt	Watt	PROPN	_	Case=Nom|Number=Sing	2	flat:name	_	_
4	sai	saada	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	aikaan	aika	NOUN	_	Case=Ill|Number=Sing	4	compound:prt	_	_
6	perusteellisen	perusteellinen	ADJ	_	Case=Gen|Degree=Pos|Derivation=Llinen|Number=Sing	7	amod	_	_
7	muutoksen	muutos	NOUN	_	Case=Gen|Number=Sing	4	obj	_	_
8	työn	työ	NOUN	_	Case=Gen|Number=Sing	9	nmod:poss	_	_
9	periaatteissa	periaate	NOUN	_	Case=Ine|Number=Plur	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 26 compound:prt	color:blue
1	Joanista	Joan	NOUN	_	Case=Ela|Number=Sing	2	obl	_	_
2	tuli	tulla	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	kahden	kaksi	NUM	_	Case=Gen|Number=Sing|NumType=Card	6	nummod	_	_
4	yorkilaisen	yorkilainen	ADJ	_	Case=Gen|Degree=Pos|Derivation=Lainen|Number=Sing	6	amod	_	_
5	Englannin	Englanti	PROPN	_	Case=Gen|Number=Sing	6	nmod:poss	_	_
6	kuninkaan	kuningas	NOUN	_	Case=Gen|Number=Sing	7	nmod:poss	_	_
7	isoäiti	isoäiti	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	_
9	kun	kun	SCONJ	_	_	13	mark	_	_
10	heidän	hän	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	11	nmod:poss	_	_
11	tyttärensä	tytär	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	12	compound:nn	_	_
12	Cecily	Cecily	PROPN	_	Case=Nom|Number=Sing	13	nsubj	_	_
13	meni	mennä	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
14	naimisiin	naimisiin	ADV	_	_	13	advmod	_	_
15	3.	3.	ADJ	_	NumType=Ord	17	nummod	_	_
16	Yorkin	York	PROPN	_	Case=Gen|Number=Sing	17	nmod:poss	_	_
17	herttuan	herttua	NOUN	_	Case=Gen|Number=Sing	13	obl	_	_
18	Richard	Richard	PROPN	_	Case=Nom|Number=Sing	17	appos	_	_
19	Plantagenetin	Plantagenet	PROPN	_	Case=Gen|Number=Sing	18	flat:name	_	_
20	kanssa	kanssa	ADP	_	AdpType=Post	17	case	_	_
21	ja	ja	CCONJ	_	_	22	cc	_	_
22	sai	saada	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	13	conj	_	_
23	monta	moni	PRON	_	Case=Par|Number=Sing|PronType=Ind	24	det	_	_
24	lasta	lapsi	NOUN	_	Case=Par|Number=Sing	22	obj	_	SpaceAfter=No
25	,	,	PUNCT	_	_	27	punct	_	_
26	mukaan	mukaan	ADV	_	_	27	compound:prt	_	_
27	lukien	lukien	ADP	_	AdpType=Post	24	advcl	_	_
28	Edvard	Edvard	PROPN	_	Case=Nom|Number=Sing	27	obj	_	_
29	IV	IV	ADJ	_	NumType=Ord	28	flat:name	_	_
30	ja	ja	CCONJ	_	_	31	cc	_	_
31	Rikhard	Rikhard	PROPN	_	Case=Nom|Number=Sing	28	conj	_	_
32	III	III	ADJ	_	NumType=Ord	31	flat:name	_	SpaceAfter=No
33	.	.	PUNCT	_	_	2	punct	_	_

~~~


