---
layout: base
title:  'Statistics of parataxis in UD_Georgian-GLC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GLC: Relations: `parataxis`

This relation is universal.

16 nodes (1%) are attached to their parents as `parataxis`.

15 instances of `parataxis` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.25.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (12; 75% instances), <tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	ჩემს	ჩემი	PRON	Pron	Case=Dat|Number=Sing|Person=1|Poss=Yes	2	det:poss	_	Translit=čʻems
2	ნერვებს	ნერვი	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Plur	4	obj	_	Translit=nervebs
3	უნდა	უნდა	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres	4	aux	_	Translit=unda
4	გავუფრთხილდე	უფრთხილდება	VERB	Verb	Aspect=Perf|Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=1|Subcat=Intr|Tense=Past|Voice=Act	0	root	_	SpaceAfter=No|Translit=gavupʻrtʻxilde
5	,	,	PUNCT	F	PunctType=Comm	4	punct	_	Translit=,
6	დამჭირდება	ჭირდება	VERB	Verb	Aspect=Perf|Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[subj]=3|Subcat=Intr|Tense=Fut|Voice=Act	4	parataxis	_	SpaceAfter=No|Translit=damčirdeba
7	.	.	PUNCT	F	PunctType=Peri	4	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 29 parataxis	color:blue
1	სიტყვაკაზმულ	სიტყვაკაზმული	ADJ	Adj	Case=Dat|Number=Sing	2	amod	_	Translit=sitqvakazmul
2	ხელოვნება	ხელოვნება	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Sing	8	obl	_	Translit=xelovneba
3	ში	ში	ADP	Post	AdpType=Post|Case=Dat	2	case	_	Translit=ši
4	მისი	მისი	PRON	Pron	Case=Gen|Number=Sing|Person=3|Poss=Yes	5	nmod	_	Translit=misi
5	მრავალმხრივი	მრავალმხრივი	ADJ	Adj	Case=Gen|Number=Sing	6	nmod	_	Translit=mravalmxrivi
6	მოღვაწეობის	მოღვაწეობა	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	7	nmod	_	Translit=moġvaceobis
7	ამომწურავი	ამომწურავი	ADJ	Adj	Case=Nom|Number=Sing	8	amod	_	Translit=amomcuravi
8	შეფასება	შეფასება	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	14	nsubj	_	SpaceAfter=No|Translit=šepʻaseba
9	,	,	PUNCT	F	PunctType=Comm	10	punct	_	Translit=,
10	ცხადი	ცხადი	ADJ	Adj	Case=Nom|Degree=Pos|Number=Sing	14	parataxis	_	Translit=cʻxadi
11	ა	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Subcat=Intr|Tense=Pres	10	cop	_	Translit=a
12	,	,	PUNCT	F	PunctType=Comm	10	punct	_	Translit=,
13	მომავლის	მომავალი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	14	nmod	_	Translit=momavlis
14	საქმე	საქმე	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	0	root	_	Translit=sakʻme
15	ა	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Subcat=Intr|Tense=Pres	14	cop	_	Translit=a
16	,	,	PUNCT	F	PunctType=Comm	29	punct	_	Translit=,
17	ამიტომ	ამიტომ	SCONJ	Conj	_	29	mark	_	Translit=amitom
18	პოეტის	პოეტი	NOUN	Noun	Animacy=Anim|Case=Gen|Number=Sing	23	nmod	_	Translit=poetis
19	შემოქმედების	შემოქმედება	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	20	nmod	_	Translit=šemokʻmedebis
20	ამსახველი	ამსახველი	ADJ	Adj	Case=Nom|Number=Sing	23	amod	_	Translit=amsaxveli
21	ყოველი	ყოველი	PRON	Pron	Case=Nom|Number=Sing|PronType=Tot	23	nmod	_	Translit=qoveli
22	მაღალკვალიფიციური	მაღალკვალიფიციური	ADJ	Adj	Case=Nom|Number=Sing	23	amod	_	Translit=maġalkvalipʻicʻiuri
23	წერილი	წერილი	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	29	nsubj	_	Translit=cerili
24	თუ	თუ	SCONJ	Conj	_	25	mark	_	Translit=tʻu
25	ნაშრომი	ნაშრომი	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	23	conj	_	Translit=našromi
26	სამომავლოდ	სამომავლო	ADV	Adv	_	29	advmod	_	Translit=samomavlod
27	განსაკუთრებული	განსაკუთრებული	ADJ	Adj	Case=Gen|Number=Sing	28	nmod	_	Translit=gansakutʻrebuli
28	ფასეულობის	ფასეულობა	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	29	nmod	_	Translit=pʻaseulobis
29	შემცველი	შემცველი	ADJ	Adj	Case=Nom|Number=Sing	14	parataxis	_	Translit=šemcʻveli
30	ა	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Subcat=Intr|Tense=Pres	29	cop	_	Translit=a
31	.	.	PUNCT	F	PunctType=Peri	29	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 parataxis	color:blue
1	იგი	იგი	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	Translit=igi
2	უმთავრესად	მთავარი	ADJ	Adj	Case=Ess|Degree=Sup|Number=Sing	7	amod	_	Translit=umtʻavresad
3	ძველი	ძველი	ADJ	Adj	Case=Ins|Degree=Pos|Number=Sing	4	amod	_	Translit=żveli
4	ქართული	ქართული	ADJ	Adj	Case=Ins|Number=Sing	5	amod	_	Translit=kʻartʻuli
5	ენით	ენა	NOUN	Noun	Animacy=Inan|Case=Ins|Number=Sing	7	obl	_	Translit=enitʻ
6	არის	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Pres	7	cop	_	Translit=aris
7	დაინტერესებული	დაინტერესებული	ADJ	Adj	Case=Nom|Number=Sing	0	root	_	Translit=dainteresebuli
8	და	და	CCONJ	Conj	_	15	cc	_	Translit=da
9	ცნობილი	ცნობილი	ADJ	Adj	Case=Nom|Number=Sing	7	parataxis	_	Translit=cʻnobili
10	ა	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Subcat=Intr|Tense=Pres	9	cop	_	Translit=a
11	,	,	PUNCT	F	PunctType=Comm	15	punct	_	Translit=,
12	როგორც	როგორც	SCONJ	Conj	_	15	mark	_	Translit=rogorcʻ
13	ძველი	ძველი	ADJ	Adj	Case=Gen|Degree=Pos|Number=Sing	14	nmod	_	Translit=żveli
14	ტექსტების	ტექსტი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Plur	15	nmod	_	Translit=tekʻstebis
15	გამომცემელი	გამომცემელი	NOUN	Noun	Animacy=Anim|Case=Nom|Number=Sing	9	nsubj	_	SpaceAfter=No|Translit=gamomcʻemeli
16	.	.	PUNCT	F	PunctType=Peri	7	punct	_	Translit=.

~~~


